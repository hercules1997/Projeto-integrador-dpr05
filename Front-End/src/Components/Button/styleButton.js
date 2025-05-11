import styled from "styled-components";
import { colorsTheme } from "../../Styles/globalStyles";

const ComponentButton = styled.button`

  font-size: 1.2rem;
  font-weight: 600;

  outline: none;
  border: none;
  border-radius: 6px;

  background-color: ${colorsTheme.info};
  width: 10.625rem;
  height: 10.625rem;
  cursor: pointer;
  border: none;

  cursor: pointer;
  box-shadow: 0px 2px 10px ${colorsTheme.hover};

  &:hover {
    background-color: ${colorsTheme.hover};
  }

  &:active {
    opacity: 0.6;
  }
`;
export { ComponentButton };
