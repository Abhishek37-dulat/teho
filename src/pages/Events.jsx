import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import TopBar from "../components/TopBar";
import DrawerBox from "../components/DrawerBox";
import FooterBox from "../components/FooterBox";
import Box2Image from "../assets/fe2301a10103d27433cbf0b8c65c088c.png";
import EventsBox from "../components/EventsBox";

const MainBox = styled(Box)(({ theme }) => ({
  border: "1px solid black",
  overflow: "scroll",
}));

const Box1 = styled(Box)(({ theme }) => ({
  position: "relative",
  //   border: "1px solid black",

  //   overflow: "hidden",
  backgroundColor: "transparent",
  [theme.breakpoints.up("s4")]: {
    minHeight: "150vh",
  },
}));

const ImageBackground = styled("img")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 0,
  opacity: "20%",
});
const Box2 = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  position: "relative",
  // marginTop: "-100vh",
  zIndex: "10",
  overflow: "scroll",
  [theme.breakpoints.up("s4")]: {
    marginTop: "-150vh",
  },
}));

const Overlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "black",
  zIndex: -1,
});

const Events = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, right: open });
  };

  return (
    <div>
      <MainBox>
        <DrawerBox toggleDrawer={toggleDrawer} state={state} />
        <Box1>
          <ImageBackground src={Box2Image} alt="Background Image" />
          <Overlay />
        </Box1>
        <Box2>
          <TopBar toggleDrawer={toggleDrawer} />
          <EventsBox />
        </Box2>
        <FooterBox />
      </MainBox>
    </div>
  );
};

export default Events;
