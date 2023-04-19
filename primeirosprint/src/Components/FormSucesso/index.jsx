import './style.css';
import retanguloVerde from '../../assets/retangulo-verde.svg';
import retangulo from '../../assets/retangulo.svg';
import sucesso from '../../assets/sucesso.svg';
import { useNavigate } from 'react-router-dom';

function FormSucesso() {
  const navigate = useNavigate();
  const navegarClick = () => navigate('/login');
  return (
    <>
      <div>
        <div className='direita-form-sucesso'>
          <div className='sucesso'>
            <img src={sucesso} alt="visto de sucesso" />
            <h1>Cadastro realizado com sucesso!</h1>
          </div>
          <div className='btn-irLogin'>
            <button type='button' className='btn-cadastro' onClick={() => navegarClick("/")}>Ir para Login</button>
          </div>
          <div className='scroll-horizontal'>
            <img src={retangulo} alt="scroll-horizontal" />
            <img src={retangulo} alt="scroll-horizontal" />
            <img src={retanguloVerde} alt="scroll-horizontal" />
          </div>
        </div>
      </div>
    </>
  )
}

export default FormSucesso;
