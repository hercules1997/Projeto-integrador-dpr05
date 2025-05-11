// src/middlewares/authMiddleware.js
import jwt from 'jsonwebtoken';

// eslint-disable-next-line no-undef
const JWT_SECRET = process.env.JWT_SECRET || 'segredo_dev';

const auth = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Token não fornecido' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token inválido' });

    req.user = user;
    next();
  });
};

export default auth;
