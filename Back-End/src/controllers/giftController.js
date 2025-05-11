import StockGift from '../models/StockGift.js';
import * as yup from 'yup';
// Criar novo brinde
const createGift = async (req, res) => {
  try {
    const gift = new StockGift(req.body);
    await gift.save();
    res.status(201).json(gift);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar brinde', error });
  }
};

// Buscar brindes com filtro por nome
const getGifts = async (req, res) => {
  try {
    const { name } = req.query;
    const query = name ? { name: { $regex: new RegExp(name, 'i') } } : {};

    const gifts = await StockGift.find(query);

    if (gifts.length === 0) {
      return res.status(404).json({ message: 'Nenhum brinde encontrado' });
    }

    res.status(200).json(gifts);
  } catch (error) {
    console.error('Erro ao buscar brindes:', error.message);
    res
      .status(500)
      .json({ message: 'Erro ao buscar brindes', error: error.message });
  }
};

// Buscar brinde por ID
const getGiftById = async (req, res) => {
  try {
    const { id } = req.params;
    const gift = await StockGift.findById(id);

    if (!gift) {
      return res.status(404).json({ message: 'Brinde não encontrado' });
    }

    res.status(200).json(gift);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar brinde', error: error.message });
  }
};


// Schema de validação
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

const updateGift = async (req, res) => {
  try {
    const { id } = req.params;

    const updateFields = await updateGiftSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (updateFields.quantity !== undefined) {
      const existingGift = await StockGift.findById(id);
      if (!existingGift) {
        return res.status(404).json({ message: 'Brinde não encontrado' });
      }

      updateFields.quantity = existingGift.quantity + updateFields.quantity;
    }

    const updatedGift = await StockGift.findByIdAndUpdate(id, updateFields, {
      new: true,
    });

    if (!updatedGift) {
      return res.status(404).json({ message: 'Brinde não encontrado' });
    }

    // 🔥 Se a quantidade final for 0, remove o brinde automaticamente
    if (updatedGift.quantity === 0) {
      await StockGift.findByIdAndDelete(id);
      return res
        .status(200)
        .json({
          message: 'Brinde removido automaticamente por ter quantidade 0.',
        });
    }

    res.status(200).json(updatedGift);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        message: 'Erro de validação',
        errors: error.errors,
      });
    }

    res.status(500).json({ message: 'Erro ao atualizar brinde', error });
  }
};
// Deletar brinde por ID
const deleteGift = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedGift = await StockGift.findByIdAndDelete(id);

    if (!deletedGift) {
      return res
        .status(404)
        .json({ message: 'Brinde não encontrado para exclusão' });
    }

    res.status(200).json({ message: 'Brinde removido com sucesso' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Erro ao deletar brinde', error: error.message });
  }
};

export { createGift, getGifts, updateGift, deleteGift, getGiftById };
