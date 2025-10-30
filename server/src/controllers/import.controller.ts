import type { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { upload } from '../middleware/upload.middleware.js';
import XLSX from 'xlsx';

const prisma = new PrismaClient();

// Normalise les clés (en-têtes) en snake-case simple
const norm = (s: string) => s?.toString().trim().toLowerCase().replace(/\s+/g, '_');

// Essaie de lire le buffer via XLSX (CSV ou Excel)
const parseSheetRows = (buffer: Buffer): Record<string, any>[] => {
  const wb = XLSX.read(buffer, { type: 'buffer' });
  const sheetName = wb.SheetNames[0];
  if (!sheetName) return [];
  const ws = wb.Sheets[sheetName] as XLSX.WorkSheet | undefined;
  // Obtenir les lignes en JSON, header=1 → lignes brutes, puis remapper avec header première ligne
  if (!ws) return [];
  const rows: any[][] = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' }) as any[];
  if (rows.length === 0) return [];
  // Première ligne comme headers
  const headerRow: any[] = (rows[0] || []) as any[];
  const headersRaw = headerRow.map((h: any) => norm(String(h || '')));
  const dataRows = rows.slice(1);
  const objects = dataRows
    .map((cells: any[]) => {
      const obj: Record<string, any> = {};
      headersRaw.forEach((h: string, idx: number) => {
        if (!h) return; // ignore colonnes vides
        obj[h] = cells[idx];
      });
      // Ignorer lignes vides
      const hasValue = Object.values(obj).some(v => String(v).trim() !== '');
      return hasValue ? obj : null;
    })
    .filter(Boolean) as Record<string, any>[];

  return objects;
};

export const importDepensesCsv = async (req: Request, res: Response) => {
  try {
    const file = (req as any).file as Express.Multer.File | undefined;
    if (!file || !file.buffer || file.size === 0) {
      return res.status(400).json({ error: 'Fichier manquant ou vide' });
    }

    const rows = parseSheetRows(file.buffer);
    if (rows.length === 0) {
      return res.status(400).json({ error: 'Aucune donnée détectée (vérifiez les en-têtes et le contenu).' });
    }

    // Mapping attendu (en-têtes, insensibles à la casse/espaces)
    // Colonnes reconnues: date_intervention, code_parc, type_depense, vehicule_immatriculation, libelle, quantite, montant, soumis_par_email
    const required = ['date_intervention', 'type_depense', 'vehicule_immatriculation', 'libelle', 'montant'];

    let created = 0;
    const errors: Array<{ row: number; message: string }> = [];
    const userId = (req as any).user?.id;

    for (let i = 0; i < rows.length; i++) {
      const r = rows[i] as Record<string, any> | undefined;
      if (!r) continue;
      const obj: any = {};
      // Normalise alias
      Object.entries(r as Record<string, any>).forEach(([k, v]) => {
        const key = norm(k);
        obj[key] = v;
      });

      // alias FR usuels
      obj['date_intervention'] = obj['date_intervention'] || obj['date'] || obj['date_depense'] || obj['intervention'];
      obj['type_depense'] = obj['type_depense'] || obj['type'] || obj['nature'];
      obj['vehicule_immatriculation'] = obj['vehicule_immatriculation'] || obj['immatriculation'] || obj['matricule'];
      obj['code_parc'] = obj['code_parc'] || obj['parc'] || obj['code_parking'];
      obj['soumis_par_email'] = obj['soumis_par_email'] || obj['email'] || obj['soumis_par'];

      // Validation minimale
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

        // Trouver/Créer Véhicule
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

        // Trouver soumisPar via email si fourni
        let submitterId = userId;
        if (obj['soumis_par_email']) {
          const email = String(obj['soumis_par_email']).trim();
          const u = await prisma.user.findUnique({ where: { email } });
          if (u) submitterId = u.id;
        }

        // Parser date et montants
        const dateStr = String(obj['date_intervention']).trim();
        const date = new Date(dateStr);
        if (Number.isNaN(date.getTime())) throw new Error(`Date invalide: ${dateStr}`);
        const montant = parseInt(String(obj['montant']).replace(/[^0-9-]/g, ''), 10);
        if (!Number.isFinite(montant)) throw new Error(`Montant invalide: ${obj['montant']}`);
        const quantite = obj['quantite'] ? Number(obj['quantite']) : 1;

        await prisma.depense.create({
          data: {
            dateIntervention: date,
            codeParc: codeParc || vehicule.codeParc || '',
            typeDepenseId: typeDepense.id,
            vehiculeId: vehicule.id,
            libelle: String(obj['libelle']).trim(),
            quantite: Number.isFinite(quantite) ? quantite : 1,
            montant,
            soumisParId: submitterId,
            statut: 'SOUMIS',
          },
        });
        created++;
      } catch (e: any) {
        errors.push({ row: i + 2, message: e.message || 'Erreur lors de l’insertion' });
      }
    }

    return res.json({ ok: true, created, errors, totalRows: rows.length });
  } catch (error) {
    console.error('[ImportDepenses] Erreur:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

// Export du middleware d’upload pour usage dans la route
export const uploadCsv = upload.single('file');
