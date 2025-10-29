import { Router } from 'express'
import { authenticateToken } from '../middleware/auth.middleware.js'
import { 
  getDocuments,
  getDocumentById,
  createDocument,
  deleteDocument
} from '../controllers/documents.controller.js'

const router = Router()

// Routes protégées
router.get('/', authenticateToken, getDocuments)
router.get('/:id', authenticateToken, getDocumentById)
router.post('/', authenticateToken, createDocument)
router.delete('/:id', authenticateToken, deleteDocument)

export default router