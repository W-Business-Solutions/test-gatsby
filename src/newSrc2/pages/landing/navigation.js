import React, { useState, useEffect } from "react";
import services from "../../assets/landing/recurring.png";
import whoweare from "../../assets/landing/whoweare.png";
import changingtheworld from "../../assets/landing/changingtheworld.png";
import snow from "../../assets/landing/snow.png";
import centeredStyle from "../../styles/centeredStyle";
import { useContext } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import { ScreenSizeContext } from "../../../contextWrappers/screenSizeContext";

const images = [
  {
    text: "Snow Removal",
    src: snow,
    href: "/snow-and-ice-removal",
  },
  {
    text: "Recurring Services",
    src: services,
    href: "/recurring",
  },
  {
    text: "Who We Are",
    src: whoweare,
    href: "/about",
  },
  {
    text: "Changing the World",
    src: changingtheworld,
    href: "/about/givesback",
  },
];

const ImageComp = ({ image, setActiveImg, activeImg }) => {
  const { text, src, href, webp } = image;
  const screenSizeContext = useContext(ScreenSizeContext);
  const { screenSize } = screenSizeContext;

  return (
    <Grid item xs={12} sm={6} md={6}>
      <Link href={href} onMouseEnter={() => setActiveImg(text)}>
        <Paper sx={{ position: "relative", width: "100%" }}>
          <div className="fade-in-overlay" />
          <img src={src} style={{ width: "100%" }} />
          <Box
            sx={{
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              bgcolor: "rgba(0,0,0,.3)",
              zIndex: 1,
              position: "absolute",
            }}
          />
          <Typography
            variant={screenSize === "small" ? "h5" : "h4"}
            sx={{
              fontFamily: "Inter",
              zIndex: 8,
              ...centeredStyle,
              color: "white",
              fontWeight: 600,
              width: "90%",
              textAlign: "center",
            }}
          >
            {text}
          </Typography>
        </Paper>
      </Link>
    </Grid>
  );
};

function Navigation() {
  const [activeImg, setActiveImg] = useState(null);

  return (
    <Box sx={{ width: "100vw" }}>
      <Grid container spacing={{ xs: 0, sm: 1 }} p={{ xs: 0, sm: 1 }}>
        {images.map((image) => (
          <ImageComp
            image={image}
            key={image.text}
            setActiveImg={setActiveImg}
            activeImg={activeImg}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default Navigation;
