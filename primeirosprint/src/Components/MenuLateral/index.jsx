import "./style.css";
import iconeHome from "../../assets/icone-home.svg";
import iconeClientes from "../../assets/icone-clientes.svg";
import iconeCobranca from "../../assets/icone-cobranca.svg";

function MenuLateral() {
  return (
    <section>
      <div className="container-menu">
        <div className="icones">
          <img src={iconeHome} alt="icone-home" />
          <span>Home</span>
        </div>

        <div className="icones">
          <img src={iconeClientes} alt="icone-clientes" />
          <span>Clientes</span>
        </div>

        <div className="icones">
          <img src={iconeCobranca} alt="icone-cobranca" />
          <span>Cobranças</span>
        </div>
      </div>
    </section>
  );
}

export default MenuLateral;
