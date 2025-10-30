// server/src/routes/depenses.routes.ts
import { Router } from 'express';
import { authenticateToken, authorizeRoles } from '../middleware/auth.middleware.js';
import { ROLES } from '../utils/roles.js';
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
  rejeterDepenseFinance,
  rejeterDepenseGestion,
  rejeterDepenseAdmin,
  getDashboardStats,
} from '../controllers/depenses.controller.js';

const router = Router();

// --- Logisticien ---
router.get('/mes-depenses', authenticateToken, getDepensesByUser);
router.post('/', authenticateToken, createDepense);
router.put('/:id', authenticateToken, updateDepense);
router.delete('/:id', authenticateToken, deleteDepense);

// --- Finance ---
router.get(
  '/en-attente-finance',
  authenticateToken,
  authorizeRoles(ROLES.FINANCE, ROLES.SUPER_ADMIN),
  getDepensesEnAttenteFinance
);
router.patch(
  '/:id/valider/finance',
  authenticateToken,
  authorizeRoles(ROLES.FINANCE, ROLES.SUPER_ADMIN),
  validerDepenseFinance
);
router.patch(
  '/:id/rejeter/finance',
  authenticateToken,
  authorizeRoles(ROLES.FINANCE, ROLES.SUPER_ADMIN),
  rejeterDepenseFinance
);

// --- Gestion ---
router.get(
  '/en-attente-gestion',
  authenticateToken,
  authorizeRoles(ROLES.GESTION, ROLES.SUPER_ADMIN),
  getDepensesEnAttenteGestion
);
router.patch(
  '/:id/valider/gestion',
  authenticateToken,
  authorizeRoles(ROLES.GESTION, ROLES.SUPER_ADMIN),
  validerDepenseGestion
);
router.patch(
  '/:id/rejeter/gestion',
  authenticateToken,
  authorizeRoles(ROLES.GESTION, ROLES.SUPER_ADMIN),
  rejeterDepenseGestion
);

// --- Admin ---
router.get(
  '/en-attente-admin',
  authenticateToken,
  authorizeRoles(ROLES.ADMIN_GENERAL, ROLES.SUPER_ADMIN),
  getDepensesEnAttenteAdmin
);
router.patch(
  '/:id/valider/admin',
  authenticateToken,
  authorizeRoles(ROLES.ADMIN_GENERAL, ROLES.SUPER_ADMIN),
  validerDepenseAdmin
);
router.patch(
  '/:id/rejeter/admin',
  authenticateToken,
  authorizeRoles(ROLES.ADMIN_GENERAL, ROLES.SUPER_ADMIN),
  rejeterDepenseAdmin
);

// --- Historique Universel ---
// ✅ Route ajoutée pour éviter le 404
router.get('/historique', authenticateToken, getHistoriqueDepenses);

// --- Stats Tableaux de bord ---
router.get('/stats', authenticateToken, getDashboardStats);

// --- Lecture globale ---
router.get('/', authenticateToken, getDepenses);
// Important: routes spécifiques avant '/:id' pour éviter les collisions
router.get('/vehicule/:id', authenticateToken, getDepensesByVehicule);
router.get('/:id', authenticateToken, getDepenseById);

export default router;