import * as yup from 'yup';

// Schema de validação com Yup
const ticketSchema = yup.object().shape({
  protocol_Id: yup
    .string()
    .required('O protocolo é obrigatório')
    .matches(/^\d{1,6}$/, 'ID do protocolo inválido'),
  gift_id: yup
    .string()
    .required('O ID do brinde é obrigatório')
    .matches(/^[a-fA-F0-9]{24}$/, 'ID do brinde inválido'),
  quantity: yup
    .number()
    .typeError('A quantidade deve ser um número')
    .required('A quantidade é obrigatória')
    .min(1, 'A quantidade deve ser no mínimo 1'),
  packageBox: yup.object().shape({
    size: yup.string().required('O tamanho é obrigatório'),
    quantity: yup
      .number()
     
      .min(1, 'A quantidade deve ser no mínimo 1'),
  }),
});

// Middleware para validar a requisição
export const validateTicket = async (req, res, next) => {
  try {
    await ticketSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    const errors = err.inner.map((e) => ({
      field: e.path,
      message: e.message,
    }));
    res.status(400).json({ errors });
  }
};
