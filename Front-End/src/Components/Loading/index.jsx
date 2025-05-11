import React from "react";
import { Message, Overlay, Spinner } from "./styledLoading";

export const Loading = ({ message = "Carregando..." }) => {
  return (
    <Overlay>
      <Spinner />
      <Message>{message}</Message>
    </Overlay>
  );
};


