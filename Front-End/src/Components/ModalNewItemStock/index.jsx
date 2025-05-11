import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import apiConnection from "../../Services/apiConnection";
import { ErrorMessage } from "../ErrorMessage";
import { schema } from "./schemaNewItemStock";
import {
  Container,
  Button,
  FormBox,
  Input,
  Label,
  Row,
} from "./styledModalNewItemStock";

export const ModalNewItemStock = ({ onItemAdded, onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const response = await toast.promise(apiConnection.post("/gifts", data), {
        pending: "Adicionando item...",
        success: "Item adicionado com sucesso!",
        error: "Erro ao adicionar item. Verifique e tente novamente!",
      });

      reset(); // 
      console.log("Item cadastrado:", response.data);

      if (onItemAdded) onItemAdded();
      if (onClose) onClose(); // fecha o modal
    } catch (error) {
      console.error("Erro:", error.message);
    }
  };

  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <FormBox>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <div style={{ flex: 1 }}>
              <Label>Nº NF</Label>
              <Input type="text" {...register("number_nf")} />
              {errors.number_nf && (
                <ErrorMessage>{errors.number_nf?.message}</ErrorMessage>
              )}
            </div>

            <div style={{ marginLeft: "2rem" }}>
              <Label>Nome do item</Label>
              <Input type="text" {...register("name")} />
              {errors.name && (
                <ErrorMessage>{errors.name?.message}</ErrorMessage>
              )}
            </div>
          </Row>

          <Row>
            <div style={{ flex: 1 }}>
              <Label>Qtd</Label>
              <Input type="number" {...register("quantity")} />
              {errors.quantity && (
                <ErrorMessage>{errors.quantity?.message}</ErrorMessage>
              )}
            </div>

            <div style={{ flex: 1 }}>
              <Label style={{ marginLeft: "5rem" }}>Tipo</Label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <label>
                  <Input type="radio" value="Amostra" {...register("type")} />
                  Amostra
                </label>

                <label style={{ marginLeft: "1rem" }}>
                  <Input type="radio" value="Brinde" {...register("type")} />
                  Brinde
                </label>
              </div>
              {errors.type && (
                <ErrorMessage>{errors.type?.message}</ErrorMessage>
              )}
            </div>
          </Row>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Adicionando..." : "Adicionar item"}
          </Button>
        </form>
      </FormBox>
    </Container>
  );
};
