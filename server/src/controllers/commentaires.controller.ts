import type { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getCommentaires = async (req: Request, res: Response) => {
  try {
    const commentaires = await prisma.commentaire.findMany({
      include: {
        depense: {
          include: {
            vehicule: true,
            soumisPar: true
          }
        }
      }
    })
    res.json(commentaires)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}

export const getCommentaireById = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const commentaire = await prisma.commentaire.findUnique({
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

    if (!commentaire) {
      return res.status(404).json({ error: 'Commentaire non trouvé' })
    }

    res.json(commentaire)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}

export const createCommentaire = async (req: Request, res: Response) => {
  const { texte, depenseId } = req.body
  const userId = (req as any).user.id

  try {
    const commentaire = await prisma.commentaire.create({
      data: {
        texte,
        auteur: userId.toString(), // ou utiliser le nom de l'utilisateur
        depenseId,
      },
    })

    res.status(201).json(commentaire)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}

export const updateCommentaire = async (req: Request, res: Response) => {
  const { id } = req.params
  const { texte } = req.body

  try {
    const commentaire = await prisma.commentaire.update({
      where: { id: Number(id) },
      data: {
        texte,
      },
    })

    res.json(commentaire)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}

export const deleteCommentaire = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    await prisma.commentaire.delete({
      where: { id: Number(id) },
    })

    res.status(204).send()
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}