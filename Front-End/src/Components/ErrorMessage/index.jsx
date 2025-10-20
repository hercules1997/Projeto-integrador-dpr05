/*
Componente de mensagens de erros
*/

import PropTypes from "prop-types";

import { ErrorMessageStyles } from "./styledErrorMessage";

export function ErrorMessage({ children }) {
  return <ErrorMessageStyles>{children}</ErrorMessageStyles>;
}

ErrorMessage.propTypes = {
  children: PropTypes.string,
};
