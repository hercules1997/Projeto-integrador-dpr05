import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { paths } from "../Constants/index";
import { Home, ListTicket, Login, NewTicket, Stock } from "../App/Pages";

function AllRoutes() {
  return (
    <Router>
      <Routes>
        <Route path={paths.Login} element={<Login path={paths.Login} />} />
        <Route path={paths.Home} element={<Home path={paths.Home} />} />
        <Route
          path={paths.NewTicket}
          element={<NewTicket path={paths.NewTicket} />}
        />
        <Route
          path={paths.ListTicket}
          element={<ListTicket path={paths.ListTicket} />}
        />
        <Route path={paths.Stock} element={<Stock path={paths.Stock} />} />
      </Routes>
    </Router>
  );
}

export default AllRoutes;
