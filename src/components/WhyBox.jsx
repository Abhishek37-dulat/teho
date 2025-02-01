import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import Box2Image from "../assets/fe2301a10103d27433cbf0b8c65c088c.png";
import Box1Image from "../assets/Div [absolute].svg";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

const Box2 = styled(Box)(({ theme }) => ({
  position: "relative",
  //   border: "1px solid black",
  //   height: "100vh",
  //   overflow: "hidden",
  marginTop: "0px",
  backgroundColor: "black",
  [theme.breakpoints.up("s8")]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));

const ImageBackground = styled("img")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 1,
  opacity: "20%",
});

const TextBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  padding: "60px 90px 60px 20px",
  [theme.breakpoints.up("s8")]: {
    justifyContent: "center",
    alignItems: "center",
  },
}));

const HeadTitle = styled(Typography)(({ theme }) => ({
  //   border: "1px solid black",
  marginTop: "100px",
  display: "flex",
  "&>p:nth-of-type(1)": {
    color: "white",
    fontWeight: "bold",
    marginRight: "10px",
    fontSize: "20px",
  },
  "&>p:nth-of-type(2)": {
    color: "#1cb1d9",
    fontWeight: "bold",
    fontSize: "20px",
  },
}));

const HeadDetails = styled(Typography)(({ theme }) => ({
  //   border: "1px solid black",
  marginTop: "50px",
  [theme.breakpoints.up("s8")]: {
    padding: "0px 100px",
  },
  "&>p:nth-of-type(1)": {
    color: "white",
  },
  "&>p:nth-of-type(2)": {
    color: "white",
    marginTop: "20px",
  },
}));

const ButtonBox = styled(Button)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  backgroundColor: "#1a1a1a",
  zIndex: 2,
  padding: "10px 40px",
  boxShadow: "0px 0px 4px rgba(255,255,255,0.7)",
  marginLeft: "20px",
  [theme.breakpoints.up("s8")]: {
    marginBottom: "20px",
  },
  "&>p": {
    color: "white",
    textTransform: "capitalize",
  },
}));

const WhyBox = ({ isDesktop }) => {
  return (
    <Box2>
      <ImageBackground
        src={isDesktop ? Box1Image : Box2Image}
        alt="Background Image"
      />
      <TextBox>
        <HeadTitle>
          <Typography>WHO</Typography>
          <Typography>WE ARE?</Typography>
        </HeadTitle>
        <HeadDetails>
          <Typography>
            "Project Teho” is an integrated sports engagement platform which
            means "POWER" in Finnish.
          </Typography>
          <Typography>
            We provide tailored solutions to enhance sports engagement by
            leveraging strategic process design to create impactful products
            that drive business success.
          </Typography>
        </HeadDetails>
      </TextBox>
      <ButtonBox>
        <Typography>Know More</Typography>
        <KeyboardArrowRightRoundedIcon style={{ color: "white" }} />
      </ButtonBox>
    </Box2>
  );
};

export default WhyBox;
