import express from 'express';
import { login } from '../controllers/authController.js';

export const authRouter = express.Router();

authRouter.post('/', login);
