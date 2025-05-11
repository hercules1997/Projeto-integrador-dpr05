import express from 'express';
import { register } from '../controllers/authController.js';
export const registerRouter = express.Router();

registerRouter.post('/', register);
