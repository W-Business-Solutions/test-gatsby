import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import StyledButton from "../styledButton/styledButton";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
import linkedin from "../../assets/linkedin.png";
import styled from "@emotion/styled";
import { navigate } from "gatsby";

const categories = [
  {
    title: "Services",
    links: [
      {
        title: "Snow + Ice Removal",
        href: "/snow-and-ice-removal",
      },
      {
        title: "Janitorial",
        href: "/recurring/janitorial",
      },
      {
        title: "Landscaping",
        href: "/recurring/landscaping",
      },
      {
        title: "Lot Sweeping",
        href: "/recurring/lotsweeping",
      },
    ],
  },
  {
    title: "About Us",
    links: [
      {
        title: "About Us",
        href: "/about",
      },
      {
        title: "Core Values",
        href: "/about/corevalues",
      },
      {
        title: "Giving Back",
        href: "/about/givesback",
      },
      {
        title: "Leadership",
        href: "/about/leadership",
      },
    ],
  },
  {
    title: "Contact Us",
    links: [
      {
        title: "3025 Rucker Ave. Everett, WA 98201",
      },
      {
        title: "855-827-2532",
        href: "tel:8558272532",
      },
      {
        title: "sales@transblue.org",
        href: "mailto:sales@transblue.org",
      },
    ],
  },
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const StyledHeader = styled(Typography)(({ theme }) => ({
    color: "white",
    fontSize: "16px",
    fontWeight: 600,
    marginBottom: "10px",
  }));

  const Column = ({ title, links }) => {
    return (
      <Stack diriction="column">
        <StyledHeader>{title}</StyledHeader>
        {links.map((link) => (
          <a
            style={{
              color: "white",
              lineHeight: "normal",
              fontFamily: "Inter",
              textDecoration: "none",
            }}
            href={link.href}
          >
            {link.title}
          </a>
        ))}
      </Stack>
    );
  };

  return (
    <>
      <Box
        sx={{
          bgcolor: "#1D1D1F",
          px: { xl: "25%", xs: "5%", lg: "10%" },
          py: 4,
        }}
        display={{ xs: "none", md: "block" }}
      >
        <Grid container mb={2}>
          {categories.map((category) => (
            <Grid item xs={12} md={4} key={category.title}>
              <Column title={category.title} links={category.links} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          bgcolor: "#1D1D1F",
          px: { xl: "15%", xs: "5%", lg: "5%" },
          py: 4,
        }}
      >
        <Grid container spacing={{ xs: 2, lg: 0 }}>
          <Grid
            item
            xs={12}
            lg={5}
            xl={4}
            display={{ xs: "none", md: "block" }}
          >
            <Stack
              direction="row"
              justifyContent={{ xs: "center", lg: "flex-start" }}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#86868B",
                  fontWeight: 400,
                  borderRight: "1px solid #424245",
                  pr: 1,
                }}
              >
                Copyright © 2023{" "}
                <Box
                  component="button"
                  onClick={scrollToTop}
                  sx={{ border: "0px", bgcolor: "transparent" }}
                >
                  <b className="right" style={{ fontWeight: 400 }}>
                    Transblue
                  </b>{" "}
                </Box>{" "}
                All rights reserved.
              </Typography>
              <Box
                sx={{
                  fontSize: "12px",
                  fontFamily: "Inter",
                  color: "#86868B",
                  fontWeight: 400,
                  border: "0px",
                  bgcolor: "transparent",
                  pl: 1,
                }}
                component="button"
                onClick={() => navigate("/privacy")}
              >
                Privacy Policy
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} lg={3} xl={4}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#D2D2D7",
                }}
              >
                <a
                  href="tel:+18444822583"
                  style={{
                    fontSize: "12px",
                    color: "#D2D2D7",
                    fontFamily: "Inter",
                    textAlign: "center",
                    textDecoration: "none",
                  }}
                >
                  (844) 482-2583
                </a>{" "}
                |{" "}
                <a
                  href="mailto:sales@transblue.org"
                  style={{
                    fontSize: "12px",
                    color: "#D2D2D7",
                    fontFamily: "Inter",
                    textDecoration: "none",
                  }}
                >
                  sales@transblue.org
                </a>{" "}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Stack
              direction="row"
              justifyContent={{ xs: "center", lg: "flex-end" }}
            >
              <img
                src={linkedin}
                alt=""
                style={{
                  maxWidth: "25px",
                  marginRight: "20px",
                  maxHeight: "25px",
                }}
                onClick={() =>
                  // window.open(
                  //   "https://www.linkedin.com/company/transblue-facilities-management",
                  //   "_blank"
                  // )
                  navigate(
                    "https://www.linkedin.com/company/transblue-facilities-management"
                  )
                }
              />
              <img
                src={facebook}
                alt=""
                style={{
                  maxWidth: "25px",
                  marginRight: "20px",
                  maxHeight: "25px",
                }}
                onClick={
                  () => navigate("https://www.facebook.com/TransblueGC/")
                  // window.open("https://www.facebook.com/TransblueGC/", "_blank")
                }
              />
              <img
                src={youtube}
                alt=""
                style={{
                  maxWidth: "25px",
                  marginRight: "20px",
                  maxHeight: "25px",
                }}
                onClick={() =>
                  // window.open(
                  //   "https://www.youtube.com/channel/UC72_rqlaYYyqydfycR588hw",
                  //   "_blank"
                  // )
                  navigate(
                    "https://www.youtube.com/channel/UC72_rqlaYYyqydfycR588hw"
                  )
                }
              />
              <img
                src={instagram}
                alt=""
                style={{ maxWidth: "25px", maxHeight: "25px" }}
                onClick={
                  () => navigate("https://www.instagram.com/transblue_/?hl=en")
                  // window.open(
                  //   "https://www.instagram.com/transblue_/?hl=en",
                  //   "_blank"
                  // )
                }
              />
            </Stack>
          </Grid>

          <Grid item xs={12} display={{ xs: "block", md: "none" }}>
            <Typography
              sx={{
                fontSize: "12px",
                color: "#86868B",
                fontWeight: 400,
                textAlign: "center",
              }}
            >
              Copyright © 2023{" "}
              <Box
                component="button"
                onClick={scrollToTop}
                sx={{ border: "0px", bgcolor: "transparent" }}
              >
                <b className="right" style={{ fontWeight: 400 }}>
                  Transblue
                </b>{" "}
              </Box>{" "}
              All rights reserved.
            </Typography>
          </Grid>

          <Grid item xs={12} display={{ xs: "block", lg: "none" }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  fontSize: "12px",
                  fontFamily: "Inter",
                  color: "#86868B",
                  fontWeight: 400,
                  border: "0px",
                  bgcolor: "transparent",
                  display: "flex",
                  justifyContent: "center",
                }}
                component="button"
                onClick={() => navigate("/privacy")}
              >
                Privacy Policy
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Footer;
