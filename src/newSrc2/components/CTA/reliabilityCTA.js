import React from "react";
import { Box, Typography } from "@mui/material";
import StyledButton from "../styledButton/styledButton";
import centeredStyle from "../../styles/centeredStyle";
import { useContext } from "react";
import { ScreenSizeContext } from "../../../contextWrappers/screenSizeContext";

const fontStyle = {
  fontWeight: "bold",
  fontSize: { xs: "1.3rem", md: "2.125rem" },
  lineHeight: "normal",
};

function ReliabilityCTA({
  bgcolor,
  handleClick,
  buttonText,
  smallText,
  largeText,
}) {
  const screenSizeContext = useContext(ScreenSizeContext);

  const { screenSize } = screenSizeContext;

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        py: { xs: "20vh", md: "25vh", lg: "30vh", xl: "20vh" },
        bgcolor: bgcolor,
      }}
    >
      <Box sx={{ ...centeredStyle, textAlign: "center", width: "90vw" }}>
        {screenSize !== "small" && screenSize !== "medium" && (
          <>
            <Typography sx={fontStyle} component="div">
              {largeText[0].split("*")[0]}{" "}
              <b className="right">{largeText[0].split("*")[1]}</b>{" "}
              {largeText[0].split("*")[2]}
            </Typography>
            <Typography component="div" sx={fontStyle}>
              {largeText[1].split("*")[0]}{" "}
              <b className="right">{largeText[1].split("*")[1]}</b>{" "}
              {largeText[1].split("*")[2]}
            </Typography>
            {largeText[2] && (
              <Typography component="div" sx={fontStyle}>
                {largeText[2].split("*")[0]}{" "}
                <b className="right">{largeText[2].split("*")[1]}</b>{" "}
                {largeText[2].split("*")[2]}
              </Typography>
            )}
          </>
        )}

        {(screenSize === "small" || screenSize === "medium") && (
          <>
            <Typography sx={fontStyle} component="div">
              {smallText[0].split("*")[0]}{" "}
              <b className="right">{smallText[0].split("*")[1]}</b>{" "}
              {smallText[0].split("*")[2]}
            </Typography>
            <Typography component="div" sx={fontStyle}>
              {smallText[1].split("*")[0]}{" "}
              <b className="right">{smallText[1].split("*")[1]}</b>{" "}
              {smallText[1].split("*")[2]}
            </Typography>
            <Typography sx={fontStyle} component="div">
              {smallText[2].split("*")[0]}{" "}
              <b className="right">{smallText[2].split("*")[1]}</b>{" "}
              {smallText[2].split("*")[2]}
            </Typography>
            {smallText[3] && (
              <Typography sx={fontStyle} component="div">
                {smallText[3].split("*")[0]}{" "}
                <b className="right">{smallText[3].split("*")[1]}</b>{" "}
                {smallText[3].split("*")[2]}
              </Typography>
            )}
          </>
        )}

        <StyledButton
          variant="contained"
          sx={{
            bgcolor: "black",
            color: "white",
            borderRadius: "30px",
            width: "200px",
            mt: { xs: 4, lg: 6 },
          }}
          onClick={handleClick}
        >
          {buttonText}
        </StyledButton>
      </Box>
    </Box>
  );
}

export default ReliabilityCTA;
