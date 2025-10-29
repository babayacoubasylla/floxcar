// server/src/routes/depenses.routes.ts
import { Router } from 'express';
import { authenticateToken } from '../middleware/auth.middleware.js';
import {
  getDepenses,
  getDepenseById,
  createDepense,
  updateDepense,
  deleteDepense,
  getDepensesByUser,
  getDepensesByVehicule,
  getDepensesEnAttenteFinance,
  getDepensesEnAttenteGestion,
  getDepensesEnAttenteAdmin,
  validerDepenseFinance,
  validerDepenseGestion,
  validerDepenseAdmin,
  getHistoriqueDepenses, // <-- Importé
} from '../controllers/depenses.controller.js';

const router = Router();

// --- Logisticien ---
router.get('/mes-depenses', authenticateToken, getDepensesByUser);
router.post('/', authenticateToken, createDepense);
router.put('/:id', authenticateToken, updateDepense);
router.delete('/:id', authenticateToken, deleteDepense);

// --- Finance ---
router.get('/en-attente-finance', authenticateToken, getDepensesEnAttenteFinance);
router.patch('/:id/valider/finance', authenticateToken, validerDepenseFinance);

// --- Gestion ---
router.get('/en-attente-gestion', authenticateToken, getDepensesEnAttenteGestion);
router.patch('/:id/valider/gestion', authenticateToken, validerDepenseGestion);

// --- Admin ---
router.get('/en-attente-admin', authenticateToken, getDepensesEnAttenteAdmin);
router.patch('/:id/valider/admin', authenticateToken, validerDepenseAdmin);

// --- Historique Universel ---
// ✅ Route ajoutée pour éviter le 404
router.get('/historique', authenticateToken, getHistoriqueDepenses);

// --- Lecture globale ---
router.get('/', authenticateToken, getDepenses);
router.get('/:id', authenticateToken, getDepenseById);
router.get('/vehicule/:id', authenticateToken, getDepensesByVehicule);

export default router;