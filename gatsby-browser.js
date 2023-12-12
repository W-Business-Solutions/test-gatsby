import React from "react";
import ThemeContext from "./src/contextWrappers/themeContext";
import ScreenSizeContextWrapper from "./src/contextWrappers/screenSizeContext";
import("./src/styles/global.css");

export const wrapRootElement = ({ element }) => (
  <ThemeContext>{element}</ThemeContext>
);
