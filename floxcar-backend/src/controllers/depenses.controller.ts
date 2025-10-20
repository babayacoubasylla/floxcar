// src/controllers/depenses.controller.ts
import { Request, Response } from 'express';
import { PrismaClient } from '../generated/client';
import * as XLSX from 'xlsx';

const prisma = new PrismaClient();

// --- UTILITAIRE : Vérifie le statut global après une validation (hors DG)
async function verifierStatutGlobal(depenseId: number) {
  try {
    const depense = await prisma.depense.findUnique({
      where: { id: depenseId },
      select: {
        valideParControleurFinancierId: true,
        valideParControleurGestionId: true,
        valideParResponsableAdminId: true,
        valideParAdminGeneralId: true,
        statut: true,
        soumisParId: true,
      },
    });

    if (!depense || depense.statut === 'REJETE') return;

    let validations = 0;
    if (depense.valideParControleurFinancierId !== null) validations++;
    if (depense.valideParControleurGestionId !== null) validations++;
    if (depense.valideParResponsableAdminId !== null) validations++;
    if (depense.valideParAdminGeneralId !== null) validations++;

    const nouveauStatut = validations >= 3 ? 'TERMINE' : 'SOUMIS';

    await prisma.depense.update({
      where: { id: depenseId },
      data: { statut: nouveauStatut },
    });
  } catch (error) {
    console.error(`Erreur vérification statut dépense ${depenseId}:`, error);
  }
}

// --- CONTRÔLEURS ---

// ✅ Soumettre une dépense (LOGISTICIEN)
export const soumettreDepense = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    if (!user || user.role !== 'LOGISTICIEN') {
      return res.status(403).json({ error: 'Accès interdit : seul un logisticien peut soumettre une dépense.' });
    }

    const {
      dateIntervention,
      typeVehicule,
      codeParc,
      typeDepenseId,
      libelle,
      quantite,
      montant,
      vehiculeId,
      commentaireLogisticien,
    } = req.body;

    if (!dateIntervention || !typeVehicule || !codeParc || !typeDepenseId || !libelle || !montant || !vehiculeId) {
      return res.status(400).json({ error: 'Tous les champs obligatoires doivent être fournis.' });
    }

    const typeDepenseIdNum = Number(typeDepenseId);
    const vehiculeIdNum = Number(vehiculeId);
    if (isNaN(typeDepenseIdNum) || isNaN(vehiculeIdNum)) {
      return res.status(400).json({ error: 'ID invalide.' });
    }

    const depense = await prisma.depense.create({
      data: {
        dateIntervention: new Date(dateIntervention),
        typeVehicule,
        codeParc,
        libelle,
        quantite: quantite || 1,
        montant: Number(montant),
        statut: 'SOUMIS',
        commentaireLogisticien: commentaireLogisticien || null,
        typeDepense: { connect: { id: typeDepenseIdNum } },
        vehicule: { connect: { id: vehiculeIdNum } },
        soumisPar: { connect: { id: user.id } },
      },
      include: {
        soumisPar: true,
        typeDepense: true,
        vehicule: true,
      },
    });

    res.status(201).json(depense);
  } catch (error: any) {
    console.error('💥 Erreur soumission dépense:', error);
    if (error.code === 'P2003') {
      return res.status(400).json({ error: 'Véhicule ou type de dépense invalide.' });
    }
    res.status(500).json({ error: 'Erreur interne du serveur.' });
  }
};

// ✅ Lire ses propres dépenses (LOGISTICIEN)
export const getMyDepenses = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    if (!user) {
      return res.status(401).json({ error: 'Utilisateur non authentifié.' });
    }

    const depenses = await prisma.depense.findMany({
      where: { soumisParId: user.id },
      include: {
        vehicule: true,
        typeDepense: true,
      },
      orderBy: { dateCreation: 'desc' },
    });
    res.json(depenses);
  } catch (error) {
    console.error('Erreur chargement dépenses:', error);
    res.status(500).json({ error: 'Erreur interne du serveur.' });
  }
};

// ✅ Valider ou rejeter une dépense
export const validerDepense = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    if (!user) {
      return res.status(401).json({ error: 'Utilisateur non authentifié.' });
    }

    const { id } = req.params;
    const { action, commentaire } = req.body;
    const depenseId = parseInt(id);

    if (isNaN(depenseId)) return res.status(400).json({ error: 'ID de dépense invalide.' });
    if (!['valider', 'rejeter'].includes(action)) return res.status(400).json({ error: 'Action doit être "valider" ou "rejeter".' });

    const depense = await prisma.depense.findUnique({ 
      where: { id: depenseId },
      include: {
        valideParControleurFinancier: true,
        valideParControleurGestion: true,
        valideParResponsableAdmin: true,
        valideParAdminGeneral: true,
        valideParDG: true,
      }
    });
    if (!depense) return res.status(404).json({ error: 'Dépense non trouvée.' });
    if (depense.statut !== 'SOUMIS') return res.status(400).json({ error: 'Cette dépense a déjà été traitée.' });

    let champRelation: string | null = null;
    let champCommentaire: string | null = null;

    switch (user.role) {
      case 'CONTROLEUR_FINANCIER':
        champRelation = 'valideParControleurFinancier';
        champCommentaire = 'commentaireControleurFinancier';
        break;
      case 'CONTROLEUR_GESTION':
        champRelation = 'valideParControleurGestion';
        champCommentaire = 'commentaireControleurGestion';
        break;
      case 'RESPONSABLE_ADMIN':
        champRelation = 'valideParResponsableAdmin';
        champCommentaire = 'commentaireResponsableAdmin';
        break;
      case 'ADMIN_GENERAL':
        champRelation = 'valideParAdminGeneral';
        champCommentaire = 'commentaireAdminGeneral';
        break;
      case 'DG':
        champRelation = 'valideParDG';
        champCommentaire = 'commentaireDG';
        break;
      default:
        return res.status(403).json({ error: 'Votre rôle ne permet pas de valider des dépenses.' });
    }

    if (depense[champRelation as keyof typeof depense] !== null) {
      return res.status(400).json({ error: 'Vous avez déjà traité cette dépense.' });
    }

    // ✅ Correction ici : on utilise `data` au lieu de `updateData` directement dans l'objet
    const updatedDepense = await prisma.depense.update({
      where: { id: depenseId },
      data: {
        [champRelation]: { connect: { id: user.id } },
        ...(commentaire && { [champCommentaire!]: commentaire }),
        ...(action === 'rejeter' && { statut: 'REJETE' }),
      },
      include: {
        soumisPar: true,
        typeDepense: true,
        vehicule: true,
      },
    });

    if (action === 'valider' && user.role !== 'DG') {
      await verifierStatutGlobal(depenseId);
    }

    res.status(200).json(updatedDepense);
  } catch (error: any) {
    console.error('Erreur validation dépense:', error);
    res.status(500).json({ error: 'Erreur interne du serveur.' });
  }
};

// ✅ Liste des dépenses à pourvoir (CORRIGÉ POUR SUPER_ADMIN)
export const getDepensesAPourvoir = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    if (!user) {
      return res.status(401).json({ error: 'Utilisateur non authentifié.' });
    }

    let where: any = {};

    switch (user.role) {
      case 'CONTROLEUR_FINANCIER':
        where = { valideParControleurFinancierId: null, statut: 'SOUMIS' };
        break;
      case 'CONTROLEUR_GESTION':
        where = { valideParControleurGestionId: null, statut: 'SOUMIS' };
        break;
      case 'RESPONSABLE_ADMIN':
        where = { valideParResponsableAdminId: null, statut: 'SOUMIS' };
        break;
      case 'ADMIN_GENERAL':
        where = { valideParAdminGeneralId: null, statut: 'SOUMIS' };
        break;
      case 'DG':
        where = { statut: { in: ['TERMINE', 'REJETE'] } };
        break;
      case 'SUPER_ADMIN':
        where = { statut: 'SOUMIS' };
        break;
      default:
        return res.status(403).json({ error: 'Accès non autorisé.' });
    }

    const depenses = await prisma.depense.findMany({
      where,
      include: {
        soumisPar: true,
        typeDepense: true,
        vehicule: true,
      },
      orderBy: { dateIntervention: 'desc' },
    });

    res.status(200).json(depenses);
  } catch (error) {
    console.error('Erreur récupération dépenses à pourvoir:', error);
    res.status(500).json({ error: 'Erreur interne du serveur.' });
  }
};

// ✅ Détail d'une dépense
export const getDepenseById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const depenseId = parseInt(id);
    if (isNaN(depenseId)) {
      return res.status(400).json({ error: 'ID invalide.' });
    }

    const depense = await prisma.depense.findUnique({
      where: { id: depenseId },
      include: {
        soumisPar: true,
        typeDepense: true,
        vehicule: true,
        valideParControleurFinancier: { select: { nom: true } },
        valideParControleurGestion: { select: { nom: true } },
        valideParResponsableAdmin: { select: { nom: true } },
        valideParAdminGeneral: { select: { nom: true } },
        valideParDG: { select: { nom: true } },
      },
    });
    if (!depense) return res.status(404).json({ error: 'Dépense non trouvée.' });
    res.status(200).json(depense);
  } catch (error) {
    console.error('Erreur détail dépense:', error);
    res.status(500).json({ error: 'Erreur interne du serveur.' });
  }
};

// ✅ Export Excel
export const exporterDepensesExcel = async (req: Request, res: Response) => {
  try {
    const depenses = await prisma.depense.findMany({
      include: {
        soumisPar: true,
        typeDepense: true,
        vehicule: true,
      },
    });

    const data = depenses.map(d => ({
      Date: d.dateIntervention.toISOString().split('T')[0],
      'Type Véhicule': d.typeVehicule,
      'Code Parc': d.codeParc,
      'Type Dépense': d.typeDepense.nom,
      Libellé: d.libelle,
      Quantité: d.quantite,
      Montant: d.montant,
      Statut: d.statut,
      Logisticien: d.soumisPar.nom,
    }));

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, 'Dépenses');
    const buffer = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="depenses.xlsx"');
    res.send(buffer);
  } catch (error) {
    console.error('Erreur export Excel:', error);
    res.status(500).json({ error: 'Erreur interne du serveur.' });
  }
};

// ✅ Historique des validations par utilisateur
export const getMesValidations = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    if (!user) {
      return res.status(401).json({ error: 'Utilisateur non authentifié.' });
    }

    let where: any = {};
    switch (user.role) {
      case 'CONTROLEUR_FINANCIER':
        where.valideParControleurFinancierId = user.id;
        break;
      case 'CONTROLEUR_GESTION':
        where.valideParControleurGestionId = user.id;
        break;
      case 'RESPONSABLE_ADMIN':
        where.valideParResponsableAdminId = user.id;
        break;
      case 'ADMIN_GENERAL':
        where.valideParAdminGeneralId = user.id;
        break;
      case 'DG':
        where.valideParDGId = user.id;
        break;
      default:
        return res.status(403).json({ error: 'Rôle non autorisé.' });
    }

    const depenses = await prisma.depense.findMany({
      where,
      include: {
        soumisPar: { select: { nom: true, email: true } },
        typeDepense: { select: { nom: true } },
        vehicule: { select: { immatriculation: true, codeParc: true } },
      },
      orderBy: { dateCreation: 'desc' },
    });

    res.json(depenses);
  } catch (error) {
    console.error('Erreur chargement mes validations:', error);
    res.status(500).json({ error: 'Erreur serveur.' });
  }
};

// ✅ ALIAS pour compatibilité avec le frontend
export const createDepense = soumettreDepense;
export const getDepensesByUser = getMyDepenses;