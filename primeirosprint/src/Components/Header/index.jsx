import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import "./style.css";
import { useState } from 'react';
import { clearAll } from '../../utils/storage';
import Modal from '../../Components/modal';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [modalActive, setModalActive] = useState(false);
  const [modalType, setModalType] = useState('');

  function handleModalActive(event, modalType) {
    event.preventDefault()
    setModalType(modalType)
    setModalActive(!modalActive)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function loginOut() {
    clearAll();
    navigate("/");
  }

  return (
    <>
      <header>
        <div className="titulo">
          <h1>Resumo das Cobranças</h1>
        </div>
        <div className="perfil">
          <Avatar>LR</Avatar>
          <span>Lorena</span>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <ExpandMoreIcon fontSize="small" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                width: "150px",
                borderRadius: "10px",
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <div className="icones-menu-perfil">
              <MenuItem
                onClick={(event) => handleModalActive(event, 'editarCadastro')}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "50px",
                  fontFamily: "Nunito",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "11px",
                  color: "#747488",
                }}
              >
                <EditOutlinedIcon />
                Editar
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "50px",
                  fontFamily: "Nunito",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "11px",
                  color: "#747488",
                }}
              >
                <LogoutIcon onClick={() => loginOut()} />
                Sair
              </MenuItem>
            </div>
          </Menu>
        </div>
      </header>
      {modalActive && <Modal handleModalActive={handleModalActive} modalType={modalType} />}
    </>
  );
}


export default Header;
