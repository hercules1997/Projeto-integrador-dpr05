/* eslint-disable no-undef */
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    console.error('❌ A variável de ambiente MONGO_URI não está definida.');
    process.exit(1);
  }

  try {
    // Conexão com o MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      connectTimeoutMS: 10000, // Timeout de 10 segundos
    });

    console.log('✅ Conectado ao MongoDB com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar ao MongoDB:', error.message || error);
    process.exit(1); // Encerra o processo com erro
  }
};

export default connectDB;
