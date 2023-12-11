import React from "react";
import { Helmet } from "react-helmet-async";
import { NavigateNext } from "@mui/icons-material";
// import { useContext } from "react";
// import { ScreenSizeContext } from "../../src/App.js";
import { useState } from "react";
import centeredStyle from "../newSrc2/styles/centeredStyle";
import ContactModal from "../newSrc2/components/contactModal/contactModal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Footer from "../newSrc2/components/footer/newFooter";
import Navbar from "../newSrc2/components/navbar/navbar";
import StyledButton from "../newSrc2/components/styledButton/styledButton";
import SmallHeader from "../newSrc2/components/smallHeader/smallHeader";
import ServiceBlock from "../newSrc2/components/serviceBlock/serviceBlock";

const services = {
  corevalues: "Core Values",
  leadership: "Leadership",
  givesback: "Giving Back",
  careers: "Careers",
};

const bodyStyle = {
  fontWeight: 500,
  width: "100%",
  fontSize: { xs: "16px", lg: "14px", xl: "16px" },
  fontFamily: "Inter",
};

function NewAbout() {
  // const screenSizeContext = useContext(ScreenSizeContext);
  // const { screenSize } = screenSizeContext;
  const screenSize = "xl";

  const [open, setOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>About Us | Transblue</title>
        <meta
          name="description"
          content="Discover Transblue's journey, mission, and commitment to delivering exceptional solutions for you."
        />
      </Helmet>
      <Navbar page="about" />
      <ContactModal open={open} setOpen={setOpen} />
      <SmallHeader title="About" page="about" />
      <Box sx={{ py: { xs: "10vh", md: "15vh", lg: "20vh", xl: "15vh" } }}>
        <Grid
          container
          width={{ xs: "90vw", xl: "70vw" }}
          ml={{ xs: "5vw", xl: "15vw" }}
          height={{ xl: "40vh" }}
        >
          <Grid
            item
            xs={12}
            md={6}
            xl={5}
            pl={{ xs: 0, md: 3 }}
            pr={{ xs: 0, xl: 7 }}
          >
            <Box
              sx={{
                textAlign: { xs: "center", md: "left" },
                m: { xs: "0 auto", md: 0 },
                maxWidth: "500px",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  fontFamily: "Inter",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Who Are We
              </Typography>

              <Typography sx={{ ...bodyStyle, mt: 2 }}>
                Starting as a landscape-focused general contractor in 2004, we
                expanded to a regional self-performer just two years later.
                Building a robust local and regional clientele, we rapidly grew
                our team and resources; by 2009, we evolved into a national
                facility and vendor multi-site provider. Today, we continue
                focusing on national, scaled growth - specializing in snow
                removal, asphalt, and janitorial services.
              </Typography>
              <Typography sx={{ ...bodyStyle, mt: 2, mb: 2 }}>
                Our focus two decades later remains unchanged:{" "}
                <i>Changing the World One Project at a Time.</i>
              </Typography>
              <a
                href="/about/givesback"
                style={{
                  color: "#007AFF",
                  fontFamily: "Inter",
                  fontWeight: 500,
                }}
              >
                Read More <NavigateNext sx={{ fontSize: "18px" }} />
              </a>
            </Box>
          </Grid>
          <Grid item sm={1} display={{ sm: "block", md: "none" }} />
          <Grid
            item
            xs={12}
            sm={10}
            md={6}
            xl={7}
            pr={{ xs: 0, md: 3, xl: 5 }}
            pt={{ xs: 5, md: 0 }}
          >
            <iframe
              src="https://www.youtube.com/embed/634TfuyKP7g"
              style={{
                minHeight: "105%",
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
        </Grid>
      </Box>

      {Object.keys(services).map((service) => {
        return (
          <ServiceBlock
            href={`/about/${service}`}
            serviceText={services}
            service={service}
          />
        );
      })}

      <Box
        sx={{
          position: "relative",
          width: "100vw",
          py: { xs: "20vh", md: "15vh", lg: "30vh", xl: "20vh" },
        }}
      >
        <Box
          sx={{
            ...centeredStyle,
            textAlign: "center",
            width: "90vw",
          }}
        >
          {screenSize !== "small" && screenSize !== "medium" && (
            <>
              <Typography
                variant={screenSize === "small" ? "h6" : "h4"}
                sx={{ fontFamily: "Inter", fontWeight: "bold" }}
              >
                Discover our rich history, mission, and the unwavering
              </Typography>
              <Typography
                variant={screenSize === "small" ? "h6" : "h4"}
                component="div"
                sx={{
                  mb: 4,
                  fontFamily: "Inter",
                  fontWeight: "bold",
                }}
              >
                dedication to helping your business{" "}
                <b className="right">succeed.</b>
              </Typography>
            </>
          )}

          {(screenSize === "small" || screenSize === "medium") && (
            <>
              <Typography
                variant={screenSize === "small" ? "h6" : "h4"}
                sx={{ fontFamily: "Inter", fontWeight: "bold" }}
              >
                Discover our rich history, mission,
              </Typography>
              <Typography
                variant={screenSize === "small" ? "h6" : "h4"}
                sx={{ fontFamily: "Inter", fontWeight: "bold" }}
              >
                and the unwavering dedication to
              </Typography>
              <Typography
                variant={screenSize === "small" ? "h6" : "h4"}
                component="div"
                sx={{
                  mb: 4,
                  fontFamily: "Inter",
                  fontWeight: "bold",
                }}
              >
                helping your business <b className="right">succeed.</b>
              </Typography>
            </>
          )}

          <StyledButton
            variant="contained"
            sx={{
              bgcolor: "black",
              color: "white",
              fontFamily: "Inter",
              borderRadius: "30px",
              width: "200px",
            }}
            onClick={() => setOpen(true)}
          >
            let's get started
          </StyledButton>
        </Box>
      </Box>

      <Footer />
    </>
  );
}

export default NewAbout;
