import * as yup from "yup";

export const schema = yup.object().shape({
  type: yup.string().required("Tipo é obrigatório"),
  number_nf: yup.string().required("Nº NF é obrigatório"),
  name: yup.string().required("Nome do item é obrigatório"),
  quantity: yup
    .number()
    .typeError("Quantidade deve ser um número")
    .positive("Quantidade deve ser maior que 0")
    .required("Quantidade é obrigatória"),
});
