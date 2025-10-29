// src/routes/types-depense.routes.ts
import { Router } from 'express';
import { authenticateToken } from '../middleware/auth.middleware';
import { authorizeRoles } from '../middleware/auth.middleware';
import { 
  getTypesDepense,
  createTypeDepense,
  updateTypeDepense,
  deleteTypeDepense
} from '../controllers/types-depense.controller';

const router = Router();

// ✅ Lecture : tout utilisateur authentifié
router.get('/', authenticateToken, getTypesDepense);

// ✅ Écriture : SUPER_ADMIN uniquement
router.post('/', authenticateToken, authorizeRoles('SUPER_ADMIN'), createTypeDepense);
router.put('/:id', authenticateToken, authorizeRoles('SUPER_ADMIN'), updateTypeDepense);
router.delete('/:id', authenticateToken, authorizeRoles('SUPER_ADMIN'), deleteTypeDepense);

export default router;