import React from "react";
import Navbar from "../newSrc2/components/navbar/navbar";
import Footer from "../newSrc2/components/footer/newFooter";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import StyledButton from "../newSrc2/components/styledButton/styledButton";
import logoLarge from "../newSrc2/assets/logoLarge.png";
import { Link } from "gatsby";
import { navigate } from "gatsby";

const fontStyle = {
  fontFamily: "Inter",
  fontWeight: 600,
  color: "#424245",
  textAlign: "center",
};

function PageNotFound() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          py: { xs: "15vh", lg: "15vh", xl: "20vh" },
          zIndex: -10000000,
        }}
      >
        <Grid
          container
          width={{ xs: "90vw", lg: "80vw", xl: "70vw" }}
          spacing={{ xs: 3, lg: 8 }}
          ml={{ xs: "5vw", lg: "10vw", xl: "15vw" }}
        >
          <Grid item xs={12} lg={6} textAlign="center" my="auto">
            <Typography
              variant="h1"
              sx={{ ...fontStyle, mb: { xs: 3, lg: 2, xl: 4 } }}
            >
              Sorry!
            </Typography>
            <Typography
              variant="h4"
              sx={{
                ...fontStyle,
                m: "0 auto",
                width: "100%",
                maxWidth: "450px",
              }}
            >
              We can’t seem to find the page you’re looking for.
            </Typography>
            <StyledButton
              sx={{
                bgcolor: "black",
                fontFamily: "Inter",
                borderRadius: "30px",
                width: "200px",
                color: "white",
                mt: { xs: 4, lg: 5, xl: 6 },
              }}
              onClick={() => navigate("/")}
              variant="contained"
            >
              take me home
            </StyledButton>
          </Grid>
          <Grid item xs={12} lg={6} my="auto">
            <img src={logoLarge} style={{ maxWidth: "100%" }} />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default PageNotFound;
