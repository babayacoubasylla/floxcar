// server/src/routes/types-depense.routes.ts
import { Router } from 'express';
import {
  getTypesDepense,
  getTypeDepenseById,
  createTypeDepense,
  updateTypeDepense,
  deleteTypeDepense,
} from '../controllers/types-depense.controller.js';
// ESM: extensions explicites
import { authenticateToken, authorizeRoles } from '../middleware/auth.middleware.js';
import { ROLES } from '../utils/roles.js';

const router = Router();

// ✅ Routes PUBLIQUES (lecture seule)
router.get('/', getTypesDepense);
router.get('/:id', getTypeDepenseById);

// 🔒 Routes protégées (écriture – admins uniquement)
router.post(
  '/',
  authenticateToken,
  authorizeRoles(ROLES.ADMIN_GENERAL, ROLES.SUPER_ADMIN),
  createTypeDepense
);

router.put(
  '/:id',
  authenticateToken,
  authorizeRoles(ROLES.ADMIN_GENERAL, ROLES.SUPER_ADMIN),
  updateTypeDepense
);

router.delete(
  '/:id',
  authenticateToken,
  authorizeRoles(ROLES.ADMIN_GENERAL, ROLES.SUPER_ADMIN),
  deleteTypeDepense
);

export default router;