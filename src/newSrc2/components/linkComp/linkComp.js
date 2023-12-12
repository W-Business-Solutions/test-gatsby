import React from "react";
// import { ScreenSizeContext } from "../../../App.js";
import centeredStyle from "../../styles/centeredStyle";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { ScreenSizeContext } from "../../../contextWrappers/screenSizeContext";
import { useContext } from "react";

const LinkComp = ({ img, href, title }) => {
  const screenSizeContext = useContext(ScreenSizeContext);
  const { screenSize } = screenSizeContext;

  return (
    <Grid item xs={12} lg={4}>
      <Box sx={{ position: "relative", width: "100%" }}>
        <img
          src={img}
          alt=""
          style={{ width: "100%", height: "100%", zIndex: 1 }}
        />
        <Link href={href}>
          <Box
            sx={{
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              bgcolor: "rgba(0,0,0,.5)",
              zIndex: 1,
              position: "absolute",
            }}
          />
          <Typography
            variant={screenSize === "xl" ? "h4" : "h5"}
            sx={{
              zIndex: 5,
              ...centeredStyle,
              color: "white",
              fontWeight: 500,
              width: { xs: "90%", lg: "75%" },
              textAlign: "center",
            }}
          >
            {title}
          </Typography>
        </Link>
      </Box>
    </Grid>
  );
};

export default LinkComp;
