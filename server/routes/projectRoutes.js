import express from 'express';
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  deleteAllProjects
} from '../controllers/projectController.js';
import { requireSignin, isAdmin } from '../controllers/authController.js';

const router = express.Router();

router.get('/', getAllProjects);
router.get('/:id', getProjectById);
router.post('/', requireSignin, createProject);
router.put('/:id', requireSignin, isAdmin, updateProject);
router.delete('/:id', requireSignin, isAdmin, deleteProject);
router.delete('/', requireSignin, isAdmin, deleteAllProjects);

export default router;