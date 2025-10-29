// src/controllers/vehicules.controller.ts
import type { Request, Response } from 'express';
// 🔥 IMPORTER depuis le chemin personnalisé spécifié dans schema.prisma 🔥
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient(); // Utilise le client depuis le chemin personnalisé

export const getVehicules = async (req: Request, res: Response) => {
  try {
    const vehicules = await prisma.vehicule.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json(vehicules);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur serveur' });
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
    console.error(error);
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
    console.error(error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

export const updateVehicule = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { type, immatriculation, codeParc, description, statut } = req.body;

  try {
    // 🔥 CORRIGÉ : Utiliser { ... } pour l'objet data
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
    console.error(error);
    res.status(500).json({ error: 'Erreur serveur' });
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
    console.error(error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};