import { Router } from 'express';
import { seedFromJson } from '../controllers/seed.controller.js';
import { authenticateToken, authorizeRoles } from '../middleware/auth.middleware.js';
import { ROLES } from '../utils/roles.js';

const router = Router();

// Admin-only
router.post('/json', authenticateToken, authorizeRoles(ROLES.SUPER_ADMIN, ROLES.ADMIN_GENERAL), seedFromJson);

export default router;
