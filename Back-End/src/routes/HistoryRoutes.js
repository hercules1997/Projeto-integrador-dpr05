import express from 'express';
import { createHistory, getHistory } from '../controllers/historyController.js';

export const historyRouter = express.Router();

historyRouter.post('/:id', createHistory);
historyRouter.get('/', getHistory);
