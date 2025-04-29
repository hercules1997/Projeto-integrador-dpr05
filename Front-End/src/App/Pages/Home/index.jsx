import { Container } from "./styleHome";
import { Buttom } from "../../../Components/Buttom";
import { useNavigate } from "react-router-dom";
import { paths } from "../../../Constants/index";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <h1>Home</h1>
        <Buttom onClick={() => navigate(paths.ListTicket)}>
          Ir para ListTicket
        </Buttom>
      </Container>
    </>
  );
};
