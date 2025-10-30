import { Router } from 'express';
import { authenticateToken, authorizeRoles } from '../middleware/auth.middleware.js';
import { ROLES } from '../utils/roles.js';
import { importDepensesCsv, uploadCsv } from '../controllers/import.controller.js';

const router = Router();

// Import de dépenses depuis un fichier CSV/XLSX (champ 'file')
router.post(
  '/depenses',
  authenticateToken,
  authorizeRoles(ROLES.ADMIN_GENERAL, ROLES.SUPER_ADMIN),
  uploadCsv,
  importDepensesCsv
);

export default router;
