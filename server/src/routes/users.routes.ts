import { Router } from 'express'
import { authenticateToken } from '../middleware/auth.middleware.js'
import { authorizeRoles } from '../middleware/auth.middleware.js'
import { 
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from '../controllers/users.controller.js'

const router = Router()

// Routes protégées (super admin uniquement)
router.get('/', authenticateToken, authorizeRoles('SUPER_ADMIN'), getUsers)
router.get('/:id', authenticateToken, authorizeRoles('SUPER_ADMIN'), getUserById)
router.post('/', authenticateToken, authorizeRoles('SUPER_ADMIN'), createUser)
router.put('/:id', authenticateToken, authorizeRoles('SUPER_ADMIN'), updateUser)
router.delete('/:id', authenticateToken, authorizeRoles('SUPER_ADMIN'), deleteUser)

export default router