
 import { registerService, loginService } from '../services/authService.js';

 export const register = async (req, res) => {
   const { email, password } = req.body;
   try {
     const user = await registerService(email, password);
     res
       .status(201)
       .json({
         message: 'Usuário criado com sucesso',
         user: { email: user.email },
       });
   } catch (error) {
     res.status(400).json({ message: error.message });
   }
 };

 export const login = async (req, res) => {
   const { email, password } = req.body;
   try {
     const result = await loginService(email, password);
     res.status(200).json(result);
   } catch (error) {
     res.status(401).json({ message: error.message });
   }
 };
