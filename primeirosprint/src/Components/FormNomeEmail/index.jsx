import "./style.css";
import retanguloVerde from "../../assets/retangulo-verde.svg";
import retangulo from "../../assets/retangulo.svg";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { FormsCadastro } from "../../hooks/formsCadastro";
import FormSenha from "../../Components/FormSenha";
import FormSucesso from "../../Components/FormSucesso";

// function paginacao(){
//   useEffect(() =>{
//   })
// }
function FormNomeEmail({setFormulario}) {
  
  const navigate = useNavigate();
  const [form, setForm] = useState({ nome: "", email: "" });
  const [error, setError] = useState("");
 
  const formComponentes = [<FormNomeEmail />, <FormSenha />, <FormSucesso />];
 
  const {estagioAtual, mudarEstagio} = FormsCadastro(formComponentes);
  const navegarClick = () => navigate('/');



  
  async function submeter(event) {
    event.preventDefault();

    if (!form.nome || !form.email) {
        setError("Preencha todos os campos!");
        return;
    }
    setFormulario(1)
  }

  
  function handleChangeInputValue(event) {
    setError("");
    setForm({ ...form, [event.target.name]: event.target.value });
  }
  return (
<>
        <div className='direita-form-cadastro'>
            <form onSubmit={submeter}>
                <div className='titulo'>
                    <h1>Adicione seus dados</h1>
                </div>
                <div className='input-grupo'> 
                    <div className='input'>                   
                        <label htmlFor='nome'>Nome*</label>
                            <input
                                name="nome"
                                placeholder='Digite seu nome'
                                type="text"
                                value={form.nome}
                                onChange={handleChangeInputValue}
                            />
                    </div>
                    <div className='input'>
                    <label htmlFor='email'>E-mail*</label>
                    <input
                        name="email"
                        placeholder='Digite seu e-mail'
                        type="email"
                        value={form.email}
                        onChange={handleChangeInputValue}
                    />
                    </div>
                    
                </div>

            <div className="btnEerro">
            {error && <span className='mensagem-error'>{error}</span>}
              <button type="submit" className="btn-cadastro">
                Continuar
              </button>
            </div>
            <span>
              Já possui conta? Faça seu{" "}
              <a className="link-para-Login" onClick={() => navegarClick("/")}>
                Login
              </a>
            </span>
          </form>
          <div className="scroll-horizontal">
            <img  src={retanguloVerde} alt="scroll-horizontal"  />
            <img src={retangulo} alt="scroll-horizontal"  />
            <img src={retangulo} alt="scroll-horizontal"  />
               
          </div>

        </div>
    </>
  );
}

export default FormNomeEmail;
