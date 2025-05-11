import * as Yup from "yup";

export const schemaCreateTicket = Yup.object().shape({
  protocol_Id: Yup.number()
    .required("O numero de protocolo é obrigatório")
    .min(6, "Mínimo 6 dígitos"),
  gifts_id: Yup.string().required("Item é obrigatório"),
  quantity: Yup.number().required("Quantidade é obrigatório"),
  packageBox: Yup.object({
    size: Yup.string().required("Tamanho é obrigatório"),
    quantity: Yup.number(),
  }).required("Pacote é obrigatório"),
});
