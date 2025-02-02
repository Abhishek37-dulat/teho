import { Box, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import c1 from "../assets/card3-end 1.png";
import c2 from "../assets/image 87.png";
import l1 from "../assets/Clip path group.svg";
import l2 from "../assets/Clip path group (1).svg";
import lo from "../assets/location-pin-3--navigation-map-maps-pin-gps-location.svg";
import web from "../assets/web--server-world-internet-earth-www-globe-worldwide-web-network.svg";
import rec from "../assets/Rectangle.svg";
import home from "../assets/akar-icons_desktop-device.svg";
import ti from "../assets/tickets--hobby-ticket-event-entertainment-stub-theater-entertainment-culture.png";
import tou from "../assets/esports--entertainment-gaming-esports.svg";
import { useNavigate } from "react-router-dom";
import tor from "../assets/Union (2).svg";

const BoxAtom = styled(Box)(({ theme }) => ({
  //   backdropFilter: "blur(10px)",
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
  justifyContent: "space-between",
  alignItems: "center",
 
  [theme.breakpoints.up("s8")]: {
    justifyContent: "center",
  },
}));
const IconBoxes = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
  "&:active": {
    transform: "scale(1)",
  },
  [theme.breakpoints.up("s8")]: {
    width: "190px",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    padding: "10px 20px 10px 20px",
    borderRadius: "10px",
    marginLeft: "10px",

    "&>div": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
}));
const IconBox1 = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  width: "60px",
  height: "60px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "100%",
  transition: "background-color 0.3s ease-in-out",
  boxShadow: "0px 0px 3px rgba(255,255,255,0.5)",

  [theme.breakpoints.up("s8")]: {
    width: "40px",
    height: "40px",
    marginRight: "20px",
    "&>img": {
      width: "20px",
    },
  },
}));

const Box1Text = styled(Typography)(({ theme }) => ({
  //   border: "1px solid black",
  color: "white",
  marginTop: "5px",
}));
const ViewAllDetails = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "40px",
  marginLeft: "-10px",
  marginRight: "-10px",
  [theme.breakpoints.up("s8")]: {
    width: "80%",
    marginLeft: "10%",
    marginRight: "10%",
  },
  [theme.breakpoints.up("lmd")]: {
    width: "70%",
    marginLeft: "15%",
    marginRight: "15%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "50%",
    marginLeft: "25%",
    marginRight: "25%",
  },
  "&>div:nth-of-type(1)": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    backgroundColor: "#A60019",
    color: "#fff",
    width: "60px",
    height: "60px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
    "&:active": {
      transform: "scale(1)",
    },
    "&>svg": {
      fontSize: "34px",
    },
  },
  "&>div:nth-of-type(2)": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&>p": {
      color: "#fff",
      fontSize: "24px",
      fontWeight: "bold",
    },
  },
  "&>div:nth-of-type(3)": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    backgroundColor: "#A60019",
    color: "#fff",
    width: "60px",
    height: "60px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
    "&:active": {
      transform: "scale(1)",
    },
    "&>svg": {
      fontSize: "34px",
    },
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "40px",
  marginLeft: "-40px",
  marginRight: "-40px",
  "&>img": {
    width: "100%",
    height: "300px",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
      height: "300px",
      boxShadow: "0px 0px rgba(255,255,255,0.7)",
      borderRadius: "5px",
    },
  },
}));

const DetailsBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px",
  [theme.breakpoints.up("sm")]: {
    padding: "0px 100px",
  },
  [theme.breakpoints.up("s8")]: {
    padding: "0px 200px",
  },
  [theme.breakpoints.up("lmd")]: {
    padding: "0px 300px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "0px 400px",
  },
  "&>p": {
    color: "#fff",
    textAlign: "center",
  },
}));

const DetailsBox2 = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px",
  "&>p": {
    color: "#DD0022",
    textAlign: "center",
  },
}));

const DetailsBox3 = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  marginTop: "20px",
  [theme.breakpoints.up("sm")]: {
    padding: "0px 100px",
  },
  [theme.breakpoints.up("s8")]: {
    padding: "0px 200px",
  },
  [theme.breakpoints.up("lmd")]: {
    padding: "0px 300px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "0px 400px",
  },
  "&>div": {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    marginRight: "10px",
    "&>p": {
      color: "#fff",
      fontSize: "12px",
      fontWeight: "300",
      marginLeft: "10px",
    },
  },
}));

const DetailsBox4 = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px",
  "&>img": {
    boxShadow: "0px 0px 4px rgba(0,0,0,0.4)",
  },
}));
const CentresBox = ({ isDesktop }) => {
  const [color, setColor] = useState({ color: "#A60019", itemNumber: 0 });
  const [imageIndex, setImageIndex] = useState(0);
  const navigate = useNavigate();
  const lists = [
    {
      title: "PLAY ARENA",
      image: c1,
      details:
        "Play Arena is a vibrant sports and entertainment hub offering state-of-the-art facilities for various activities like football, cricket, badminton, and more.",
      logo: l1,
      location:
        "PLaY, Sy No 75, Kasavanahalli, Central Jail Road Off Sarjapur Road, Bangalore 560035",
      website: "www.playarena.in",
      mapLocation:
        "https://www.google.com/maps/place/Torq03/@12.963384,77.7031765,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae1461ccf19f97:0x603b5ccd88b0a952!8m2!3d12.963384!4d77.7031765!16s%2Fg%2F11cly730zm?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D",
    },
    {
      title: "TORQ03",
      image: c2,
      details:
        "Torq03 is a premier destination for adrenaline-filled experiences, featuring world-class go-karting tracks, thrilling racing events, and vibrant recreational activities.",
      logo: l2,
      location:
        "PLaY, Sy No 75, Kasavanahalli, Central Jail Road Off Sarjapur Road, Bangalore 560035",
      website: "www.playarena.in",
      mapLocation:
        "https://www.google.com/maps/place/Torq03/@12.963384,77.7031765,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae1461ccf19f97:0x603b5ccd88b0a952!8m2!3d12.963384!4d77.7031765!16s%2Fg%2F11cly730zm?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D",
    },
  ];
  const handleEventChange = (color, itemNumber) => {
    setColor({ color, itemNumber });
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
  const handleChange = (n) => {
    // Use modulo logic to make sure the index wraps around
    setImageIndex((prevIndex) => (prevIndex + n + lists.length) % lists.length);
  };
  const handleMap = (location) => {
    window.open(location, "_blank");
  };
  return (
    <BoxAtom>
      {!isDesktop && (
        <MainBox>
          <IconBoxes>
            <IconBox1
              style={{
                backgroundColor: color.itemNumber === 0 ? color.color : "",
              }}
              onClick={() => handleEventChange("#A60019", 0)}
            >
              {/* <HomeRoundedIcon sx={{ color: "white" }} /> */}
              <img src={home} alt="images" />
            </IconBox1>
            <Box1Text>Centres</Box1Text>
          </IconBoxes>
          <IconBoxes>
            <IconBox1
              style={{
                backgroundColor: color.itemNumber === 1 ? color.color : "",
              }}
              onClick={() => handleEventChange("#0074c8", 1)}
            >
              {/* <BookOnlineIcon sx={{ color: "white" }} /> */}
              <img src={ti} alt="images" />
            </IconBox1>
            <Box1Text>Events</Box1Text>
          </IconBoxes>
          <IconBoxes>
            <IconBox1
              style={{
                backgroundColor: color.itemNumber === 2 ? color.color : "",
              }}
              onClick={() => handleEventChange("#009f83", 2)}
            >
              <img src={tou} alt="images" />
              {/* <SportsEsportsIcon sx={{ color: "white" }} /> */}
            </IconBox1>
            <Box1Text>Tournaments</Box1Text>
          </IconBoxes>
        </MainBox>
      )}
      {isDesktop && (
        <MainBox>
          <IconBoxes onClick={() => navigate("/centres")}>
            <Box>
              <IconBox1
                style={{
                  backgroundColor: "#A60019",
                }}
              >
                {/* <HomeRoundedIcon sx={{ color: "white" }} /> */}
                <img src={home} alt="images" />
              </IconBox1>
              <Box1Text>Centres</Box1Text>
            </Box>
            <img src={tor} alt="images" />
          </IconBoxes>
          <IconBoxes onClick={() => navigate("/events")}>
            <Box>
              <IconBox1
                style={{
                  backgroundColor: "#0074c8",
                }}
              >
                {/* <BookOnlineIcon sx={{ color: "white" }} /> */}
                <img src={ti} alt="images" />
              </IconBox1>
              <Box1Text>Events</Box1Text>
            </Box>
            <img src={tor} alt="images" />
          </IconBoxes>
          <IconBoxes onClick={() => navigate("/tournaments")}>
            <Box>
              <IconBox1
                style={{
                  backgroundColor: "#009f83",
                }}
              >
                <img src={tou} alt="images" />
                {/* <SportsEsportsIcon sx={{ color: "white" }} /> */}
              </IconBox1>
              <Box1Text>Tournaments</Box1Text>
            </Box>
            <img src={tor} alt="images" />
          </IconBoxes>
        </MainBox>
      )}

      <ViewAllDetails>
        <Box onClick={() => handleChange(-1)}>
          <ArrowBackRoundedIcon />
        </Box>
        <Box>
          <Typography>{lists[imageIndex].title}</Typography>
        </Box>
        <Box onClick={() => handleChange(1)}>
          <ArrowForwardRoundedIcon />
        </Box>
      </ViewAllDetails>
      <ImageBox>
        <img src={lists[imageIndex].image} alt="images" />
      </ImageBox>
      <DetailsBox>
        <Typography>{lists[imageIndex].details}</Typography>
      </DetailsBox>
      <DetailsBox2>
        <Typography>Specifications</Typography>
      </DetailsBox2>
      <DetailsBox2>
        <img src={lists[imageIndex].logo} alt="images" />
      </DetailsBox2>
      <DetailsBox3>
        <Box>
          <img src={lo} alt="images" />
          <Typography>Location: {lists[imageIndex].location}</Typography>
        </Box>
        <Box>
          <img src={web} alt="images" />
          <Typography>Website: {lists[imageIndex].website}</Typography>
        </Box>
      </DetailsBox3>
      <DetailsBox4>
        <img
          src={rec}
          onClick={() => handleMap(lists[imageIndex].mapLocation)}
          alt="images"
        />
      </DetailsBox4>
    </BoxAtom>
  );
};

export default CentresBox;
