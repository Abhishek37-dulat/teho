import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import logoIcon from "../assets/teho-white 1.png";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material";
import lo from "../assets/Vector (Stroke).svg";

const MainBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  margin: 2,
  overflow: "hidden",
  zIndex: 10,
  width: "98%",
  [theme.breakpoints.up("s8")]: {
    width: "80%",
    marginLeft: "10%",
  },
}));

export default function ButtonAppBar({ isDesktop, toggleDrawer }) {
  const navigate = useNavigate();
  return (
    <MainBox>
      <AppBar
        position="static"
        sx={{
          borderRadius: 2,
          backgroundColor: "#1A1A1A",
          zIndex: 2,
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
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
              cursor: "pointer",
            }}
            onClick={toggleDrawer(isDesktop ? "bottom" : "right", true)}
          >
            <img src={lo} alt="logo" style={{ width: "24px" }} />
          </Box>
        </Toolbar>
      </AppBar>
    </MainBox>
  );
}
