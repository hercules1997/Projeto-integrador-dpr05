import mongoose from 'mongoose';

const StockGiftSchema = new mongoose.Schema({
  name: String,
  type: String,
  quantity: Number,
  number_nf: Number,
});

export default mongoose.model('StockGift', StockGiftSchema);
