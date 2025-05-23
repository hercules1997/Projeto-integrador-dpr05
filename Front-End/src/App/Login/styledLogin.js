import styled from "styled-components";
import { colorsTheme } from "../../Styles/globalStyles";

export const All = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background-color: ${colorsTheme.light};
  padding: 20px;
`;

export const ContainerMaster = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colorsTheme.background};
  border-top-left-radius: 0px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 0px;
  box-shadow: 0 0 19px rgb(111, 111, 111);
  width: 400px;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 20px;
    box-shadow: none;
  }
`;

export const ContainerBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ButtonStyle = styled.button`
  background-color: ${colorsTheme.background};
  justify-content: center;
  width: 100%;
  border: none;
  align-items: center;
  text-align: center;
  font-size: 1rem;
  padding: 10px;
  border-top-left-radius: 0px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 0px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 8px;
  }
`;

export const ContainerItens = styled.div`
  background-color: ${colorsTheme.light};
  border-top-left-radius: 0px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 0px;
  width: 100%;
  color: ${colorsTheme.black};
  padding: 30px;

  @media (max-width: 768px) {
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

      @media (max-width: 768px) {
        font-size: 1.2rem;
      }
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

        @media (max-width: 768px) {
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

  @media (max-width: 768px) {
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

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 12px;
  }
`;
