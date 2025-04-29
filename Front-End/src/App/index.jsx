import { Home, ListTicket, NewTicket, Stock, Login } from "./Pages";
import { Container } from "./styledApp";

export const App = () => {
  return (
    <Container>
      <Login />
      <Home />
      <ListTicket />
      <NewTicket />
      <Stock />
    </Container>
  );
};
