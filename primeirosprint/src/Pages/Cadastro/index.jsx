import "./style.css";
import MenuEstagio from "../../Components/MenuEstagio";
import FormNomeEmail from "../../Components/FormNomeEmail";
import FormSenha from "../../Components/FormSenha";
import FormSucesso from "../../Components/FormSucesso";
import { useState } from "react";
import UsarContexto from '../../context/UsarContext'

function Cadastro() {
    const [formulario, setFormulario] = useState(0);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [formSenha, setFormSenha] = useState({ senha: '', repitaSenha: '' });
    
    const valorProvider = { nome, setNome, email, setEmail };
 return (
<>
        <div className='container-cadastro'> 
            <div className='esquerda-menu-cadastro'>   
            < MenuEstagio 
            estagioFormulario={formulario}
            />
            </div>

            <div className="direita-form-cadastro">
            <UsarContexto.Provider value={valorProvider}>
               
                {formulario === 0 && <FormNomeEmail
                setNome={setNome}
                nome={nome}
                setEmail={setEmail}
                email={email}
                setFormulario={setFormulario}
                />}
                {formulario === 1 &&<FormSenha
                   nome={nome}
                  email={email}
                  formSenha={formSenha}
                  setFormSenha={setFormSenha}
                  
                setFormulario={setFormulario}
                /> }
            </UsarContexto.Provider>
                {formulario === 2 && <FormSucesso 
                setFormulario={setFormulario}
                />}
            </div>
      
      </div>
    </>
  );
}

export default Cadastro;
