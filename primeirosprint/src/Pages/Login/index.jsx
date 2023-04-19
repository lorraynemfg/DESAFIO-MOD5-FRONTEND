import './style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {

  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', senha: '' });
  const [error, setError] = useState(['', '', '#D0D5DD', '#D0D5DD']);
  const navegarClick = () => navigate('/cadastro');

  async function handleSubmit(event) {
    event.preventDefault();

    if (!form.email && !form.senha) {
      setError(["Este campo deve ser preenchido", 'Este campo deve ser preenchido', 'red', 'red']);
      return
    }

    if (!form.email) {
      setError(["Este campo deve ser preenchido", '', 'red', '']);
      return
    }
    if (!form.senha) {
      setError(['', "Este campo deve ser preenchido", '', 'red']);
      return;
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
      <main className='login-main'>
        <div className='esquerda'>
          <h2>Gerencie todos os pagamentos da sua empresa em um só lugar.</h2>
        </div>
        <div className='direita'>
          <form onSubmit={handleSubmit}>
            <h1>Faça seu login!</h1>
            <div>
              <label htmlFor='email'>E-mail</label>
              <input
                name="email"
                type="text"
                placeholder="Digite seu e-mail"
                value={form.email}
                onChange={handleChangeInputValue}
                style={{ borderColor: error[2] }}
              />
              {error[0] && <span className="message-error">{error[0]}</span>}
              <div className="rotulo-input-senha">
                <label htmlFor='password'>Senha</label>
                <a href='#' className='link'>Esqueceu a senha?</a>
              </div>
              <input
                name="senha"
                type="password"
                placeholder="Digite sua senha"
                value={form.senha}
                onChange={handleChangeInputValue}
                style={{ borderColor: error[3] }}
              />

              {error[1] && <span className="message-error">{error[1]}</span>}
            </div>
            <div>
              <button type="submit" className="btn-enter">Entrar</button>
            </div>
            <span>Ainda não possui uma conta? <a onClick={() => navegarClick("/")} className='link'>Cadastre-se</a></span>
          </form>

        </div>
      </main>

    </>
  )
}

export default Login;