import styled, { keyframes } from "styled-components";
import { colorsTheme } from "../../Styles/globalStyles";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colorsTheme.backgrounOpacity};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  flex-direction: column;
`;

const Spinner = styled.div`
  border: 6px solid ${colorsTheme.light};
  border-top: 6px solid ${colorsTheme.background};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 50px;
`;

const Message = styled.div`
  font-size: 2rem;
  color: ${colorsTheme.light};
`;

export { Message, Overlay, Spinner };
