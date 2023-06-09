
import React from "react";
import "./style.css";
import bolaVerdeMenu from "../../assets/bola-menu-verde.svg";
import bolaMenu from "../../assets/bola-menu.svg";
import bolaCheck from "../../assets/bola-menu-check.svg"
import linhaMenu from "../../assets/linha-menu.svg";

function MenuEstagio({ estagioFormulario }) {
  return (
    <div>
      <div className="estagio">
        <div className="icone">
          <img src={estagioFormulario > 0 ? bolaCheck : bolaVerdeMenu} alt="circulo-verde" />
          <img src={linhaMenu} alt="linha-verde" />
        </div>

        <div className="informacao">
          <span className="titulo-menu"> Cadastre-se</span>
          <p className="mensagem-menu"> Por favor, escreva seu nome e e-mail</p>
        </div>
      </div>

      <div className="estagio">

        <div className="icone">
          <img className="icone" src={estagioFormulario > 1 ? bolaCheck : estagioFormulario === 1 ? bolaVerdeMenu : bolaMenu} alt="circulo-verde" />
          <img src={linhaMenu} alt="linha-verde" />
        </div>

        <div className="informacao">
          <span className="titulo-menu"> Escolha uma senha</span>
          <p className="mensagem-menu"> Escolha uma senha segura</p>
        </div>
      </div>

      <div className="estagio">
        <div className="icone">
          <img className="icone" src={estagioFormulario > 1 ? bolaCheck : bolaMenu} alt="circulo-verde" />

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