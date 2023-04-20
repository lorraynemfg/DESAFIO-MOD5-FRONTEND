import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Clientes from "./Pages/Clientes";
import Resumo from "./Pages/Resumo";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import { getItem } from "./utils/storage";

function Rotas() {
  function ProtectedRoute({ redirectTo }) {
    const isAuthenticated = getItem('token');

    return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />

      <Route element={<ProtectedRoute redirectTo='/' />} >
        <Route path="/Resumo" element={<Resumo />} />
        <Route path="/Clientes" element={<Clientes />} />
      </Route>

    </Routes>
  );
}

export default Rotas;
