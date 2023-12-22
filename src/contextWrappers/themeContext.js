import React from "react";
import { createTheme } from "@mui/material";
import { ThemeProvider, responsiveFontSizes } from "@mui/material/styles";

function ThemeContext({ children }) {
  let fontTheme = createTheme();
  fontTheme = responsiveFontSizes(fontTheme);

  const breakpointOverrides = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1440,
  };

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
    breakpoints: { values: { ...breakpointOverrides } },
  });

  return (
    <ThemeProvider theme={fontTheme}>
      <ThemeProvider theme={interTheme}>{children}</ThemeProvider>
    </ThemeProvider>
  );
}

export default ThemeContext;
