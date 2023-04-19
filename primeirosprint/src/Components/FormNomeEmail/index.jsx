import "./style.css";
import retanguloVerde from "../../assets/retangulo-verde.svg";
import retangulo from "../../assets/retangulo.svg";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


function FormNomeEmail({ setFormulario }) {

  const navigate = useNavigate();
  const [form, setForm] = useState({ nome: "", email: "" });
  const [error, setError] = useState(['', '#D0D5DD']);
  const navegarClick = () => navigate('/login');


  async function submeter(event) {
    event.preventDefault();

    if (!form.nome || !form.email) {
      setError(['Este campo deve ser preenchido', 'red']);
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
          <div className='titulo-form-email'>
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
                value={form.email}
                onChange={handleChangeInputValue}
                style={{ borderColor: error[1] }}
              />
              {error[0] && <span className='mensagem-error'>{error[0]}</span>}
            </div>

          </div>

          <div className="btnEerro">
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
          <img src={retanguloVerde} alt="scroll-horizontal" />
          <img src={retangulo} alt="scroll-horizontal" />
          <img src={retangulo} alt="scroll-horizontal" />

        </div>

      </div>
    </>
  );
}

export default FormNomeEmail;
