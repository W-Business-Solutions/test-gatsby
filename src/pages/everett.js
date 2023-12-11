import React, { useContext, useState } from "react";
// import { ScreenSizeContext } from "../../src/App.js";
import headerImg from "../newSrc2/assets/everett/header.png";
import mobileHeader from "../newSrc2/assets/everett/mobileHeader.png";
import centeredStyle from "../newSrc2/styles/centeredStyle";
import styled from "@emotion/styled";
import review from "../newSrc2/assets/everett/review.png";
import arrow from "../newSrc2/assets/everett/arrow.png";
import { Helmet } from "react-helmet-async";
import Navbar from "../newSrc2/components/navbar/navbar";
import Footer from "../newSrc2/components/footer/newFooter";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import ContactForm from "../newSrc2/forms/contact";
import ServiceComp from "../newSrc2/components/serviceComp/serviceComp";
import Review from "../newSrc2/components/review/review";
import ContactModal from "../newSrc2/components/contactModal/contactModal";
import ReliabilityCTA from "../newSrc2/components/CTA/reliabilityCTA";
import PartnerBanner from "../newSrc2/components/partnerBanner/partnerBanner";

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
    title: "Lot Sweeping",
    description:
      "Welcome your team and customers each morning to a spotless parking lot as our crew efficiently sweeps away yesterday's dust, debris, and dirt.",
    href: "/recurring/lot-sweeping",
  },
];

function Everett() {
  // const screenSizeContext = useContext(ScreenSizeContext);
  // const { screenSize } = screenSizeContext;
  const screenSize = "xl";
  const [open, setOpen] = useState(false);

  const StyledHeaderBody = styled(Typography)(({ theme }) => ({
    color: "white",
    fontFamily: "Inter",
    maxWidth: "90%",
    margin: "0 auto",
    fontSize: screenSize === "xl" ? "16px" : "14px",
    maxWidth: "570px",
  }));

  const VideoComp = ({ src }) => (
    <iframe
      src={src}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      style={{
        minHeight: "100%",
        minWidth: "100%",
        objectFit: "cover",
        height: "300px",
        // screenSize === "small" || screenSize === "medium" ? "300px" : "500px",
      }}
    ></iframe>
  );

  return (
    <>
      <ContactModal open={open} setOpen={setOpen} />
      <Helmet>
        <title></title>
        <meta name="description" content="noindex" />
      </Helmet>
      <Navbar />

      <Box
        sx={{
          position: "relative",
          width: "100vw",
          height: screenSize === "xl" ? "70vh" : "90vh",
          mt: "36px",
        }}
      >
        <img
          src={screenSize === "small" ? mobileHeader : headerImg}
          style={{
            width: "100vw",
            height: "100%",
            objectFit: "cover",
            right: 0,
            top: 0,
            zIndex: -1,
          }}
        />
        {(screenSize === "large" || screenSize === "xl") && (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
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
                    Everett's Own Commercial
                  </StyledHeaderText>
                  <StyledHeaderText variant="h4">
                    Facility Services Provider
                  </StyledHeaderText>
                </Box>
                <StyledHeaderBody>
                  Anticipate and secure your facility's success in Everett, WA,
                  and Snohomish County with our comprehensive facility services.
                  We focus on snow removal, janitorial, landscaping, and parking
                  lot services that ensure your business has every potential
                  problem covered by Transblue.
                </StyledHeaderBody>
              </Grid>
              <Grid item xs={6} textAlign="center" my="auto">
                <Box
                  sx={{
                    maxWidth: "575px",
                    m: "0 auto",
                  }}
                >
                  <ContactForm page="everett" />
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
              width: "90vw",
              top: "calc(50% + 36px)",
            }}
          >
            <StyledHeaderText variant="h3">
              Everett's Own Commercial
            </StyledHeaderText>
            <StyledHeaderText variant="h3">
              Facility Services Provider
            </StyledHeaderText>
            <Stack
              direction="row"
              spacing={5}
              sx={{ justifyContent: "center", mt: 7 }}
            ></Stack>
          </Box>
        )}
      </Box>

      <PartnerBanner images={["getplowed", "silvertips"]} />

      <Stack
        direction={{ xs: "column", lg: "row" }}
        width={{ xs: "90vw", lg: "80vw", xl: "54vw" }}
        ml={{ xs: "5vw", lg: "10vw", xl: "23vw" }}
        py={{ xs: "5vh", lg: "10vh", xl: "8vh" }}
        spacing={6}
        alignItems={"center"}
      >
        <Box sx={{ width: { xs: "100%", lg: "46%" } }}>
          <StyledParagraph sx={{ mb: 3 }}>
            Hello Everett! Your new neighbor just landed next door! From our old
            home in Monroe, now in Everett right off of Pacific and Rucker.
          </StyledParagraph>
          <StyledParagraph>
            As we grow our business in the Everett area, we’ve already begun
            living out our corporate mission: Change the World! Check out this
            video for some context on why we do, what we do.
          </StyledParagraph>
        </Box>
        <Box sx={{ width: { xs: "100%", lg: "53%" } }}>
          <VideoComp src="https://www.youtube.com/embed/CDC2_LH7xx0?si=DHfsK8ujwLIPE6OW" />
        </Box>
      </Stack>

      <Stack
        direction={{ xs: "column", lg: "row" }}
        width={{ xs: "90vw", lg: "80vw", xl: "54vw" }}
        ml={{ xs: "5vw", lg: "10vw", xl: "23vw" }}
        pb={{ xs: "5vh", lg: "10vh", xl: "8vh" }}
        spacing={6}
        alignItems={"center"}
      >
        <Box sx={{ width: { xs: "100%", lg: "55%" } }}>
          <VideoComp src="https://www.youtube.com/embed/DRhsP_74peQ?si=JcQhszvuGQbT6GKf" />
        </Box>
        <Box sx={{ width: { xs: "100%", lg: "46%" } }}>
          <StyledParagraph sx={{ mb: 3 }}>
            Our journey began in 2004 as a landscape-oriented general
            contractor. Recognizing the unmet needs of our clients, we quickly
            scaled our capabilities to become a regional self-performer within
            just two years.
          </StyledParagraph>
          <StyledParagraph>
            Today, we continue our growth, focusing on nationwide scale and
            specialized expertise in essential areas, such as snow removal,
            janitorial work, landscaping, and parking lot services.
          </StyledParagraph>
        </Box>
      </Stack>

      <Grid
        container
        sx={{
          width: { xs: "90vw", lg: "70vw", xl: "60vw" },
          ml: { xs: "5vw", lg: "15vw", xl: "20vw" },
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

export default Everett;
