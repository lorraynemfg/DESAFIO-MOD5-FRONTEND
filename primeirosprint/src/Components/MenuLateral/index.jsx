import iconeHome from "../../assets/icone-home.svg";
import iconeClientes from "../../assets/icone-clientes.svg";
import iconeCobrancas from "../../assets/icone-cobranca.svg";
import { useNavigate } from "react-router-dom";
import "./style.css";

function MenuLateral() {
  const navigate = useNavigate();

  return (
    <div className="section">
      <div className="container-menu">
        <div className="icones" onClick={() => navigate("/resumo")}>
          <img src={iconeHome} alt="icone-home" />
          <span>Home</span>
        </div>

        <div className="icones" onClick={() => navigate("/clientes")}>
          <img src={iconeClientes} alt="icone-clientes" />
          <span>Clientes</span>
        </div>

        <div className="icones">
          <img src={iconeCobrancas} alt="icone-cobranca" />
          <span>Cobranças</span>
        </div>
      </div>
    </div>
  );
}

export default MenuLateral;
