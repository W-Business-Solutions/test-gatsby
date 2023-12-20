import React, { useContext } from "react";
import header from "../../newSrc2/assets/snow/header.png";
import headerMobile from "../../newSrc2/assets/snow/header_mobile.png";
import service1 from "../../newSrc2/assets/snow/snow-plow-costco-transblue.png";
import service2 from "../../newSrc2/assets/snow/snow-hauling-truck-transblue.png";
import service3 from "../../newSrc2/assets/snow/snow-remote-monitoring-transblue.png";
import csp from "../../newSrc2/assets/snow/csp.png";
import sima from "../../newSrc2/assets/snow/sima.png";
import { ScreenSizeContext } from "../../contextWrappers/screenSizeContext";
import { Helmet } from "react-helmet-async";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ServicePageContact from "../../newSrc2/components/servicePageContact/servicePageContact";

function Snow() {
  const screenSizeContext = useContext(ScreenSizeContext);
  const { screenSize } = screenSizeContext;
  const title =
    "Snow + Ice Management | Contact | Transblue Facility Management";
  const meta =
    "Contact us about how Transblue's facility management expertise can ensure your spaces are kept safe and accessible with our professional snow removal services.";

  const services = [
    {
      img: service1,
      text: "Plowing + Deicing",
      alt: "a transblue snow plow truck plowing snow in front of a costco",
    },
    {
      img: service2,
      text: "Removal + Hauling",
      alt: "a transblue snow plow truck plowing snow into a pile",
    },
    {
      img: service3,
      text: "Remote Monitoring",
      alt: "a transblue employee monitoring snow weather patterns on multiple computer screens",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={meta} />
      </Helmet>
      <ServicePageContact
        headerImg={header}
        mobileHeader={headerMobile}
        headerText="Snow + Ice"
        headerTextLine2="Management"
        sectionTitle1="Reliable, professional"
        sectionTitle2="snow + ice treatment for"
        sectionTitle3="multi-site operations"
        sectionBody="Ensure your spaces remain safe and accessible during winter months with our dependable, professional snow removal services. We're here to help you overcome challenges that harsh weather conditions may bring, alleviating potential disruptions and keeping your business on track."
        videoLink="https://www.youtube.com/embed/tr1FTlT8eFo"
        services={services}
      >
        <Box
          sx={{
            textAlign: "center",
            pt: { xs: "10vh", md: "5vh" },
            pb: { xs: "10vh", md: "10vh" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 600,
              mb: { xs: 3, md: 5 },
              fontSize: { xs: "1.3rem", md: "2.125rem" },
            }}
          >
            Certifications You Can Count On
          </Typography>
          <Stack
            direction="row"
            spacing={{ xs: 2, md: 10 }}
            sx={{ justifyContent: "center" }}
          >
            <img
              src={csp}
              alt=""
              style={{
                maxWidth: screenSize === "small" ? "100px" : "200px",
              }}
            />
            <img
              src={sima}
              alt=""
              style={{
                maxWidth: screenSize === "small" ? "100px" : "200px",
              }}
            />
          </Stack>
        </Box>
      </ServicePageContact>
    </>
  );
}

export default Snow;
