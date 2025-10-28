import styled from "styled-components";
import { colorsTheme } from "../../Styles/globalStyles";

const medida = {
  maxWidth: 1024,
  minWidth: 768,
};

export const All = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background-color: ${colorsTheme.light};

  footer {
    text-align: center;
  }
`;

export const ContainerMaster = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colorsTheme.background};
  border-top-left-radius: 0px;
  border-top-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 0px;
  box-shadow: 0 0 12px rgba(159, 159, 159, 1);
  width: 60rem;

  @media (max-width: ${medida.minWidth}px) {
    width: 90%;
    flex-direction: column;
  }

  @media (max-width: ${medida.minWidth}px) {
    width: 100%;
    border-radius: 20px;
    box-shadow: none;
  }
`;

export const ContainerBlock = styled.span`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: ${medida.minWidth}px) {
    flex-direction: column;
  }
`;
export const Blockimage = styled.span`
  width: 720px;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: ${medida.minWidth}px) {
    flex-direction: column;
  }
`;

export const ButtonStyle = styled.button`
  background-color: ${colorsTheme.background};
  justify-content: center;
  width: 30%;
  border: none;
  align-items: center;
  text-align: center;
  font-size: 1rem;
  padding: 10px;
  border-top-left-radius: 0px;
  border-top-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 0px;
  cursor: pointer;

  @media (max-width: ${medida.minWidth}px) {
    font-size: 0.9rem;
    padding: 8px;
  }

  @media (max-width: ${medida.maxWidth}px) {
    width: 100%;
  }
`;

export const ContainerItens = styled.main`
  background-color: ${colorsTheme.light};
  border-top-left-radius: 0px;
  border-bottom-right-radius: 0px;
  width: 100%;
  color: ${colorsTheme.black};
  padding: 30px;

  @media (max-width: ${medida.minWidth}px) {
    border-bottom-left-radius: 50px;
    border-radius: 20px;
    padding: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    padding: 10px;
    gap: 2px;

    h2 {
      color: ${colorsTheme.black};
      margin-bottom: 20px;
      font-size: 1.5rem;

      @media (max-width: ${medida.minWidth}px) {
        font-size: 1.2rem;
      }
    }

    footer {
      display: flex;
      width: 100%;
      justify-content: end;
    }

    div {
      display: flex;
      flex-direction: column;
      width: 100%;

      input {
        margin: 5px 0px 10px 0px;
        border: none;
        border-top-left-radius: 0px;
        border-top-right-radius: 12px;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 0px;
        border-bottom: 1px solid gray;
        outline: none;
        padding: 10px;
        line-height: 12px;
        font-size: 1.2rem;
        width: 90%;
        background: transparent;
        color: ${colorsTheme.black};

        &:focus {
          border-bottom: 1px solid ${colorsTheme.background};
        }

        @media (max-width: ${medida.minWidth}px) {
          font-size: 1rem;
          padding: 8px;
        }
      }
    }
  }
`;

export const Label = styled.label`
  text-align: start;
  font-weight: 700;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-left: 10px;
  }
  @media (max-width: ${medida.minWidth}px) {
    font-size: 0.9rem;
  }
`;

export const BlockAccess = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  div {
    flex-direction: column;
    align-items: start;
  }
`;

export const Input = styled.input`
  margin: 15px 0;
  border: solid 0.5px #505050;
  padding: 15px;
  background-color: rgb(158, 158, 158);
  border-radius: 8px;
  outline: none;
  width: 90%;

  &::placeholder {
    color: rgb(30, 30, 30);
    font-style: italic;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &:focus {
    border-bottom: 1px solid ${colorsTheme.background} !important;
  }

  @media (max-width: ${medida.minWidth}px) {
    font-size: 1rem;
    padding: 12px;
  }
`;
