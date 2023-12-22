import React, { useRef, useState, lazy, Suspense, useContext } from "react";
import { useLocation } from "@reach/router";

// npm packages
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { ScreenSizeContext } from "../contextWrappers/screenSizeContext";

// assets
import snowIcon from "../newSrc2/assets/Snow Removal.png";
import janitorialIcon from "../newSrc2/assets/janitorial.png";
import landscapingIcon from "../newSrc2/assets/landscaping.png";
import lotsweepingIcon from "../newSrc2/assets/lotsweeping.png";
import reviews from "../newSrc2/assets/landing/Featured Review Sites.webp";
import placeholder from "../newSrc2/assets/landing/placeholder.png";
import Navbar from "../newSrc2/components/navbar/navbar";
import Footer from "../newSrc2/components/footer/newFooter";
import Loading from "../newSrc2/components/loading/loading";
import LandingContact from "../newSrc2/forms/landingContact";
import Brands from "../newSrc2/components/brands/brands";
import Navigation from "../newSrc2/pages/landing/navigation";
import Solutions from "../newSrc2/pages/landing/solutions";
import Chances from "../newSrc2/pages/landing/chances";
import ContactModal from "../newSrc2/components/contactModal/contactModal";

const services = [
  {
    title: "Snow Removal",
    href: "/snow-and-ice-removal",
    icon: snowIcon,
    speed: -3,
  },
  {
    title: "Janitorial",
    href: "/recurring/janitorial",
    icon: janitorialIcon,
    speed: 0,
  },
  {
    title: "Landscaping",
    href: "/recurring/landscaping",
    icon: landscapingIcon,
    speed: 3,
  },
  {
    title: "Lot Sweeping",
    href: "/recurring/lotsweeping",
    icon: lotsweepingIcon,
    speed: 0,
  },
];

const hubspot_owner_ids = {
  Maintenance: "216697651", // virginia's hubspot id
  "Snow Removal": "355112878", // Brett
  Janitorial: "391765177", // Patrick
  //"Asphalt": '372512583', // Donalds hubspot id
  Asphalt: "216697651", // virginia's hubspot id
  "Construction + Remodels": "391850666", // chris's hubspot id
  Other: "216697651", // virginia
};

const centeredStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 5,
  textAlign: "center",
};

const Service = ({ service }) => {
  const { title, href, icon } = service;
  return (
    <Box sx={{ textAlign: "center", my: 2 }}>
      <img
        loading="lazy"
        src={icon}
        style={{ margin: "0 auto", height: "93px" }}
      />

      <br />
      <Typography sx={{ mb: 2, mt: 3, fontFamily: "Inter", fontWeight: 500 }}>
        {title}
      </Typography>
      <Typography
        component="a"
        href={href}
        sx={{
          color: "#0066CC",
          fontFamily: "Inter",
          fontSize: "14px",
          textAlign: "center",
          pl: 1,
        }}
      >
        Learn More &gt;
      </Typography>
    </Box>
  );
};

const StyledHeader = styled(Typography)(({ theme }) => ({
  fontFamily: "Inter",
  fontWeight: 700,
  lineHeight: "90%",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.125rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "3.75rem",
  },
}));

const StyledHeaderBody = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontFamily: "Inter",
  padding: "24px 0 40px 0",
  [theme.breakpoints.up("lg")]: {
    maxWidth: "500px",
  },
  margin: "0 auto",
  lineHeight: "normal",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  bgcolor: "007AFF",
  color: "white",
  fontFamily: "Inter",
  borderRadius: "30px",
  width: "200px",
  textTransform: "capitalize",
}));

function Landing() {
  const location = useLocation();
  const pathname = location.pathname;
  const formRef = useRef();
  // const screenSizeContext = useContext(ScreenSizeContext);
  // const { screenSize } = screenSizeContext;

  const [open, setOpen] = useState(pathname === "/contact" ? true : false);

  const handleScroll = () => {
    window.scrollTo({
      behavior: "smooth",
      top: formRef.current.offsetTop,
    });
  };

  return (
    <Suspense fallback={<Loading />}>
      <Helmet>
        <title>Transblue Facility Management</title>
        <meta
          name="description"
          content="Transblue is your one company facility management solution. Handling all your needed services for all your multi-site locations."
        />
      </Helmet>
      <ContactModal open={open} setOpen={setOpen} />
      <Navbar page="landing" />
      <Box className="overlay" />
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <img
          src={placeholder}
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            right: 0,
            top: 0,
            zIndex: -2,
            position: "relative",
          }}
        />
        <video autoPlay loop muted preload="none" poster={placeholder}>
          <source src="https://tbconnectstorage.blob.core.windows.net/projectimages/Home Page Header.mp4" />
        </video>
      </Box>

      <Box sx={{ display: { xs: "block", md: "none " } }} id="header_mobile" />
      <Box
        sx={{
          color: "white",
          ...centeredStyle,
          width: "90vw",
          top: "calc(50% + 36px)",
        }}
      >
        <StyledHeader>Turn facility service</StyledHeader>
        <StyledHeader>concerns into solutions.</StyledHeader>
        <StyledHeaderBody variant="h6">
          Facility services and management that consistently solves recurring
          commercial and industrial upkeep.
        </StyledHeaderBody>
        <StyledButton
          sx={{
            border: "1px solid white",
            bgcolor: "#007AFF",
          }}
          variant="contained"
          onClick={handleScroll}
        >
          Let's get started <ExpandMore />
        </StyledButton>

        <Box sx={{ mt: 5 }}>
          <img
            src={reviews}
            alt=""
            style={{
              margin: "0 auto",
              maxWidth: "90vw",
              width: "250px",
            }}
          />
        </Box>
      </Box>

      <div ref={formRef}></div>
      <LandingContact />

      <Box
        sx={{
          width: "100vw",
          py: { xs: "35vh", sm: "15vh", md: "15vh", lg: "30vh", xl: "20vh" },
          position: "relative",
        }}
      >
        <Box sx={{ ...centeredStyle, textAlign: "center" }}>
          <Grid container sx={{ width: "90vw", maxWidth: "800px" }}>
            {services.map((service) => (
              <Grid item xs={6} sm={3} md={3} my="auto">
                <Service service={service} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Navigation />
      <Solutions setOpen={setOpen} />
      <Brands bgcolor="#05182B" />
      <Chances setOpen={setOpen} />
      <Footer />
    </Suspense>
  );
}
export default Landing;
