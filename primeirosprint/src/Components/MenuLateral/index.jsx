import "./style.css";
import iconeHome from "../../assets/icone-home.svg";
import iconeClientes from "../../assets/icone-clientes.svg";
import iconeCobranca from "../../assets/icone-cobranca.svg";

function MenuLateral() {
  return (
    <section>
      <div className="icones">
        <img src={iconeHome} alt="icone-home" />
        <img src={iconeClientes} alt="icone-clientes" />
        <img src={iconeCobranca} alt="icone-cobranca" />
      </div>
    </section>
  );
}

export default MenuLateral;
