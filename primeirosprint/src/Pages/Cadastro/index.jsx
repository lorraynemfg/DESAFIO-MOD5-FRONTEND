import "./style.css";
import retanguloVerde from "../../assets/retangulo-verde.svg";
import retangulo from "../../assets/retangulo.svg";
import MenuEstagio from "../../Components/MenuEstagio/MenuEstagio";
import { useState } from "react";

function Cadastro() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (!form.nome || !form.email) {
      setError("Preencha todos os campos!");
      return;
    }
  }

  function handleChangeInputValue(event) {
    setError("");
    setForm({ ...form, [event.target.name]: event.target.value });
  }
  return (
    <>
      <div className="container">
        <div className="esquerda-menu">
          <MenuEstagio />
        </div>
        <div className="direita-form">
          <form onSubmit={handleSubmit}>
            <div className="titulo">
              <h1>Adicione seus dados</h1>
            </div>
            <div className="input-grupo">
              <div className="input">
                <label htmlFor="nome">Nome*</label>
                <input
                  name="nome"
                  placeholder="Digite seu nome"
                  type="text"
                  value={form.nome}
                  onChange={handleChangeInputValue}
                />
              </div>
              <div className="input">
                <label htmlFor="email">E-mail*</label>
                <input
                  name="email"
                  placeholder="Digite seu e-mail"
                  type="email"
                  value={form.email}
                  onChange={handleChangeInputValue}
                />
              </div>
            </div>

            <div>
              <button type="submit" className="btn-cadastro">
                Continuar
              </button>
            </div>
            <span>
              Já possui conta? Faça seu{" "}
              <a className="link-para-Login" href="#">
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
      </div>
    </>
  );
}

export default Cadastro;
