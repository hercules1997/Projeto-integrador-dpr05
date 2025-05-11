import styled from "styled-components";
import { colorsTheme } from "../../Styles/globalStyles";

const Container = styled.div`
  padding: 5rem;
  width: 100%;
  font-size: 1.5rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${colorsTheme.light};
  font-size: 1.4rem;
`;

const Th = styled.th`
  padding: 8px;
  color: #fff;

  background-color: #000;
  text-align: center;
`;
export const Tr = styled.tr`
  background: ${colorsTheme.light};
  box-shadow: 0 0 15px rgb(173, 173, 173);
`;

const Td = styled.td`
  border-collapse: collapse;
  text-align: center;
  padding: 12px;
  margin-top: 10px;
`;

const Quantity = styled.span`
  display: inline-block;
  width: 20%;
  padding: 4px 8px;
  align-items: center;
  justify-content: center;
  color: ${colorsTheme.light};
  background-color: ${(props) =>
    props.value >= 5 ? colorsTheme.success : colorsTheme.warning};
`;

export { Container, Quantity, Table, Td, Th };
