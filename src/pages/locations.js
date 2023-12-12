import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import centeredStyle from "../newSrc2/styles/centeredStyle";
// import { ScreenSizeContext } from "../../src/App.js";
import { ScreenSizeContext } from "../contextWrappers/screenSizeContext";
import StyledButton from "../newSrc2/components/styledButton/styledButton";
import { Helmet } from "react-helmet-async";
import { navigate } from "gatsby";
import Navbar from "../newSrc2/components/navbar/navbar";
import Footer from "../newSrc2/components/footer/newFooter";
import SmallHeader from "../newSrc2/components/smallHeader/smallHeader";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

const ImageComp = ({ img, title, href }) => {
  return (
    <Link href={href}>
      <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            maxWidth: "100%",
            height: "100%",
            bgcolor: "rgba(0,0,0,.15)",
            zIndex: 4,
          }}
        />
        <img
          src={img}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            width: "100%",
          }}
        />
        <Typography
          variant="h5"
          sx={{
            ...centeredStyle,
            color: "white",
            fontFamily: "Inter",
            fontWeight: 700,
            width: "90%",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Link>
  );
};

function Locations() {
  const screenSizeContext = useContext(ScreenSizeContext);
  const { screenSize } = screenSizeContext;

  const [locations, setLocations] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://my-tb-cors.herokuapp.com/https://locations-fns.azurewebsites.net/api/getalllocations"
      )
      .then((res) => {
        let arr = res.data.sort((a, b) => {
          const nameA = a.urlcity.toUpperCase(); // ignore upper and lowercase
          const nameB = b.urlcity.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          // names must be equal
          return 0;
        });

        setLocations(arr);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Locations | Transblue Franchise</title>
        <meta
          name="description"
          content="Explore our diverse network of Transblue franchises spread across the United States, providing exceptional solutions and services nationwide."
        />
      </Helmet>
      <Navbar page="about" />
      <SmallHeader page="locations" title="Locations" />
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          py: {
            xs: "20vh",
            md: "15vh",
            lg: "30vh",
            lg: "25vh",
            xl: "20vh",
          },
        }}
      >
        <Box
          sx={{
            ...centeredStyle,
            textAlign: "center",
            width: "90vw",
          }}
        >
          <Typography
            variant={screenSize === "small" ? "h4" : "h4"}
            sx={{ fontFamily: "Inter", fontWeight: "bold" }}
          >
            Multiple locations?
          </Typography>
          <Typography
            variant={screenSize === "small" ? "h4" : "h4"}
            component="div"
            sx={{ fontFamily: "Inter", fontWeight: "bold" }}
          >
            Contact our National sales
          </Typography>
          <Typography
            variant={screenSize === "small" ? "h4" : "h4"}
            component="div"
            sx={{ fontFamily: "Inter", fontWeight: "bold", mb: 4 }}
          >
            team for assistance today.
          </Typography>
          <StyledButton
            variant="contained"
            sx={{
              bgcolor: "#1d1d1f",
              color: "white",
              fontFamily: "Inter",
              borderRadius: "30px",
              width: "220px",
            }}
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </StyledButton>
        </Box>
      </Box>
      <Box
        sx={{
          pb: { xs: "10vh", md: "15vh", xl: "10vh" },
          px: { xs: "5vw", md: "10vh", xl: "15vw" },
        }}
      >
        <Grid container spacing={{ xs: 3, md: 5 }}>
          {locations.map((location) => {
            return (
              <Grid item xs={12} md={6} lg={4} key={location.id}>
                <ImageComp
                  img={location.skylineURI}
                  title={`${location.name?.split(" ")[1]}, ${location.state}`}
                  href={
                    location.urlcity === "monroe"
                      ? "/commercial"
                      : `/locations/${location.state}/${location.urlcity}`
                  }
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>

      <Footer />
    </>
  );
}

export default Locations;
