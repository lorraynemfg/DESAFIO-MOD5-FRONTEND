import "./style.css";
import retanguloVerde from "../../assets/retangulo-verde.svg";
import retangulo from "../../assets/retangulo.svg";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function FormNomeEmail({ setFormulario, email, setEmail, nome, setNome }) {

  const navigate = useNavigate();

  const [error, setError] = useState(['', '#D0D5DD']);
  const [errorEmail, setErrorEmail] = useState(['', '']);
  const navegarClick = () => navigate('/');


  async function submeter(event) {
    event.preventDefault();
    const checarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nome || !email) {
      setError(['Este campo deve ser preenchido', 'red']);
      return;
    }
    if ((email.search(checarEmail) == -1)) {
      setError(['', '']);
      setErrorEmail(["E-mail inválido", 'red'])
      return;
    }

    setFormulario(1)
  }

  function alterarValorInputNome(event) {
    setError("");
    setNome(event.target.value);
  }

  function alterarValorInputEmail(event) {
    setError("");
    setErrorEmail("");
    setEmail(event.target.value);
  }

  return (
    <>
      <div className='direita-form-cadastro'>
        <form onSubmit={submeter}>
          <div className='titulo-form-nome-email'>
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
                onChange={alterarValorInputNome}
                style={{ borderColor: error[1] }}
              />
              {error[0] && <span className='mensagem-error'>{error[0]}</span>}
            </div>
            <div className='input'>
              <label htmlFor='email'>E-mail*</label>
              <input
                name="email"
                placeholder='Digite seu e-mail'
                type="email"
                value={email}
                onChange={alterarValorInputEmail}
                style={{ borderColor: error[1] ? error[1] : errorEmail[1] }}
              />
              {error[0] && <span className='mensagem-error'>{error[0]}</span>}
              {errorEmail[0] && <span className='mensagem-error'>{errorEmail[0]}</span>}
            </div>

          </div>

          <div className="btnEerro">

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
          <img src={retanguloVerde} alt="scroll-horizontal" />
          <img src={retangulo} alt="scroll-horizontal" />
          <img src={retangulo} alt="scroll-horizontal" />

        </div>

      </div>
    </>
  );
}

export default FormNomeEmail;
