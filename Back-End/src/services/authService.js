
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// eslint-disable-next-line no-undef
const JWT_SECRET = process.env.JWT_SECRET || 'segredo_dev';

export async function registerService(email, password) {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error('Email já registrado');

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ email, password: hashedPassword });
  return await newUser.save();
}

export async function loginService(email, password) {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Usuário não encontrado');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Senha incorreta');

  const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1d' });
  return { token, user: { email: user.email } };
}
