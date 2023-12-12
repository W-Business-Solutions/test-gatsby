import React from "react";
import { useContext } from "react";
import { ScreenSizeContext } from "../../../contextWrappers/screenSizeContext";
import { useState } from "react";
// import ContactModal from "../contactModal/contactModal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import centeredStyle from "../../styles/centeredStyle";
import StyledButton from "../styledButton/styledButton";
import Footer from "../footer/newFooter";
import Navbar from "../navbar/navbar";
import NewServiceBanner from "../newServiceBanner/newServiceBanner";
import ServiceBlock from "../serviceBlock/serviceBlock";

const serviceText = {
  snow: "Snow",
  asphalt: "Asphalt",
  concrete: "Concrete",
  roofing: "Roofing",
  recurring: "Recurring",
  capex: "Capital Expenditure",
  painting: "Painting",
  evchargers: "EV Chargers",
  landscaping: "Landscaping",
  lotsweeping: "Lot Sweeping",
  janitorial: "Janitorial",
};

function IndustryTemplate(props) {
  const screenSizeContext = useContext(ScreenSizeContext);
  const { screenSize } = screenSizeContext;

  const [open, setOpen] = useState(false);

  const {
    children,
    headerImg,
    mobileHeader,
    headerText,
    headerTextLine2,
    sectionTitle,
    sectionTitle2,
    sectionBody,
    services,
    page,
    bannerArr,
  } = props;

  return (
    <>
      <Navbar page={page || "industry"} bannerArr={bannerArr} />
      {screenSize !== "small" && <NewServiceBanner bannerArr={bannerArr} />}
      {/* <ContactModal open={open} setOpen={setOpen} /> */}
      <Box className="overlay" />
      <img
        src={screenSize === "small" ? mobileHeader : headerImg}
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          right: 0,
          top: 0,
          zIndex: -1,
        }}
      />

      <Box
        sx={{
          color: "white",
          ...centeredStyle,
          width: "90vw",
          top: "calc(50% + 36px)",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            lineHeight: "normal",
          }}
        >
          {headerText}
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            lineHeight: "normal",
          }}
        >
          {headerTextLine2}
        </Typography>
        <StyledButton
          sx={{
            bgcolor: "black",
            borderRadius: "30px",
            width: "140px",
            color: "white",
            fontWeight: 500,
            height: "37px",
            border: "2px solid white",
            mt: 7,
          }}
          variant="contained"
          onClick={() => setOpen(true)}
        >
          get started
        </StyledButton>
      </Box>

      <Box
        sx={{
          py: { xs: "15vh", md: "20vh", xl: "15vh" },
          width: "90vw",
          maxWidth: "800px",
          m: "0 auto",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          {sectionTitle}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          {sectionTitle2}
        </Typography>
        {sectionBody && (
          <Typography
            sx={{
              color: "#86868B",
              width: "100%",
              fontSize: { xs: "16px", md: "18px" },
              mt: { xs: 2, md: 5 },
              textAlign: "center",
            }}
          >
            {sectionBody}
          </Typography>
        )}

        {children}
      </Box>

      {services.map((service) => {
        return (
          <ServiceBlock
            key={service}
            service={service}
            serviceText={serviceText}
            href={
              headerText === "Recurring Services"
                ? `/recurring/${service}`
                : `/${service}`
            }
          />
        );
      })}

      <Footer />
    </>
  );
}

export default IndustryTemplate;
