import React from "react";
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Cadastro from "./Pages/Cadastro";
import Login from "./Pages/Login";
import Resumo from "./Pages/Resumo";

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/resumo" element={<Resumo />} />
        </Routes>
    )
}
export default MainRoutes