import React from "react";
import ThemeContext from "./src/contextWrappers/themeContext";
import("./src/styles/global.css");

export const wrapRootElement = ({ element }) => (
  <ThemeContext>{element}</ThemeContext>
);
