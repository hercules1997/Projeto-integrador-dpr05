import express from 'express';
import {
  createTicket,
  getTickets,
  getTicketById,
  deleteTicketById,
  updateTicketById,
} from '../controllers/ticketController.js';
import { validateTicket } from '../middlewares/validateTicketYup.js';

export const ticketRouter = express.Router();

// Rota para criar ticket com validação usando Yup
ticketRouter.post('/', validateTicket, createTicket);

ticketRouter.get('/', getTickets);
ticketRouter.get('/:id', getTicketById);

ticketRouter.put('/:id', updateTicketById);

ticketRouter.delete('/:id', deleteTicketById);
