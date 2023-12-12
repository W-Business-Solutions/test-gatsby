import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import StyledButton from "../../components/styledButton/styledButton";
import centeredStyle from "../../styles/centeredStyle";
import { useContext } from "react";
// import { ScreenSizeContext } from "../../../../src/App.js";
import { ScreenSizeContext } from "../../../contextWrappers/screenSizeContext";

function Solutions({ setOpen }) {
  const screenSizeContext = useContext(ScreenSizeContext);
  const { screenSize } = screenSizeContext;

  return (
    <div id={`solutions_${screenSize}`}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          bgcolor: "rgba(0,0,0,.6)",
          zIndex: 3,
        }}
      />
      <Box
        sx={{
          ...centeredStyle,
          width: "90%",
          maxWidth: "600px",
          zIndex: 5,
        }}
      >
        <Typography
          variant={screenSize === "small" ? "h6" : "h4"}
          sx={{
            color: "white",
            fontFamily: "Inter",
            fontWeight: 600,
            lineHeight: 1.25,
          }}
        >
          Providing solutions to multi-site industries across North America.
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "white",
            fontFamily: "Inter",
            my: 5,
            lineHeight: "130%",
            fontSize: "1rem",
          }}
        >
          Large-scale needs don't need to be long-term problems. At Transblue,
          we're experts at providing swift and effective solutions for our
          commercial, government, and multi-family clients.
        </Typography>
        <StyledButton
          sx={{
            bgcolor: "white",
            fontFamily: "Inter",
            borderRadius: "30px",
            width: "200px",
            color: "black",
            fontWeight: 500,
          }}
          onClick={() => setOpen(true)}
          variant="contained"
        >
          let's get started
        </StyledButton>
      </Box>
    </div>
  );
}

export default Solutions;
