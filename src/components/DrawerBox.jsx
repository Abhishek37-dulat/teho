import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { IconButton, styled, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { useState } from "react";
import subimg from "../assets/Union (1).svg";
import { useNavigate } from "react-router-dom";

const Box1 = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 20,
  right: 20,
  backgroundColor: "#0f0f0f",
  padding: "0px",
  borderRadius: "8px",
  boxShadow: "0px 0px 3px rgba(255,255,255,0.4)",
}));

const Box2 = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  width: 430,
  backgroundColor: "#1f1f1f",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  paddingTop: "40px",
  [theme.breakpoints.up("s8")]: {
    width: "100%",
  },
}));

const B2Item1 = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "40px",
  marginLeft: "100px",
  "&>p:nth-of-type(1)": {
    color: "white",
    fontSize: "24px",
    "&:hover": {
      color: "#f8990b",
    },
  },
}));

const B2Item2 = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  paddingTop: "40px",

  transition: "background-color 0.3s ease-in-out",
  "&>div:nth-of-type(1)": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "100px",
    "&:hover": {
      "&>p:nth-of-type(1)": {
        color: "#f8990b",
      },
      "&>svg": {
        color: "#f8990b",
      },
    },
    "&>p:nth-of-type(1)": {
      color: "white",
      fontSize: "24px",
    },
    "&>svg": {
      color: "white",
      fontSize: "30px",
      transition: "transform 0.3s ease-in-out",
    },
  },
  "&>p:nth-of-type(1)": {
    color: "white",
    fontSize: "24px",
  },
  "&>svg": {
    color: "white",
    fontSize: "30px",
    transition: "transform 0.3s ease-in-out",
  },
}));

const InnerBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  paddingTop: "10px",
  marginLeft: "110px",
}));

const SubInnerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "background-color 0.3s ease-in-out",
  marginTop: "10px",
  "&:hover": {
    "&>p:nth-of-type(1)": {
      color: "#f8990b",
    },
    "&>svg": {
      color: "#676665",
    },
  },
  "&>p:nth-of-type(1)": {
    color: "white",
    fontSize: "24px",
  },
  "&>svg": {
    color: "white",
    fontSize: "30px",
    transition: "transform 0.3s ease-in-out",
  },
}));

const SVGImage = styled("img")(({ theme }) => ({
  width: "15px",
  marginRight: "10px",
}));

export default function DrawerBox({ isDesktop, toggleDrawer, state }) {
  const [downUp, setDownUp] = useState(false);
  const navigate = useNavigate();

  const handleExplore = (itemNumber) => {
    if (itemNumber === 0) {
      navigate("/centres");
    }
    if (itemNumber === 1) {
      navigate("/events");
    }
    if (itemNumber === 2) {
      navigate("/tournaments");
    }
    if (itemNumber === -1) {
      navigate("/");
    }
  };
  const handleDownUp = () => {
    setDownUp(!downUp);
  };

  return (
    <div>
      <SwipeableDrawer
        anchor={isDesktop ? "bottom" : "right"}
        open={state.right}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box1>
          <IconButton
            onClick={toggleDrawer(false)}
            size="small"
            sx={{ padding: "5px", fontSize: "8px", borderRadius: "10px" }}
          >
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
        </Box1>
        <Box2>
          <B2Item1 onClick={() => handleExplore(-1)}>
            <Typography>Home</Typography>
          </B2Item1>
          <B2Item2>
            <Box onClick={() => handleDownUp()}>
              <Typography>Explore</Typography>
              <KeyboardArrowDownRoundedIcon
                sx={{
                  display: !downUp ? "flex" : "none",
                  transform: !downUp ? "rotate(0deg)" : "rotate(180deg)",
                }}
              />
              <KeyboardArrowUpRoundedIcon
                sx={{
                  display: downUp ? "flex" : "none",
                  transform: downUp ? "rotate(0deg)" : "rotate(180deg)",
                }}
              />
            </Box>

            <InnerBox sx={{ display: downUp ? "flex" : "none" }}>
              <SubInnerBox onClick={() => handleExplore(0)}>
                <SVGImage src={subimg} alt="down arrow" />
                <Typography>Centres</Typography>
              </SubInnerBox>
              <SubInnerBox onClick={() => handleExplore(1)}>
                <SVGImage src={subimg} alt="down arrow" />
                <Typography>Events</Typography>
              </SubInnerBox>
              <SubInnerBox onClick={() => handleExplore(2)}>
                <SVGImage src={subimg} alt="down arrow" />
                <Typography>Tournaments</Typography>
              </SubInnerBox>
            </InnerBox>
          </B2Item2>
          <B2Item1>
            <Typography>Products</Typography>
          </B2Item1>
          <B2Item1>
            <Typography>About Us</Typography>
          </B2Item1>
        </Box2>
      </SwipeableDrawer>
    </div>
  );
}
