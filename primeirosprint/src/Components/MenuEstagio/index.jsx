
import React from "react";
import "./style.css";
import bolaVerdeMenu from "../../assets/bola-menu-verde.svg";
import bolaMenu from "../../assets/bola-menu.svg";
import linhaMenu from "../../assets/linha-menu.svg";
import { useState } from "react";

function MenuEstagio({estagioFormulario}){  
console.log(estagioFormulario)
  return (
    <div>
          <div className="estagio">
            <div className="icone">
              <img src={bolaVerdeMenu} alt="circulo-verde" />
              <img src={linhaMenu} alt="linha-verde" />
             
            </div>
    
            <div className="informacao">
            <span className="titulo-menu"> Cadastre-se</span>
              <p className="mensagem-menu"> Por favor, escreva seu nome e e-mail</p>
            </div>
          </div>


          <div className="estagio">

            <div className="icone">
              <img className="icone" src={estagioFormulario > 0 ? bolaVerdeMenu : bolaMenu} alt="circulo-verde" />
              <img src={linhaMenu} alt="linha-verde" />
            </div>

            <div className="informacao">
              <span className="titulo-menu"> Escolha uma senha</span>
              <p className="mensagem-menu"> Escolha uma senha segura</p>
            </div>
          </div>

          <div className="estagio">
          <div className="icone">
          <img className="icone" src={estagioFormulario > 1 ? bolaVerdeMenu : bolaMenu} alt="circulo-verde" />
    
          </div>

            <div className="informacao">
              <span className="titulo-menu"> Cadastro realizado com sucesso</span>
              <p className="mensagem-menu"> E-mail e senha cadastrados com sucesso</p>
            </div>
          </div>
    </div>
  );
}
export default MenuEstagio;