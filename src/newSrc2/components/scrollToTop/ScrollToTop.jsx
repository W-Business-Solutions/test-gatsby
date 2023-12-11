import React, { useEffect } from "react";
import { useLocation } from "reach/router";

function ScrollToTop() {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default ScrollToTop;
