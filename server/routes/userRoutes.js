import express from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  deleteAllUsers
} from '../controllers/userController.js';

import { requireSignin } from '../middleware/signin.js';

const router = express.Router();

router.get('/', requireSignin, getAllUsers);
router.get('/:id', requireSignin, getUserById);
router.put('/:id', requireSignin, updateUser);
router.delete('/:id', requireSignin, deleteUser);
router.delete('/', requireSignin, deleteAllUsers);
router.post('/', createUser);

export default router;