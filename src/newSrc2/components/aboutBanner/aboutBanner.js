import React from "react";
import Toolbar from "@mui/material/Toolbar";
import StyledButton from "../styledButton/styledButton";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

const style = {
  color: "white",
  fontSize: "14px",
  textTransform: "capitalize",
  fontWeight: 300,
  mx: 2,
};

function AboutBanner() {
  const location = useLocation();
  const pathname = location.pathname;

  const links = [
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Core Values",
      href: "/about/corevalues",
    },
    {
      text: "Giving Back",
      href: "/about/givesback",
    },
    {
      text: "Leadership",
      href: "/about/leadership",
    },
    {
      text: "Blog",
      href: "/blog",
    },
    {
      text: "Locations",
      href: "/locations",
    },
  ];

  return (
    <Toolbar
      elevation={0}
      variant="dense"
      sx={{
        width: "100vw",
        justifyContent: "center",
        display: "flex",
        bgcolor: "#05182B",
        zIndex: 9,
        height: "36px",
        color: "white",
      }}
    >
      {links.map((link) => (
        <StyledButton
          sx={{
            ...style,
            fontWeight: pathname === link.href ? 700 : 300,
          }}
          onClick={() =>
            // link.href === "/blog"
            //   ? window.open("https://transblue.com/blog")
            //   : navigate(link.href)
            navigate(link.href)
          }
          key={link.href}
        >
          {link.text}
        </StyledButton>
      ))}
    </Toolbar>
  );
}

export default AboutBanner;
