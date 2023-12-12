import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import see from "../../newSrc2/assets/corevalues/see.png";
import eachother from "../../newSrc2/assets/corevalues/eachother.png";
import engaged from "../../newSrc2/assets/corevalues/engaged.png";
import grit from "../../newSrc2/assets/corevalues/grit.png";
import help from "../../newSrc2/assets/corevalues/help.png";
import nimble from "../../newSrc2/assets/corevalues/nimble.png";
import { navigate } from "gatsby";
import Navbar from "../../newSrc2/components/navbar/navbar";
import Footer from "../../newSrc2/components/footer/newFooter";
import SmallHeader from "../../newSrc2/components/smallHeader/smallHeader";
import ReliabilityCTA from "../../newSrc2/components/CTA/reliabilityCTA";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const fontStyle = {
  fontFamily: "Inter",
  fontWeight: 500,
  lineHeight: "normal",
  color: "#424245",
  width: "80vw",
  maxWidth: "400px",
  //fontSize: '32px'
};

const imageStyle = {
  width: "40vw",
  maxWidth: "200px",
  //width: '31vw'
};

const corevalues = [
  {
    img: engaged,
    text: "It's about being fully present in the moment, undistracted, and dedicated in delivering to you our best service.",
  },
  {
    img: grit,
    text: "We're committed to displaying resilience and perseverance. This translates to hard work, discipline, and a relentless drive to achieve results for you.",
  },
  {
    img: nimble,
    text: "We embrace change and foster an environment of flexibility. We strive never to stagnate, so that we're always offering you innovative solutions.",
  },
  {
    img: see,
    text: "We're devoted to staying on target, focusing on primary objectives. Our determination to meet your needs is unwavering from initiation to completion of every task.",
  },
  {
    img: help,
    text: "Respect for others and extending support come naturally to us. Noticing and doing what's right is embedded in our assistance.",
  },
  {
    img: eachother,
    text: "We believe in the power of teamwork — the strength of every pillar contributes to the structure. We work as one, having each other's backs, to provide the best for you.",
  },
];

function CoreValues() {
  return (
    <>
      <Helmet>
        <title>Core Values | Transblue Facility Management</title>
        <meta
          name="description"
          content="Learn about the core values that drive Transblue's passion for excellence and support our commitment to delivering outstanding facility management services."
        />
      </Helmet>
      <Navbar page="about" />
      <SmallHeader page="core" title="Core Values" />

      <Box
        sx={{
          py: { xs: "7vh", xl: "5vh" },
          width: { xs: "90vw", md: "70vw", lg: "65vw", xl: "40vw" },
          m: "0 auto",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            m: "0 auto",
            width: "90vw",
            maxWidth: "400px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              ...fontStyle,
              mb: { xs: "7vh", md: "5vh" },
              color: "#424245",
              textAlign: "center",
              fontWeight: 600,
              m: "0 auto",
            }}
          >
            Transblue operates on a strong foundation of six core values, around
            which our entire mindset is driven.
          </Typography>
        </Box>

        {corevalues.map((value, index) => (
          <Stack
            direction={{
              xs: "column-reverse",
              md: index % 2 ? "row" : "row-reverse",
            }}
            sx={{
              width: "100%",
              mb: { xl: 3 },
              textAlign: {
                xs: "center",
                md: index % 2 ? "right" : "left",
              },
              mb: { xs: 7, md: 0 },
            }}
            spacing={2}
            alignItems="center"
            justifyContent="flex-end"
            key={index}
          >
            <Typography variant="h6" sx={{ ...fontStyle }}>
              {value.text}
            </Typography>
            <img src={value.img} style={{ ...imageStyle }} />
          </Stack>
        ))}
      </Box>

      <ReliabilityCTA
        buttonText="Let's get started"
        handleClick={() => navigate("/contact")}
        bgcolor="#f5f5f7"
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

export default CoreValues;
