import styled from "styled-components";

import { colorsTheme } from "../../Styles/globalStyles";

export const All = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background-color: ${colorsTheme.light};
`;
export const ContainerMaster = styled.div`
  display: flex;

  border-top-left-radius: 0px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 0px;
  background-color: ${colorsTheme.background};
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 19px rgb(111, 111, 111);

  width: 400px;

  flex-direction: column;
`;

export const ContainerBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ButtonStyle = styled.button`
  background-color: ${colorsTheme.background};
  justify-content: center;
  width: 100%;
  border: none;
  align-items: center;
  text-align: center;
  font-size: 1rem;
  padding: 10px 10px;
  border-top-left-radius: 0px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 0px;
  cursor: pointer;
`;

export const ContainerItens = styled.div`
  background-color: ${colorsTheme.light};
  border-top-left-radius: 0px;

  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 0px;
  width: 100%;
  color: ${colorsTheme.black};
  padding: 30px;

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
    }

    div {
      display: flex;

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
        font-size: 1.5rem;
        width: 90%;
        background: transparent;
        color: ${colorsTheme.black};
        &:focus {
          border-bottom: 1px solid ${colorsTheme.background};
        }
      }
    }
  }
`;
export const Label = styled.label`
  text-align: start;
  font-weight: 700;
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
  margin: 15px;
  border: solid 0.5px #505050;
  padding: 50px;
  background-color: rgb(158, 158, 158);
  border-radius: 8px;
  outline: none;
  margin-bottom: 10px;
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
  width: 90%;
`;
