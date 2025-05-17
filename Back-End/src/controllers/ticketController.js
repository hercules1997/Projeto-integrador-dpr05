import CreateTicket from '../models/CreateTicket.js';
import DataTutor from '../models/DataTutor.js';
import StockGift from '../models/StockGift.js';

const createTicket = async (req, res) => {
  try {
    const { protocol_Id, gift_id, quantity, packageBox } = req.body;

    // Verificar se o tutor existe
    const tutor = await DataTutor.findOne({ protocol_Id });
    if (!tutor) {
      return res.status(404).json({ message: 'Tutor não encontrado' });
    }

    // Verificar se o brinde existe
    const gift = await StockGift.findById(gift_id);
    if (!gift) {
      return res.status(404).json({ message: 'Brinde não encontrado' });
    }

    // Verificar se há estoque suficiente
    if (gift.quantity < quantity) {
      return res.status(400).json({
        message: `Estoque insuficiente. Disponível: ${gift.quantity} unidades.`,
      });
    }

    // Reduzir o estoque
    gift.quantity -= quantity;
    await gift.save();

    // Remover gift se estoque zerar
    if (gift.quantity <= 0) {
      await StockGift.findByIdAndDelete(gift._id);
    }

    // Criar o novo ticket
    const newTicket = new CreateTicket({
      protocol_Id,
      gift_id,
       quantity,
      packageBox,
      tracking_code: `BRL${Date.now()}`,
    });

    await newTicket.save();

    // Popula o gift no retorno (se quiser tutor também, pode adicionar)
    const populatedTicket = await CreateTicket.aggregate([
      { $match: { _id: newTicket._id } },
      {
        $lookup: {
          from: 'datatutors', // nome da coleção no MongoDB
          localField: 'protocol_Id',
          foreignField: 'protocol_Id',
          as: 'tutor',
        },
      },
      {
        $unwind: '$tutor',
      },
      {
        $lookup: {
          from: 'stockgifts',
          localField: 'gift_id',
          foreignField: '_id',
          as: 'gift',
        },
      },
      {
        $unwind: '$gift',
      },
    ]);

    res.status(201).json({
      message: 'Ticket criado com sucesso e estoque atualizado.',
      ticket: populatedTicket,
    });
  } catch (error) {
    console.error('Erro ao criar ticket:', error.message);
    res.status(500).json({
      message: 'Erro ao criar ticket',
      error: error.message,
    });
  }
};

// Buscar todos os tickets
const getTickets = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const tickets = await CreateTicket.find()
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const formatted = await Promise.all(
      tickets.map(async (ticket) => {
        const tutor = await DataTutor.findOne({
          protocol_Id: ticket.protocol_Id,
        });
        const gift = await StockGift.findById(ticket.gift_id);

        return {
          _id: ticket._id,
          tracking_code: ticket.tracking_code,
           quantity: ticket.quantity,
          packageBox: ticket.packageBox,
          tutor: tutor || null,
          gift: gift || null,
        };
      }),
    );

    const total = await CreateTicket.countDocuments();
    const totalPages = Math.ceil(total / limit);

    res.status(200).json({
      tickets: formatted,
      page: Number(page),
      totalPages,
      total,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Erro ao buscar tickets', error: error.message });
  }
};

// Buscar ticket por ID
const getTicketById = async (req, res) => {
  try {
    const ticket = await CreateTicket.findById(req.params.id);
    if (!ticket)
      return res.status(404).json({ message: 'Ticket não encontrado' });

    const tutor = await DataTutor.findOne({ protocol_Id: ticket.protocol_Id });
    const gift = await StockGift.findById(ticket.gift_id);

    res.status(200).json({
      _id: ticket._id,
      tracking_code: ticket.tracking_code,
          quantity: ticket.quantity,
      packageBox: ticket.packageBox,
      tutor: tutor || null,
      gift: gift || null,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Erro ao buscar ticket', error: error.message });
  }
};

// Atualizar ticket por ID
const updateTicketById = async (req, res) => {
  try {
    const updated = await CreateTicket.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updated)
      return res.status(404).json({ message: 'Ticket não encontrado' });

    const tutor = await DataTutor.findOne({ protocol_Id: updated.protocol_Id });
    const gift = await StockGift.findById(updated.gift_id);

    res.status(200).json({
      _id: updated._id,
      tracking_code: updated.tracking_code,
      quantity: updated.quantity,
      packageBox: updated.packageBox,
      tutor: tutor || null,
      gift: gift || null,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Erro ao atualizar ticket', error: error.message });
  }
};

// Deletar ticket por ID
const deleteTicketById = async (req, res) => {
  try {
    const deleted = await CreateTicket.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: 'Ticket não encontrado' });

    res.status(200).json({ message: 'Ticket deletado com sucesso' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Erro ao deletar ticket', error: error.message });
  }
};

export {
  createTicket,
  getTickets,
  getTicketById,
  updateTicketById,
  deleteTicketById,
};
