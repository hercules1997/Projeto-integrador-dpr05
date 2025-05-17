import styled from "styled-components";
import { colorsTheme } from "../../Styles/globalStyles";

const Container = styled.div`
  background: ${colorsTheme.info};
  padding: 2rem;
  width: 100%;
  border-radius: 8px;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Section = styled.div`
  margin-bottom: 1rem;
  border-top: 1px solid ${colorsTheme.black};
  padding-top: 1rem;
  margin-top: 1rem;
`;

const Div = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  width: 30%;
  margin: 0px 0px 15px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const SeparateButton = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  flex: ${(props) => props.flex || "2"};
  font-size: 1.4rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Input = styled.input`
  background: ${colorsTheme.light};
  padding: 1rem;
  outline: none;
  border: none;
  border-radius: 4px;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem;
  }
`;

const Select = styled.select`
  background: ${colorsTheme.light};
  padding: 1rem;
  border: none;
  border-radius: 4px;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem;
  }
`;

const Wrapper = styled.div`
  background: ${colorsTheme.info};
  width: 100%;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.3125rem 0rem;

  @media (max-width: 768px) {
    padding: 2rem 0.5rem;
  }
`;

const Button = styled.button`
  background: ${colorsTheme.black};
  color: ${colorsTheme.light};
  border: none;
  padding: 0.8rem 1.2rem;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background: ${colorsTheme.backgrounOpacity};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export {
  Button,
  Wrapper,
  Container,
  Input,
  Label,
  Row,
  Section,
  Select,
  Title,
  Div,
  SeparateButton,
};
