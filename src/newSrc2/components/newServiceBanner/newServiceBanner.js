import React from "react";
import { AppBar, Toolbar } from "@mui/material";
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

function NewServiceBanner({ bannerArr }) {
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
    <AppBar position="fixed" sx={{ mt: "48px" }}>
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
        {bannerArr.map((link) => (
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
        {/* {pathname === '/commercial' && (
                    <StyledButton
                        sx={{ ...style, fontWeight: 300 }}
                        onClick={() => navigate(`/recurring`)}
                    >
                        Recurring
                    </StyledButton>
                )} */}
      </Toolbar>
    </AppBar>
  );
}

export default NewServiceBanner;
