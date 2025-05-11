import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer, Flip } from "react-toastify";
import Routes from "./Routes/routes.jsx";
import AppProvider from "./Hooks/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        transition={Flip}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Routes />
    </AppProvider>
  </React.StrictMode>
);
