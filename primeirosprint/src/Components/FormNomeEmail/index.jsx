import "./style.css";
import retanguloVerde from "../../assets/retangulo-verde.svg";
import retangulo from "../../assets/retangulo.svg";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function FormNomeEmail({setFormulario, email, setEmail, nome, setNome}) {
 
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const navegarClick = () => navigate('/');


  async function submeter(event) {
    event.preventDefault();
    const checarEmail= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nome || !email) {
        setError("Preencha todos os campos!");
        return;
      }
      if ((email.search(checarEmail) == -1)){
      setError("E-mail inválido")
      return; 
      }
          
    setFormulario(1)
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
                                value={nome}
                                onChange={(event) => setNome(event.target.value)}
                            />
                    </div>
                    <div className='input'>
                    <label htmlFor='email'>E-mail*</label>
                    <input
                        name="email"
                        placeholder='Digite seu e-mail'
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    </div>
                    
                </div>

            <div className="btnEerro">
            {error && <span className='mensagem-error'>{error}</span>}

              <button type="button" className="btn-cadastro" onClick={(event) => submeter(event)}>
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
