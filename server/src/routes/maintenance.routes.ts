import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Endpoint de maintenance pour RÉINITIALISER la base (schema public)
// Usage: POST /admin/reset-db avec l'entête HTTP: x-admin-secret: <DB_RESET_TOKEN>
// Sécurisé par la variable d'env DB_RESET_TOKEN et activé uniquement si ALLOW_DB_RESET=true.
router.post('/reset-db', async (req, res) => {
  try {
    if (process.env.ALLOW_DB_RESET !== 'true') {
      return res.status(403).json({ error: 'Maintenance désactivée' });
    }

    const token = req.headers['x-admin-secret'];
    if (!process.env.DB_RESET_TOKEN || !token || token !== process.env.DB_RESET_TOKEN) {
      return res.status(401).json({ error: 'Accès non autorisé' });
    }

    // Attention: opération destructive. Supprime tout le schéma public.
    await prisma.$executeRawUnsafe('DROP SCHEMA IF EXISTS public CASCADE;');
    await prisma.$executeRawUnsafe('CREATE SCHEMA public;');
    // Les GRANT sont généralement gérés par Render; si besoin, on pourrait ajouter:
    // await prisma.$executeRawUnsafe("GRANT ALL ON SCHEMA public TO public;");

    return res.json({ ok: true, message: 'Schéma public réinitialisé. Redéployez pour appliquer les migrations.' });
  } catch (error: any) {
    return res.status(500).json({ error: 'Erreur lors de la réinitialisation', details: error?.message });
  }
});

export default router;
