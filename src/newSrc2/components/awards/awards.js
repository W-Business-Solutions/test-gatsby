import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import philanthropy from "../../assets/janitorial/awards/philanthropy.png";
import minority from "../../assets/janitorial/awards/minority.png";
import torch from "../../assets/janitorial/awards/torch.png";
import { useContext } from "react";
import { ScreenSizeContext } from "../../../contextWrappers/screenSizeContext";

function Awards({ page }) {
  const screenSizeContext = useContext(ScreenSizeContext);
  const { screenSize } = screenSizeContext;

  return (
    <Grid
      container
      sx={{
        px: { xs: "5vw", lg: "13vw", xl: "20vw" },
        py: { xs: "10vw", lg: "5vw", xl: "3vw" },
      }}
    >
      <Grid item xs={12} lg={6} my="auto">
        {(page === "High Dusting" || page === "Floor Care") &&
        screenSize === "large" ? (
          <>
            <Typography
              sx={{
                fontWeight: 700,
                textAlign: { xs: "center", lg: "left" },
                mb: { xs: 5, lg: 0 },
                lineHeight: "normal",
              }}
              variant={screenSize === "large" ? "h4" : "h3"}
            >
              Why Choose Transblue
            </Typography>
            <Typography
              sx={{
                fontWeight: 700,
                textAlign: { xs: "center", lg: "left" },
                mb: { xs: 5, lg: 0 },
                lineHeight: "normal",
              }}
              variant={screenSize === "large" ? "h4" : "h3"}
            >
              {page}?
            </Typography>
          </>
        ) : (
          <Typography
            sx={{
              fontWeight: 700,
              textAlign: { xs: "center", lg: "left" },
              mb: { xs: 5, lg: 0 },
              lineHeight: "normal",
            }}
            variant={screenSize === "large" ? "h4" : "h3"}
          >
            Why Choose Transblue {page}?
          </Typography>
        )}
      </Grid>
      <Grid
        item
        xs={12}
        lg={6}
        my="auto"
        // sx={{ border: '1px solid red' }}
      >
        <Stack direction="row" spacing={3} justifyContent="center">
          <img
            src={philanthropy}
            alt=""
            style={{
              width: screenSize === "small" ? "100px" : "auto",
              height: "auto",
            }}
          />
          <img
            src={torch}
            alt=""
            style={{
              width: screenSize === "small" ? "100px" : "auto",
              height: "auto",
            }}
          />
          <img
            src={minority}
            alt=""
            style={{
              width: screenSize === "small" ? "100px" : "auto",
              height: "auto",
            }}
          />
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Awards;
