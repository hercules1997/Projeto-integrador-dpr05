import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "../App/AppNav/index";
import { Login } from "../App/Login";
import { PrivateRoute } from "./private-route";
import { paths } from "../constants";

function AllRoutes() {
  return (
    <Router>
      <Routes>
        <Route path={paths.Login} element={<Login path={paths.Login} />} />

        <Route
          path={paths.Deshboard}
          element={
            <PrivateRoute redirectTo={paths.Login}>
              <App path={paths.Deshboard} />
            </PrivateRoute>
          }
        />

        <Route
          path={paths.ListTicket}
          element={
            <PrivateRoute redirectTo={paths.Login}>
              <App path={paths.ListTicket} />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.NewItem}
          element={
            <PrivateRoute redirectTo={paths.Login}>
              <App path={paths.NewItem} />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.Stock}
          element={
            <PrivateRoute redirectTo={paths.Login}>
              <App path={paths.Stock} />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.History}
          element={
            <PrivateRoute redirectTo={paths.Login}>
              <App path={paths.History} />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}
export default AllRoutes;
