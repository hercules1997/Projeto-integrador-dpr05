import express from 'express';
import {
  createGift,
  deleteGift,
  getGiftById,
  getGifts,
  updateGift,
} from '../controllers/giftController.js';
export const giftRouter = express.Router();

giftRouter.post('/', createGift);

giftRouter.get('/', getGifts);
giftRouter.get('/:id', getGiftById);

giftRouter.put('/:id', updateGift);

giftRouter.delete('/:id', deleteGift);
