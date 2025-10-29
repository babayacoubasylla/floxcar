// src/routes/vehicules.routes.ts
import { Router } from 'express';
import { authenticateToken } from '../middleware/auth.middleware';
import { authorizeRoles } from '../middleware/auth.middleware';
import { 
  getVehicules,
  getVehiculeById,
  createVehicule,
  updateVehicule,
  deleteVehicule
} from '../controllers/vehicules.controller';

const router = Router();

// ✅ Lecture : tout utilisateur authentifié (logisticien, finance, etc.)
router.get('/', authenticateToken, getVehicules);
router.get('/:id', authenticateToken, getVehiculeById);

// ✅ Écriture : réservée au SUPER_ADMIN
router.post('/', authenticateToken, authorizeRoles('SUPER_ADMIN'), createVehicule);
router.put('/:id', authenticateToken, authorizeRoles('SUPER_ADMIN'), updateVehicule);
router.delete('/:id', authenticateToken, authorizeRoles('SUPER_ADMIN'), deleteVehicule);

export default router;