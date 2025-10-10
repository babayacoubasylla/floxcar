import type { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        nom: true,
        email: true,
        role: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
    })
    res.json(users)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
      select: {
        id: true,
        nom: true,
        email: true,
        role: true,
        createdAt: true,
      },
    })

    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' })
    }

    res.json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}

export const createUser = async (req: Request, res: Response) => {
  const { nom, email, password, role } = req.body

  if (!nom || !email || !password || !role) {
    return res.status(400).json({ error: 'Tous les champs sont obligatoires.' })
  }

  try {
    // Vérifier si l'email existe déjà
    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      return res.status(409).json({ error: 'Cet email est déjà utilisé.' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        nom,
        email,
        password: hashedPassword,
        role,
      },
    })

    res.status(201).json(user)
  } catch (error: any) {
    console.error(error)
    if (error.code === 'P2002') {
      // Erreur d'unicité Prisma
      return res.status(409).json({ error: 'Cet email est déjà utilisé.' })
    }
    res.status(500).json({ error: error.message || 'Erreur serveur' })
  }
}

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params
  const { nom, email, password, role } = req.body

  try {
    let updateData: any = { nom, email, role }

    if (password) {
      updateData.password = await bcrypt.hash(password, 10)
    }

    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: updateData,
    })

    res.json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    await prisma.user.delete({
      where: { id: Number(id) },
    })

    res.status(204).send()
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}