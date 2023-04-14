import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Login from './Pages/Login/index'
import Cadastro from './Pages/Cadastro';
import Senha from './Pages/Senha';
import CadastroSucesso from './Pages/CadastroSucesso';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Senha />
  </React.StrictMode>
);



