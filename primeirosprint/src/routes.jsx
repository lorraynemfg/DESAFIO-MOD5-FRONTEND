import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Clientes from "./Pages/Clientes";
import Resumo from "./Pages/Resumo";
import Login from "./Pages/Login";

function Rotas() {
  // function ProtectedRoute({ redirectTo }) {
  //   const isAuthenticated = true;

  //   return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
  // }

  return (
    <Routes>
      <Route path="/resumo" element={<Resumo />} />
      <Route path="/clientes" element={<Clientes />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Rotas;
