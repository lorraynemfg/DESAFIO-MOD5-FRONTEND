import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Clientes from "./Pages/Clientes";
// import Resumo from "./Pages/Resumo";
// import Login from "./Pages/Login/index";
// import Cadastro from "./Pages/Cadastro/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Clientes />
  </React.StrictMode>
);
