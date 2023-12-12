import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ScreenSizeContext } from "../../../contextWrappers/screenSizeContext";

// import { ScreenSizeContext } from "../../../../src/App.js";

function SmallHeader({ title, page, template, subtitle }) {
  const screenSizeContext = useContext(ScreenSizeContext);
  const { screenSize } = screenSizeContext;

  const [mt, setMt] = useState("36px");

  useEffect(() => {
    if (screenSize === "small") {
      // leave mt at 36px for all small screens
    } else {
      if (page !== "contact" && page !== "privacy" && page !== "weather") {
        setMt("96px");
      }
    }
  }, []);

  return (
    <Box sx={{ mt: mt, width: "100vw", position: "relative" }}>
      <Box
        sx={{
          bgcolor: "rgba(0,0,0,.5)",
          width: "100%",
          height: "100%",
          zIndex: 4,
          top: 0,
          left: 0,
          position: "absolute",
        }}
      />
      <div className={`small-header ${page} ${screenSize}`} />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 4,
          textAlign: "center",
        }}
      >
        <Typography
          variant={
            screenSize === "small" && template === "janitorial" ? "h4" : "h3"
          }
          sx={{
            color: "white",
            fontFamily: "Inter",
            zIndex: 5,
            fontWeight: 700,
            width: "100vw",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant={screenSize !== "small" && "h6"}
            sx={{
              color: "white",
              fontFamily: "Inter",
              zIndex: 5,
              fontWeight: 400,
              mt: { xs: 1 },
              width: "100vw",
              textAlign: "center",
              // border: '1px solid red',
              width: "100%",
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default SmallHeader;
