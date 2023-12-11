import React from "react";
import Toolbar from "@mui/material/Toolbar";
import StyledButton from "../styledButton/styledButton";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

const style = {
  color: "white",
  fontSize: "14px",
  fontFamily: "Inter",
  textTransform: "capitalize",
  fontWeight: 300,
  mx: 2,
};

function ServiceBanner() {
  const location = useLocation();
  const pathname = location.pathname;

  const links = [
    {
      text: "Snow",
      href: "/snow-and-ice-removal",
    },
    {
      text: "Asphalt",
      href: "/asphalt",
    },
    {
      text: "Janitorial",
      href: "/recurring/janitorial",
    },
    {
      text: "Capital Expenditures",
      href: "/capex",
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
          onClick={() => navigate(`${link.href}`)}
          key={link.href}
        >
          {link.text}
        </StyledButton>
      ))}
    </Toolbar>
  );
}

export default ServiceBanner;
