import mongoose from 'mongoose';

const HistorySchema = new mongoose.Schema({
  ticket_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CreateTicket',
    required: true,
  },
  tracking_code: String,
  quantity: Number,
  packageBox: {
    size: String,
    quantity: Number,
  },
  tutor: {
    name: String,
    cpf: String,
    phone: String,
    protocol_Id: Number,
    address: {
      logradouro: String,
      number: String,
      cep: Number,
      city: String,
    },
  },
  gift: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'StockGift', 
  },

  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('History', HistorySchema);
