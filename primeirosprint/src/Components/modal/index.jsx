import './style.css';
import BotaoFechar from '../../assets/botao-fechar.svg';
import EditarCadastro from '../editarCadastro';
import CadastroDoCliente from '../cadastroDoCliente';

export default function ({ handleModalActive, modalType }) {
  return (
    <div className="modal-container">
      <div className="modal-box">
        <img className="botao-fechar" src={BotaoFechar} alt="fechar" onClick={handleModalActive}></img>
        {modalType === 'editarCadastro' && <EditarCadastro
          tituloDoModal='Edite seu cadastro'
          handleModalActive={handleModalActive}
        />}
        {modalType === 'cadastrarCliente' && <CadastroDoCliente
          tituloDoModal='Cadastro do Cliente'
          handleModalActive={handleModalActive}
        />}
      </div>
    </div >
  )
}