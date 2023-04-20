import "./style.css";
import iconeCheck from "../../assets/icone-check.svg";

function ModalCadastrouCliente() {
    return (
        <div className="container-modal-cadastrou-cliente">
            <div className="content-modal">
                <img src={iconeCheck} alt="icone-check" />
                <span>Cadastro concluído com sucesso!</span>
            </div>
        </div>
    );
}

export default ModalCadastrouCliente;