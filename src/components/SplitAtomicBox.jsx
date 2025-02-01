import { Box, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { useNavigate } from "react-router-dom";
import home from "../assets/akar-icons_desktop-device.svg";
import ti from "../assets/tickets--hobby-ticket-event-entertainment-stub-theater-entertainment-culture.png";
import tou from "../assets/esports--entertainment-gaming-esports.svg";

const ItemBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
const BoxAtom = styled(Box)(({ theme }) => ({
  //   position: "sticky",
  top: "20px",
  marginTop: "-121px",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  zIndex: 10,
  padding: "20px 20px 0px 20px",
  borderRadius: "10px",
  marginLeft: "20px",
  marginRight: "20px",
  // boxShadow:"0px 0px -5p rgba(255, 255, 255, 0.5)"
}));
const MainBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
}));
const IconBoxes = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
}));
const IconBox1 = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  width: "40px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "100%",
  transition: "background-color 0.3s ease-in-out",
  boxShadow: "0px 0px 3px rgba(255,255,255,0.5)",

  "&>img": {
    width: "20px",
  },
}));

const Box1Text = styled(Typography)(({ theme }) => ({
  //   border: "1px solid black",
  color: "white",
  //   marginTop: "5px",
  marginLeft: "10px",
}));
const ViewAllDetails = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "40px",
  marginLeft: "-20px",
  marginRight: "-20px",
  marginTop: "15px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
  "&:active": {
    transform: "scale(1)",
  },
}));

const MainViewAllDetails = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  backgroundColor: "#1a1a1a",
  borderRadius: "10px",
  boxShadow: "0px 0px 3px rgba(255,255,255,0.3)",
  padding: "0px 20px",
}));

const ViewAllDetailsText = styled(Typography)(({ theme }) => ({
  //   border: "1px solid black",
  color: "white",
  marginTop: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
const MBox1 = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "20px",
  height: "20px",
  borderRadius: "100%",
}));

const MBox1P = styled(Typography)(({ theme }) => ({
  //   border: "1px solid black",
  color: "white",
  fontSize: "16px",
  padding: "2px 2px",
}));

const MBox2 = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "5px",
}));

const SplitAtomicBox = () => {
  const [color, setColor] = useState({ color: "#A60019", itemNumber: 0 });
  const lists = ["Centers", "Events", "Tournaments"];
  const navigate = useNavigate();

  const handleEventChange = (color, itemNumber) => {
    setColor({ color, itemNumber });
  };
  const handleNavigate = (itemNumber) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (itemNumber === 0) {
      navigate("/centres");
    }
    if (itemNumber === 1) {
      navigate("/events");
    }
    if (itemNumber === 2) {
      navigate("/tournaments");
    }
  };
  return (
    <ItemBox>
      <BoxAtom>
        <MainBox>
          <IconBoxes>
            <IconBox1
              style={{
                backgroundColor: color.itemNumber === 0 ? color.color : "",
              }}
            >
              <img src={home} alt="images" />
            </IconBox1>
            <Box1Text>Centres</Box1Text>
          </IconBoxes>
        </MainBox>

        <ViewAllDetails>
          <MainViewAllDetails onClick={() => handleNavigate(0)}>
            {/* <MBox1
              style={{
                backgroundColor: color.color,
              }}
            >
              <MBox1P>2</MBox1P>
            </MBox1> */}
            <MBox2>
              <ViewAllDetailsText>View All Centers</ViewAllDetailsText>
              <KeyboardArrowRightRoundedIcon style={{ color: "white" }} />
            </MBox2>
          </MainViewAllDetails>
        </ViewAllDetails>
      </BoxAtom>
      <BoxAtom>
        <MainBox>
          <IconBoxes>
            <IconBox1
              style={{
                backgroundColor: "#0074c8",
              }}
            >
              <img src={ti} alt="images" />
            </IconBox1>
            <Box1Text>Events</Box1Text>
          </IconBoxes>
        </MainBox>

        <ViewAllDetails>
          <MainViewAllDetails onClick={() => handleNavigate(1)}>
            {/* <MBox1
              style={{
                backgroundColor: "#0074c8",
              }}
            >
              <MBox1P>2</MBox1P>
            </MBox1> */}
            <MBox2>
              <ViewAllDetailsText>View All Events</ViewAllDetailsText>
              <KeyboardArrowRightRoundedIcon style={{ color: "white" }} />
            </MBox2>
          </MainViewAllDetails>
        </ViewAllDetails>
      </BoxAtom>
      <BoxAtom>
        <MainBox>
          <IconBoxes>
            <IconBox1
              style={{
                backgroundColor: "#009f83",
              }}
              onClick={() => handleEventChange("#009f83", 2)}
            >
              <img src={tou} alt="images" />
            </IconBox1>
            <Box1Text>Tournaments</Box1Text>
          </IconBoxes>
        </MainBox>

        <ViewAllDetails>
          <MainViewAllDetails onClick={() => handleNavigate(2)}>
            {/* <MBox1
              style={{
                backgroundColor: "#009f83",
              }}
            >
              <MBox1P>3</MBox1P>
            </MBox1> */}
            <MBox2>
              <ViewAllDetailsText>View All Tournaments</ViewAllDetailsText>
              <KeyboardArrowRightRoundedIcon style={{ color: "white" }} />
            </MBox2>
          </MainViewAllDetails>
        </ViewAllDetails>
      </BoxAtom>
    </ItemBox>
  );
};

export default SplitAtomicBox;
