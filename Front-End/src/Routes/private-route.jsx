import React from "react";
import { Navigate } from "react-router-dom";

export function PrivateRoute({ children, redirectTo }) {
  const user = localStorage.getItem("sacAdimax:users");

  return (
    <React.Fragment>
      {user ? children : <Navigate to={redirectTo} />}
    </React.Fragment>
  );
}
