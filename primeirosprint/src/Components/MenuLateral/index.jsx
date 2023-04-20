import iconeHome from "../../assets/icone-home.svg";
import iconeHomeSelecionado from "../../assets/icone-home-selecionado.svg";
import iconeClientes from "../../assets/icone-clientes.svg";
import iconeClientesSelecionado from "../../assets/icone-clientes-selecionado.svg";
import iconeCobrancas from "../../assets/icone-cobranca.svg";
import { useNavigate } from "react-router-dom";
import "./style.css";

function MenuLateral() {
  const navigate = useNavigate();

  return (
    <div className="section">
      <div className="container-menu">
        <div
          className={
            window.location.pathname === "/resumo"
              ? "icones selecionado"
              : "icones"
          }
          onClick={() => navigate("/resumo")}
        >
          <img
            src={
              window.location.pathname === "/resumo"
                ? iconeHomeSelecionado
                : iconeHome
            }
            alt="icone-home"
          />
          <span
            className={
              window.location.pathname === "/resumo" ? "texto-selecionado" : ""
            }
          >
            Home
          </span>
        </div>

        <div
          className={
            window.location.pathname === "/clientes"
              ? "icones selecionado"
              : "icones"
          }
          onClick={() => navigate("/clientes")}
        >
          <img
            src={
              window.location.pathname === "/clientes"
                ? iconeClientesSelecionado
                : iconeClientes
            }
            alt="icone-clientes"
          />
          <span
            className={
              window.location.pathname === "/clientes"
                ? "texto-selecionado"
                : ""
            }
          >
            Clientes
          </span>
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
