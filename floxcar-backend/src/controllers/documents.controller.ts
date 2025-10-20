import type { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export const getDocuments = async (req: Request, res: Response) => {
  try {
    const documents = await prisma.document.findMany({
      include: {
        depense: {
          include: {
            vehicule: true,
            soumisPar: true
          }
        }
      }
    })
    res.json(documents)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}

export const getDocumentById = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const document = await prisma.document.findUnique({
      where: { id: Number(id) },
      include: {
        depense: {
          include: {
            vehicule: true,
            soumisPar: true
          }
        }
      }
    })

    if (!document) {
      return res.status(404).json({ error: 'Document non trouvé' })
    }

    res.json(document)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}

export const createDocument = async (req: Request, res: Response) => {
  const { url, nom, depenseId } = req.body

  try {
    const document = await prisma.document.create({
      data: {
        url,
        nom,
        depenseId,
      },
    })

    res.status(201).json(document)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}

export const deleteDocument = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    await prisma.document.delete({
      where: { id: Number(id) },
    })

    res.status(204).send()
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}