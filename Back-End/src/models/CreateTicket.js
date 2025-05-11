import mongoose from 'mongoose';

//* Esquema para dados pacote
const PackageBoxSchema = new mongoose.Schema({
  size: String,
  quantity: Number,
});

//* Esquema para criar o ticket
const CreateTicketSchema = new mongoose.Schema({
  protocol_Id: {
    type: Number,
    required: true,
  },
  gift_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'StockGift', // Fazendo referência ao modelo de StockGift
    required: true,
  },
  quantity: Number,
  packageBox: PackageBoxSchema,
  tracking_code: String,
  date: { type: Date, default: Date.now },
});

// Criando o modelo de CreateTicket
export default mongoose.model('CreateTicket', CreateTicketSchema);
