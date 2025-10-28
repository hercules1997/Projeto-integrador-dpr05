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
  Blockimage,
} from "./styledLogin";
import apiConnection from "../../Services/apiConnection";
import { paths } from "../../constants/paths.js";
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
        <Blockimage>
          <Logo />
        </Blockimage>

        <ContainerBlock>
          <ContainerItens>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
              <h2>Sistema de Brindes - SAC</h2>
              <BlockAccess>
                <div>
                  <Label htmlFor="email">
                    <EmailIcon aria-hidden="true" />
                    <span className="sr-only">E-mail</span>
                  </Label>
                  <input
                    id="email"
                    type="email"
                    placeholder="exemplo@adimax.com"
                    {...register("email")}
                    onKeyDown={handleKeyPress}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "erro-email" : undefined}
                  />
                  {errors.email && (
                    <ErrorMessage id="erro-email" role="alert">
                      {errors.email.message}
                    </ErrorMessage>
                  )}
                </div>

                <div>
                  <Label htmlFor="password">
                    <PasswordIcon aria-hidden="true" />
                    <span className="sr-only">Senha</span>
                  </Label>
                  <input
                    id="password"
                    type="password"
                    placeholder="*******"
                    {...register("password")}
                    onKeyDown={handleKeyPress}
                    aria-required="true"
                    aria-invalid={!!errors.password}
                    aria-describedby={
                      capsLockWarning
                        ? "capslock-warning"
                        : errors.password
                        ? "erro-senha"
                        : undefined
                    }
                  />
                  {capsLockWarning && (
                    <ErrorMessage id="capslock-warning" role="alert">
                      Caps Lock está ativo!
                    </ErrorMessage>
                  )}
                  {errors.password && (
                    <ErrorMessage id="erro-senha" role="alert">
                      {errors.password.message}
                    </ErrorMessage>
                  )}
                </div>
              </BlockAccess>
              <footer>
                <ButtonStyle>Entrar</ButtonStyle>
              </footer>
            </form>
          </ContainerItens>
        </ContainerBlock>
      </ContainerMaster>
      <footer style={{ color: "#000000", marginTop: "25px" }}>
        Copyright © Grupo Projeto Integrador {currentYear} - Soluções de
        desenvolvimento Software. Todos os Direitos Reservados.
      </footer>
    </All>
  );
}
