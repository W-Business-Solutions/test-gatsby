import NavigateNext from "@mui/icons-material/NavigateNext";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { useState } from "react";
// import ContactModal from "../contactModal/contactModal";

function Banner() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* <ContactModal open={open} setOpen={setOpen} /> */}
      <Toolbar
        elevation={0}
        variant="dense"
        sx={{
          width: "100vw",
          justifyContent: "center",
          display: "flex",
          bgcolor: "white",
          zIndex: 10,
          height: "36px",
          maxHeight: "36px",
          minHeight: "36px",
        }}
      >
        <Typography
          sx={{
            color: "#1D1D1F",
            fontSize: "13px",
            fontWeight: 500,
          }}
        >
          Bundle all your year-round facility management needs!
        </Typography>
        <Typography
          sx={{
            color: "#1D1D1F",
            fontSize: "13px",
            ml: 1,
            color: "#2997FF",
            fontWeight: 500,
            textDecoration: "none",
          }}
          component="a"
          href="/recurring"
        >
          Learn more <NavigateNext sx={{ fontSize: "15px" }} />
        </Typography>
      </Toolbar>
    </>
  );
}

export default Banner;
