import React, { createContext, useState } from "react";

export const ScreenSizeContext = createContext({
  screenSize: "",
  setScreenSize: () => {},
});

function ScreenSizeContextWrapper({ children }) {
  const [screenSize, setScreenSize] = useState("small");

  return (
    <ScreenSizeContext.Provider value={{ screenSize, setScreenSize }}>
      {children}
    </ScreenSizeContext.Provider>
  );
}

export default ScreenSizeContextWrapper;
