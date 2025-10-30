import type { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getMyNotifications = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const { unreadOnly } = req.query;
    const where: any = { userId };
    if (String(unreadOnly) === 'true') {
      where.readAt = null;
    }

    const notifications = await (prisma as any).notification.findMany({
      where,
      orderBy: [
        { readAt: 'asc' }, // nulls first
        { createdAt: 'desc' },
      ],
      take: 100,
    });

    res.json(notifications);
  } catch (error) {
    console.error('Erreur getMyNotifications:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

export const markNotificationRead = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const id = Number(req.params.id);

    // Vérifier appartenance ou super admin
    const notif = await (prisma as any).notification.findUnique({ where: { id } });
    if (!notif) return res.status(404).json({ error: 'Notification introuvable' });
    if (notif.userId !== user.id && user.role !== 'SUPER_ADMIN') {
      return res.status(403).json({ error: 'Accès interdit' });
    }

    const updated = await (prisma as any).notification.update({
      where: { id },
      data: { readAt: new Date() },
    });

    res.json(updated);
  } catch (error) {
    console.error('Erreur markNotificationRead:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

export const markAllNotificationsRead = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const result = await (prisma as any).notification.updateMany({
      where: { userId, readAt: null },
      data: { readAt: new Date() },
    });
    res.json({ updated: result.count });
  } catch (error) {
    console.error('Erreur markAllNotificationsRead:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};
