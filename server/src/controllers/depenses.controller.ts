import type { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getDepenses = async (req: Request, res: Response) => {
  try {
    const depenses = await prisma.depense.findMany({
      include: {
        vehicule: true,
        soumisPar: {
          select: { nom: true, email: true }
        },
        valideParFinance: {
          select: { nom: true, email: true }
        },
        valideParAdmin: {
          select: { nom: true, email: true }
        }
      },
      orderBy: { dateCreation: 'desc' },
    })
    res.json(depenses)
  } catch (error) {
    console.error('Erreur lors de la récupération des dépenses:', error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}

export const getDepenseById = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const depense = await prisma.depense.findUnique({
      where: { id: Number(id) },
      include: {
        vehicule: true,
        soumisPar: {
          select: { nom: true, email: true }
        },
        valideParFinance: {
          select: { nom: true, email: true }
        },
        valideParAdmin: {
          select: { nom: true, email: true }
        },
        documents: true,
        commentaires: true
      }
    })

    if (!depense) {
      return res.status(404).json({ error: 'Dépense non trouvée' })
    }

    res.json(depense)
  } catch (error) {
    console.error('Erreur lors de la récupération de la dépense:', error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}

export const createDepense = async (req: Request, res: Response) => {
  const { dateIntervention, typeVehicule, codeParc, typeDepenseId, vehiculeId, libelle, quantite, montant } = req.body
  const userId = (req as any).user.id

  try {
    const depense = await prisma.depense.create({
      data: {
        dateIntervention: new Date(dateIntervention),
        typeVehicule,
        codeParc,
        typeDepenseId: Number(typeDepenseId),
        vehiculeId: Number(vehiculeId),
        libelle,
        quantite: quantite || 1,
        montant,
        soumisParId: userId,
        statut: 'SOUMIS',
      },
    })

    res.status(201).json(depense)
  } catch (error) {
    console.error('Erreur lors de la création de la dépense:', error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}

export const updateDepense = async (req: Request, res: Response) => {
  const { id } = req.params
  const { dateIntervention, typeVehicule, codeParc, typeDepense, libelle, quantite, montant } = req.body

  try {
    const depense = await prisma.depense.update({
      where: { id: Number(id) },
      data: {
        dateIntervention: new Date(dateIntervention),
        typeVehicule,
        codeParc,
        typeDepense,
        libelle,
        quantite,
        montant,
      },
    })

    res.json(depense)
  } catch (error) {
    console.error('Erreur lors de la modification de la dépense:', error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}

export const deleteDepense = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    await prisma.depense.delete({
      where: { id: Number(id) },
    })

    res.status(204).send()
  } catch (error) {
    console.error('Erreur lors de la suppression de la dépense:', error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}

export const getDepensesByUser = async (req: Request, res: Response) => {
  const userId = (req as any).user.id

  try {
    const depenses = await prisma.depense.findMany({
      where: { soumisParId: userId },
      include: {
        vehicule: true,
        soumisPar: {
          select: { nom: true, email: true }
        }
      },
      orderBy: { dateCreation: 'desc' },
    })
    res.json(depenses)
  } catch (error) {
    console.error('Erreur lors de la récupération des dépenses de l’utilisateur:', error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}

export const getDepensesByVehicule = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const depenses = await prisma.depense.findMany({
      where: { vehiculeId: Number(id) },
      include: {
        soumisPar: {
          select: { nom: true, email: true }
        }
      },
      orderBy: { dateCreation: 'desc' },
    })
    res.json(depenses)
  } catch (error) {
    console.error('Erreur lors de la récupération des dépenses du véhicule:', error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}

export const getDepensesEnAttenteFinance = async (req: Request, res: Response) => {
  try {
    const depenses = await prisma.depense.findMany({
      where: { statut: 'SOUMIS' },
      include: {
        vehicule: true,
        soumisPar: {
          select: { nom: true, email: true }
        }
      },
      orderBy: { dateCreation: 'desc' },
    })
    res.json(depenses)
  } catch (error) {
    console.error('Erreur lors de la récupération des dépenses en attente finance:', error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}

export const getDepensesEnAttenteAdmin = async (req: Request, res: Response) => {
  try {
    const depenses = await prisma.depense.findMany({
      where: { statut: 'VALIDE_FINANCE' },
      include: {
        vehicule: true,
        soumisPar: {
          select: { nom: true, email: true }
        },
        valideParFinance: {
          select: { nom: true, email: true }
        }
      },
      orderBy: { dateCreation: 'desc' },
    })
    res.json(depenses)
  } catch (error) {
    console.error('Erreur lors de la récupération des dépenses en attente admin:', error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}

export const validerDepenseFinance = async (req: Request, res: Response) => {
  const { id } = req.params
  const { statut, commentaire } = req.body
  const userId = (req as any).user.id

  try {
    const depense = await prisma.depense.update({
      where: { id: Number(id) },
      data: {
        statut: statut === 'rejeter' ? 'REJETE_FINANCE' : 'VALIDE_FINANCE',
        commentaireFinance: commentaire,
        valideParFinanceId: userId,
      },
    })

    res.json(depense)
  } catch (error) {
    console.error('Erreur lors de la validation finance:', error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}

export const validerDepenseAdmin = async (req: Request, res: Response) => {
  const { id } = req.params
  const { statut, commentaire, dateReport } = req.body
  const userId = (req as any).user.id

  try {
    const depense = await prisma.depense.update({
      where: { id: Number(id) },
      data: {
        statut: statut === 'rejeter' ? 'REJETE_ADMIN' : statut === 'reporter' ? 'SOUMIS' : 'VALIDE_ADMIN',
        commentaireAdmin: commentaire,
        dateReport: dateReport ? new Date(dateReport) : null,
        valideParAdminId: userId,
      },
    })

    res.json(depense)
  } catch (error) {
    console.error('Erreur lors de la validation admin:', error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}

export const terminerDepense = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const depense = await prisma.depense.update({
      where: { id: Number(id) },
      data: {
        statut: 'TERMINE',
      },
    })

    res.json(depense)
  } catch (error) {
    console.error('Erreur lors de la terminaison de la dépense:', error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}