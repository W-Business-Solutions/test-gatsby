import React, { createContext, useState } from "react";

export const ScreenSizeContext = createContext({
  screenSize: "small",
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
