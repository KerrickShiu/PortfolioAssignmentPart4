import express from 'express';
import {
  getAllQualifications,
  getQualificationById,
  createQualification,
  updateQualification,
  deleteQualification,
  deleteAllQualifications
} from '../controllers/educationController.js';

const router = express.Router();

router.get('/', getAllQualifications);
router.get('/:id', getQualificationById);
router.post('/', createQualification);
router.put('/:id', updateQualification);
router.delete('/:id', deleteQualification);
router.delete('/', deleteAllQualifications);

export default router;