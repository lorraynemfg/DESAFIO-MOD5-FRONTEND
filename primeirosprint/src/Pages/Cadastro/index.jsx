import "./style.css";
import MenuEstagio from "../../Components/MenuEstagio";
import FormNomeEmail from "../../Components/FormNomeEmail";
import FormSenha from "../../Components/FormSenha";
import FormSucesso from "../../Components/FormSucesso";

import { FormsCadastro } from "../../hooks/formsCadastro";


function Cadastro() {

  const formComponentes = [<FormNomeEmail />, <FormSenha />, <FormSucesso />];

  const {estagioAtual, formularioAtual, mudarEstagio} = FormsCadastro(formComponentes)

  return (
<>
        <div className='container-cadastro'> 
            <div className='esquerda-menu-cadastro'>   
            < MenuEstagio 
            estagioAtual={estagioAtual}/>
            </div>
            <div className="direita-form-cadastro">
            {formularioAtual}
            </div>
      
      </div>
    </>
  );
}

export default Cadastro;
