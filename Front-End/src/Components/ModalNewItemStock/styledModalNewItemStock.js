import styled from "styled-components";
import { colorsTheme } from "../../Styles/globalStyles";
const Container = styled.div`
  background-color: #212121e5;
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.746);
`;

const FormBox = styled.div`
  background-color: ${colorsTheme.info};
  padding: 2rem;
  border-radius: 8px;
  width: 600px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.746);
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 1.5rem;

  color: #333;
`;

const Input = styled.input`
  width: 90%;
  background-color: ${colorsTheme.button};
  padding: 8px;
  font-size: 1.5rem;

  border: none;
  border-radius: 4px;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #a1fc46;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: #333;
  font-weight: bold;

  &:hover {
    background-color: #beff8d;
  }
`;

export { Button, Container, FormBox, Input, Label, Row };
