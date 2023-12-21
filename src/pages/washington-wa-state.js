import React, { useContext, useState, useRef } from "react";
import { ScreenSizeContext } from "../contextWrappers/screenSizeContext";
import headerImg from "../newSrc2/assets/everett/header.png";
import mobileHeader from "../newSrc2/assets/everett/mobileHeader.png";
import centeredStyle from "../newSrc2/styles/centeredStyle";
import styled from "@emotion/styled";
import review from "../newSrc2/assets/everett/review.png";
import arrow from "../newSrc2/assets/everett/arrow.png";
import { Helmet } from "react-helmet-async";
import Brands from "../newSrc2/components/brands/brands";
import WashingtonContact from "../newSrc2/forms/washingtonContact";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Navbar from "../newSrc2/components/navbar/navbar";
import IconButton from "@mui/material/IconButton";
import Clear from "@mui/icons-material/Clear";
import NavigateNext from "@mui/icons-material/NavigateNext";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import ServiceComp from "../newSrc2/components/serviceComp/serviceComp";
import Review from "../newSrc2/components/review/review";
import ReliabilityCTA from "../newSrc2/components/CTA/reliabilityCTA";
import Footer from "../newSrc2/components/footer/newFooter";
import modalStyle from "../newSrc2/styles/modal";
import placeholder from "../newSrc2/assets/landing/placeholder.png";

const StyledHeaderText = styled(Typography)(({ theme }) => ({
  color: "white",
  fontFamily: "Inter",
  fontWeight: 600,
}));

const StyledParagraph = styled(Typography)(({ theme }) => ({
  lineHeight: "normal",
  fontSize: "20px",
}));

const services = [
  {
    img: arrow,
    title: "Snow Removal",
    description:
      "Our team methodically clears the snowfall from the night before, ensuring safe, accessible paths for all on your property.",
    href: "/snow-and-ice-removal",
  },
  {
    img: arrow,
    title: "Landscaping",
    description:
      "Experience the difference of an organized landscape as our crew conscientiously maintains your outdoor spaces.",
    href: "/recurring/landscaping",
  },
  {
    img: arrow,
    title: "Janitorial",
    description:
      "Embrace a fresh environment each workday as our janitorial team diligently cleans yesterday's mess, prepping your space for productivity.",
    href: "/recurring/janitorial",
  },
  {
    img: arrow,
    title: "Parking Lot Sweeping",
    description:
      "Welcome your team and customers each morning to a spotless parking lot as our crew efficiently sweeps away yesterday's dust, debris, and dirt.",
    href: "/recurring/lotsweeping",
  },
];

function Washington() {
  const screenSizeContext = useContext(ScreenSizeContext);
  const { screenSize } = screenSizeContext;
  const [open, setOpen] = useState(false);
  const formRef = useRef(null);

  const StyledHeaderBody = styled(Typography)(({ theme }) => ({
    color: "white",
    fontFamily: "Inter",
    margin: "0 auto",
    width: "90vw",
    fontSize: screenSize === "xl" || screenSize === "small" ? "16px" : "14px",
    maxWidth: "430px",
  }));

  const VideoComp = ({ src, title }) => (
    <iframe
      src={src}
      title={title}
      frameBorder="0"
      allowFullScreen
      style={{
        minHeight: "100%",
        minWidth: "100%",
        objectFit: "cover",
        height: "300px",
        // screenSize === "small" || screenSize === "medium" ? "300px" : "500px",
      }}
    ></iframe>
  );

  const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: "white",
    borderRadius: "30px",
    width: "160px",
    color: "black",
    fontWeight: 500,
    height: "37px",
    border: "2px solid white",
    marginTop: "24px",
    textTransform: "capitalize",
  }));

  const StyledLocationTypography = styled(Typography)(({ theme }) => ({
    lineHeight: "normal",
  }));

  const LocationColumn = ({ locations, display, fontWeight }) => {
    return (
      <Box sx={{ display: display, fontWeight: fontWeight || 400 }}>
        {locations.map((location) => (
          <StyledLocationTypography
            key={location}
            sx={{ fontWeight: fontWeight || 400 }}
          >
            {location}
          </StyledLocationTypography>
        ))}
      </Box>
    );
  };

  const handleScroll = () => {
    window.scrollTo({
      behavior: "smooth",
      top: formRef.current.offsetTop,
    });
  };

  return (
    <>
      <Helmet>
        <title>Washington State | Transblue Facility Management</title>
        <meta
          name="description"
          content="Transblue's facility management services is serving your local area near you along with everyone else across Washington state"
        />
      </Helmet>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            ...modalStyle,
            textAlign: "center",
            borderRadius: "10px",
            maxHeight: "90vh",
            overflowY: "auto",
            px: { xs: 2, sm: 3 },
            pt: { xs: 2, sm: 3 },
            pb: 3,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={() => setOpen(false)} color="error">
              <Clear />
            </IconButton>
          </Box>
          <WashingtonContact />
        </Box>
      </Modal>
      <Navbar page="washington" />

      <Box className="overlay" />

      {screenSize !== "small" && (
        <>
          <img
            alt=""
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
          <video autoPlay loop muted preload="none">
            <source src="https://tbconnectstorage.blob.core.windows.net/projectimages/Home Page Header.mp4" />
          </video>
        </>
      )}
      {screenSize === "small" && (
        <img
          src={mobileHeader}
          style={{
            width: "100vw",
            height: "100%",
            objectFit: "cover",
            right: 0,
            top: 0,
            zIndex: -1,
          }}
        />
      )}
      {(screenSize === "large" || screenSize === "xl") && (
        <Box
          sx={{
            position: "absolute",
            top: "calc(50% + 36px)",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 5,
            textAlign: "center",
            width: "90vw",
            maxWidth: "1400px",
          }}
        >
          <Grid container spacing={{ md: 5, xl: 0 }}>
            <Grid item xs={6} textAlign="center" my="auto">
              <Box
                sx={{
                  textAlign: "center",
                  mb: 3,
                }}
              >
                <StyledHeaderText variant="h4">
                  Your Local Facility
                </StyledHeaderText>
                <StyledHeaderText variant="h4">
                  Management Neighbors
                </StyledHeaderText>
              </Box>
              <StyledHeaderBody sx={{ pb: 3 }}>
                Your facility management needs meets the Transblue excellence!
                Specializing in snow removal, janitorial, landscaping, and
                asphalt/lot sweeping services, we always want to ensure that
                your commercial/industrial property always looks its best!
              </StyledHeaderBody>
              <StyledHeaderBody>
                Not just local? No problem! Transblue’s diverse network of
                contractors makes it so you only have to deal with us, we’ll
                handle the rest.
              </StyledHeaderBody>
            </Grid>
            <Grid item xs={6} textAlign="center" my="auto">
              <Box
                sx={{
                  maxWidth: "575px",
                  m: "0 auto",
                  bgcolor: "white",
                  width: "100%",
                  boxShadow: { xs: 0, lg: 24 },
                  py: 2,
                  px: { xs: 3, md: 2, lg: 3, xl: 5 },
                  borderRadius: "5px",
                  maxHeight: { xs: "100%", md: "90vh" },
                  overflowY: "auto",
                }}
              >
                <WashingtonContact />
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
      {(screenSize === "small" || screenSize === "medium") && (
        <Box
          sx={{
            color: "white",
            ...centeredStyle,
            width: "95vw",
            top: "calc(50%)",
          }}
        >
          <StyledHeaderText sx={{ fontSize: "1.8rem" }}>
            Your Local Facility
          </StyledHeaderText>
          <StyledHeaderText sx={{ fontSize: "1.8rem", mb: 3 }}>
            Management Neighbors
          </StyledHeaderText>
          <StyledHeaderBody sx={{ pb: 3 }}>
            Your facility management needs meets the Transblue excellence!
            Specializing in snow removal, janitorial, landscaping, and
            asphalt/lot sweeping services, we always want to ensure that your
            commercial/industrial property always looks its best!
          </StyledHeaderBody>
          <StyledHeaderBody>
            Not just local? No problem! Transblue’s diverse network of
            contractors makes it so you only have to deal with us, we’ll handle
            the rest.
          </StyledHeaderBody>
          <StyledButton variant="contained" onClick={() => setOpen(true)}>
            get started <NavigateNext sx={{ fontSize: "16px" }} />
          </StyledButton>
        </Box>
      )}

      {screenSize === "small" && (
        <Box sx={{ width: "95vw", ml: "3vw" }}>
          <br />
          <WashingtonContact />
        </Box>
      )}

      <Stack
        direction={{ xs: "column", md: "row" }}
        width={{ xs: "90vw", lg: "80vw", xl: "54vw" }}
        ml={{ xs: "5vw", lg: "10vw", xl: "23vw" }}
        py={{ xs: "5vh", lg: "10vh", xl: "8vh" }}
        spacing={6}
        alignItems={"center"}
      >
        <Box sx={{ width: { xs: "100%", md: "46%" } }}>
          <StyledParagraph sx={{ mb: 3 }}>
            First out of Monroe and now located in our new home of Everett,
            we’re now strategically placed to better to serve all our customers
            from Olympia to Arlington.
          </StyledParagraph>
          <StyledParagraph>
            As we grow our business throughout the Puget Sound, we’ve already
            begun living out our corporate mission: Change the World! Check out
            this video for context on why we do, what we do.
          </StyledParagraph>
        </Box>
        <Box sx={{ width: { xs: "100%", md: "53%" } }}>
          <VideoComp
            src="https://www.youtube-nocookie.com/embed/CDC2_LH7xx0?vq=hd1080&modestbranding=1&rel=0&controls=0"
            title="Transblue Gives Back"
          />
        </Box>
      </Stack>

      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        width={{ xs: "90vw", lg: "80vw", xl: "54vw" }}
        ml={{ xs: "5vw", lg: "10vw", xl: "23vw" }}
        pb={{ xs: "5vh", lg: "10vh", xl: "8vh" }}
        spacing={6}
        alignItems={"center"}
      >
        <Box sx={{ width: { xs: "100%", md: "55%" } }}>
          <VideoComp src="https://www.youtube-nocookie.com/embed/DRhsP_74peQ?vq=hd1080&modestbranding=1&rel=0&controls=0" />
        </Box>
        <Box sx={{ width: { xs: "100%", md: "46%" } }}>
          <StyledParagraph sx={{ mb: 3 }}>
            Our journey began in 2004 as a landscape-oriented general
            contractor. Recognizing the unmet needs of our clients, we quickly
            scaled our capabilities to become a regional self-performer within
            just two years.
          </StyledParagraph>
          <StyledParagraph>
            Today, we continue our growth, focusing on the local and nationwide
            scale and specialized expertise in essential areas, such as snow
            removal, janitorial work, landscaping, and parking lot services.
          </StyledParagraph>
        </Box>
      </Stack>

      <Grid
        container
        sx={{
          width: { xs: "90vw", lg: "80vw", xl: "60vw" },
          ml: { xs: "5vw", lg: "10vw", xl: "20vw" },
          pb: { xs: "10vh", md: "20vh", lg: "15vh", xl: "10vh" },
        }}
        spacing={{ xs: 1, md: 3, xl: 5 }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              textAlign: "center",
              fontFamily: "Inter",
              mb: 1,
            }}
          >
            Services
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 500,
              textAlign: "center",
              mb: { xs: 5, lg: 3, xl: 0 },
            }}
          >
            Services for Commercial and Industrial Facility Maintenance
          </Typography>
        </Grid>
        {services.map((service) => (
          <Grid item xs={12} lg={6}>
            <ServiceComp
              img={service.img}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          </Grid>
        ))}
      </Grid>
      <Brands bgcolor="#05182B" />

      <Review
        reviewLine1="As a satisfied customer, I 100 percent recommend Transblue. FOUR Reasons WHY you too should use Transblue: 1) Dependable, 2) Awesome, 3) Virtuous, and 4) Extraordinary. "
        reviewLine2="From start to finish, Transblue is a second-to-none company all about faithfully serving the community with complete excellence. Nothing but two thumbs up and 5 stars from me!"
        name="Ryan B."
        title="Commercial Property Manager"
        img={review}
      />

      <ReliabilityCTA
        buttonText="Let's get started"
        handleClick={() => setOpen(true)}
        bgcolor="white"
        largeText={[
          "Choose reliability and expertise; let our team",
          "at *Transblue* make it right from the start.",
        ]}
        smallText={[
          "Choose reliability and expertise;",
          "let our team at *Transblue*",
          "make it right from the start.",
        ]}
      />

      <Footer />
    </>
  );
}

export default Washington;
