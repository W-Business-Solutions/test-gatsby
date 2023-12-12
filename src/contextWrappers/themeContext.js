import React from "react";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

function ThemeContext({ children }) {
  const fontTheme = createTheme();
  const interTheme = createTheme();

  return (
    <ThemeProvider theme={fontTheme}>
      <ThemeProvider theme={interTheme}>{children}</ThemeProvider>
    </ThemeProvider>
  );
}

export default ThemeContext;
