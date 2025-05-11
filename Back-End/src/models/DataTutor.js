import mongoose from 'mongoose';

//* Esquema para endereço
const AddressSchema = new mongoose.Schema({
  logradouro: String,
  number: String,
  cep: Number,
  city: String,
});

//* Esquema para animal
const DataAnimalSchema = new mongoose.Schema({
  name: String,
  age: Number,
  sex: String,
  race: String,
  product_consumer: String,
  dietary_restriction: String,
});

//* Esquema para tutor
const DataTutorSchema = new mongoose.Schema({
  protocol_Id: {
    type: Number,
    unique: true,
  },
  name: String,
  cpf: String,
  email: String,
  phone: String,
  date: { type: Date, default: Date.now },
  address: AddressSchema,
  data_animal: DataAnimalSchema,
});

//* Middleware para gerar protocol_Id automaticamente
DataTutorSchema.pre('save', async function (next) {
  if (!this.isNew || this.protocol_Id) return next(); // Só gera se for novo e ainda não tiver protocol_Id

  try {
    const last = await this.constructor
      .findOne()
      .sort({ protocol_Id: -1 })
      .lean();
    this.protocol_Id = last?.protocol_Id ? last.protocol_Id + 1 : 100000;
    next();
  } catch (err) {
    next(err);
  }
});

export default mongoose.model('DataTutor', DataTutorSchema);
