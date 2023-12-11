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
import { useState, useEffect } from "react";
// import { ScreenSizeContext } from "../../../App.js";
import SubcontractorModal from "../subcontractorModal/subcontractorModal";
import { useLocation } from "@reach/router";
import ReliabilityCTA from "../CTA/reliabilityCTA";

const IconComp = ({ icon, text, title }) => {
  return (
    <Grid item xs={12} md={4}>
      {title && (
        <Typography
          variant="h5"
          sx={{ mb: 0, fontWeight: 600, fontFamily: "Inter" }}
        >
          {title}
        </Typography>
      )}
      <img src={icon} alt="" />
      <Typography
        sx={{
          fontSize: { xs: "16px", md: "18px" },
          color: "#86868B",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {text}
      </Typography>
    </Grid>
  );
};

function CareersTemplate(props) {
  // const screenSizeContext = useContext(ScreenSizeContext);
  // const { screenSize } = screenSizeContext;
  const screenSize = "xl";

  const location = useLocation();

  const { pathname } = location;

  useEffect(() => {}, []);

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
    iconTitle,
    icon1,
    icon2,
    icon3,
    body1,
    body2,
    body3,
    buttonText,
    iconText1,
    iconText2,
    iconText3,
  } = props;

  const ref = useRef();
  const [open, setOpen] = useState(false);

  const handleScroll = (e) => {
    window.scrollTo({
      behavior: "smooth",
      top: ref.current.offsetTop,
    });
  };

  return (
    <>
      <SubcontractorModal open={open} setOpen={setOpen} />

      <Navbar />
      <Box className={screenSize === "small" ? "overlay" : "overlay"} />
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
            {buttonText}
          </StyledButton>

          <StyledButton
            sx={{
              bgcolor: "black",
              fontFamily: "Inter",
              borderRadius: "30px",
              width: "140px",
              color: "white",
              fontWeight: 500,
              border: "2px solid black",
              height: "37px",
            }}
            variant="contained"
            onClick={handleScroll}
          >
            learn more
          </StyledButton>
        </Stack>
      </Box>

      <Box
        ref={ref}
        sx={{ py: { xs: "10vh", md: "10vh" }, bgcolor: "#F5F5F7" }}
      >
        <Grid
          container
          width={{ xs: "90vw", xl: "80vw" }}
          ml={{ xs: "5vw", xl: "10vw" }}
          height={{ xl: "40vh" }}
        >
          <Grid item sm={2} display={{ xs: "none", sm: "block", md: "none" }} />
          <Grid item xs={12} sm={8} md={6} pr={{ xs: 0, md: 3, xl: 5 }}>
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
            pl={{ xs: 0, md: 3, xl: 5 }}
            my="auto"
            pt={{ xs: 4, md: 0 }}
          >
            <Box
              sx={{
                maxWidth: "530px",
                m: { xs: "0 auto", md: 0 },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {sectionTitle1}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {sectionTitle2}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {sectionTitle3}
              </Typography>
              <Typography
                sx={{
                  color: "#86868B",
                  width: "100%",
                  fontSize: { xs: "16px", md: "18px" },
                  mt: { xs: 2, md: 3, xl: 5 },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {sectionBody}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          textAlign: "center",
          pt: { xs: "10vh", md: "10vh", xl: "5vh" },
          pb: { xs: "10vh", md: "10vh" },
          width: "90vw",
          maxWidth: "1200px",
          m: "0 auto",
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            mb: { xs: 3, md: 5 },
            fontSize: { xs: "1.3rem", md: "2.125rem" },
          }}
        >
          {iconTitle}
        </Typography>
        <Grid container spacing={{ xs: 5, md: 12 }} px={{ xs: "5vw", md: 0 }}>
          <IconComp icon={icon1} text={body1} title={iconText1} />
          <IconComp icon={icon2} text={body2} title={iconText2} />
          <IconComp icon={icon3} text={body3} title={iconText3} />
        </Grid>
      </Box>

      {pathname === "/subcontractor" && (
        <ReliabilityCTA
          bgcolor="#f5f5f7"
          handleClick={() => setOpen(true)}
          buttonText="Apply Now"
          smallText={[
            "Choose reliability and expertise;",
            "see how *Transblue* ends your",
            "nonstop frustrations.",
          ]}
          largeText={[
            "Choose reliability and expertise; see how",
            "*Transblue* ends your nonstop frustrations",
          ]}
        />
      )}
      <Footer />
    </>
  );
}

export default CareersTemplate;
