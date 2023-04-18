
import './style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navegar = useNavigate();  
    const [form, setForm] = useState({ name: '', email: '' });
    const [error, setError] = useState('');

    const aoClicar = () => navegar('/');

  async function handleSubmit(event) {
      event.preventDefault();

      try {
      if (!form.email || !form.password) {
          setError("Preencha todos os campos!");
          return;
      }
    }catch(error){
        console.error(error.response.message); 
    }

      // const { data, status } = await api.post('/login', {
      //     email: form.email,
      //     senha: form.senha,
      // });

  //     if (status === 200) {
  //         localStorage.setItem("token", data.token);
  //         localStorage.setItem("user", JSON.stringify(data.usuario));
  //         navigate('/home');
  //     } else {
  //         setError(data.mensagem);
  //     }

   }

  function handleChangeInputValue(event) {
      setError('');
      setForm({ ...form, [event.target.name]: event.target.value });
  }
  return (
 <>
 <main>
 <div className='esquerda'>   
        <h2>Gerencie todos os pagamentos da sua empresa em um só lugar.</h2>
    </div>
      <div className='direita'>
      <form onSubmit={handleSubmit}>
                                <h1>Faça seu login</h1>

                                <label htmlFor='email'>E-mail</label>
                                <input
                                    name="email"
                                    type="text"
                                    value={form.email}
                                    onChange={handleChangeInputValue}
                                />

                                <label htmlFor='password'>Password</label>
                                <input
                                    name="senha"
                                    type="password"
                                    value={form.senha}
                                    onChange={handleChangeInputValue}
                                />

                                {error && <span className='massage-error'>{error}</span>}
                                <div>
                                    <button type='submit' className='btn-enter' >Entrar</button>
                                </div>
                            </form>

   </div>
 </main>
    
  </>
  )
}

export default Login;
