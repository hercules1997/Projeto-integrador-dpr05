import styled from "styled-components";
import { colorsTheme } from "../../Styles/globalStyles";

export const PaginationComponent = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 8px;
  justify-content: center;
`;

export const PageButton = styled.button`
  padding: 6px 12px;
  border: none;
  background-color: ${({ active }) =>
    active ? colorsTheme.black : colorsTheme.info};
  color: ${({ active }) => (active ? colorsTheme.light : colorsTheme.black)};
  cursor: pointer;
  border-radius: 50%;
`;
