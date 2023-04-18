import './style.css';
import retanguloVerde from '../../assets/retangulo-verde.svg';
import retangulo from '../../assets/retangulo.svg';
import olhoAberto from '../../assets/olho-aberto.svg';
import olhoFechado from '../../assets/olho-fechado.svg';
import { useState } from 'react';


function FormSenha({setFormulario}) {
    const [form, setForm] = useState({ senha: '', repitaSenha: '' });
    const [error, setError] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [mostrarRepetirSenha, setmostrarRepetirSenha] = useState(false);
    const [senhaIncorreta, setSenhaIncorreta] = useState('');
  
    async function handleSubmit(event) {
        event.preventDefault();
  
        if (!form.senha || !form.repitaSenha) {
            setError("Preencha todos os campos!");
            
        }else if (form.senha !== form.repitaSenha) {
            setSenhaIncorreta("As senhas não coincidem");
        }
        setFormulario(2)
    }

function handleChangeInputValue(event) {
    setError('');
    setForm({ ...form, [event.target.name]: event.target.value });
 }
  return (
<>
        <div> 
        <div className='direita-form'>
            <form onSubmit={handleSubmit}>
                <div className='titulo'>
                    <h1>Escolha uma senha</h1>
                </div>
                <div className='input-grupo'> 
                    <div className='input-senha'>                   
                        <label htmlFor='password'>Senha*</label>
                            <input
                                name="senha"
                                type={mostrarSenha ? 'text' : 'password'}
                                value={form.senha}
                                onChange={handleChangeInputValue}
                            />
                            <img className='mostrar-senha'
                                src={mostrarSenha ? olhoFechado : olhoAberto}
                                alt='mostrar senha'
                                onClick={() => setMostrarSenha(!mostrarSenha)} />

                    </div>
                    <div className='input-repetirSenha'>
                    <label htmlFor='password'>Repita a senha*</label>
                    <input
                        name="repitaSenha"
                        type={mostrarRepetirSenha ? 'text' : 'password'}
                        value={form.repitaSenha}
                        onChange={handleChangeInputValue}
                    />
                    <img className='mostrar-senha'
                                src={mostrarRepetirSenha ? olhoFechado : olhoAberto}
                                alt='mostrar senha'
                                onClick={() => setmostrarRepetirSenha(!mostrarRepetirSenha)} />
                    </div>  
                </div>

                <div className="btnEerro">
                    {error && <span className='mensagem-error'>{error}</span>}
                    {senhaIncorreta && <span className='mensagem-error'>{senhaIncorreta}</span>}
                    <button type='submit' className='btn-cadastro'>Finalizar cadastro</button>
                </div>

                <span>Já possui conta? Faça seu <a className='link-para-Login' href='#'>Login</a></span>
            </form>
            <div className='scroll-horizontal'>
                <img src={retangulo} alt="scroll-horizontal" />
                <img src={retanguloVerde} alt="scroll-horizontal" />
                <img src={retangulo} alt="scroll-horizontal" />
            </div>
        </div>
        </div>
</>
  )
}

export default FormSenha;
