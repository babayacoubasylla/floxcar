import { Router } from 'express'
import { authenticateToken } from '../middleware/auth.middleware'
import { authorizeRoles } from '../middleware/auth.middleware'
import { 
  getVehicules,
  getVehiculeById,
  createVehicule,
  updateVehicule,
  deleteVehicule
} from '../controllers/vehicules.controller'

const router = Router()

// Routes publiques (accès limité)
router.get('/', authenticateToken, authorizeRoles('SUPER_ADMIN'), getVehicules)
router.get('/:id', authenticateToken, authorizeRoles('SUPER_ADMIN'), getVehiculeById)

// Routes protégées (super admin uniquement)
router.post('/', authenticateToken, authorizeRoles('SUPER_ADMIN'), createVehicule)
router.put('/:id', authenticateToken, authorizeRoles('SUPER_ADMIN'), updateVehicule)
router.delete('/:id', authenticateToken, authorizeRoles('SUPER_ADMIN'), deleteVehicule)

export default router