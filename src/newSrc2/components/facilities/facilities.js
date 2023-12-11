import React from "react";
import commercial from "../../assets/janitorial/facilities/commercial.png";
import medical from "../../assets/janitorial/facilities/medical.png";
import data from "../../assets/janitorial/facilities/data.png";
import warehouse from "../../assets/janitorial/facilities/warehouse.png";
import school from "../../assets/janitorial/facilities/school.png";
import college from "../../assets/janitorial/facilities/college.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FacilitiesCarousel from "./carousel";
import NavigateNext from "@mui/icons-material/NavigateNext";
import StyledButton from "../styledButton/styledButton";
import { navigate } from "gatsby";

const FacilityComp = ({ img, title, description, href }) => {
  return (
    <Grid item xs={12} md={6} lg={6} xl={4}>
      <Box
        onClick={() => navigate(href)}
        sx={{
          border: "1px solid black",
          boxShadow: 0,
          borderRadius: 4,
          "&:hover": {
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          },
          bgcolor: "transparent",
          p: 3,
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
            mb:
              title === "K-12 Schools" || title === "Colleges + Universities"
                ? 6
                : 3,
            color: "rgba(67, 67, 68, 1)",
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
    </Grid>
  );
};

function Facilities({ displayTitle }) {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          px: { xs: "0vw", md: "15vw", lg: "20vw", xl: "20vw" },
          pt: {
            xs: "5vh",
            md: "10vh",
            lg: "10vh",
            xl: displayTitle ? "10vh" : "7vh",
          },
          pb: { xl: "7vh" },
        }}
      >
        {displayTitle && (
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              textAlign: "center",
              mb: { xs: 3, md: 7 },
            }}
          >
            Types of Facilities
          </Typography>
        )}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Grid container spacing={3}>
            <FacilityComp
              img={commercial}
              title="Commercial Offices"
              description="Providing expert cleaning for commercial offices—creating productive, healthy environments."
              href="/recurring/janitorial/commercial-offices"
            />
            <FacilityComp
              img={medical}
              title="Medical Facilities"
              description="Prioritizing health with thorough, technologically advanced cleaning in medical facilities."
              href="/recurring/janitorial/medical-facilities"
            />
            <FacilityComp
              img={data}
              title="Data Centers"
              description="Boost performance and minimize downtime with our clean, secure data center services."
              href="/recurring/janitorial/data-centers"
            />
            <FacilityComp
              img={warehouse}
              title="Warehouse + Logistics"
              description="Driving efficiency with professional cleaning services for warehouses and logistics centers."
              href="/recurring/janitorial/warehouse-logistics"
            />
            <FacilityComp
              img={school}
              title="K-12 Schools"
              description="Promoting safe, healthy learning with our expert school cleaning and maintenance."
              href="/recurring/janitorial/schools"
            />
            <FacilityComp
              img={college}
              title="Colleges + Universities"
              description="Creating clean, comfortable learning spaces at colleges and universities."
              href="/recurring/janitorial/colleges-universities"
            />
          </Grid>
        </Box>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <FacilitiesCarousel />
        </Box>
      </Box>
    </>
  );
}

export default Facilities;
