import { Router } from 'express';
import { authenticateToken } from '../middleware/auth.middleware.js';
import {
  getHistoriqueGlobal
} from '../controllers/historique.controller.js';

const router = Router();

// Toutes les routes sont protégées
router.get('/global', authenticateToken, getHistoriqueGlobal);

export default router;
