import type { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getTypesDepense = async (req: Request, res: Response) => {
  try {
    const types = await prisma.typeDepense.findMany({
      select: {
        id: true,
        nom: true,
        description: true,
      },
      orderBy: { nom: 'asc' },
    })
    res.json(types)
  } catch (error) {
    console.error('Erreur lors de la récupération des types de dépense:', error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}

export const getTypeDepenseById = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const type = await prisma.typeDepense.findUnique({
      where: { id: Number(id) },
      select: {
        id: true,
        nom: true,
        description: true,
      },
    })

    if (!type) {
      return res.status(404).json({ error: 'Type de dépense non trouvé' })
    }

    res.json(type)
  } catch (error) {
    console.error('Erreur lors de la récupération du type de dépense:', error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}

export const createTypeDepense = async (req: Request, res: Response) => {
  const { nom, description } = req.body

  console.log('Données reçues:', req.body)

  try {
    const type = await prisma.typeDepense.create({
      data: {
        nom,
        description,
      },
    })

    res.status(201).json(type)
  } catch (error) {
    console.error('Erreur lors de la création du type de dépense:', error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}

export const updateTypeDepense = async (req: Request, res: Response) => {
  const { id } = req.params
  const { nom, description } = req.body

  try {
    const type = await prisma.typeDepense.update({
      where: { id: Number(id) },
      data: {
        nom,
        description,
      },
    })

    res.json(type)
  } catch (error) {
    console.error('Erreur lors de la modification du type de dépense:', error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}

export const deleteTypeDepense = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    await prisma.typeDepense.delete({
      where: { id: Number(id) },
    })

    res.status(204).send()
  } catch (error) {
    console.error('Erreur lors de la suppression du type de dépense:', error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}