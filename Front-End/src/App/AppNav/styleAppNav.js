import styled from "styled-components";
import { colorsTheme } from "../../Styles/globalStyles";

const Container = styled.div`
  width: 100%;
  display: flex;
  background: ${colorsTheme.info};
`;
const ContainerLeft = styled.div`
  display: flex;
  position: sticky;
  height: 100vh;
  top: 0;
  width: 20%;
`;
const ContainerRigth = styled.div`
  width: 80%;
`;

const ContainerItems = styled.div``;

export { Container, ContainerItems, ContainerLeft, ContainerRigth };
