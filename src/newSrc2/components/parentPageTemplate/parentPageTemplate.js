import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/newFooter";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";

import { useRef } from "react";
// import ContactModal from "../../components/contactModal/contactModal";
// import { ScreenSizeContext } from "../../../App.js";

import ReliabilityCTA from "../../components/CTA/reliabilityCTA";
import { styled } from "@mui/material/styles";
import cbre from "../../assets/landing/cbre.webp";
import walmart from "../../assets/landing/walmart.webp";
import wellsfargo from "../../assets/landing/wellsfargo.png";
import starbucks from "../../assets/landing/starbucks.webp";
import costco from "../../assets/landing/costco.webp";
import { Helmet } from "react-helmet-async";
import ServiceComp from "../../components/serviceComp/serviceComp";
import Review from "../../components/review/review";
import Brands from "../../components/brands/brands";

const images = [
  {
    src: starbucks,
    alt: "Starbucks",
    maxWidth: "90px",
    widths: {
      small: "35px",
      medium: "60px",
      large: "90px",
      xl: "100px",
    },
  },
  {
    src: cbre,
    alt: "",
    maxWidth: "130px",
    widths: {
      small: "45px",
      medium: "100px",
      large: "130px",
      xl: "180px",
    },
  },
  {
    src: costco,
    alt: "",
    maxWidth: "130px",
    widths: {
      small: "45px",
      medium: "100px",
      large: "130px",
      xl: "180px",
    },
  },
  {
    src: walmart,
    alt: "walmart",
    maxWidth: "130px",
    widths: {
      small: "65px",
      medium: "100px",
      large: "130px",
      xl: "180px",
    },
  },
  {
    src: wellsfargo,
    alt: "",
    maxWidth: "130px",
    widths: {
      small: "65px",
      medium: "100px",
      large: "130px",
      xl: "180px",
    },
  },
];
const ImageComp = ({ image, screenSize }) => {
  const { src, alt, maxWidth, widths } = image;
  return (
    <Grid item sx={{ px: 2 }} my="auto">
      <img
        src={src}
        alt={alt}
        style={{ maxWidth: widths?.[screenSize] || maxWidth }}
      />
    </Grid>
  );
};

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;

  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function ParentPageTemplate(props) {
  const {
    title,
    meta,
    headerText,
    headerVideoSrc,
    placeholder,
    subheader1,
    subheader2,
    subheader3,
    videoSrc,
    introHeader,
    introHeader2,
    introBody,
    introLink,
    introLinkText,
    services,
    children,
    reviewLine1,
    reviewLine2,
    reviewName,
    reviewImg,
  } = props;
  // const screenSizeContext = useContext(ScreenSizeContext);
  // const { screenSize } = screenSizeContext;
  const screenSize = "xl";

  const ref = useRef();
  const [open, setOpen] = useState(false);

  // const handleScroll = (e) => {
  //   window.scrollTo({
  //     behavior: "smooth",
  //     top: ref.current.offsetTop,
  //   });
  // };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={meta} />
      </Helmet>
      {/* <ContactModal open={open} setOpen={setOpen} /> */}
      <Navbar page="service" services={services} />
      <Box
        sx={{
          position: "relative",
          height: screenSize === "small" ? "70vh" : "100vh",
        }}
      >
        <Box
          sx={{
            top: 0,
            left: 0,
            width: "100vw",
            height: "100%",
            bgcolor: "rgba(0,0,0,.4)",
            position: "absolute",
            zIndex: 4,
          }}
        />

        {screenSize !== "small" && (
          <video autoPlay loop muted preload="none" poster={placeholder}>
            <source src={headerVideoSrc} />
          </video>
        )}

        {screenSize === "small" && (
          <img
            src={placeholder}
            style={{
              width: "100vw",
              height: "100%",
              objectFit: "cover",
              right: 0,
              top: 0,
              zIndex: -1,
              position: "absolute",
            }}
          />
        )}
      </Box>

      <Box
        ref={ref}
        sx={{ py: { xs: "5vh", md: "10vh", lg: "15vh", xl: "10vh" } }}
      >
        <Grid
          container
          width={{ xs: "90vw", lg: "80vw", xl: "60vw" }}
          ml={{ xs: "5vw", lg: "10vw", xl: "20vw" }}
        >
          <Grid item sm={2} display={{ xs: "none", sm: "block", md: "none" }} />
          <Grid
            item
            xs={12}
            md={6}
            pr={{ xs: 0, md: 3, xl: 5 }}
            order={{ xs: 2, md: 1 }}
          >
            <iframe
              src={videoSrc}
              style={{
                minHeight: "100%",
                minWidth: "100%",
                objectFit: "cover",
                height:
                  screenSize === "small" || screenSize === "medium"
                    ? "300px"
                    : "100%",
              }}
              frameborder="0"
            ></iframe>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            pl={{ xs: 0, lg: 3, xl: 5 }}
            my="auto"
            order={{ xs: 1, md: 2 }}
            pb={{ xs: 5, md: 0 }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {introHeader}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {introHeader2}
            </Typography>
            <Typography
              sx={{
                width: "100%",
                maxWidth: "500px",
                fontSize: { xs: "16px", lg: "18px" },
                pt: { xs: 2, lg: 3, xl: 3 },
                m: { xs: "0 auto", md: 0 },
                textAlign: {
                  xs: "center",
                  md: "left",
                },
                color: "rgba(67, 67, 68, 1)",
                fontWeight: 500,
              }}
            >
              {introBody}
            </Typography>
            <Link
              href={introLink}
              target="_blank"
              rel="noreferrer"
              // sx={{ color: '#86868B', lineHeight: 'normal' }}
              // color='#86868B'
              sx={{
                textDecoration: "underline 2px solid rgba(67,67,67,1)",
                ":hover": {
                  textDecoration: "underline 2px solid rgba(67,67,67,1)",
                },
              }}
            >
              <Typography
                sx={{
                  width: "100%",
                  maxWidth: "500px",
                  fontSize: { xs: "16px", lg: "18px" },
                  pt: { xs: 2, lg: 3, xl: 3 },
                  m: { xs: "0 auto", md: 0 },
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                  color: "rgba(67, 67, 68, 1)",
                  fontWeight: 500,
                }}
              >
                {introLinkText}
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>

      <Grid
        container
        sx={{
          width: { xs: "90vw", lg: "80vw", xl: "60vw" },
          ml: { xs: "5vw", lg: "10vw", xl: "20vw" },
          pb: { xs: "10vh", md: "20vh", lg: "15vh", xl: "10vh" },
        }}
        spacing={{ xs: 1, md: 3 }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              textAlign: "center",
              mb: 1,
            }}
          >
            Services
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              textAlign: "center",
              mb: 5,
            }}
          >
            Services for Commercial + Office Building Facility Maintenance
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

      {children}

      <Review
        reviewLine1={reviewLine1}
        reviewLine2={reviewLine2}
        img={reviewImg}
        name={reviewName}
        title="Commercial Property Manager"
      />
      <Brands bgcolor="rgba(67, 67, 68, 1)" />

      <ReliabilityCTA
        buttonText="Let's get started"
        handleClick={() => setOpen(true)}
        bgcolor={headerText === "Snow + Ice" ? "#F5F5F7" : "white"}
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

export default ParentPageTemplate;
