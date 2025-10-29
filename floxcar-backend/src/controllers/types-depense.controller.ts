// src/controllers/types-depense.controller.ts
import type { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getTypesDepense = async (req: Request, res: Response) => {
  try {
    const types = await prisma.typeDepense.findMany({
      orderBy: { nom: 'asc' },
    });
    res.json(types);
  } catch (error) {
    console.error('Erreur chargement types dépense:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

export const createTypeDepense = async (req: Request, res: Response) => {
  const { nom, description } = req.body;
  try {
    const type = await prisma.typeDepense.create({ data: { nom, description } });
    res.status(201).json(type);
  } catch (error) {
    res.status(500).json({ error: 'Erreur création type' });
  }
};

export const updateTypeDepense = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nom, description } = req.body;
  try {
    const type = await prisma.typeDepense.update({
      where: { id: Number(id) },
      data: { nom, description },
    });
    res.json(type);
  } catch (error) {
    res.status(500).json({ error: 'Erreur mise à jour' });
  }
};

export const deleteTypeDepense = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.typeDepense.delete({ where: { id: Number(id) } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erreur suppression' });
  }
};