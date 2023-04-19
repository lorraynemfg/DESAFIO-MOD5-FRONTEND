import "./style.css";
import MenuEstagio from "../../Components/MenuEstagio";
import FormNomeEmail from "../../Components/FormNomeEmail";
import FormSenha from "../../Components/FormSenha";
import FormSucesso from "../../Components/FormSucesso";
import { useState } from "react";

function Cadastro() {
  const [formulario, setFormulario] = useState(0);

  return (
    <>
      <div className='container-cadastro'>
        <div className='esquerda-menu-cadastro'>
          < MenuEstagio
            estagioFormulario={formulario}
            setFormulario={setFormulario}
          />
        </div>

        <div className="direita-form-cadastro">
          {formulario === 0 && <FormNomeEmail
            setFormulario={setFormulario}
          />}
          {formulario === 1 && <FormSenha
            setFormulario={setFormulario}
          />}
          {formulario === 2 && <FormSucesso
            setFormulario={setFormulario}
          />}
        </div>

      </div>
    </>
  );
}

export default Cadastro;
