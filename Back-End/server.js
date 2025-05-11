import express from 'express';

import connectDB from './src/config/db.js';
import auth from './src/middlewares/authMiddleware.js';
import {
  historyRouter,
  authRouter,
  giftRouter,
  registerRouter,
  ticketRouter,
  tutorRouter,
} from './src/routes/index.js';
import cors from 'cors';
import cron from 'node-cron';
import StockGift from './src/models/StockGift.js';

connectDB();
const app = express();
app.use(express.json());

app.use(cors({ origin: 'https://sacadimax.netlify.app' }));

app.use('/login', authRouter);
app.use('/register', registerRouter);

app.use(auth);

app.use('/tutors', tutorRouter);
app.use('/gifts', giftRouter);
app.use('/tickets', ticketRouter);
app.use('/history', historyRouter);

// Executa a cada 10 minutos (você pode mudar para "0 0 * * *" para rodar 1x por dia)
cron.schedule('*/02 * * * *', async () => {
  try {
    const result = await StockGift.deleteMany({ quantity: 0 });
    if (result.deletedCount > 0) {
      console.log(
        `[CRON] Removidos ${result.deletedCount} brindes com quantidade 0.`,
      );
    }
  } catch (error) {
    console.error(
      '[CRON] Erro ao remover brindes com quantidade 0:',
      error.message,
    );
  }
});

app.listen(3000, () => console.log('✅ Servidor rodando na porta 3000'));
