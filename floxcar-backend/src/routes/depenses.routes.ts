// src/routes/depenses.routes.ts
import { Router } from 'express';
import multer from 'multer';
import { authenticateToken } from '../middleware/auth.middleware';
import {
  soumettreDepense,
  validerDepense,
  getDepensesAPourvoir,
  getDepensesByUser,
  getDepenseById,
  exporterDepensesExcel,
  getMesValidations, // ✅ Ajouté
} from '../controllers/depenses.controller';

const router = Router();

const uploadExcel = multer({
  storage: multer.memoryStorage(),
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
      file.mimetype === 'application/vnd.ms-excel'
    ) {
      cb(null, true);
    } else {
      // ✅ Correction : passer `null` comme première valeur, pas une erreur
      cb(null, false);
    }
  },
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

router.post('/', authenticateToken, soumettreDepense);
router.get('/mes-depenses', authenticateToken, getDepensesByUser);
router.get('/a-pourvoir', authenticateToken, getDepensesAPourvoir);
router.patch('/:id/validation', authenticateToken, validerDepense);
router.get('/:id', authenticateToken, getDepenseById);
router.get('/export-excel', authenticateToken, exporterDepensesExcel);
router.get('/mes-validations', authenticateToken, getMesValidations); // ✅ Ajouté

export default router;