import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/newFooter";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import StyledButton from "../styledButton/styledButton";
import centeredStyle from "../../styles/centeredStyle";
import { useRef } from "react";
import ExpandMore from "@mui/icons-material/ExpandMore";
import NavigateNext from "@mui/icons-material/NavigateNext";
import ContactModal from "../contactModal/contactModal";
import { useState, useContext } from "react";
import { ScreenSizeContext } from "../../../contextWrappers/screenSizeContext";
import ReliabilityCTA from "../CTA/reliabilityCTA";
import landscapingPlaceholder from "../../assets/landscaping/placeholder.png";
import snowPlaceholder from "../../assets/snow/placeholder.png";
import lotsweepingPlaceholder from "../../assets/lotSweeping/placeholder.png";
import { navigate } from "gatsby";
import WashingtonContact from "../../forms/washingtonContact";
import modalStyle from "../../styles/modal";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import Clear from "@mui/icons-material/Clear";

const ServiceCard = ({ img, text, alt, screenSize }) => {
  return (
    <Grid
      item
      xs={12}
      md={4}
      sx={{
        textAlign: "center",
        alignItems: "center",
        py: { xs: 2, md: 0 },
      }}
    >
      <img
        src={img}
        alt={alt}
        style={{ width: screenSize === "small" ? "40vw" : "13vw" }}
      />
      <Typography
        variant="h6"
        sx={{
          color: "#6E6E73",
          fontWeight: 500,
          mt: 1,
          textAlign: "center",
        }}
      >
        {text}
      </Typography>
    </Grid>
  );
};

function ServicePage(props) {
  const screenSizeContext = useContext(ScreenSizeContext);
  const { screenSize } = screenSizeContext;

  const {
    children,
    headerImg,
    mobileHeader,
    headerText,
    headerTextLine2,
    sectionTitle1,
    sectionTitle2,
    sectionTitle3,
    sectionBody,
    videoLink,
    services,
  } = props;

  const ref = useRef();
  const [open, setOpen] = useState(false);

  // const handleScroll = (e) => {
  //   window.scrollTo({
  //     behavior: "smooth",
  //     top: ref.current.offsetTop,
  //   });
  // };

  const videos = {
    Landscaping: {
      video:
        "https://tbconnectstorage.blob.core.windows.net/projectimages/Landscape Maintenace Loop.mp4",
      id: "landscaping_mobile",
      placeholder: landscapingPlaceholder,
    },
    ["Lot Sweeping"]: {
      video:
        "https://tbconnectstorage.blob.core.windows.net/projectimages/Lot Sweeping Loop.mp4",
      id: "lotsweeping_mobile",
      placeholder: lotsweepingPlaceholder,
    },

    ["Snow + Ice"]: {
      video:
        "https://tbconnectstorage.blob.core.windows.net/projectimages/Snow Header Loop - New.mp4",
      id: "snow_mobile",
      placeholder: snowPlaceholder,
    },
  };

  return (
    <>
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
      <Navbar page="service" services={services} />
      <Box className="overlay" />
      {(headerText === "Landscaping" ||
        headerText === "Lot Sweeping" ||
        headerText === "Snow + Ice") &&
        screenSize !== "small" && (
          <>
            <img
              alt=""
              src={videos[headerText].placeholder}
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
            <video
              autoPlay
              loop
              muted
              preload="none"
              poster={videos[headerText].placeholder}
            >
              <source src={videos[headerText].video} />
            </video>
          </>
        )}

      {(headerText === "Landscaping" ||
        headerText === "Lot Sweeping" ||
        headerText === "Snow + Ice") &&
        screenSize === "small" && <div id={videos[headerText].id} />}

      {headerText !== "Landscaping" &&
        headerText !== "Lot Sweeping" &&
        headerText !== "Snow + Ice" && (
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
        )}

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
            fontFamily: "Inter",
            fontWeight: 700,
            lineHeight: "normal",
          }}
        >
          {headerText}
        </Typography>
        <Typography variant="h3" sx={{ fontFamily: "Inter", fontWeight: 700 }}>
          {headerTextLine2}
        </Typography>
        <Stack
          direction="row"
          spacing={5}
          sx={{ justifyContent: "center", mt: 7 }}
        >
          <StyledButton
            sx={{
              bgcolor: "white",
              fontFamily: "Inter",
              borderRadius: "30px",
              width: "140px",
              color: "black",
              fontWeight: 500,
              height: "37px",
              border: "2px solid white",
            }}
            variant="contained"
            onClick={() => setOpen(true)}
          >
            get started <NavigateNext sx={{ fontSize: "16px" }} />
          </StyledButton>

          <StyledButton
            sx={{
              bgcolor: "black",
              fontFamily: "Inter",
              borderRadius: "30px",
              width: "140px",
              color: "white",
              fontWeight: 500,
              border: "2px solid white",
              height: "37px",
            }}
            variant="contained"
            // onClick={handleScroll}
          >
            Learn More <ExpandMore sx={{ fontSize: "16px" }} />
          </StyledButton>
        </Stack>
      </Box>

      <Box ref={ref} sx={{ py: "10vw" }}>
        <Grid
          container
          width={{ xs: "90vw", xl: "80vw" }}
          ml={{ xs: "5vw", xl: "10vw" }}
          height={{ xl: "40vh" }}
        >
          <Grid item sm={2} display={{ xs: "none", sm: "block", md: "none" }} />
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            pr={{ xs: 0, md: 3, xl: 5 }}
            pt={{ xs: 5, md: 0 }}
          >
            <iframe
              src={videoLink}
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
            py={{ xs: 3, md: 0 }}
            pl={{ xs: 0, lg: 3, xl: 5 }}
            my="auto"
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                fontFamily: "Inter",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {sectionTitle1}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                fontFamily: "Inter",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {sectionTitle2}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                fontFamily: "Inter",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {sectionTitle3}
            </Typography>
            <Typography
              sx={{
                color: "#86868B",
                width: "100%",
                maxWidth: "500px",
                fontSize: { xs: "16px", lg: "18px" },
                pt: { xs: 2, lg: 3, xl: 5 },
                m: { xs: "0 auto", md: 0 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {sectionBody}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          width: "100%",
          py: { xs: "5vh", md: "8vh" },
          bgcolor: "#F5F5F7",
        }}
      >
        <Grid
          container
          width={{ xs: "90vw", lg: "64vw" }}
          ml={{ xs: "5vw", lg: "18vw" }}
        >
          {services.map((service) => {
            return (
              <ServiceCard
                img={service.img}
                text={service.text}
                key={service.text}
                screenSize={screenSize}
              />
            );
          })}
        </Grid>
      </Box>

      {children || <></>}

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

export default ServicePage;
