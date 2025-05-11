import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../Components/index.js";
import { ErrorMessage } from "../../Components/ErrorMessage";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import { useUser } from "../../Hooks/UserContext.jsx";
import { Logo } from "../../Components/Logo";
import { toast } from "react-toastify";
import {
  ContainerItens,
  All,
  BlockAccess,
  ButtonStyle,
  ContainerBlock,
  ContainerMaster,
  Label,
} from "./styledLogin";
import apiConnection from "../../Services/apiConnection";
import { paths } from "../../constants";
import { schemaLogin } from "./schemaLogin.js";

/*
ESTRUTURA DE LOGIN
*/

export function Login() {
  const { putUserData } = useUser();
  const navigate = useNavigate();
  const [capsLockWarning, setCapsLockWarning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleKeyPress = (e) => {
    const isCapsLockOn = e.getModifierState("CapsLock");
    setCapsLockWarning(isCapsLockOn);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaLogin) });

  const onSubmit = async (clientData) => {
    setIsLoading(true);
    try {
      const { data } = await toast.promise(
        apiConnection.post("/login", {
          email: clientData.email,
          password: clientData.password,
        }),
        {
          pending: "Verificando seus dados...",
          success: "Seja bem-vindo(a)!",
          error: "Dados incorretos. Verifique e tente novamente!",
        }
      );
      putUserData(data);
      setTimeout(() => {
        setIsLoading(false);
        navigate(paths.Deshboard);
      }, 2000);
    } catch (error) {
      console.error("Usuário não existe", error);
      setIsLoading(false);
    }
  };

  if (isLoading) return <Loading message="Entrando, por favor aguarde!..." />;

  return (
    <All>
      <ContainerMaster>
        <Logo />
        <ContainerBlock>
          <ContainerItens>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
              <h2>Sistema de Brindes - SAC</h2>
              <BlockAccess>
                <div>
                  <Label>
                    <EmailIcon />
                  </Label>
                  <input
                    type="email"
                    placeholder="exemplo@adimax.com"
                    {...register("email")}
                    onKeyDown={handleKeyPress}
                  />
                </div>
                {errors.email && (
                  <ErrorMessage>{errors.email?.message}</ErrorMessage>
                )}

                <div>
                  <Label>
                    <PasswordIcon />
                  </Label>
                  <input
                    type="password"
                    placeholder="*******"
                    {...register("password")}
                    onKeyDown={handleKeyPress}
                  />
                </div>
                {capsLockWarning && (
                  <ErrorMessage>Caps Lock está ativo!</ErrorMessage>
                )}
                {errors.password && (
                  <ErrorMessage>{errors.password?.message}</ErrorMessage>
                )}
              </BlockAccess>

              <ButtonStyle>Entrar</ButtonStyle>
            </form>
          </ContainerItens>
        </ContainerBlock>
      </ContainerMaster>
      <span style={{ color: "#000000", marginTop: "25px" }}>
        Copyright © Grupo Projeto Integrador {currentYear} - Soluções de
        desenvolvimento Software. Todos os Direitos Reservados.
      </span>
    </All>
  );
}
