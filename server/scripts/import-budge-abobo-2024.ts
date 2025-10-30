// server/scripts/import-budge-abobo-2024.ts
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import XLSX from 'xlsx';
import { fileURLToPath } from 'url';

const prisma = new PrismaClient();

// Normalise les clés (en-têtes) en snake-case simple
const norm = (s: string) => s?.toString().trim().toLowerCase().replace(/\s+/g, '_');

// Essaie de lire le buffer via XLSX (CSV ou Excel)
const parseSheetRows = (buffer: Buffer): Record<string, any>[] => {
  const wb = XLSX.read(buffer, { type: 'buffer' });
  const sheetName = wb.SheetNames[0];
  if (!sheetName) return [];
  const ws = wb.Sheets[sheetName] as XLSX.WorkSheet | undefined;
  if (!ws) return [];
  const rows: any[][] = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' }) as any[];
  if (rows.length === 0) return [];
  const headerRow: any[] = (rows[0] || []) as any[];
  const headersRaw = headerRow.map((h: any) => norm(String(h || '')));
  const dataRows = rows.slice(1);
  const objects = dataRows
    .map((cells: any[]) => {
      const obj: Record<string, any> = {};
      headersRaw.forEach((h: string, idx: number) => {
        if (!h) return;
        obj[h] = cells[idx];
      });
      const hasValue = Object.values(obj).some(v => String(v).trim() !== '');
      return hasValue ? obj : null;
    })
    .filter(Boolean) as Record<string, any>[];

  return objects;
};

async function main() {
  const csvPath = 'c:\\Users\\babay\\Downloads\\BUDGE ABOBO 2024.csv';
  if (!fs.existsSync(csvPath)) {
    console.error(`Erreur: Fichier introuvable: ${csvPath}`);
    process.exit(1);
  }

  const buffer = fs.readFileSync(csvPath);
  const rows = parseSheetRows(buffer);

  console.log(`OK ${rows.length} lignes detectees dans le CSV.`);
  if (rows.length === 0) {
    console.error('Erreur: Aucune donnee dans le fichier.');
    process.exit(1);
  }

  // Affiche les en-tetes pour verifier
  if (rows[0]) {
    console.log('Colonnes detectees:', Object.keys(rows[0]));
  }

  // Attends un utilisateur "soumis par" par defaut (premier LOGISTICIEN trouve, ou cree)
  let defaultUser = await prisma.user.findFirst({ where: { role: 'LOGISTICIEN' } });
  if (!defaultUser) {
    console.log('Aucun logisticien existant; creation d un utilisateur par defaut...');
    const bcrypt = await import('bcrypt');
    const hashedPw = await bcrypt.hash('temp123', 10);
    defaultUser = await prisma.user.create({
      data: {
        nom: 'Logisticien Import',
        email: 'import@floxcar.local',
        password: hashedPw,
        role: 'LOGISTICIEN',
      },
    });
  }

  let created = 0;
  const errors: Array<{ row: number; message: string }> = [];

  for (let i = 0; i < rows.length; i++) {
    const r = rows[i] as Record<string, any> | undefined;
    if (!r) continue;
    const obj: any = {};
    Object.entries(r as Record<string, any>).forEach(([k, v]) => {
      const key = norm(k);
      obj[key] = v;
    });

    // Alias FR pour colonnes typiques (adapter selon les en-têtes réels)
    obj['date_intervention'] = obj['date_intervention'] || obj['date'] || obj['date_depense'];
    obj['type_depense'] = obj['type_depense'] || obj['type'] || obj['nature'] || obj['rubrique'];
    obj['vehicule_immatriculation'] = obj['vehicule_immatriculation'] || obj['immatriculation'] || obj['matricule'] || obj['vehicule'];
    obj['code_parc'] = obj['code_parc'] || obj['parc'] || obj['site'];
    obj['montant'] = obj['montant'] || obj['cout'] || obj['prix'];
    obj['libelle'] = obj['libelle'] || obj['designation'] || obj['description'] || obj['motif'];

    // Validation minimale
    const required = ['date_intervention', 'type_depense', 'libelle', 'montant'];
    const missing = required.filter((h) => !obj[h] || String(obj[h]).trim() === '');
    if (missing.length > 0) {
      errors.push({ row: i + 2, message: `Colonnes manquantes: ${missing.join(', ')}` });
      continue;
    }

    try {
      // Trouver/Créer TypeDepense
      const type = String(obj['type_depense']).trim();
      const typeDepense = await prisma.typeDepense.upsert({
        where: { nom: type },
        update: {},
        create: { nom: type },
      });

      // Trouver/Créer Véhicule si immat fournie
      let vehiculeId: number | null = null;
      if (obj['vehicule_immatriculation']) {
        const immat = String(obj['vehicule_immatriculation']).trim();
        const codeParc = obj['code_parc'] ? String(obj['code_parc']).trim() : null;
        let vehicule = await prisma.vehicule.findUnique({ where: { immatriculation: immat } });
        if (!vehicule) {
          vehicule = await prisma.vehicule.create({
            data: {
              immatriculation: immat,
              type: 'INCONNU',
              codeParc: codeParc ?? null,
            },
          });
        }
        vehiculeId = vehicule.id;
      } else {
        // Créer un véhicule générique si aucun n'est fourni
        const genericImmat = `PARC-ABOBO-${i + 1}`;
        const veh = await prisma.vehicule.upsert({
          where: { immatriculation: genericImmat },
          update: {},
          create: {
            immatriculation: genericImmat,
            type: 'PARC',
            codeParc: obj['code_parc'] || 'ABOBO',
          },
        });
        vehiculeId = veh.id;
      }

      // Parser date et montants
      const dateStr = String(obj['date_intervention']).trim();
      const date = new Date(dateStr);
      if (Number.isNaN(date.getTime())) {
        throw new Error(`Date invalide: ${dateStr}`);
      }
      const montantRaw = String(obj['montant']).replace(/[^0-9-]/g, '');
      const montant = parseInt(montantRaw, 10);
      if (!Number.isFinite(montant)) {
        throw new Error(`Montant invalide: ${obj['montant']}`);
      }
      const quantite = obj['quantite'] ? Number(obj['quantite']) : 1;

      await prisma.depense.create({
        data: {
          dateIntervention: date,
          codeParc: obj['code_parc'] || 'ABOBO',
          typeDepenseId: typeDepense.id,
          vehiculeId: vehiculeId,
          libelle: String(obj['libelle']).trim(),
          quantite: Number.isFinite(quantite) ? quantite : 1,
          montant,
          soumisParId: defaultUser.id,
          statut: 'SOUMIS',
        },
      });
      created++;
    } catch (e: any) {
      errors.push({ row: i + 2, message: e.message || 'Erreur lors de insertion' });
    }
  }

  console.log(`\nImport termine: ${created}/${rows.length} depenses creees.`);
  if (errors.length > 0) {
    console.log(`Erreurs: ${errors.length}`);
    errors.slice(0, 10).forEach((err) => console.log(`  - Ligne ${err.row}: ${err.message}`));
    if (errors.length > 10) console.log(`  ... et ${errors.length - 10} autres erreurs.`);
  }

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error('Erreur fatale:', e);
  process.exit(1);
});
