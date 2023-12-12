import React, { createContext, useState, useEffect } from "react";

export const ScreenSizeContext = createContext({
  screenSize: "",
  setScreenSize: () => {},
});

function ScreenSizeContextWrapper({ children }) {
  const [screenSize, setScreenSize] = useState("small");

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

  return (
    <ScreenSizeContext.Provider value={{ screenSize, setScreenSize }}>
      {children}
    </ScreenSizeContext.Provider>
  );
}

export default ScreenSizeContextWrapper;
