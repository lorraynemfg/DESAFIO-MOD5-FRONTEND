import Header from "../../Components/Header";
import MenuLateral from "../../Components/MenuLateral";
import "./style.css";
import iconePago from "../../assets/icone-pago.svg";
import iconePrevisto from "../../assets/icone-previsto.svg";
import iconeVencido from "../../assets/icone-vencido.svg";
import TabelaPagos from "../../Components/TabelaPagos";
import TabelaVencidos from "../../Components/TabelaVencidos";
import TabelaPrevistos from "../../Components/TabelaPrevistos";
import TabelaInadimplentes from "../../Components/TabelaInadimplentes";
import TabelaEmDia from "../../Components/TabelaEmDia";

function Resumo() {
  return (
    <div className="container">
      <MenuLateral />
      <div className="main">
        <Header />

        <hr />
        <div className="cobrancas">
          <div className="pagas">
            <div className="icone-cobranca">
              <img src={iconePago} alt="icone-pago" />
            </div>

            <div className="texto-cobranca">
              <span>Cobranças Pagas</span>
              <strong>R$ 30.000</strong>
            </div>
          </div>

          <div className="vencidas">
            <div className="icone-cobranca">
              <img src={iconeVencido} alt="icone-vencido" />
            </div>

            <div className="texto-cobranca">
              <span>Cobranças Vencidas</span>
              <strong>R$ 7.000</strong>
            </div>
          </div>

          <div className="previstas">
            <div className="icone-cobranca">
              <img src={iconePrevisto} alt="icone-previsto" />
            </div>

            <div className="texto-cobranca">
              <span>Cobranças Previstas</span>
              <strong>R$ 10.000</strong>
            </div>
          </div>
        </div>

        <div className="tabelas-cobrancas">
          <TabelaPagos />
          <TabelaVencidos />
          <TabelaPrevistos />
        </div>

        <div className="tabelas-clientes">
          <TabelaInadimplentes />
          <TabelaEmDia />
        </div>
      </div>
    </div>
  );
}

export default Resumo;
