import React from "react";
import { Box, Typography, Stack } from "@mui/material";
// import { ScreenSizeContext } from "../../../../src/App.js";
import { useLocation } from "@reach/router";

function Review({ img, reviewLine1, reviewLine2, name, title }) {
  // const screenSizeContext = useContext(ScreenSizeContext);
  // const { screenSize } = screenSizeContext;
  const screenSize = "xl";

  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <Box
        sx={{
          width: "100vw",
          bgcolor: "rgba(217, 217, 217, 1)",
          px: { xs: "10vw", lg: "15vw", xl: "20vw" },
          pb: { xs: "5vh", md: "10vh", lg: "15vh", xl: "5vh" },
          pt: {
            xs: "5vh",
            md: "10vh",
            lg: pathname === "/snow-and-ice-removal" ? "5vh" : "15vh",
            xl: pathname === "/snow-and-ice-removal" ? "5vh" : "5vh",
          },
        }}
      >
        <Typography
          variant={screenSize === "small" ? "h5" : "h4"}
          sx={{
            fontStyle: "italic",
            fontWeight: 600,
            mb: 5,
          }}
        >
          {reviewLine1}
        </Typography>
        <Typography
          variant={screenSize === "small" ? "h5" : "h4"}
          sx={{
            fontStyle: "italic",
            fontWeight: 600,
            mb: { xs: 5, md: 7 },
          }}
        >
          {reviewLine2}
        </Typography>

        <Stack
          direction="row"
          spacing={{ xs: 2, md: 3 }}
          alignItems="center"
          justifyContent="center"
        >
          <Box sx={{ width: { xs: "20vw", md: "auto" } }}>
            <img src={img} alt="" style={{ width: "100%" }} />
          </Box>
          <Box>
            <Typography
              sx={{
                fontWeight: 700,
                textAlign: "left",
                lineHeight: "normal",
                mb: { xs: 1, md: 0 },
              }}
              variant={screenSize === "small" ? "body2" : "h6"}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                lineHeight: "normal",
                fontWeight: 400,
              }}
              variant={screenSize === "small" ? "body2" : "h6"}
            >
              {title}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default Review;
