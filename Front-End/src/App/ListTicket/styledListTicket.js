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
  font-size: 1.5rem;
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
  background-color: ${colorsTheme.light};
  margin-top: 10px;
`;

export const DetailButton = styled.button`
  padding: 6px 12px;
  /* background-color: ${colorsTheme.info}; */
  color: ${colorsTheme.black};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
export const FinalyButton = styled.button`
  padding: 6px 12px;
  background-color: ${colorsTheme.success};

  color: ${colorsTheme.light};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const Pagination = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 8px;
  justify-content: center;
`;

export const PageButton = styled.button`
  padding: 6px 12px;
  border: none;
  background-color: ${({ active }) => (active ? "#333" : "#ddd")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
  cursor: pointer;
  border-radius: 4px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  padding: 10px;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${colorsTheme.shadow};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background: ${colorsTheme.info};
  padding: 10px;
  max-width: 800px;
  border-radius: 12px;
  box-shadow: 0px 0px 15px ${colorsTheme.black};

  h3 {
    margin-bottom: 15px;
  }

  p {
    margin: 8px 0;
  }

  button {
    margin-top: 10px;
    padding: 8px 16px;
    background-color: rgb(0, 0, 0);
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
`;
