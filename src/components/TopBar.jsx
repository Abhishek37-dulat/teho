import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import logoIcon from "../assets/teho-white 1.png";
import { useNavigate } from "react-router-dom";

export default function ButtonAppBar({ toggleDrawer }) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        flexGrow: 1,
        margin: 2,
        overflow: "hidden",
        zIndex: 10,
      }}
    >
      <AppBar
        position="static"
        sx={{ borderRadius: 2 }}
        style={{ backgroundColor: "#1A1A1A", zIndex: 2 }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
            onClick={() => navigate("/")}
          >
            <img src={logoIcon} alt="logo" style={{ width: "88px" }} />
          </Typography>
          <Box
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
            style={{
              backgroundColor: "#111",
              padding: "4px 8px",
              borderRadius: "4px",
              boxShadow: "0px 0px rgba(0,0,0,0.5)",
            }}
          >
            <MenuIcon onClick={toggleDrawer(true)} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
