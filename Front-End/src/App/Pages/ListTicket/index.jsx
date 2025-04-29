import { useNavigate } from "react-router-dom";
import { Container } from "./styledListTicket";
import { paths } from "../../../Constants";
import { Buttom } from "../../../Components/Buttom";

export const ListTicket = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <h1>ListTicket</h1>
        <Buttom onClick={() => navigate(paths.Home)}>Voltar para Home</Buttom>
      </Container>
    </>
  );
};
