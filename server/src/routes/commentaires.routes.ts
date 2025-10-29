import { Router } from 'express'
import { authenticateToken } from '../middleware/auth.middleware.js'
import { 
  getCommentaires,
  getCommentaireById,
  createCommentaire,
  updateCommentaire,
  deleteCommentaire
} from '../controllers/commentaires.controller.js'

const router = Router()

// Routes protégées
router.get('/', authenticateToken, getCommentaires)
router.get('/:id', authenticateToken, getCommentaireById)
router.post('/', authenticateToken, createCommentaire)
router.put('/:id', authenticateToken, updateCommentaire)
router.delete('/:id', authenticateToken, deleteCommentaire)

export default router