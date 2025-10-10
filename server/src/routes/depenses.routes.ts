import { Router } from 'express'
import { authenticateToken } from '../middleware/auth.middleware'
import { 
  getDepenses,
  getDepenseById,
  createDepense,
  updateDepense,
  deleteDepense,
  getDepensesByUser,
  getDepensesByVehicule,
  getDepensesEnAttenteFinance,
  getDepensesEnAttenteAdmin,
  validerDepenseFinance,
  validerDepenseAdmin,
  terminerDepense
} from '../controllers/depenses.controller'

const router = Router()

// Routes pour logisticien
router.get('/mes-depenses', authenticateToken, getDepensesByUser)
router.post('/', authenticateToken, createDepense)
router.put('/:id', authenticateToken, updateDepense)
router.delete('/:id', authenticateToken, deleteDepense)

// Routes pour finance
router.get('/en-attente-finance', authenticateToken, getDepensesEnAttenteFinance)
router.put('/:id/valider-finance', authenticateToken, validerDepenseFinance)

// Routes pour admin
router.get('/en-attente-admin', authenticateToken, getDepensesEnAttenteAdmin)
router.put('/:id/valider-admin', authenticateToken, validerDepenseAdmin)

// Routes pour terminer (logisticien)
router.put('/:id/terminer', authenticateToken, terminerDepense)

// Routes pour tous (lecture seule)
router.get('/', authenticateToken, getDepenses)
router.get('/:id', authenticateToken, getDepenseById)
router.get('/vehicule/:id', authenticateToken, getDepensesByVehicule)

export default router