import React from "react";
import ThemeContext from "./src/contextWrappers/themeContext";
import ScreenSizeContextWrapper from "./src/contextWrappers/screenSizeContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js";
import("./src/styles/global.css");

export const wrapRootElement = ({ element }) => (
  <ScreenSizeContextWrapper>
    <ThemeContext>{element}</ThemeContext>
  </ScreenSizeContextWrapper>
);
