// server/src/controllers/depenses.controller.ts
import type { Request, Response } from 'express';
import { PrismaClient, StatutDepense } from '@prisma/client';

const prisma = new PrismaClient();

// ========== UTILITAIRE ==========
const determinerStatutGlobal = async (depenseId: number): Promise<StatutDepense> => {
  const depense = await prisma.depense.findUnique({
    where: { id: depenseId },
    select: {
      valideParFinanceId: true,
      valideParGestionId: true,
      valideParAdminId: true,
    },
  });

  if (!depense) throw new Error('Dépense introuvable');

  const financeOk = depense.valideParFinanceId !== null;
  const gestionOk = depense.valideParGestionId !== null;
  const adminOk = depense.valideParAdminId !== null;

  let nouveauStatut: StatutDepense = 'SOUMIS';

  if (financeOk && gestionOk && adminOk) {
    nouveauStatut = 'TERMINE';
  } else if (financeOk && gestionOk) {
    nouveauStatut = 'VALIDE_GESTION';
  } else if (financeOk) {
    nouveauStatut = 'VALIDE_FINANCE';
  }

  await prisma.depense.update({
    where: { id: depenseId },
    data: { statut: nouveauStatut },
  });

  return nouveauStatut;
};

const enregistrerValidation = async (
  depenseId: number,
  validateurId: number,
  role: string,
  action: string,
  commentaire?: string
) => {
  await prisma.historiqueValidation.create({
    data: {
      depenseId,
      validateurId,
      role,
      action,
      commentaire: commentaire || null,
    },
  });
};

// ========== CRUD ==========
export const getDepenses = async (req: Request, res: Response) => {
  try {
    const depenses = await prisma.depense.findMany({
      include: {
        vehicule: true,
        soumisPar: { select: { nom: true, email: true } },
        valideParFinance: { select: { nom: true, email: true } },
        valideParGestion: { select: { nom: true, email: true } },
        valideParAdmin: { select: { nom: true, email: true } },
      },
      orderBy: { dateCreation: 'desc' },
    });
    res.json(depenses);
  } catch (error) {
    console.error('Erreur lors de la récupération des dépenses:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

export const getDepenseById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const depense = await prisma.depense.findUnique({
      where: { id: Number(id) },
      include: {
        vehicule: true,
        soumisPar: { select: { nom: true, email: true } },
        valideParFinance: { select: { nom: true, email: true } },
        valideParGestion: { select: { nom: true, email: true } },
        valideParAdmin: { select: { nom: true, email: true } },
        documents: true,
        commentaires: true,
        historiqueValidations: {
          include: { validateur: { select: { nom: true } } },
          orderBy: { dateAction: 'asc' },
        },
      },
    });

    if (!depense) {
      return res.status(404).json({ error: 'Dépense non trouvée' });
    }

    res.json(depense);
  } catch (error) {
    console.error('Erreur lors de la récupération de la dépense:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

export const createDepense = async (req: Request, res: Response) => {
  const { dateIntervention, codeParc, typeDepenseId, vehiculeId, libelle, quantite, montant } = req.body;
  const userId = (req as any).user.id;

  try {
    const depense = await prisma.depense.create({
      data: {
        dateIntervention: new Date(dateIntervention),
        codeParc,
        typeDepenseId: Number(typeDepenseId),
        vehiculeId: Number(vehiculeId),
        libelle,
        quantite: quantite || 1,
        montant,
        soumisParId: userId,
        statut: 'SOUMIS',
      },
    });

    res.status(201).json(depense);
  } catch (error) {
    console.error('Erreur lors de la création de la dépense:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

export const updateDepense = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { dateIntervention, codeParc, typeDepenseId, libelle, quantite, montant, vehiculeId } = req.body;

  try {
    const depense = await prisma.depense.update({
      where: { id: Number(id) },
      data: {
        dateIntervention: new Date(dateIntervention),
        codeParc,
        typeDepenseId: Number(typeDepenseId),
        libelle,
        quantite,
        montant,
        vehiculeId: Number(vehiculeId),
      },
    });

    res.json(depense);
  } catch (error) {
    console.error('Erreur lors de la modification de la dépense:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

export const deleteDepense = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.depense.delete({
      where: { id: Number(id) },
    });

    res.status(204).send();
  } catch (error) {
    console.error('Erreur lors de la suppression de la dépense:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

// ========== Spécifiques Utilisateur ==========
export const getDepensesByUser = async (req: Request, res: Response) => {
  const userId = (req as any).user.id;

  try {
    const depenses = await prisma.depense.findMany({
      where: { soumisParId: userId },
      include: {
        vehicule: true,
        soumisPar: { select: { nom: true, email: true } },
      },
      orderBy: { dateCreation: 'desc' },
    });
    res.json(depenses);
  } catch (error) {
    console.error('Erreur lors de la récupération des dépenses de l’utilisateur:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

export const getDepensesByVehicule = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const depenses = await prisma.depense.findMany({
      where: { vehiculeId: Number(id) },
      include: {
        soumisPar: { select: { nom: true, email: true } },
      },
      orderBy: { dateCreation: 'desc' },
    });
    res.json(depenses);
  } catch (error) {
    console.error('Erreur lors de la récupération des dépenses du véhicule:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

// ========== En Attente ==========
export const getDepensesEnAttenteFinance = async (req: Request, res: Response) => {
  try {
    const depenses = await prisma.depense.findMany({
      where: { statut: 'SOUMIS' },
      include: {
        vehicule: true,
        soumisPar: { select: { nom: true, email: true } },
      },
      orderBy: { dateCreation: 'desc' },
    });
    res.json(depenses);
  } catch (error) {
    console.error('Erreur lors de la récupération des dépenses en attente finance:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

export const getDepensesEnAttenteGestion = async (req: Request, res: Response) => {
  try {
    const depenses = await prisma.depense.findMany({
      where: { statut: 'VALIDE_FINANCE' },
      include: {
        vehicule: true,
        soumisPar: { select: { nom: true, email: true } },
        valideParFinance: { select: { nom: true } },
      },
      orderBy: { dateCreation: 'desc' },
    });
    res.json(depenses);
  } catch (error) {
    console.error('Erreur lors de la récupération des dépenses en attente gestion:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

export const getDepensesEnAttenteAdmin = async (req: Request, res: Response) => {
  try {
    const depenses = await prisma.depense.findMany({
      where: { statut: 'VALIDE_GESTION' },
      include: {
        vehicule: true,
        soumisPar: { select: { nom: true, email: true } },
        valideParFinance: { select: { nom: true } },
        valideParGestion: { select: { nom: true } },
      },
      orderBy: { dateCreation: 'desc' },
    });
    res.json(depenses);
  } catch (error) {
    console.error('Erreur lors de la récupération des dépenses en attente admin:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

// ========== Validations ==========
export const validerDepenseFinance = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { commentaire } = req.body;
  const userId = (req as any).user.id;

  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (user?.role !== 'FINANCE') {
      return res.status(403).json({ error: 'Accès refusé. Rôle requis : FINANCE.' });
    }

    const depense = await prisma.depense.findUnique({ where: { id: Number(id) } });
    if (!depense) return res.status(404).json({ error: 'Dépense introuvable' });
    if (depense.valideParFinanceId) {
      return res.status(400).json({ error: 'Dépense déjà validée par la finance.' });
    }

    await prisma.depense.update({
      where: { id: Number(id) },
      data: {
        valideParFinanceId: userId,
        commentaireFinance: commentaire || null,
      },
    });

    await enregistrerValidation(Number(id), userId, 'FINANCE', 'VALIDEE', commentaire);
    await determinerStatutGlobal(Number(id)); // Met à jour le statut global

    const depenseFinale = await prisma.depense.findUnique({
      where: { id: Number(id) },
      include: {
        soumisPar: { select: { nom: true } },
        vehicule: true,
        typeDepense: true,
        valideParFinance: { select: { nom: true } },
        valideParGestion: { select: { nom: true } },
        valideParAdmin: { select: { nom: true } },
      },
    });

    res.json(depenseFinale);
  } catch (error) {
    console.error('Erreur validation finance:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

export const validerDepenseGestion = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { commentaire } = req.body;
  const userId = (req as any).user.id;

  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (user?.role !== 'GESTION') {
      return res.status(403).json({ error: 'Accès refusé. Rôle requis : GESTION.' });
    }

    const depense = await prisma.depense.findUnique({ where: { id: Number(id) } });
    if (!depense) return res.status(404).json({ error: 'Dépense introuvable' });
    if (depense.valideParGestionId) {
      return res.status(400).json({ error: 'Dépense déjà validée par la gestion.' });
    }
    if (!depense.valideParFinanceId) {
      return res.status(400).json({ error: 'La dépense doit d’abord être validée par la finance.' });
    }

    await prisma.depense.update({
      where: { id: Number(id) },
      data: {
        valideParGestionId: userId,
        commentaireGestion: commentaire || null,
      },
    });

    await enregistrerValidation(Number(id), userId, 'GESTION', 'VALIDEE', commentaire);
    await determinerStatutGlobal(Number(id)); // Met à jour le statut global

    const depenseFinale = await prisma.depense.findUnique({
      where: { id: Number(id) },
      include: {
        soumisPar: { select: { nom: true } },
        vehicule: true,
        typeDepense: true,
        valideParFinance: { select: { nom: true } },
        valideParGestion: { select: { nom: true } },
        valideParAdmin: { select: { nom: true } },
      },
    });

    res.json(depenseFinale);
  } catch (error) {
    console.error('Erreur validation gestion:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

export const validerDepenseAdmin = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { commentaire } = req.body;
  const userId = (req as any).user.id;

  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (user?.role !== 'ADMIN_GENERAL') {
      return res.status(403).json({ error: 'Accès refusé. Rôle requis : ADMIN_GENERAL.' });
    }

    const depense = await prisma.depense.findUnique({ where: { id: Number(id) } });
    if (!depense) return res.status(404).json({ error: 'Dépense introuvable' });
    if (depense.valideParAdminId) {
      return res.status(400).json({ error: 'Dépense déjà validée par l’administration.' });
    }
    if (!depense.valideParFinanceId || !depense.valideParGestionId) {
      return res.status(400).json({ error: 'La dépense doit d’abord être validée par la finance et la gestion.' });
    }

    await prisma.depense.update({
      where: { id: Number(id) },
      data: {
        valideParAdminId: userId,
        commentaireAdmin: commentaire || null,
      },
    });

    await enregistrerValidation(Number(id), userId, 'ADMIN_GENERAL', 'VALIDEE', commentaire);
    await determinerStatutGlobal(Number(id)); // Met à jour le statut global

    const depenseFinale = await prisma.depense.findUnique({
      where: { id: Number(id) },
      include: {
        soumisPar: { select: { nom: true } },
        vehicule: true,
        typeDepense: true,
        valideParFinance: { select: { nom: true } },
        valideParGestion: { select: { nom: true } },
        valideParAdmin: { select: { nom: true } },
      },
    });

    res.json(depenseFinale);
  } catch (error) {
    console.error('Erreur validation admin:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

// ========== Historique ==========
/**
 * Récupère l'historique des dépenses.
 * - Pour un LOGISTICIEN : uniquement ses dépenses.
 * - Pour FINANCE, GESTION, ADMIN_GENERAL, SUPER_ADMIN, DG : toutes les dépenses.
 */
export const getHistoriqueDepenses = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const userRole = (req as any).user.role;

    console.log(`[Historique] Demande pour utilisateur ${userId} avec rôle ${userRole}`);

    let whereClause: any = {};

    // Si l'utilisateur est un LOGISTICIEN, il ne voit que ses dépenses
    if (userRole === 'LOGISTICIEN') {
      whereClause.soumisParId = userId;
      console.log(`[Historique] Logisticien ${userId}: Filtrage par soumisParId`);
    }
    // Pour tous les autres rôles (FINANCE, GESTION, ADMIN_GENERAL, SUPER_ADMIN, DG), on récupère tout
    // Le middleware authenticateToken garantit qu'on est connecté.
    // Aucun whereClause spécifique n'est nécessaire, donc Prisma récupère tout.

    const depenses = await prisma.depense.findMany({
      where: whereClause,
      include: {
        soumisPar: { select: { nom: true, email: true } },
        vehicule: { select: { immatriculation: true, codeParc: true } },
        typeDepense: { select: { nom: true } },
        valideParFinance: { select: { nom: true, email: true } },
        valideParGestion: { select: { nom: true, email: true } },
        valideParAdmin: { select: { nom: true, email: true } },
        // documents: true, // Inclus si nécessaire
        // commentaires: true, // Inclus si nécessaire
        // historiqueValidations: { ... } // Inclus si nécessaire
      },
      orderBy: { dateCreation: 'desc' },
    });

    console.log(`[Historique] ${depenses.length} dépenses récupérées pour l'utilisateur ${userId} (${userRole})`);
    res.json(depenses);
  } catch (error) {
    console.error('[Historique] Erreur lors de la récupération:', error);
    res.status(500).json({ error: 'Erreur serveur lors de la récupération de l\'historique' });
  }
};