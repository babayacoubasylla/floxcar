import type { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getHistoriqueGlobal = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user?.id;
    console.log('🔍 [Historique] User ID:', userId);

    if (!userId) {
      console.error('❌ [Historique] User non authentifié');
      return res.status(401).json({ error: 'Non authentifié' });
    }

    const depenses = await prisma.depense.findMany({
      where: {
        OR: [
          { soumisParId: userId },
          { valideParFinanceId: userId },
          { valideParGestionId: userId },
          { valideParAdminId: userId },
        ],
      },
      include: {
        soumisPar: { select: { nom: true } },
        vehicule: { select: { immatriculation: true, codeParc: true } },
        typeDepense: { select: { nom: true } },
        valideParFinance: { select: { nom: true } },
        valideParGestion: { select: { nom: true } },
        valideParAdmin: { select: { nom: true } },
      },
      orderBy: { dateCreation: 'desc' },
    });

    console.log(`✅ [Historique] ${depenses.length} dépenses trouvées`);
    res.json(depenses);
  } catch (error) {
    console.error('💥 [Historique] Erreur serveur:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

// ... (getHistoriqueUtilisateur et getHistoriqueVehicule inchangés)