import React, {
  createContext,
  lazy,
  Suspense,
  useEffect,
  useState,
} from "react";
import "./App.css";
import { createTheme } from "@mui/material";
import { responsiveFontSizes } from "@mui/material/styles";

// new pages for redesign

export const ScreenSizeContext = createContext({
  screenSize: "small",
});

function App() {
  const [screenSize, setScreenSize] = useState("small");
  let fontTheme = createTheme();
  fontTheme = responsiveFontSizes(fontTheme);

  //   const theme = createTheme({
  //     typography: {
  //       fontFamily: ["Inter", "sans-serif"].join(","),
  //       h1: {
  //         fontSize: "7vw",
  //         letterSpacing: ".03em",
  //         "@media (min-width: 480px)": {
  //           fontSize: "6.3vw",
  //         },
  //         "@media (min-width: 650px)": {
  //           fontSize: "4vw",
  //         },
  //       },
  //       h2: {
  //         fontSize: "4.5vw",
  //         letterSpacing: ".03em",
  //         "@media (min-width: 480px)": {
  //           fontSize: "4.5vw",
  //         },
  //         "@media (min-width: 650px)": {
  //           fontSize: "5vw",
  //         },
  //         "@media (min-width: 900px)": {
  //           fontSize: "2.5vw",
  //         },
  //       },
  //       body2: {
  //         letterSpacing: ".04em",
  //         fontSize: "3.5vw",
  //         color: "#6c757d",
  //         lineHeight: "1.6em",
  //         fontWeight: 300,
  //         "@media (min-width: 650px)": {
  //           fontSize: "2.5vw",
  //         },
  //         "@media (min-width: 900px)": {
  //           fontSize: "1.3vw",
  //         },
  //       },
  //       subtitle2: {
  //         fontSize: ".85em",
  //         mb: "10px",
  //         color: "#6c757d",
  //         letterSpacing: ".05em",
  //       },
  //       subtitle1: {
  //         fontWeight: "500",
  //         fontSize: "1.15rem",
  //         color: "#3b3b3b",
  //         letterSpacing: ".05em",
  //       },
  //       h6: {
  //         "@media (min-width: 1400px)": {
  //           fontSize: "1.8vw",
  //         },
  //         "@media (min-width: 2000px)": {
  //           fontSize: "1.3vw",
  //         },
  //       },
  //     },
  //     components: {
  //       MuiButton: {
  //         styleOverrides: {
  //           root: {
  //             fontFamily: ["Inter", "sans-serif"].join(","),
  //           },
  //           outlined: {
  //             borderRadius: "0px",
  //             letterSpacing: ".085em",
  //             height: "2.5em",
  //             paddingRight: "30px",
  //             paddingLeft: "30px",
  //             "@media (min-width: 1920px)": {
  //               fontSize: ".6vw",
  //             },
  //           },
  //         },
  //       },
  //       MuiMenuPaper: {
  //         styleOverrides: {
  //           root: {
  //             backgroundColor: "black !important",
  //           },
  //         },
  //       },
  //       MuiMenuItem: {
  //         styleOverrides: {
  //           root: {
  //             fontFamily: "Inter",
  //           },
  //         },
  //       },
  //       MuiTextField: {
  //         styleOverrides: {
  //           valueLabel: ({ ownerState, theme }) => ({
  //             ...(ownerState.id.indexOf("dark") > -1 && {
  //               backgroundColor: "white",
  //             }),
  //           }),
  //         },
  //       },
  //     },
  //   });

  //   const interTheme = createTheme({
  //     root: {
  //       fontFamily: ["Inter", "sans-serif"].join(","),
  //     },
  //     typography: {
  //       fontFamily: ["Inter", "sans-serif"].join(","),
  //       a: {
  //         textDecoration: "none",
  //       },
  //     },
  //     MuiButton: {
  //       fontFamily: ["Inter", "sans-serif"].join(","),
  //       styleOverrides: {
  //         // Name of the slot
  //         root: {
  //           // Some CSS
  //           fontFamily: ["Inter", "sans-serif"].join(","),
  //         },
  //       },
  //     },
  //     MuiLink: {
  //       fontFamily: ["Inter", "sans-serif"].join(","),
  //       styleOverrides: {
  //         // Name of the slot
  //         root: {
  //           // Some CSS
  //           fontFamily: ["Inter", "sans-serif"].join(","),
  //         },
  //       },
  //     },
  //   });

  useEffect(() => {
    const handleScreenSizeChange = () => {
      let screenWidth = window.innerWidth;
      if (screenWidth < 600) {
        setScreenSize("small");
      } else if (screenWidth >= 600 && screenWidth < 1050) {
        setScreenSize("medium");
      } else if (screenWidth >= 1050 && screenWidth < 1850) {
        setScreenSize("large");
      } else {
        setScreenSize("xl");
      }
    };

    handleScreenSizeChange();

    window.addEventListener("resize", handleScreenSizeChange);

    return () => window.removeEventListener("resize", handleScreenSizeChange);
  }, []);

  return <></>;
}

export default App;
