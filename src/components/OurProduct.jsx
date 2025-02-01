import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import Box2Image from "../assets/fe2301a10103d27433cbf0b8c65c088c.png";
import P1 from "../assets/Vector (2).png";

import P2 from "../assets/Vector (1).png";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

const Box3 = styled(Box)(({ theme }) => ({
  position: "relative",
  //   border: "1px solid black",
  height: "auto",
  //   overflow: "hidden",
  backgroundColor: "black",
  paddingBottom: "250px",
}));

const ImageBackground = styled("img")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 1,
  opacity: "10%",
});

const TextBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  padding: "60px 90px 60px 20px",
}));

const HeadTitle = styled(Typography)(({ theme }) => ({
  //   border: "1px solid black",
  marginTop: "100px",
  display: "flex",
  "&>p:nth-of-type(1)": {
    color: "white",
    fontWeight: "bold",
    marginRight: "10px",
    fontSize: "24px",
  },
  "&>p:nth-of-type(2)": {
    color: "#f8990b",
    fontWeight: "bold",
    fontSize: "24px",
  },
}));

const ProductDetails = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "&>p:nth-of-type(1)": {
    color: "white",
    fontWeight: "bold",
    marginRight: "10px",
    fontSize: "24px",
  },
  "&>p:nth-of-type(2)": {
    color: "white",
    fontWeight: "200",
    fontSize: "14px",
  },
}));

const ProductDetails2 = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "240px",
  "&>p:nth-of-type(1)": {
    color: "white",
    fontWeight: "500",
    fontSize: "20px",
  },
}));
const Image1 = styled("img")({
  width: "80%",
  //   border: "1px solid black",
  marginTop: "-100px",
});
const ButtonBox = styled(Button)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  backgroundColor: "#1a1a1a",
  zIndex: 2,
  padding: "10px 40px",
  boxShadow: "0px 0px 4px rgba(255,255,255,0.7)",
  marginTop: "40px",
  "&>p": {
    color: "white",
    textTransform: "capitalize",
  },
}));

const ButtonBox2 = styled(Button)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  backgroundColor: "#1a1a1a",
  zIndex: 2,
  padding: "10px 40px",
  boxShadow: "0px 0px 4px rgba(255,255,255,0.7)",
  marginTop: "240px",
  "&>p": {
    color: "white",
    textTransform: "capitalize",
  },
}));
const ButtonBox3 = styled(Button)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  backgroundColor: "#1a1a1a",
  zIndex: 2,
  padding: "10px 40px",
  boxShadow: "0px 0px 4px rgba(255,255,255,0.7)",
  marginTop: "20px",
  "&>p": {
    color: "white",
    textTransform: "capitalize",
  },
}));

const ProductDetails3 = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "40px",
  "&>p:nth-of-type(1)": {
    color: "white",
    fontWeight: "500",
    marginRight: "10px",
    fontSize: "20px",
  },
  "&>p:nth-of-type(2)": {
    color: "white",
    fontWeight: "200",
    fontSize: "14px",
  },
}));

const ButtonBox4 = styled(Button)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  backgroundColor: "#1a1a1a",
  zIndex: 2,
  padding: "10px 40px",
  boxShadow: "0px 0px 4px rgba(255,255,255,0.7)",
  marginTop: "20px",
  width: "calc(100% - 40px)",
  margin: "20px",
  "&>p": {
    color: "white",
    textTransform: "capitalize",
  },
}));

const Image2 = styled("img")({
  width: "80%",
  //   border: "1px solid black",
  filter: "grayscale(100%)",
});

const UpComing = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "-150px",
  marginBottom: "150px",
  backgroundColor: "#1a1a1a",
  borderRadius: "8px",
  boxShadow: "0px 0px 4px rgba(255,255,255,0.7)",
  opacity: "90%",
  "&>p:nth-of-type(1)": {
    color: "white",
    fontWeight: "500",
    fontSize: "12px",
    padding: "10px 40px",
    textTransform: "uppercase",
  },
}));
const MBox1 = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "20px",
  height: "20px",
  borderRadius: "100%",
  marginRight: "20px",
}));

const MBox1P = styled(Typography)(({ theme }) => ({
  //   border: "1px solid black",
  color: "white",
  fontSize: "16px",
  padding: "2px 2px",
}));

const OurProduct = () => {
  return (
    <Box3>
      <ImageBackground src={Box2Image} alt="Background Image" />
      {/* <ImageBackground2 src={Box2Image} alt="Background Image" /> */}
      {/* <ImageBackground3 src={Box2Image} alt="Background Image" /> */}
      <TextBox>
        <HeadTitle>
          <Typography>OUR</Typography>
          <Typography>PRODUCTS</Typography>
        </HeadTitle>
      </TextBox>
      <ProductDetails>
        <Image1 src={P1} alt="p1" />
        <Typography>Racing Simulator - 2 dof</Typography>
        <Typography>with integrated leaderboard</Typography>
        <ButtonBox>
          <Typography>Know More</Typography>
          <KeyboardArrowRightRoundedIcon style={{ color: "white" }} />
        </ButtonBox>
      </ProductDetails>
      <ProductDetails>
        {/* <Image1 src={P1} alt="p1" />
        <Typography>Racing Simulator - 2 dof</Typography>
        <Typography>with integrated leaderboard</Typography> */}
        <ButtonBox2>
          <Typography>Know More</Typography>
          <KeyboardArrowRightRoundedIcon style={{ color: "white" }} />
        </ButtonBox2>
      </ProductDetails>
      <ProductDetails2>
        <Typography>Leaderboard</Typography>
        <ButtonBox3>
          <Typography>Know More</Typography>
          <KeyboardArrowRightRoundedIcon style={{ color: "white" }} />
        </ButtonBox3>
      </ProductDetails2>

      <ProductDetails3>
        <Image2 src={P2} alt="p2" />
        <UpComing>
          <Typography>coming soon</Typography>
        </UpComing>
        <Typography>Racing Simulator - 4 dof</Typography>
        <ButtonBox4>
          <MBox1
            style={{
              backgroundColor: "#f8990b",
            }}
          >
            <MBox1P>5</MBox1P>
          </MBox1>
          <Typography>View All Products</Typography>
          <KeyboardArrowRightRoundedIcon style={{ color: "white" }} />
        </ButtonBox4>
      </ProductDetails3>
    </Box3>
  );
};

export default OurProduct;
