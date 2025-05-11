import * as yup from 'yup';

const addressSchema = yup.object().shape({
  logradouro: yup.string().required('O logradouro é obrigatório'),
  number: yup.string().required('O número é obrigatório'),
  cep: yup
    .number()
    .typeError('O CEP deve ser um número')
    .required('O CEP é obrigatório'),
  city: yup.string().required('A cidade é obrigatória'),
});

const animalSchema = yup.object().shape({
  name: yup.string().required('O nome do animal é obrigatório'),
  age: yup
    .number()
    .typeError('A idade do animal deve ser um número')
    .required('A idade do animal é obrigatória'),
  sex: yup.string().required('O sexo do animal é obrigatório'),
  race: yup.string().required('A raça do animal é obrigatória'),
  product_consumer: yup.string().required('O produto consumido é obrigatório'),
  dietary_restriction: yup
    .string()
    .required('A restrição alimentar é obrigatória'),
});

const tutorSchema = yup.object().shape({
  protocol_Id: yup.string(),
  name: yup.string().required('O nome é obrigatório'),
  cpf: yup.string().required('O cpf é obrigatório'),
  email: yup
    .string()
    .email('O email deve ser válido')
    .required('O email é obrigatório'),
  phone: yup.string().required('O telefone é obrigatório'),
  address: addressSchema.required('O endereço é obrigatório'),
  data_animal: animalSchema.required('Os dados do animal são obrigatórios'),
});

export const validateTutor = async (req, res, next) => {
  try {
    await tutorSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (err) {
    const errors = err.inner.map((e) => ({
      field: e.path,
      message: e.message,
    }));
    res.status(400).json({ errors });
  }
};
