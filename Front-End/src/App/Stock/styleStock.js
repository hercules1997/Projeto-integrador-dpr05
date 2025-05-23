import styled from "styled-components";
import { colorsTheme } from "../../Styles/globalStyles";

const ContainerMaster = styled.div`
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 34px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 10px;
  }
`;

const InputSeach = styled.input`
  padding: 8px 12px;
  border: none;
  outline: none;
  font-size: 1.5rem;
  width: 37.875rem;
  border-bottom: 1px solid ${colorsTheme.black};
  margin-left: 35px;
  border-radius: 4px;
  box-shadow: 0 0 9px ${colorsTheme.shadow};

  @media (max-width: 768px) {
    width: 90%;
    margin-left: 0;
    margin-top: 10px;
    font-size: 1.2rem;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${colorsTheme.shadow};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Button = styled.button`
  background-color: ${colorsTheme.success};
  color: ${colorsTheme.light};
  padding: 10px 16px;
  border: none;
  margin-right: 40px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${colorsTheme.black};
    color: ${colorsTheme.light};
    transition: all ease-in-out 400ms;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 10px 0;
  }
`;

const ButtonExit = styled.button`
  background-color: ${colorsTheme.black};
  color: ${colorsTheme.light};
  padding: 10px 16px;
  border: none;
  margin-left: 1rem;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: ${colorsTheme.backgrounOpacity};
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 10px 0;
  }
`;

export { Button, ButtonExit, ContainerMaster, InputSeach, Modal, Nav, Wrapper };
