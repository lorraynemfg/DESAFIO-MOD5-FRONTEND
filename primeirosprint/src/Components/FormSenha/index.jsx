import './style.css';
import retanguloVerde from '../../assets/retangulo-verde.svg';
import retangulo from '../../assets/retangulo.svg';
import olhoAberto from '../../assets/mostrar-senha.svg';
import olhoFechado from '../../assets/esconder-senha.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../services/api';

function FormSenha({ setFormulario, setFormSenha, formSenha, email, nome }) {
    const navigate = useNavigate();

    const [error, setError] = useState(['', '#D0D5DD']);
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [mostrarRepetirSenha, setmostrarRepetirSenha] = useState(false);
    const [senhaIncorreta, setSenhaIncorreta] = useState('');
    const navegarClick = () => navigate('/login');

    async function handleSubmit(event) {
        event.preventDefault();

        if (!formSenha.senha || !formSenha.repitaSenha) {
            setError(['Este campo deve ser preenchido', 'red']);
            return;

        } else if (formSenha.senha !== formSenha.repitaSenha) {
            setError(['', 'red']);
            setSenhaIncorreta("As senhas não coincidem")
            return;
        }
        localStorage.setItem('senha', formSenha.senha)

        try {
            const response = await axiosPrivate.post('/usuarios', {
                nome,
                email,
                senha: formSenha.senha
            })

            setFormulario(2)
            return;
        } catch (error) {
            setError([error.response.data, 'red']);
            return;
        }

    }

    function handleChangeInputValue(event) {
        setError('');
        setSenhaIncorreta('');
        setFormSenha({ ...formSenha, [event.target.name]: event.target.value });
    }
    return (
        <>
            <div>
                <div className='direita-form'>
                    <form onSubmit={handleSubmit}>
                        <div className='titulo-form-senha'>
                            <h1>Escolha uma senha</h1>
                        </div>
                        <div className='input-grupo'>
                            <div className='input-senha'>
                                <label htmlFor='password'>Senha*</label>
                                <input
                                    name="senha"
                                    type={mostrarSenha ? 'text' : 'password'}
                                    value={formSenha.senha}
                                    onChange={handleChangeInputValue}
                                    style={{ borderColor: error[1] }}
                                />
                                <img className='mostrar-senha'
                                    src={mostrarSenha ? olhoFechado : olhoAberto}
                                    alt='mostrar senha'
                                    onClick={() => setMostrarSenha(!mostrarSenha)} />

                            </div>
                            {error[0] && <span className='mensagem-error'>{error[0]}</span>}
                            <div className='input-repetirSenha'>
                                <label htmlFor='password'>Repita a senha*</label>
                                <input
                                    name="repitaSenha"
                                    type={mostrarRepetirSenha ? 'text' : 'password'}
                                    value={formSenha.repitaSenha}
                                    onChange={handleChangeInputValue}
                                    style={{ borderColor: error[1] }}
                                />
                                <img className='mostrar-senha'
                                    src={mostrarRepetirSenha ? olhoFechado : olhoAberto}
                                    alt='mostrar senha'
                                    onClick={() => setmostrarRepetirSenha(!mostrarRepetirSenha)} />
                            </div>
                            {error[0] && <span className='mensagem-error'>{error[0]}</span>}
                            {senhaIncorreta && <span className='mensagem-error'>{senhaIncorreta}</span>}
                        </div>

                        <div className="btnEerro">

                            <button type='submit' className='btn-cadastro'>Finalizar cadastro</button>
                        </div>

                        <span>Já possui conta? Faça seu <a className='link-para-Login' onClick={() => navegarClick("/")}>Login</a></span>
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
