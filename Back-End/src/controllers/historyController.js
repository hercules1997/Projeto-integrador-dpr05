import History from '../models/History.js';
import CreateTicket from '../models/CreateTicket.js';
import DataTutor from '../models/DataTutor.js';
import StockGift from '../models/StockGift.js';

// Enviar ticket para histórico
const createHistory = async (req, res) => {
  try {
    const ticket = await CreateTicket.findById(req.params.id);

    if (!ticket)
      return res.status(404).json({ message: 'Ticket não encontrado' });

    const tutor = await DataTutor.findOne({ protocol_Id: ticket.protocol_Id });
    const gift = await StockGift.findById(ticket.gift_id);

    if (!gift || !tutor) {
      return res
        .status(404)
        .json({ message: 'Dados incompletos para histórico' });
    }

    const history = new History({
      ticket_id: ticket._id,
      tracking_code: ticket.tracking_code,
      packageBox: ticket.packageBox,
      tutor: tutor.toObject(), // conversão essencial
      gift: gift._id,
    });

    await history.save();
    res.status(201).json({ message: 'Ticket salvo no histórico', history });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Erro ao salvar no histórico', error: error.message });
  }
};

// Listar históricos
const getHistory = async (req, res) => {
  try {
    const history = await History.find()
      .populate('gift') 
      .sort({ createdAt: -1 });

    res.status(200).json(history);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Erro ao buscar históricos', error: error.message });
  }
};

export { createHistory, getHistory };
