import styled from "styled-components";
import { colorsTheme } from "../../Styles/globalStyles";

const Container = styled.div`
  width: 100%;
  display: flex;
  background: ${colorsTheme.info};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContainerLeft = styled.div`
  display: flex;
  position: sticky;
  height: 100vh;
  top: 0;
  width: 15%;

`;

const ContainerRigth = styled.div`
  width: 85%;
  background: ${colorsTheme.info};

  @media (max-width: 1024px) {
    width: 75%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ContainerItems = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 5px;
    padding-bottom: 80px;
  }
`;


export { Container, ContainerItems, ContainerLeft, ContainerRigth };
