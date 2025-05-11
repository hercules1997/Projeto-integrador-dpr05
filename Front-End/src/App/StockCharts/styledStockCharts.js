// src/components/EstoqueGraficos.styles.ts
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  height: 100vh; /* altura da tela inteira */
  padding: 10px;
  box-sizing: border-box;
`;

export const GraficoContainer = styled.div`
  height: 70%;
  background:rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
