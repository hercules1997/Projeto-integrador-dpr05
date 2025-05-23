/*
Componente de mensagens de erros
*/

import PropTypes from "prop-types";
import React from "react";

import { ErrorMessageStyles } from "./styledErrorMessage";

export function ErrorMessage({ children }) {
  return <ErrorMessageStyles>{children}</ErrorMessageStyles>;
}

ErrorMessage.propTypes = {
  children: PropTypes.string,
};
