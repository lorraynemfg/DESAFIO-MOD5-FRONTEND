import { Routes, Route } from "react-router-dom";
import Clientes from "./Pages/Clientes";
import Resumo from "./Pages/Resumo";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Resumo />} />
      <Route path="/resumo" element={<Resumo />} />
      <Route path="/clientes" element={<Clientes />} />
    </Routes>
  );
}

export default Rotas;
