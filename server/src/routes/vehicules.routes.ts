// server/src/routes/vehicules.routes.ts
import { Router } from 'express';
import {
  getVehicules,
  getVehiculeById,
  createVehicule,
  updateVehicule,
  deleteVehicule,
} from '../controllers/vehicules.controller.js';
import { authenticateToken, authorizeRoles } from '../middleware/auth.middleware.js';
import { ROLES } from '../utils/roles.js';

const router = Router();

// ✅ Routes PUBLIQUES (lecture seule – pas besoin de token)
router.get('/', getVehicules);
router.get('/:id', getVehiculeById);

// 🔒 Routes protégées (écriture – réservées aux admins)
router.post(
  '/',
  authenticateToken,
  authorizeRoles(ROLES.ADMIN_GENERAL, ROLES.SUPER_ADMIN),
  createVehicule
);

router.put(
  '/:id',
  authenticateToken,
  authorizeRoles(ROLES.ADMIN_GENERAL, ROLES.SUPER_ADMIN),
  updateVehicule
);

router.delete(
  '/:id',
  authenticateToken,
  authorizeRoles(ROLES.ADMIN_GENERAL, ROLES.SUPER_ADMIN),
  deleteVehicule
);

export default router;