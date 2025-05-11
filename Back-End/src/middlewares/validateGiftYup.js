import * as yup from 'yup';

const giftSchema = yup.object().shape({
  name: yup.string().required('O nome do brinde é obrigatório'),
  type: yup.string().required('O tipo do brinde é obrigatório'),
  quantity: yup
    .number()
    .typeError('A quantidade do brinde deve ser um número')
    .required('A quantidade do brinde é obrigatória')
    .min(1, 'A quantidade deve ser pelo menos 1'),
  number_nf: yup
    .number()
    .typeError('O número da nota fiscal deve ser um número')
    .required('O número da nota fiscal é obrigatório'),
});

export const validateGift = async (req, res, next) => {
  try {
    await giftSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    const errors = err.inner.map((e) => ({
      field: e.path,
      message: e.message,
    }));
    res.status(400).json({ errors });
  }
};
