import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import React from "react";
import plow from "../../assets/navbar/plow.png";
import commercial from "../../assets/navbar/commercial.png";
import govt from "../../assets/navbar/govt.png";
import janitorial from "../../assets/navbar/janitorial.png";
import landscaping from "../../assets/navbar/landscaping.png";
import lotsweeping from "../../assets/navbar/lotsweeping.png";

import RowComp from "./components/rowComp";

const services = [
  {
    icon: plow,
    title: "Snow + Ice Removal",
    description: "Winter weather management",
    href: "/snow-and-ice-removal",
  },
  {
    icon: landscaping,
    title: "Landscaping",
    description: "Exterior upkeep solutions",
    href: "/recurring/landscaping",
  },
  {
    icon: lotsweeping,
    title: "Lot Sweeping",
    description: "Clean and safe parking lots",
    href: "/recurring/lotsweeping",
  },
  {
    icon: janitorial,
    title: "Janitorial",
    description: "Keeping environments spotless",
    href: "/recurring/janitorial",
  },
];

const everydaySuppot = [
  {
    icon: commercial,
    title: "Commercial Services",
    description: "Services for everywhere",
    href: "/commercial",
  },

  {
    icon: govt,
    title: "Government Services",
    description: "Public sector solutions",
    href: "/government",
  },
];

function Services() {
  return (
    <Box
      sx={{
        maxWidth: "300px",
      }}
    >
      <Box sx={{ pl: 3 }}>
        <Typography
          sx={{
            fontSize: "12px",
            color: "#434344",
            opacity: ".5",
            mt: { xs: 0, lg: 2 },
            mb: 2,
            fontWeight: 600,
            letterSpacing: "1px",
          }}
        >
          PROVEN AND RELIABLE
        </Typography>
        <Grid container spacing={3}>
          {services.map((service) => (
            <RowComp
              title={service.title}
              icon={service.icon}
              description={service.description}
              href={service.href}
            />
          ))}
        </Grid>
      </Box>

      <Box
        sx={{
          bgcolor: "#f5f5f7",
          width: "100%",
          mt: 2,
          pl: 3,
          pt: 2,
          pb: 3,
          borderRadius: "16px",
          width: "100%",
          letterSpacing: "1px",
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            color: "#434344",
            opacity: ".5",
            mb: 2,
            fontWeight: 600,
          }}
        >
          EVERYDAY SUPPORT
        </Typography>
        <Grid container spacing={3}>
          {everydaySuppot.map((service) => (
            <RowComp
              title={service.title}
              icon={service.icon}
              description={service.description}
              href={service.href}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Services;
