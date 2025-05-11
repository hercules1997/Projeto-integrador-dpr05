import * as Yup from "yup";

export const schemaLogin = Yup.object().shape({
  email: Yup.string().required("E-maail é obrigatório"),
  password: Yup.string()
    .required("Senha é obrigatória")
    .min(6, "Senha deve ter no mínimo 6 dígitos"),
});
