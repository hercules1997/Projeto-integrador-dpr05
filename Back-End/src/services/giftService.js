
import StockGift from '../models/StockGift.js';
import * as yup from 'yup';

const updateGiftSchema = yup.object().shape({
  name: yup.string().optional(),
  type: yup.string().optional(),
  number_nf: yup.number().optional(),
  quantity: yup
    .number()
    .integer('A quantidade deve ser um número inteiro')
    .min(0, 'A quantidade não pode ser negativa')
    .optional(),
});

export async function createGiftService(data) {
  const gift = new StockGift(data);
  return await gift.save();
}

export async function getGiftsService(name) {
  const query = name ? { name: { $regex: new RegExp(name, 'i') } } : {};
  return await StockGift.find(query);
}

export async function getGiftByIdService(id) {
  return await StockGift.findById(id);
}

export async function updateGiftService(id, body) {
  const updateFields = await updateGiftSchema.validate(body, {
    abortEarly: false,
    stripUnknown: true,
  });

  if (updateFields.quantity !== undefined) {
    const existingGift = await StockGift.findById(id);
    if (!existingGift) return null;

    updateFields.quantity = existingGift.quantity + updateFields.quantity;
  }

  return await StockGift.findByIdAndUpdate(id, updateFields, { new: true });
}

export async function deleteGiftService(id) {
  return await StockGift.findByIdAndDelete(id);
}
