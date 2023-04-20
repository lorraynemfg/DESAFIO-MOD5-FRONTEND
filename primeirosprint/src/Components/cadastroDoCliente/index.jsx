import './styles.css'
import { useState } from 'react'
import clientes from '../../assets/clientes.svg'

export default function CadastroDoCliente({ handleModalActive, tituloDoModal }) {
  const [error, setError] = useState(['', '#D0D5DD']);
  const [form, setForm] = useState({
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    endereco: '',
    complemento: '',
    cep: '',
    bairro: '',
    cidade: '',
    uf: ''
  });

  async function handleSubmit(event) {
    event.preventDefault();

    if (!form.nome || !form.email || !form.cpf || !form.telefone) {
      setError(["Este campo deve ser preenchido", 'red'])
      return
    }
    handleModalActive(event)
  }

  function handleChangeInputValue(event) {
    setError('');
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <div className="container-cadastro-do-cliente">
      <div className='container-titulo'>
        <img src={clientes} alt='Icone Cliente'></img>
        <h1>{tituloDoModal}</h1>
      </div>
      <form className="form-cadastro-clientes" onSubmit={handleSubmit}>
        <div className='campos-verticais'>
          <label>Nome*</label>
          <input
            name='nome'
            type="text"
            placeholder='Digite o nome'
            onChange={handleChangeInputValue}
            value={form.nome}
            style={{ borderColor: error[1] }}></input>
          {error[0] && <span className="message-error">{error[0]}</span>}
          <label>E-mail*</label>
          <input
            name='email'
            type="text"
            placeholder='Digite o e-mail'
            onChange={handleChangeInputValue}
            value={form.email}
            style={{ borderColor: error[1] }}></input>
          {error[0] && <span className="message-error">{error[0]}</span>}
          <div className='campos-horizontais'>
            <div>
              <label>CPF*</label>
              <input
                name='cpf'
                type="text"
                className='length-235'
                placeholder='Digite o CPF'
                onChange={handleChangeInputValue}
                value={form.cpf}
                style={{ borderColor: error[1] }}></input>
              {error[0] && <span className="message-error">{error[0]}</span>}
            </div>
            <div>
              <label>Telefone*</label>
              <input
                name='telefone'
                type="text"
                className='length-224'
                placeholder='Digite o telefone'
                onChange={handleChangeInputValue}
                value={form.telefone}
                style={{ borderColor: error[1] }}></input>
              {error[0] && <span className="message-error">{error[0]}</span>}
            </div>
          </div>
          <label>Endereço</label>
          <input
            name='endereco'
            type="text"
            placeholder='Digite o endereço'
            onChange={handleChangeInputValue}
            value={form.endereco}></input>
          <label>Complemento</label>
          <input
            name='complemento'
            type="text"
            placeholder='Digite o complemento'
            onChange={handleChangeInputValue}
            value={form.complemento}></input>
          <div className='campos-horizontais'>
            <div>
              <label>CEP</label>
              <input
                name='cep'
                type="text"
                className='length-224'
                placeholder='Digite o CEP'
                onChange={handleChangeInputValue}
                value={form.cep}></input>
            </div>
            <div>
              <label>Bairro</label>
              <input
                name='bairro'
                type="text"
                className='length-235'
                placeholder='Digite o bairro'
                onChange={handleChangeInputValue}
                value={form.bairro}></input>
            </div>
          </div>
          <div className='campos-horizontais'>
            <div>
              <label>Cidade</label>
              <input
                name='cidade'
                type="text"
                className='length-303'
                placeholder='Digite a cidade'
                onChange={handleChangeInputValue}
                value={form.cidade}></input>
            </div>
            <div>
              <label>UF</label>
              <input
                name='uf'
                type="text"
                className='length-160'
                placeholder='Digite a UF'
                onChange={handleChangeInputValue}
                value={form.uf}></input>
            </div>
          </div>
        </div>
        <div className='campos-horizontais'>
          <button className='botao-cancelar' onClick={handleModalActive}>Cancelar</button>
          <button className='botao-aplicar' onClick={(event) => { handleModalActive(event, '', true) }}>Aplicar</button>
        </div>
      </form>
    </div>
  )
}