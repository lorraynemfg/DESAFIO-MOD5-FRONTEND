import "./style.css";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(cliente, idCobranca, valor) {
  return { cliente, idCobranca, valor };
}

const rows = [
  createData("Sara Silva", 723456783, "R$ 3500,00"),
  createData("Carlos Prado", 223456782, "R$ 400,00"),
  createData("Lara Brito", 323456787, "R$ 900,00"),
  createData("Soraia Neves", 423456788, "R$ 700,00"),
];

function TabelaPrevistos() {
  return (
    <>
      <div className="container-tabelas">
        <div className="titulo-tabela-previsto">
          <strong>Cobranças Previstas</strong>
          <span>05</span>
        </div>

        <TableContainer
          component={Paper}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "360px",
            height: "270px",
            gap: "20px",
          }}
        >
          <Table
            aria-label="simple table"
            sx={{
              width: 360,
            }}
          >
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: "#ffffff",
                  width: "360px",
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
                  ID da Cob.
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

        <div className="ancora-tabela">
          <span>Ver todos</span>
        </div>
      </div>
    </>
  );
}

export default TabelaPrevistos;
