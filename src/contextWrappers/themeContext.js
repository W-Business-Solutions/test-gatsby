import React from "react";
import { createTheme } from "@mui/material";
import { ThemeProvider, responsiveFontSizes } from "@mui/material/styles";

function ThemeContext({ children }) {
  let fontTheme = createTheme();
  fontTheme = responsiveFontSizes(fontTheme);
  const interTheme = createTheme({
    root: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      a: {
        textDecoration: "none",
      },
    },
    MuiButton: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontFamily: ["Inter", "sans-serif"].join(","),
        },
      },
    },
    MuiLink: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontFamily: ["Inter", "sans-serif"].join(","),
        },
      },
    },
  });

  return (
    <ThemeProvider theme={fontTheme}>
      <ThemeProvider theme={interTheme}>{children}</ThemeProvider>
    </ThemeProvider>
  );
}

export default ThemeContext;
