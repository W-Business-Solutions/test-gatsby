import React from "react";
import Navbar from "../navbar/navbar";
import SmallHeader from "../smallHeader/smallHeader";
import Footer from "../footer/newFooter";
import Facilities from "../facilities/facilities";
import StyledButton from "../styledButton/styledButton";
import { useState } from "react";
// import ContactModal from "../contactModal/contactModal";
import Box from "@mui/material/Box";

function JanitorialFacility(props) {
  const { title, subtitle, children, page } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* <ContactModal open={open} setOpen={setOpen} /> */}
      <Navbar page="service" />
      <SmallHeader
        title={title}
        page={page}
        template="janitorial"
        subtitle={subtitle}
      />
      <Box
        sx={{
          mx: { xs: "5vw", lg: "15vw", xl: "25vw" },
          py: { xs: "10vh", lg: "5vh", xl: "10vh" },
        }}
      >
        {children}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <StyledButton
          sx={{
            bgcolor: "rgba(29, 29, 31, 1)",
            borderRadius: "30px",
            width: "180px",
            color: "white",
            fontWeight: 500,
            height: "37px",
            margin: "0 auto",
          }}
          variant="contained"
          //onClick={handleScroll}
          onClick={() => setOpen(true)}
        >
          let's get started
        </StyledButton>
      </Box>
      <Facilities />
      <Box sx={{ height: { xs: "5vh", lg: "15vh", xl: "0vh" } }} />
      <Footer />
    </>
  );
}

export default JanitorialFacility;
