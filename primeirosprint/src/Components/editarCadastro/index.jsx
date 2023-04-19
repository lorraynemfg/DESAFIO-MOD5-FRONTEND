import './styles.css'
import { useState } from 'react'
import EsconderSenha from '../../assets/esconder-senha.svg'
import MostrarSenha from '../../assets/mostrar-senha.svg'
import Sucesso from '../../assets/sucesso.svg'

export default function EditarCadastro({ handleModalActive, tituloDoModal }) {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    senha: '',
    confirmaSenha: ''
  })
  const [senhaVisivel, setSenhaVisivel] = useState(
    {
      icon: EsconderSenha,
      inputType: 'password'
    });
  const [error, setError] = useState(['', '#D0D5DD']);
  const [errorSenha, setErrorSenha] = useState(['', '']);
  const [formSucesso, setFormSucesso] = useState(['flex', 'none']);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!form.nome || !form.email || !form.senha || !form.confirmaSenha) {
      setError(["Este campo deve ser preenchido", 'red'])
      return
    }
    if (form.senha !== form.confirmaSenha) {
      setErrorSenha(["As senhas não coincidem", 'red'])
      return
    }
    setFormSucesso(['none', 'flex']);
  }

  function tornarSenhaVisivel() {
    if (senhaVisivel.inputType === 'password') {
      setSenhaVisivel({
        icon: MostrarSenha,
        inputType: 'text'
      });

    } else {
      setSenhaVisivel({
        icon: EsconderSenha,
        inputType: 'password'
      });
    }
  }

  function handleChangeInputValue(event) {
    setError('');
    setErrorSenha('');
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <div className="container-editar-cadastro">
      <div className='conteudo' style={{ display: formSucesso[0] }}>
        <h1>{tituloDoModal}</h1>
        <form className="form-editar-cadastro" onSubmit={handleSubmit}>
          <div className='campos-verticais'>
            <label>Nome*</label>
            <input
              name='nome'
              type="text"
              placeholder='Digite seu nome'
              onChange={handleChangeInputValue}
              value={form.nome}
              style={{ borderColor: error[1] }}>
            </input>
            {error[0] && <span className="message-error">{error[0]}</span>}
            <label>E-mail*</label>
            <input
              name='email'
              type="text"
              placeholder='Digite seu e-mail'
              onChange={handleChangeInputValue}
              value={form.email}
              style={{ borderColor: error[1] }}>
            </input>
            {error[0] && <span className="message-error">{error[0]}</span>}
            <div className='campos-horizontais'>
              <div>
                <label>CPF</label>
                <input
                  name='cpf'
                  type="text"
                  placeholder='Digite seu CPF'
                  onChange={handleChangeInputValue}
                  value={form.cpf}>
                </input>
              </div>
              <div>
                <label>Telefone</label>
                <input
                  name='telefone'
                  type="text"
                  placeholder='Digite seu telefone'
                  onChange={handleChangeInputValue}
                  value={form.telefone}>
                </input>
              </div>
            </div>
            <label>Senha*</label>
            <div className='input-senha'>
              <input
                name='senha'
                type={senhaVisivel.inputType}
                placeholder='********'
                onChange={handleChangeInputValue}
                value={form.senha}
                style={{ borderColor: error[1] }}>
              </input>
              <img
                src={senhaVisivel.icon}
                onClick={(event) => tornarSenhaVisivel(event)}
                alt="Visibilidade da Senha" />
            </div>
            {error[0] && <span className="message-error">{error[0]}</span>}
            <label>Confirmação de senha*</label>
            <div className='input-senha'>
              <input
                name='confirmaSenha'
                type={senhaVisivel.inputType}
                placeholder='********'
                onChange={handleChangeInputValue}
                value={form.confirmaSenha}
                style={{ borderColor: errorSenha[1] ? errorSenha[1] : error[1] }}>
              </input>
              <img
                src={senhaVisivel.icon}
                onClick={(event) => tornarSenhaVisivel(event)}
                alt="Visibilidade da Senha" />
            </div>
            {error[0] && <span className="message-error">{error[0]}</span>}
            {errorSenha[0] && <span className="message-error">{errorSenha[0]}</span>}
          </div>
          <button type='submit'>Aplicar</button>
        </form>
      </div>
      <div className='sucesso' style={{ display: formSucesso[1] }} onClick={handleModalActive}>
        <img src={Sucesso} alt='Sucesso'></img>
        <h1>Cadastro Atualizado com sucesso!</h1>
      </div>
    </div>
  )
}