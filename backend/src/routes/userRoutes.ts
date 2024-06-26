// userRoutes.ts

import { Router } from 'express';
import { UserController } from '../controllers/userController';

const router = Router();
const userController = new UserController();

router.get('/api/users', userController.searchInCSV);

export default router;
