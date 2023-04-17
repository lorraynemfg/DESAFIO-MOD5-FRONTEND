import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import iconeInadimplente from "../../assets/icone-inadimplente.svg";
import "./style.css";

function createData(cliente, idCobranca, valor) {
  return { cliente, idCobranca, valor };
}

const rows = [
  createData("Cameron Williamson", "03/02/2021", "R$ 500,00"),
  createData("Savannah Nguyen", "04/03/2021", "R$ 500,00"),
  createData("Darlene Robertson", "21/04/2021", "R$ 500,00"),
  createData("Marvin McKinney", "08/05/2021", "R$ 500,00"),
];

function TabelaInadimplentes() {
  return (
    <>
      <div className="container-tabelas-clientes">
        <div className="titulo-tabela-inadimplente">
          <div className="imagem-titulo">
            <img src={iconeInadimplente} alt="icone-inadimplente" />
            <strong>Clientes Inadimplentes</strong>
          </div>
          <span>08</span>
        </div>

        <TableContainer
          component={Paper}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "560px",
            height: "270px",
          }}
        >
          <Table
            aria-label="simple table"
            sx={{
              width: 560,
            }}
          >
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: "#ffffff",
                  width: "560px",
                }}
              >
                <TableCell
                  sx={{
                    fontFamily: "Nunito",
                    fontWeight: 700,
                    fontSize: "16px",
                    letterSpacing: "0.005em",
                    color: "#3F3F55",
                  }}
                >
                  Cliente
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontFamily: "Nunito",
                    fontWeight: 700,
                    fontSize: "16px",
                    letterSpacing: "0.005em",
                    color: "#3F3F55",
                  }}
                >
                  Data de venc.
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontFamily: "Nunito",
                    fontWeight: 700,
                    fontSize: "16px",
                    letterSpacing: "0.005em",
                    color: "#3F3F55",
                  }}
                >
                  Valor
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.cliente}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      fontFamily: "Nunito",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "14px",
                      letterSpacing: "0.005em",
                      color: "#6E6E85",
                    }}
                  >
                    {row.cliente}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontFamily: "Nunito",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "14px",
                      letterSpacing: "0.005em",
                      color: "#6E6E85",
                    }}
                  >
                    {row.idCobranca}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontFamily: "Nunito",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "14px",
                      letterSpacing: "0.005em",
                      color: "#6E6E85",
                    }}
                  >
                    {row.valor}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div className="ancora-tabela-inadimplente">
          <span>Ver todos</span>
        </div>
      </div>
    </>
  );
}

export default TabelaInadimplentes;
