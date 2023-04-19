import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Header from "../../Components/Header";
import MenuLateral from "../../Components/MenuLateral";
import iconeClientes from "../../assets/icone-clientes.svg";
import iconeFiltro from "../../assets/icone-filtro.svg";
import iconeLupa from "../../assets/icone-lupa.svg";
import iconeOrdenar from "../../assets/ordenar-clientes.svg";
import iconeCriarCobranca from "../../assets/icone-criar-cobranca.svg";
import "./style.css";
import ModalCadastrouCliente from "../../Components/ModalCadastrouCliente";

function createData(nome, cpf, email, telefone, status) {
  return { nome, cpf, email, telefone, status };
}

const rows = [
  createData(
    "Sara da Silva",
    "054 365 255 87",
    "sarasilva@cubos.io",
    "71 9 9462 8654",
    "Inadimplente"
  ),
  createData(
    "Cameron Williamson",
    "054 365 255 87",
    "cameronw@cubos.io",
    "71 9 9962 8658",
    "Inadimplente"
  ),
  createData(
    "Savannah Nguyen",
    "054 365 255 87",
    "snguyen@cubos.io",
    "71 9 9762 8658",
    "Inadimplente"
  ),
  createData(
    "Darlene Robertson",
    "054 365 255 87",
    "darlener@cubos.io",
    "71 9 9562 8653",
    "Inadimplente"
  ),
  createData(
    "Marvin McKinney",
    "054 365 255 87",
    "marvinm@cubos.io",
    "71 9 9462 8658",
    "Inadimplente"
  ),
  createData(
    "Sandra dos Santos",
    "054 365 255 87",
    "sandrasantos@cubos.io",
    "71 9 9762 8652",
    "Inadimplente"
  ),
  createData(
    "Cameron Williamson",
    "054 365 255 87",
    "cameronw@cubos.io",
    "71 9 9662 8653",
    "Em dia"
  ),
  createData(
    "Savannah Nguyen",
    "054 365 255 87",
    "snguyen@cubos.io",
    "71 9 9962 8659",
    "Em dia"
  ),
  createData(
    "Darlene Robertson",
    "054 365 255 87",
    "darlener@cubos.io",
    "71 9 9862 8655",
    "Em dia"
  ),
  createData(
    "Marvin McKinney",
    "054 365 255 87",
    "marvinm@cubos.io",
    "71 9 9362 8652",
    "Em dia"
  ),
];

function Clientes() {
  return (
    <>
      <div className="container">
        <MenuLateral />
        <main>
          <Header />

          <hr />
          <div className="barra-filtro">
            <div className="icone-titulo">
              <img src={iconeClientes} alt="icone-clientes" />
              <span>Clientes</span>
            </div>

            <div className="adicionar-procurar">
              <button className="adicionar-cliente">+ Adicionar cliente</button>
              <button className="filtrar-cliente">
                <img src={iconeFiltro} alt="icone-filtro" />
              </button>
              <input placeholder="Pesquisa" />
              <img className="lupa" src={iconeLupa} alt="icone-lupa" />
            </div>
          </div>

          <div className="tabela-clientes">
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650, borderRadius: "20px" }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                        gap: "10px",
                        fontFamily: "Nunito, sans-serif",
                        fontWeight: 700,
                        fontSize: "16px",
                        lineHeight: "50px",
                        letterSpacing: "0.005em",
                        color: "#3F3F55",
                      }}
                    >
                      <img
                        className="icone-ordenar"
                        src={iconeOrdenar}
                        alt="icone-ordenar"
                      />
                      Cliente
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontFamily: "Nunito, sans-serif",
                        fontWeight: 700,
                        fontSize: "16px",
                        lineHeight: "50px",
                        letterSpacing: "0.005em",
                        color: "#3F3F55",
                      }}
                    >
                      CPF
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontFamily: "Nunito, sans-serif",
                        fontWeight: 700,
                        fontSize: "16px",
                        lineHeight: "50px",
                        letterSpacing: "0.005em",
                        color: "#3F3F55",
                      }}
                    >
                      E-mail
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontFamily: "Nunito, sans-serif",
                        fontWeight: 700,
                        fontSize: "16px",
                        lineHeight: "50px",
                        letterSpacing: "0.005em",
                        color: "#3F3F55",
                      }}
                    >
                      Telefone
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontFamily: "Nunito, sans-serif",
                        fontWeight: 700,
                        fontSize: "16px",
                        lineHeight: "50px",
                        letterSpacing: "0.005em",
                        color: "#3F3F55",
                      }}
                    >
                      Status
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontFamily: "Nunito, sans-serif",
                        fontWeight: 700,
                        fontSize: "16px",
                        lineHeight: "50px",
                        letterSpacing: "0.005em",
                        color: "#3F3F55",
                      }}
                    >
                      Criar Cobrança
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{
                          fontFamily: "Nunito, sans serif",
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "40px",
                          letterSpacing: "0.005em",
                          color: "#747488",
                        }}
                      >
                        {row.nome}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          fontFamily: "Nunito, sans serif",
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "40px",
                          letterSpacing: "0.005em",
                          color: "#747488",
                        }}
                      >
                        {row.cpf}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          fontFamily: "Nunito, sans serif",
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "40px",
                          letterSpacing: "0.005em",
                          color: "#747488",
                        }}
                      >
                        {row.email}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          fontFamily: "Nunito, sans serif",
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "40px",
                          letterSpacing: "0.005em",
                          color: "#747488",
                        }}
                      >
                        {row.telefone}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          fontFamily: "Nunito, sans serif",
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "40px",
                          letterSpacing: "0.005em",
                        }}
                      >
                        {row.status === "Em dia" ? (
                          <span className="status-cliente em-dia">
                            {row.status}
                          </span>
                        ) : (
                          <span className="status-cliente inadimplente">
                            {row.status}
                          </span>
                        )}
                      </TableCell>
                      <TableCell align="left">
                        <img
                          className="icone-cobranca"
                          src={iconeCriarCobranca}
                          alt="icone-criar-cobrança"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <ModalCadastrouCliente />
        </main>
      </div>
    </>
  );
}

export default Clientes;
