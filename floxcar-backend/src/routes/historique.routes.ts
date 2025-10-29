import { Router } from 'express';
import { authenticateToken } from '../middleware/auth.middleware.js';
import { 
  getHistoriqueGlobal,
  getHistoriqueUtilisateur,
  getHistoriqueVehicule
} from '../controllers/historique.controller.js';

const router = Router();

// Routes protégées
router.get('/global', authenticateToken, getHistoriqueGlobal);
router.get('/utilisateur/:id', authenticateToken, getHistoriqueUtilisateur);
router.get('/vehicule/:id', authenticateToken, getHistoriqueVehicule);

export default router;