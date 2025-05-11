import * as yup from 'yup';

const tutorValidationSchema = yup.object({
  protocol_Id: yup
    .number()
    .positive('O ID do protocolo deve ser um número positivo')
    .integer('O ID do protocolo deve ser um número inteiro'),
  name: yup.string().required('O nome é obrigatório'),
  cpf: yup.string().required('O cpf é obrigatório'),
  email: yup
    .string()
    .email('O e-mail deve ser válido')
    .required('O e-mail é obrigatório'),
  phone: yup.string().required('O telefone é obrigatório'),
  address: yup.object({
    logradouro: yup.string().required('O logradouro é obrigatório'),
    number: yup.string().required('O número é obrigatório'),
    cep: yup.number().required('O CEP é obrigatório'),
    city: yup.string().required('A cidade é obrigatória'),
  }),
  data_animal: yup.object({
    name: yup.string().required('O nome do animal é obrigatório'),
    age: yup.number().required('A idade do animal é obrigatória'),
    sex: yup.string().required('O sexo do animal é obrigatório'),
    race: yup.string().required('A raça do animal é obrigatória'),
    product_consumer: yup
      .string()
      .required('O consumidor de produto é obrigatório'),
    dietary_restriction: yup
      .string()
      .required('A restrição alimentar é obrigatória'),
  }),
});

export default tutorValidationSchema;
