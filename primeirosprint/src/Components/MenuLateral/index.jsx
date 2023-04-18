import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function MenuLateral() {
  const navigate = useNavigate();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="section">
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          backgroundColor: "#dedee9",
          width: "110px",
          height: 224,
        }}
      >
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            width: "100%",
            height: "365px",
            border: "none",
            marginTop: "45px",
          }}
        >
          <div className="icones" onClick={() => navigate("/resumo")}>
            <Tab
              label="Home"
              icon={<HomeOutlinedIcon style={{ fontSize: "50px" }} />}
              {...a11yProps(0)}
            />
          </div>

          <div className="icones" onClick={() => navigate("/clientes")}>
            <Tab
              label="Clientes"
              icon={<GroupOutlinedIcon style={{ fontSize: "50px" }} />}
              {...a11yProps(1)}
            />
          </div>

          <div className="icones">
            <Tab
              label="Cobranças"
              icon={
                <NoteOutlinedIcon
                  style={{
                    fontSize: "50px",
                    transform: "rotate(90deg)",
                  }}
                  {...a11yProps(2)}
                />
              }
            />
          </div>
        </Tabs>
      </Box>
    </div>
  );
}

export default MenuLateral;
