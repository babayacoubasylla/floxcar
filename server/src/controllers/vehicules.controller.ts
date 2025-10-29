import type { Request, Response } from 'express';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export const getVehicules = async (req: Request, res: Response) => {
  try {
    const vehicules = await prisma.vehicule.findMany({
      where: {
        // Optionnel : exclure les véhicules marqués comme inactifs
        // statut: { not: 'INACTIF' }
      },
      orderBy: { immatriculation: 'asc' }, // tri plus utile qu'avec createdAt
    });
    res.json(vehicules);
  } catch (error) {
    console.error('Erreur lors de la récupération des véhicules:', error);
    res.status(500).json({ error: 'Erreur serveur lors de la récupération des véhicules' });
  }
};

export const getVehiculeById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const vehicule = await prisma.vehicule.findUnique({
      where: { id: Number(id) },
    });

    if (!vehicule) {
      return res.status(404).json({ error: 'Véhicule non trouvé' });
    }

    res.json(vehicule);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2023') {
      return res.status(400).json({ error: 'ID de véhicule invalide' });
    }
    console.error('Erreur lors de la récupération du véhicule:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

export const createVehicule = async (req: Request, res: Response) => {
  const { type, immatriculation, codeParc, description, statut } = req.body;

  try {
    const vehicule = await prisma.vehicule.create({
      data: {
        type,
        immatriculation,
        codeParc,
        description,
        statut: statut || 'actif',
      },
    });

    res.status(201).json(vehicule);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      return res.status(400).json({ error: 'Immatriculation déjà utilisée' });
    }
    console.error('Erreur lors de la création du véhicule:', error);
    res.status(500).json({ error: 'Erreur serveur lors de la création' });
  }
};

export const updateVehicule = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { type, immatriculation, codeParc, description, statut } = req.body;

  try {
    const vehicule = await prisma.vehicule.update({
      where: { id: Number(id) },
      data: {
        type,
        immatriculation,
        codeParc,
        description,
        statut,
      },
    });

    res.json(vehicule);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        return res.status(404).json({ error: 'Véhicule non trouvé' });
      }
      if (error.code === 'P2002') {
        return res.status(400).json({ error: 'Immatriculation déjà utilisée' });
      }
    }
    console.error('Erreur lors de la mise à jour du véhicule:', error);
    res.status(500).json({ error: 'Erreur serveur lors de la mise à jour' });
  }
};

export const deleteVehicule = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.vehicule.delete({
      where: { id: Number(id) },
    });

    res.status(204).send();
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      return res.status(404).json({ error: 'Véhicule non trouvé' });
    }
    console.error('Erreur lors de la suppression du véhicule:', error);
    res.status(500).json({ error: 'Erreur serveur lors de la suppression' });
  }
};