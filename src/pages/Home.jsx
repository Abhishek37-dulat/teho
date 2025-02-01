import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import TopBar from "../components/TopBar";
import homevideo from "../assets/01c9bf78074795a084ac805e762de43795f6cad3.mp4";
import AtomicBox from "../components/AtomicBox";
import WhyBox from "../components/WhyBox";
import OurProduct from "../components/OurProduct";
import ContactUsForm from "../components/ContactUsForm";
import DrawerBox from "../components/DrawerBox";
import FooterBox from "../components/FooterBox";
import { useRef } from "react";
import { useEffect } from "react";

const MainBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
}));

const Box1 = styled(Box)(({ theme }) => ({
  position: "relative",
  //   border: "1px solid black",
  minHeight: "100vh",
  overflow: "hidden",
}));

const VideoBackground = styled("video")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: -1,
});

const Home = () => {
  const [state, setState] = useState({
    right: false,
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

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

  const handleScroll = () => {
    if (videoRef.current && !isPlaying) {
      videoRef.current.muted = false;
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log("Video play failed:", error);
        });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isPlaying]);

  return (
    <MainBox>
      <DrawerBox toggleDrawer={toggleDrawer} state={state} />
      <Box1>
        <VideoBackground ref={videoRef} autoPlay loop muted preload="auto">
          <source src={homevideo} type="video/mp4" />
        </VideoBackground>

        <TopBar toggleDrawer={toggleDrawer} />
      </Box1>
      <AtomicBox />
      <WhyBox />
      <OurProduct />
      <ContactUsForm />
      <FooterBox />
      {/* <Box3></Box3> */}
    </MainBox>
  );
};

export default Home;
