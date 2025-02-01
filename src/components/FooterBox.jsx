import { Box, styled, Typography } from "@mui/material";
import React from "react";
import Box2Image from "../assets/fe2301a10103d27433cbf0b8c65c088c.png";
import logoIcon from "../assets/teho-white 1.svg";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import location from "../assets/location-pin-3--navigation-map-maps-pin-gps-location.svg";
import call from "../assets/Vector.svg";
import insta from "../assets/insta.svg";
import twet from "../assets/twet.svg";
import you from "../assets/you.svg";

const MainBox = styled(Box)(({ theme }) => ({
  position: "relative",
  //   border: "1px solid black",
  //   height: "120vh",
  //   overflow: "hidden",
  backgroundColor: "black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: "20px",
  width: "calc(100% - 40px)",
  //   marginBottom: "280px",
}));

const ImageBackground = styled("img")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 1,
  opacity: "40%",
});
const Box1 = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  zIndex: 2,
  "&>div": {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    color: "white",
    marginTop: "20px",
    marginLeft: "10px",
    "&>p": {
      marginLeft: "5px",
    },
  },
}));

const Box2 = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  zIndex: 2,
  backgroundColor: "#1a1a1a",
  width: "calc(100% - 40px)",
  padding: "20px",
  borderRadius: "10px",
  marginTop: "20px",
  "&>div": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",

    //   marginTop:"20px",
    padding: "20px",
    "&>p": {
      color: "#81807e",
      // marginLeft: "5px",
      marginTop: "8px",
    },
  },
}));

const Box3 = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 2,
  width: "calc(100% - 40px)",
  padding: "20px",
  marginTop: "20px",

  "&>div": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    borderRadius: "100%",
    backgroundColor: "0px 0px 4px rgba(0,0,0,1)",
    margin: "2px",
    "&>img": {},
  },
}));

const Box4 = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 2,
  width: "calc(100% - 40px)",
  padding: "20px",
  "&>p": {
    color: "#fff",
    zIndex: 2,
  },
}));
const FooterBox = () => {
  let itemForHome = ["Who We Are", "Products", "About Us", "Contact Us"];
  let itemForProducts = [
    "Racing Simulator",
    "Leaderboard",
    "Leaderboard v2.0",
    "Simulator 4 dof",
  ];
  return (
    <MainBox>
      <ImageBackground src={Box2Image} alt="Background Image" />
      <Box1>
        <img src={logoIcon} alt="logo" style={{ width: "200px" }} />
        <Box>
          <MailOutlineRoundedIcon />
          <Typography>partner@projectteho.com</Typography>
        </Box>
        <Box>
          <img src={location} alt="logoww" style={{ width: "24px" }} />
          <Typography>
            16, Bhuvanappa layout, Tavarekere Main rd, Bengaluru, Karnataka
            560029
          </Typography>
        </Box>
        <Box>
          <img src={call} alt="logo" style={{ width: "24px" }} />
          <Typography>8088221920</Typography>
        </Box>
      </Box1>
      <Box2>
        <Box>
          <Typography style={{ color: "#f8990b", fontWeight: "bold" }}>
            Home
          </Typography>
          {itemForHome?.map((data) => (
            <Typography>{data}</Typography>
          ))}
        </Box>
        <Box>
          <Typography style={{ color: "#1cb1d9", fontWeight: "bold" }}>
            Products
          </Typography>
          {itemForProducts?.map((data) => (
            <Typography>{data}</Typography>
          ))}
        </Box>
      </Box2>
      <Box3>
        <Box>
          <img src={insta} alt="insta" style={{ width: "24px" }} />
        </Box>
        <Box>
          <img src={twet} alt="twet" style={{ width: "24px" }} />
        </Box>
        <Box>
          <img src={you} alt="you" style={{ width: "24px" }} />
        </Box>
      </Box3>
      <Box4>
        <Typography>Project Teho © 2025. All Rights Reserved</Typography>
      </Box4>
    </MainBox>
  );
};

export default FooterBox;
