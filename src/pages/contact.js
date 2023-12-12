import React from "react";
import Navbar from "../newSrc2/components/navbar/navbar";
import Footer from "../newSrc2/components/footer/newFooter";
import SmallHeader from "../newSrc2/components/smallHeader/smallHeader";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

import LinkComp from "../newSrc2/components/linkComp/linkComp";
import ContactPageForm from "../newSrc2/forms/contactPageForm";

import sub from "../newSrc2/assets/contact/sub.png";
import careers from "../newSrc2/assets/contact/careers.png";
import locations from "../newSrc2/assets/contact/locations.jpg";
import { Helmet } from "react-helmet-async";

const titleStyle = {
  fontFamily: "Inter",
  fontWeight: 600,
  mb: 2,
};

const ContactColumn = ({ title, phone, email, tel }) => (
  <Grid
    item
    xs={12}
    md={4}
    lg={4}
    my="auto"
    sx={{
      textAlign: "center",
      mt: { xs: title !== "Sales" ? 5 : 0, md: 0 },
    }}
  >
    <Typography sx={titleStyle} variant="h5">
      {title}
    </Typography>
    <Link href={`tel:+${tel}`} underline="none" sx={{ color: "black" }}>
      <Typography sx={{ fontFamily: "Inter", fontWeight: 400 }} variant="h6">
        {phone}
      </Typography>
    </Link>
    <Link href={`mailto:${email}`} sx={{ color: "black" }} underline="none">
      <Typography sx={{ fontFamily: "Inter", fontWeight: 400 }} variant="h6">
        {email}
      </Typography>
    </Link>
  </Grid>
);

function NewContact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Transblue</title>
        <meta
          name="description"
          content="Get in touch with our team for more information on how Transblue can help elevate you and your priorities."
        />
      </Helmet>
      <SmallHeader page="contact" title="Contact" />
      <Navbar />

      <Box
        sx={{
          py: { xs: "7vh", lg: "15vh", xl: "8vh" },
          width: { xs: "90vw", lg: "70vw", xl: "70vw" },
          ml: { xs: "5vw", lg: "15vw" },
        }}
      >
        <Grid container>
          <ContactColumn
            title="Sales"
            phone="855-827-2532"
            tel="8558272532"
            email="sales@transblue.org"
          />
          <ContactColumn
            title="Operations"
            phone="877-467-1131"
            tel="8774671131"
            email="service@transblue.org"
          />
          <ContactColumn
            title="General Inquiries"
            phone="844-482-2583"
            tel="8444822583"
            email="inquiries@transblue.org"
          />
        </Grid>
      </Box>

      <Box sx={{ bgcolor: "#f5f5f7" }}>
        <Box sx={{ py: { xs: "7vh", md: "10vh", xl: "9vh" } }}>
          <ContactPageForm />
        </Box>
      </Box>

      <Box
        sx={{
          py: { xs: "10vh", md: "10vh", xl: "9vh" },
          width: {
            xs: "90vw",
            sm: "60vw",
            md: "60vw",
            lg: "90vw",
            xl: "80vw",
          },
          ml: {
            xs: "5vw",
            sm: "20vw",
            md: "20vw",
            lg: "5vw",
            xl: "10vw",
          },
        }}
      >
        <Grid container spacing={{ xs: 2, lg: 5, xl: 15 }}>
          <LinkComp title="Become a Partner" href="/subcontractor" img={sub} />
          <LinkComp
            title="Careers with Transblue"
            href="/about/careers"
            img={careers}
          />
          <LinkComp title="Locations" href="/locations" img={locations} />
        </Grid>
      </Box>

      <Box
        sx={{
          bgcolor: "#f5f5f7",
          py: { xs: "10vh", md: "10vh", xl: "9vh" },
        }}
      >
        <Grid
          container
          width={{ xs: "90vw", lg: "80vw", xl: "70vw" }}
          ml={{ xs: "5vw", lg: "10vw", xl: "15vw" }}
        >
          <Grid item sm={2} display={{ sm: "block", md: "none" }} />
          <Grid item xs={12} sm={8} md={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25411.876843397167!2d-122.21365092777475!3d47.973231348485584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549aaa9953520157%3A0x975cf59d5b50214!2s3025%20Rucker%20Ave%2C%20Everett%2C%20WA%2098201!5e0!3m2!1sen!2sus!4v1691607549376!5m2!1sen!2sus"
              width="100%"
              height="450"
              allowFullScreen
              style={{ border: 0, maxWidth: "100%" }}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ textAlign: "center" }}
            my="auto"
            pt={{ xs: 5, md: 0 }}
          >
            <Typography sx={titleStyle} variant="h5">
              Corporate Office
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 400,
                lineHeight: "normal",
              }}
              variant="h6"
            >
              3025 Rucker Ave
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 400,
                mb: 3,
                lineHeight: "normal",
              }}
              variant="h6"
            >
              Everett, WA 98201
            </Typography>
            <Link
              href={`tel:+8444822583`}
              underline="none"
              sx={{ color: "black" }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
                variant="h6"
              >
                844-482-2583
              </Typography>
            </Link>

            <Link
              href={`mailto:inquiries@transblue.org`}
              underline="none"
              sx={{ color: "black" }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  lineHeight: "normal",
                  mb: 5,
                }}
                variant="h6"
              >
                inquiries@transblue.org
              </Typography>
            </Link>

            <Typography sx={titleStyle} variant="h5">
              Corporate Mailing Address
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 400,
                lineHeight: "normal",
              }}
              variant="h6"
            >
              3102 Hout Ave #12727
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 400,
                lineHeight: "normal",
              }}
              variant="h6"
            >
              Everett, WA 98201
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default NewContact;
