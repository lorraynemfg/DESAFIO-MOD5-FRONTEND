import './style.css';
import MenuEstagio from'../../Components/MenuEstagio'
import { useState } from 'react';


function Cadastro() {
    const [form, setForm] = useState({ name: '', email: '' });
    const [error, setError] = useState('');
  
    async function handleSubmit(event) {
        event.preventDefault();
  
        if (!form.nome || !form.email) {
            setError("Preencha todos os campos!");
            return;
        }}

function handleChangeInputValue(event) {
    setError('');
    setForm({ ...form, [event.target.name]: event.target.value });
 }
       

  return (
<>
<div className='container'> 
<div className='esquerda-menu'>   
       <MenuEstagio />
    </div>
      <div className='direita-form'>
      <form onSubmit={handleSubmit}>
                                <h1>Adicione seus dados</h1>

                                <label htmlFor='nome'>Nome*</label>
                                <input
                                    name="nome"
                                    placeholder='Digite seu nome'
                                    type="text"
                                    value={form.nome}
                                    onChange={handleChangeInputValue}
                                />

                                <label htmlFor='email'>E-mail*</label>
                                <input
                                    name="email"
                                    placeholder='Digite seu e-mail'
                                    type="email"
                                    value={form.email}
                                    onChange={handleChangeInputValue}
                                />

                                <div>
                                    <button type='submit' className='btn-enter' >Entrar</button>
                                </div>
                                <span>Já possui conta? Faça seu <a>Login</a></span>
                            </form>
   </div>
</div>
</>
  )
}

export default Cadastro;
