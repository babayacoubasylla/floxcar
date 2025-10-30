import type { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Attendu: {
//   vehicules: [{ type: string, immatriculation: string, codeParc?: string }],
//   types_depenses: string[],
//   depenses: [{ date: string, categorie: string, libelle: string, montant: number, vehiculeImmatriculation?: string, soumisParEmail?: string }]
// }
export const seedFromJson = async (req: Request, res: Response) => {
  const body = req.body;
  if (!body || typeof body !== 'object') {
    return res.status(400).json({ error: 'Payload JSON invalide' });
  }

  const vehicules = Array.isArray(body.vehicules) ? body.vehicules : [];
  const types = Array.isArray(body.types_depenses) ? body.types_depenses : [];
  const depenses = Array.isArray(body.depenses) ? body.depenses : [];

  const out = {
    createdVehicules: 0,
    createdTypes: 0,
    createdDepenses: 0,
    skippedDepenses: 0,
    errors: [] as string[],
  };

  try {
    // Upsert types
    for (const t of types) {
      const nom = String(t).trim();
      if (!nom) continue;
      try {
        await prisma.typeDepense.upsert({
          where: { nom },
          update: {},
          create: { nom },
        });
        out.createdTypes++;
      } catch (e) {
        // Ignore duplicates counted as upserts
      }
    }

    // Upsert vehicules
    for (const v of vehicules) {
      const type = String(v.type || '').trim();
      const immatriculation = String(v.immatriculation || '').trim();
      const codeParc = v.codeParc ? String(v.codeParc) : null;
      if (!type || !immatriculation) continue;
      try {
        await prisma.vehicule.upsert({
          where: { immatriculation },
          update: { type, codeParc: codeParc ?? null },
          create: { type, immatriculation, codeParc },
        });
        out.createdVehicules++;
      } catch (e) {
        // Ignore duplicates counted as upserts
      }
    }

    // Create depenses if enough info is provided
    for (const d of depenses) {
      try {
        const date = d.date ? new Date(d.date) : null;
        const libelle = String(d.libelle || '').trim();
        const montant = Number(d.montant || 0);
        const categorie = String(d.categorie || '').trim();
        const vehImmat = d.vehiculeImmatriculation ? String(d.vehiculeImmatriculation).trim() : null;
        const soumisParEmail = d.soumisParEmail ? String(d.soumisParEmail).trim() : null;

        if (!date || !libelle || !montant || !categorie) {
          out.skippedDepenses++;
          continue;
        }

        if (!vehImmat || !soumisParEmail) {
          out.skippedDepenses++;
          continue; // Manque d'infos nécessaires (vehicule et auteur)
        }

        const typeDep = await prisma.typeDepense.findUnique({ where: { nom: categorie } });
        const vehicule = await prisma.vehicule.findUnique({ where: { immatriculation: vehImmat } });
        const user = await prisma.user.findUnique({ where: { email: soumisParEmail } });

        if (!typeDep || !vehicule || !user) {
          out.skippedDepenses++;
          continue;
        }

        await prisma.depense.create({
          data: {
            dateIntervention: date,
            codeParc: vehicule.codeParc || vehicule.immatriculation,
            typeDepenseId: typeDep.id,
            vehiculeId: vehicule.id,
            libelle,
            quantite: 1,
            montant,
            soumisParId: user.id,
          },
        });
        out.createdDepenses++;
      } catch (e) {
        out.errors.push(`Erreur création dépense: ${(e as Error).message}`);
      }
    }

    res.json(out);
  } catch (e) {
    console.error('Erreur seedFromJson:', e);
    res.status(500).json({ error: 'Erreur serveur lors du seed JSON' });
  }
};
