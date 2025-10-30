import express from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

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

// Endpoint pour BOOTSTRAPPER un SUPER_ADMIN au besoin
// Usage: POST /admin/bootstrap-super-admin
// Headers: x-admin-secret: <DB_RESET_TOKEN>
// Body JSON: { email: string, password: string, nom?: string }
router.post('/bootstrap-super-admin', async (req, res) => {
  try {
    if (process.env.ALLOW_BOOTSTRAP_USER !== 'true') {
      return res.status(403).json({ error: 'Bootstrap désactivé' });
    }

    const token = req.headers['x-admin-secret'];
    if (!process.env.DB_RESET_TOKEN || !token || token !== process.env.DB_RESET_TOKEN) {
      return res.status(401).json({ error: 'Accès non autorisé' });
    }

    const { email, password, nom } = req.body || {};
    if (!email || !password) {
      return res.status(400).json({ error: 'email et password requis' });
    }

    const exist = await prisma.user.findUnique({ where: { email } });
    if (exist) {
      return res.status(409).json({ error: 'Utilisateur déjà existant' });
    }

    const anySuper = await prisma.user.findFirst({ where: { role: 'SUPER_ADMIN' } });
    const hash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hash,
        nom: nom || (anySuper ? 'Admin Supplémentaire' : 'Super Administrateur'),
        role: 'SUPER_ADMIN',
      },
      select: { id: true, email: true, nom: true, role: true, createdAt: true },
    });

    return res.json({ ok: true, user });
  } catch (error: any) {
    return res.status(500).json({ error: 'Erreur bootstrap utilisateur', details: error?.message });
  }
});

export default router;
