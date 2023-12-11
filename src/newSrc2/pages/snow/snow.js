import React, { useEffect, useState } from "react";
import ParentPageTemplate from "../../components/parentPageTemplate/parentPageTemplate";
import { useLocation } from "@reach/router";
import placeholder from "../../assets/snow/placeholder.png";
import arrow from "../../assets/everett/arrow.png";
import sima from "../../assets/snow/simaTransparent.png";
import csp from "../../assets/snow/cspTransparent.png";
import { Typography, Box, Stack } from "@mui/material";
import review from "../../assets/snow/review.png";

const services = [
  {
    title: "Snow Plowing",
    img: arrow,
    href: "/snow-and-ice-removal/snow-plowing",
    description:
      "Reset after every snowfall. Our team expertly clears last night's snow accumulation, leaving your driveway or street ready for the day ahead.",
  },
  {
    title: "De-icing Treatments",
    img: arrow,
    href: "/snow-and-ice-removal/deicing-treatments",
    description:
      "Enter each day safely with our de-icing solutions. We eliminate yesterday's ice layers to prevent slips and falls before they become a problem.",
  },
  {
    title: "Sidewalk Clearing",
    img: arrow,
    href: "/snow-and-ice-removal/sidewalk-clearing",
    description:
      "Let us refresh your paths with our efficient sidewalk clearing service. We remove snow and ice buildup, allowing you to have a clear walkway every morning.",
  },
  {
    title: "Snow Relocation",
    img: arrow,
    href: "/snow-and-ice-removal/snow-relocation",
    description:
      "Start fresh every day, as our team strategically relocates your accumulated snow piles. With us, you'll maintain a clear space, regardless of the snowfall.",
  },
  {
    title: "Rooftop Snow Removal",
    img: arrow,
    href: "/snow-and-ice-removal/rooftop-snow-removal",
    description:
      "Keep your building safe and its roof free of excess weight. Our team efficiently clears yesterday's snow and ice accumulations, ensuring your day starts without roof-related worries.",
  },
  {
    title: "Ice Management",
    img: arrow,
    href: "/snow-and-ice-removal/ice-management",
    description:
      "Eliminate potential hazards with our quick and effective ice management procedures. We manage icy patches from the day before, giving you a safe environment to deal with.",
  },
  {
    title: "Snow Response Planning",
    img: arrow,
    href: "/snow-and-ice-removal/snow-response-planning",
    description:
      "Stay one step ahead with our comprehensive snow response planning service. We use yesterday's conditions to create a strategy to effectively tackle tomorrow's potential snow or ice issues.",
  },
  {
    title: "24/7 Monitoring + Support",
    img: arrow,
    href: "/snow-and-ice-removal/24-7-monitoring-and-support",
    description:
      "Carry on with your day knowing that we're always on guard with our round-the-clock monitoring and support. We are ready to address any unexpected snow or ice problems, no matter when they occur. We're here to help you succeed, uninterrupted.",
  },
];

function Snow() {
  const location = useLocation();
  const { pathname } = location;
  const [title, setTitle] = useState(
    "Snow + Ice Management | Transblue Facility Management"
  );
  const [meta, setMeta] = useState(
    "Transblue's facility management expertise ensures your spaces are kept safe and accessible with our professional snow removal services."
  );

  useEffect(() => {
    if (pathname === "/snow/contact") {
      setTitle(
        "Snow + Ice Management | Contact | Transblue Facility Management"
      );
      setMeta(
        "Contact us about how Transblue's facility management expertise can ensure your spaces are kept safe and accessible with our professional snow removal services."
      );
    }
  }, []);
  return (
    <ParentPageTemplate
      title={title}
      meta={meta}
      headerText="Snow + Ice Management"
      headerVideoSrc="https://tbconnectstorage.blob.core.windows.net/projectimages/Snow Header Loop - New.mp4"
      placeholder={placeholder}
      subheader1="Commercial Snow Removal Services"
      subheader2="Plan ahead and protect your customers and property with our snow removal services, tailored to uphold your team's productivity. Embrace our performance tracking and cost-effective snow management plans designed just for your needs."
      subheader3="Your safety is our goal – let's keep every location of your business liability-free together."
      videoSrc="https://www.youtube.com/embed/tr1FTlT8eFo"
      introHeader="Ensure Seamless"
      introHeader2="Winter Operations"
      introBody="Opt for safety, opt for efficiency, and experience the benefits of our inclusive snow removal solutions backed by our widespread resources. Together, we'll shape a snow-free environment for optimal productivity."
      introLink=""
      introLinkText="Check out our solutions in action with this best practices paper on our snow services."
      services={services}
      reviewLine1="As a satisfied customer, I 100 percent recommend Transblue. FOUR Reasons WHY you too should use Transblue: 1) Dependable, 2) Awesome, 3) Virtuous, and 4) Extraordinary."
      reviewLine2="From start to finish, Transblue is a second-to-none company all about faithfully serving the community with complete excellence. Nothing but two thumbs up and 5 stars from me!"
      reviewName="Ryan B."
      reviewImg={review}
    >
      <Box sx={{ bgcolor: "#d9d9d9", py: 3 }}>
        <Typography
          sx={{
            fontStyle: "italic",
            textAlign: "center",
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "30px",
            mb: 1,
          }}
        >
          Certified by:
        </Typography>
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"center"}
          spacing={3}
        >
          <img src={sima} style={{ width: "146px" }} />
          <img src={csp} style={{ width: "167px" }} />
        </Stack>
      </Box>
    </ParentPageTemplate>
  );
}

export default Snow;
