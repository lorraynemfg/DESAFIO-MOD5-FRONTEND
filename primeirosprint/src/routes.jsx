import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Clientes from "./Pages/Clientes";
import Resumo from "./Pages/Resumo";

function Rotas() {
  // function ProtectedRoute({ redirectTo }) {
  //   const isAuthenticated = true;

  //   return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
  // }

  return (
    <Routes>
      <Route path="/resumo" element={<Resumo />} />
      <Route path="/clientes" element={<Clientes />} />
    </Routes>
  );
}

export default Rotas;
