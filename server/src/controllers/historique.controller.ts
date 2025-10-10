import type { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getHistoriqueGlobal = async (req: Request, res: Response) => {
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
        },
        documents: true,
        commentaires: true
      },
      orderBy: { dateCreation: 'desc' },
    })
    res.json(depenses)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}

export const getHistoriqueUtilisateur = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const depenses = await prisma.depense.findMany({
      where: { soumisParId: Number(id) },
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
      },
      orderBy: { dateCreation: 'desc' },
    })
    res.json(depenses)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}

export const getHistoriqueVehicule = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const depenses = await prisma.depense.findMany({
      where: { vehiculeId: Number(id) },
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
      },
      orderBy: { dateCreation: 'desc' },
    })
    res.json(depenses)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}