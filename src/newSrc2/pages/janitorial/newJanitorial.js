import React, { useState, useEffect, useContext } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/newFooter";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";

import NavigateNext from "@mui/icons-material/NavigateNext";

import StyledButton from "../../components/styledButton/styledButton";
import centeredStyle from "../../styles/centeredStyle";
import { useRef } from "react";
import ContactModal from "../../components/contactModal/contactModal";
// import { ScreenSizeContext } from "../../../../src/App.js";
import { ScreenSizeContext } from "../../../contextWrappers/screenSizeContext";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useLocation } from "@reach/router";
import ReliabilityCTA from "../../components/CTA/reliabilityCTA";
import janitorial from "../../assets/janitorial/icons/janitorial.png";
import carpet from "../../assets/janitorial/icons/carpet.png";
import windowIcon from "../../assets/janitorial/icons/window.png";
import floor from "../../assets/janitorial/icons/floor.png";
import recycling from "../../assets/janitorial/icons/recycling.png";
import pressure from "../../assets/janitorial/icons/pressure.png";
import restroom from "../../assets/janitorial/icons/restroom.png";
import disinfecting from "../../assets/janitorial/icons/disinfecting.png";
import porter from "../../assets/janitorial/icons/porter.png";
import dusting from "../../assets/janitorial/icons/dusting.png";
import review from "../../assets/janitorial/review.png";
import { Helmet } from "react-helmet-async";
import Facilities from "../../components/facilities/facilities";
import placeholder from "../../assets/janitorial/placeholder.png";
import ServiceComp from "../../components/serviceComp/serviceComp";
import Review from "../../components/review/review";
import Brands from "../../components/brands/brands";
import { navigate } from "gatsby";

function NewJanitorial(props) {
  const location = useLocation();
  const { pathname } = location;
  const [title, setTitle] = useState(
    "Janitorial | Transblue Facility Management"
  );
  const [meta, setMeta] = useState(
    "Keep your commercial spaces clean and well-maintained with Transblue facility management's professional janitorial services for businesses of all sizes."
  );

  useEffect(() => {
    if (pathname === "/recurring/janitorial/contact") {
      setTitle("Janitorial | Contact | Transblue Facility Management");
      setMeta(
        "Let's talk more on Transblue facility management's professional janitorial services for businesses of all sizes."
      );
    }
  }, []);
  const screenSizeContext = useContext(ScreenSizeContext);
  const { screenSize } = screenSizeContext;

  const { headerText, services } = props;
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
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={meta} />
      </Helmet>
      <ContactModal open={open} setOpen={setOpen} />
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
          <>
            <video autoPlay loop muted preload="none" poster={placeholder}>
              <source src="https://tbconnectstorage.blob.core.windows.net/projectimages/Janitorial Header Loop.mp4" />
            </video>
          </>
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
            Janitorial
          </Typography>
          <Typography
            sx={{
              width: "70%",
              m: "0 auto",
              fontSize: { xs: "20px", xl: "26px" },
              pt: { xs: 4, lg: 3, xl: 4 },
              textAlign: "center",
              fontFamily: "Inter",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            Commercial Cleaning Services + Grounds Maintenance
          </Typography>
          {screenSize !== "small" && (
            <Typography
              sx={{
                width: "100%",
                maxWidth: {
                  xs: "675px",
                  lg: "550px",
                  xl: "675px",
                },
                fontSize: { xs: "16px", xl: "20px" },
                pt: { xs: 2, md: 3, lg: 3, xl: 4 },
                textAlign: "center",
                m: "0 auto",
                fontFamily: "Inter",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              Stay ahead and safeguard your workplace with our industrial
              cleaning services designed to support you and your team's
              productivity. Experience our meticulous performance tracking and
              budget-friendly cleaning plans crafted just for you.
            </Typography>
          )}
          <Typography
            sx={{
              width: "80%",
              maxWidth: "750px",
              fontSize: { xs: "16px", xl: "20px" },
              pt: { xs: 10, md: 3, lg: 3, xl: 4 },
              textAlign: "center",
              m: "0 auto",
              fontFamily: "Inter",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            Your success is our mission – let's keep your business sparkling
            together.
          </Typography>
          <Stack
            direction="row"
            spacing={5}
            sx={{
              justifyContent: "center",
              mt: { xs: 4, sm: 7 },
            }}
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

            {screenSize !== "small" && (
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
                onClick={handleScroll}
              >
                Learn More <ExpandMoreIcon sx={{ fontSize: "16px" }} />
              </StyledButton>
            )}
          </Stack>
        </Box>
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
              src="https://www.youtube-nocookie.com/embed/ba0EnUMRj18?si=Yr3H27E96lU9Vapg"
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
                fontFamily: "Inter",
              }}
            >
              Maintain Immaculate
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                fontFamily: "Inter",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Commercial Spaces
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
                fontFamily: "Inter",
                fontWeight: 500,
              }}
            >
              Choose safe, choose healthy, and reap the rewards of our
              comprehensive commercial cleaning solutions powered by our
              nationwide resources. Together, we'll create a spotless
              environment for success.
            </Typography>
            <Link
              href="https://content.transblue.com/assets/65036184b26cda6aa67e0532?utm_source=Paperflite%20Link"
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
                  fontFamily: "Inter",
                  color: "rgba(67, 67, 68, 1)",
                  fontWeight: 500,
                }}
              >
                Check out our solutions in action with this best practices paper
                on our Janitorial services.
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
              mb: 5,
            }}
          >
            Services for Commercial + Office Building Facility Maintenance
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} pr={{ md: 2 }}>
          <Stack direction="column" spacing={{ xs: 1, md: 3 }}>
            <ServiceComp
              img={janitorial}
              title="Janitorial Services"
              description="Begin each work session with a clean slate as our team efficiently clears yesterday's debris, dust, spills, and smudges."
              href="/recurring/janitorial/commercial-janitorial-services"
            />
            <ServiceComp
              img={windowIcon}
              title="Window Washing"
              description="We know you chose your view to inspire your work – let us keep it fresh and bright, so you can fully enjoy it every day."
              href="/recurring/janitorial/commercial-window-washing"
            />
            <ServiceComp
              img={recycling}
              title="Recycling Services"
              description="We're here to support you by making recycling an easy, efficient, and clean operation within your business."
              href="/recurring/janitorial/commercial-recycling-services"
            />
            <ServiceComp
              img={restroom}
              title="Restroom Cleaning"
              description="Provide a safe and clean environment with our tech-backed, dependable restroom cleaning solutions."
              href="/recurring/janitorial/commercial-restroom-cleaning"
            />
            <ServiceComp
              img={porter}
              title="Porter Services"
              description="Let our dedicated team ease your stress by proactively ensuring your premises remains continually clean and orderly."
              href="/recurring/janitorial/porter-services"
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} pt={{ xs: 1, md: 0 }} pl={{ md: 2 }}>
          <Stack direction="column" spacing={{ xs: 1, md: 3 }}>
            <ServiceComp
              img={carpet}
              title="Carpet Cleaning"
              description="Experience the benefits of deep carpet cleaning, ensuring a pristine foundation for your workspace."
              href="/recurring/janitorial/commercial-carpet-cleaning"
            />
            <ServiceComp
              img={floor}
              title="Floor Care"
              description="Convey professionalism and care to your employees and clients with our expert floor care services."
              href="/recurring/janitorial/commercial-floor-care"
            />
            <ServiceComp
              img={pressure}
              title="Pressure Washing"
              description="Ensure your building's exterior leaves a lasting impression with our powerful pressure washing services."
              href="/recurring/janitorial/commercial-pressure-washing"
            />
            <ServiceComp
              img={disinfecting}
              title="Disinfecting Services"
              description="Trust in our commercial disinfecting services that merge top-tier sanitation strategies with our extensive experience."
              href="/recurring/janitorial/commercial-disinfecting-services"
            />
            <ServiceComp
              img={dusting}
              title="High Dusting"
              href="/recurring/janitorial/commercial-high-dusting"
              description="Our meticulous high dusting service eliminates those dust particles, contributing to a clean and healthy environment."
            />
          </Stack>
        </Grid>
      </Grid>

      <Review
        reviewLine1={
          "Every day, I'm amazed by their attention to detail and solid processes that take care of not only the routine stuff but also the unexpected."
        }
        reviewLine2="          It's like they're always one step ahead, which makes my life so much
          easier. I truly can't recommend them enough for the peace of mind they
          provide."
        img={review}
        name="Steve T."
        title="Commercial Property Manager"
      />
      <Brands bgcolor="rgba(67, 67, 68, 1)" />

      <Facilities displayTitle />

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

export default NewJanitorial;
