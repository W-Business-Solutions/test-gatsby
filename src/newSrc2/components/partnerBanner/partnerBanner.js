import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import getplowed from "../../assets/everett/getplowed.png";
import silvertips from "../../assets/everett/silvertips.png";
import sima from "../../assets/snow/sima.png";
import csp from "../../assets/snow/csp.png";

const imageArray = {
  getplowed: getplowed,
  silvertips: silvertips,
  sima: sima,
  csp: csp,
};

function PartnerBanner({ images }) {
  return (
    <Box sx={{ bgcolor: "#d9d9d9", py: 1 }}>
      <Typography
        sx={{
          fontStyle: "italic",
          textAlign: "center",
          fontSize: "16px",
          fontWeight: 600,
          lineHeight: "30px",
        }}
      >
        In partnership with:
      </Typography>
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent={"center"}
        spacing={2}
      >
        {images.map((image) => (
          <img src={imageArray[image]} alt={image} />
        ))}
      </Stack>
    </Box>
  );
}

export default PartnerBanner;
