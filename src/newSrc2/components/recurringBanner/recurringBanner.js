import React from "react";
import StyledButton from "../styledButton/styledButton";
import Toolbar from "@mui/material/Toolbar";
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

function RecurringBanner() {
  const location = useLocation();
  const pathname = location.pathname;

  const links = [
    {
      text: "Janitorial",
      href: "/recurring/janitorial",
    },
    {
      text: "Lot Sweeping",
      href: "/recurring/lotsweeping",
    },
    {
      text: "Landscaping",
      href: "/recurring/landscaping",
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

export default RecurringBanner;
