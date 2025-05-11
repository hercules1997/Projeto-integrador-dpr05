import styled from "styled-components";
import { colorsTheme } from "../../Styles/globalStyles";

export const Wrapper = styled.div`
  width: 100%;
  display: flexbox;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;
export const Container = styled.div`
  padding: 60px;
`;

export const Navbar = styled.div`
  width: 40%;
  justify-content: center;
  align-items: center;
  padding-left: 60px;
`;

export const Table = styled.table`
  width: 100%;

  border-collapse: collapse;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.21);
`;
export const SearchInput = styled.input`
  padding: 8px 12px;
  border: none;
  outline: none;
  margin-top: 30px;
  border-bottom: 1px solid ${colorsTheme.black};
  width: 100%;

  border-radius: 4px;
  box-shadow: 0 0 9px rgba(0, 0, 0, 0.45);
`;

export const Tr = styled.tr`
  background: ${colorsTheme.light};

  box-shadow: 0 0 15px rgb(173, 173, 173);
`;

export const Th = styled.th`
  text-align: left;
  padding: 12px;
  background: ${colorsTheme.black};
  color: ${colorsTheme.light};

  font-weight: 600;
`;

export const Td = styled.td`
  padding: 12px;
  margin-top: 10px;
`;

export const Pagination = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 8px;
  justify-content: center;
`;





