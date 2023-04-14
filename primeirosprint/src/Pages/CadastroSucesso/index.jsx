import './style.css';
import retanguloVerde from '../../assets/retangulo-verde.svg';
import retangulo from '../../assets/retangulo.svg';
import sucesso from '../../assets/sucesso.svg';
import MenuEstagio from'../../Components/MenuEstagio';


function CadastroSucesso() {
  return (
<>
        <div className='container-sucess'> 
            <div className='esquerda-menu-sucesso'>   
            <MenuEstagio />
            </div>
        <div className='direita-form-sucesso'>
            <div className='sucesso'> 
                <img src={sucesso} alt="visto de sucesso" />
                <h1>Cadastro realizado com sucesso!</h1>
            </div>
            <div className='btn-irLogin'>
                <button type='submit' className='btn-cadastro'>Ir para Login</button>
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

export default CadastroSucesso;
