import React from "react";
import Carousel from "react-material-ui-carousel";

import commercial from "../../assets/janitorial/facilities/commercial.png";
import medical from "../../assets/janitorial/facilities/medical.png";
import data from "../../assets/janitorial/facilities/data.png";
import warehouse from "../../assets/janitorial/facilities/warehouse.png";
import school from "../../assets/janitorial/facilities/school.png";
import college from "../../assets/janitorial/facilities/college.png";
import StyledButton from "../styledButton/styledButton";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NavigateNext from "@mui/icons-material/NavigateNext";
import { navigate } from "gatsby";

const facilities = [
  {
    img: commercial,
    title: "Commercial Offices",
    description:
      "Providing expert cleaning for commercial offices—creating productive, healthy environments.",
    href: "/recurring/janitorial/commercial-offices",
  },
  {
    img: medical,
    title: "Medical Facilities",
    description:
      "Prioritizing health with thorough, technologically advanced cleaning in medical facilities.",
    href: "/recurring/janitorial/medical-facilities",
  },
  {
    img: data,
    title: "Data Centers",
    description:
      "Boost performance and minimize downtime with our clean, secure data center services.",
    href: "/recurring/janitorial/data-centers",
  },
  {
    img: warehouse,
    title: "Warehouse + Logistics",
    description:
      "Driving efficiency with professional cleaning services for warehouses and logistics centers.",
    href: "/recurring/janitorial/warehouse-logistics",
  },
  {
    img: school,
    title: "K-12 Schools",
    description:
      "Promoting safe, healthy learning with our expert school cleaning and maintenance.",
    href: "/recurring/janitorial/schools",
  },
  {
    img: college,
    title: "Colleges + Universities",
    description:
      "Creating clean, comfortable learning spaces at colleges and universities.",
    href: "/recurring/janitorial/colleges-universities",
  },
];

const FacilityComp = ({ img, title, description, href }) => {
  return (
    <Box
      sx={{
        border: "1px solid black",
        boxShadow: 0,
        borderRadius: 4,
        "&:hover": {
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        },
        bgcolor: "transparent",
        px: 3,
        pt: 3,
        pb: 5,
        width: "76%",
        ml: "12%",
      }}
    >
      <img src={img} alt="" style={{ width: "100%" }} />

      <Typography
        sx={{
          fontWeight: 700,
          mt: 4,
          mb: 2,
        }}
        variant="h5"
      >
        {title}
      </Typography>
      <Typography
        sx={{
          mb: 2,
        }}
      >
        {description}
      </Typography>

      <StyledButton
        sx={{
          color: "black",
          fontWeight: 500,
          pl: 0,
        }}
        onClick={() => navigate(href)}
      >
        Learn More{" "}
        <NavigateNext fontSize="small" sx={{ verticalAlign: "middle" }} />
      </StyledButton>
    </Box>
  );
};

function FacilitiesCarousel() {
  return (
    <Carousel
      animation="slide"
      navButtonsAlwaysVisible
      navButtonsProps={{
        style: {
          backgroundColor: "transparent",
          color: "rgba(134, 134, 139, 1)",
          fontSize: "80px !important",
          margin: "0px 5px",
        },
      }}
    >
      {facilities.map((facility) => (
        <FacilityComp
          img={facility.img}
          title={facility.title}
          description={facility.description}
          key={facility.title}
          href={facility.href}
        />
      ))}
    </Carousel>
  );
}

export default FacilitiesCarousel;
