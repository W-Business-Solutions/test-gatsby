import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import React, { memo } from "react";
import centeredStyle from "../../styles/centeredStyle";
import cbre from "../../assets/landing/cbre.png";
import walmart from "../../assets/landing/walmart.png";
import wellsfargo from "../../assets/landing/wellsfargo.png";
import starbucks from "../../assets/landing/starbucks.png";
import costco from "../../assets/landing/costco.png";
import { ScreenSizeContext } from "../../../contextWrappers/screenSizeContext";
import { useContext } from "react";

const images = [
  {
    src: starbucks,
    alt: "Starbucks",
    maxWidth: "90px",
    widths: {
      small: "45px",
      large: "90px",
      xl: "100px",
    },
  },
  {
    src: cbre,
    alt: "",
    maxWidth: "130px",
    widths: {
      small: "60px",
      large: "130px",
      xl: "200px",
    },
  },
  {
    src: costco,
    alt: "",
    maxWidth: "130px",
    widths: {
      small: "60px",
      large: "130px",
      xl: "200px",
    },
  },
  {
    src: walmart,
    alt: "walmart",
    maxWidth: "130px",
    widths: {
      small: "60px",
      large: "130px",
      xl: "200px",
    },
  },
  {
    src: wellsfargo,
    alt: "",
    maxWidth: "130px",
    widths: {
      small: "60px",
      large: "130px",
      xl: "200px",
    },
  },
];

const ImageComp = ({ image, screenSize }) => {
  const { src, alt, maxWidth, widths } = image;
  return (
    <Grid item sx={{ px: { xs: 0, md: 2 } }} my="auto">
      <img
        src={src}
        alt={alt}
        style={{ maxWidth: widths?.[screenSize] || maxWidth }}
      />
    </Grid>
  );
};

function Brands({ bgcolor }) {
  const screenSizeContext = useContext(ScreenSizeContext);
  const { screenSize } = screenSizeContext;

  return (
    <Box
      sx={{
        width: "100vw",
        position: "relative",
        py: { xs: "15vh", md: "15vh", lg: "25vh", xl: "18vh" },
        bgcolor: bgcolor,
      }}
    >
      <Box sx={{ ...centeredStyle, width: "100vw", textAlign: "center" }}>
        <Typography
          variant={screenSize === "small" ? "h6" : "h4"}
          sx={{
            color: "white",
            fontFamily: "Inter",
            mb: {
              xs: 2,
              md: 4,
              lg: 4,
              xl: 4,
            },
            fontWeight: 700,
          }}
        >
          Servicing Top Brands Nationwide
        </Typography>
        <Grid
          container
          sx={{ display: "flex", justifyContent: "center" }}
          spacing={screenSize === "large" || screenSize === "xl" ? 10 : 1}
        >
          {images.map((image) => (
            <ImageComp image={image} key={image.src} screenSize={screenSize} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

// <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
// <script>
//   hbspt.forms.create({
//     region: "na1",
//     portalId: "39710783",
//     formId: "cdfc9932-77c7-4b17-957c-03d9f80aec8a"
//   });
// </script>

export default memo(Brands);
