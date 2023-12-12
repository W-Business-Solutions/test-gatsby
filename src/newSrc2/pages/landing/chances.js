import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import centeredStyle from "../../styles/centeredStyle";
import StyledButton from "../../components/styledButton/styledButton";
import { useContext } from "react";
// import { ScreenSizeContext } from "../../../../src/App.js";
import { ScreenSizeContext } from "../../../contextWrappers/screenSizeContext";

function Chances({ setOpen }) {
  const screenSizeContext = useContext(ScreenSizeContext);
  const { screenSize } = screenSizeContext;

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        py: { xs: "20vh", md: "15vh", lg: "30vh" },
      }}
    >
      <Box sx={{ ...centeredStyle, textAlign: "center", width: "90vw" }}>
        <Typography
          variant={screenSize === "small" ? "h6" : "h4"}
          sx={{ fontFamily: "Inter", fontWeight: "bold" }}
        >
          Stop giving them second chances;
        </Typography>
        <Typography
          variant={screenSize === "small" ? "h6" : "h4"}
          component="div"
          sx={{ mb: 4, fontFamily: "Inter", fontWeight: "bold" }}
        >
          let Transblue make it <b className="right">right.</b>
        </Typography>
        <StyledButton
          variant="contained"
          sx={{
            bgcolor: "black",
            color: "white",
            fontFamily: "Inter",
            borderRadius: "30px",
            width: "200px",
          }}
          onClick={() => setOpen(true)}
        >
          let's get started
        </StyledButton>
      </Box>
    </Box>
  );
}

export default Chances;
