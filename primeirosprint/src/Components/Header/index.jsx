import "./style.css";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Header() {
  return (
    <>
      <header>
        <div className="titulo">
          <h1>Resumo das Cobranças</h1>
        </div>
        <div className="perfil">
          <Avatar>LR</Avatar>
          <span>Lorena</span>
          <IconButton size="small">
            <ExpandMoreIcon fontSize="small" />
          </IconButton>
        </div>
      </header>
    </>
  );
}

export default Header;
