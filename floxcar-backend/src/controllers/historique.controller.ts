// src/controllers/historique.controller.ts
import type { Request, Response } from 'express';
import { PrismaClient } from '../generated/client';

const prisma = new PrismaClient();

// Sélection réutilisable pour les validateurs
const selectValidateur = { nom: true, email: true };

export const getHistoriqueGlobal = async (req: Request, res: Response) => {
  try {
    const depenses = await prisma.depense.findMany({
      include: {
        vehicule: { select: { immatriculation: true, codeParc: true } },
        typeDepense: { select: { nom: true } },
        soumisPar: { select: selectValidateur },
        valideParControleurFinancier: { select: selectValidateur },
        valideParControleurGestion: { select: selectValidateur },
        valideParResponsableAdmin: { select: selectValidateur },
        valideParAdminGeneral: { select: selectValidateur },
        valideParDG: { select: selectValidateur },
        documents: true,
        commentaires: true,
      },
      orderBy: { dateCreation: 'desc' },
    });
    res.json(depenses);
  } catch (error) {
    console.error('Erreur getHistoriqueGlobal:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

export const getHistoriqueUtilisateur = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = Number(id);

  if (isNaN(userId)) {
    return res.status(400).json({ error: 'ID utilisateur invalide' });
  }

  try {
    const depenses = await prisma.depense.findMany({
      where: { soumisParId: userId },
      include: {
        vehicule: { select: { immatriculation: true, codeParc: true } },
        typeDepense: { select: { nom: true } },
        soumisPar: { select: selectValidateur },
        valideParControleurFinancier: { select: selectValidateur },
        valideParControleurGestion: { select: selectValidateur },
        valideParResponsableAdmin: { select: selectValidateur },
        valideParAdminGeneral: { select: selectValidateur },
        valideParDG: { select: selectValidateur },
        documents: true,
        commentaires: true,
      },
      orderBy: { dateCreation: 'desc' },
    });
    res.json(depenses);
  } catch (error) {
    console.error('Erreur getHistoriqueUtilisateur:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

export const getHistoriqueVehicule = async (req: Request, res: Response) => {
  const { id } = req.params;
  const vehiculeId = Number(id);

  if (isNaN(vehiculeId)) {
    return res.status(400).json({ error: 'ID véhicule invalide' });
  }

  try {
    const depenses = await prisma.depense.findMany({
      where: { vehiculeId },
      include: {
        vehicule: { select: { immatriculation: true, codeParc: true } },
        typeDepense: { select: { nom: true } },
        soumisPar: { select: selectValidateur },
        valideParControleurFinancier: { select: selectValidateur },
        valideParControleurGestion: { select: selectValidateur },
        valideParResponsableAdmin: { select: selectValidateur },
        valideParAdminGeneral: { select: selectValidateur },
        valideParDG: { select: selectValidateur },
        documents: true,
        commentaires: true,
      },
      orderBy: { dateCreation: 'desc' },
    });
    res.json(depenses);
  } catch (error) {
    console.error('Erreur getHistoriqueVehicule:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};