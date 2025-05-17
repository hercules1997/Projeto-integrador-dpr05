// src/components/EstoqueGraficos.styles.ts
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  height: 100vh;
  padding: 10px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr; /* apenas uma coluna em tablets e celulares */
    height: auto; /* altura automática para se ajustar ao conteúdo */
  }
`;

export const GraficoContainer = styled.div`
  height: 70%;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 15px;
    height: auto; /* altura automática em telas pequenas */
  }
`;
