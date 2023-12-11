import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../newSrc2/components/navbar/navbar";
import Footer from "../newSrc2/components/footer/newFooter";
import SmallHeader from "../newSrc2/components/smallHeader/smallHeader";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const fontStyle = {
  fontFamily: "Inter",
  fontWeight: 500,
  mb: 3,
  fontSize: { xs: "14px", md: "16px" },
  color: "#1D1D1F",
};

function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Transblue Facility Management</title>
        <meta
          name="description"
          content="Understand how we protect your personal information and maintain our commitment to responsible data privacy practices at Transblue."
        />
      </Helmet>
      <Navbar />
      <SmallHeader title="Privacy Policy" page="privacy" />

      <Box
        sx={{
          width: { xs: "90vw", md: "80vw", lg: "60vw", xl: "50vw" },
          m: "0 auto",
          py: { xs: "7vh", md: "10vh", xl: "10vh" },
        }}
      >
        <Typography sx={fontStyle}>
          This Privacy Policy describes how your personal information is
          collected, used, and shared when you visit transblue.org (the “Site”).
        </Typography>
        <Typography sx={{ ...fontStyle, mb: 0 }}>
          — PERSONAL INFORMATION WE COLLECT
        </Typography>
        <Typography sx={fontStyle}>
          When you visit the Site, we automatically collect certain information
          about your device, including information about your web browser, IP
          address, time zone, and some of the cookies that are installed on your
          device. Additionally, as you browse the Site, we collect information
          about the individual web pages or products that you view, what
          websites or search terms referred you to the Site, and information
          about how you interact with the Site. We refer to this
          automatically-collected information as “Device Information.”
        </Typography>
        <Typography sx={fontStyle}>
          When we talk about “Personal Information” in this Privacy Policy, we
          are talking both about Device Information and Order Information.
        </Typography>
        <Typography sx={{ ...fontStyle, mb: 0 }}>
          — HOW DO WE USE YOUR PERSONAL INFORMATION?
        </Typography>
        <Typography sx={fontStyle}>
          We use the Order Information that we collect generally to fulfill any
          orders placed through the Site (including processing your payment
          information, arranging for shipping, and providing you with invoices
          and/or order confirmations). Additionally, we use this Order
          Information to:
        </Typography>

        <ul style={fontStyle}>
          <li>Communicate with you</li>
          <li>Screen our orders for potential risk or fraud; and</li>
          <li>
            When in line with the preferences you have shared with us, provide
            you with information or advertising relating to our products or
            services
          </li>
        </ul>

        <Typography sx={{ ...fontStyle, mt: 3 }}>
          We use the Device Information that we collect to help us screen for
          potential risk and fraud (in particular, your IP address), and more
          generally to improve and optimize our Site (for example, by generating
          analytics about how our customers browse and interact with the Site,
          and to assess the success of our marketing and advertising campaigns).
        </Typography>

        <Typography sx={fontStyle}>
          — SHARING YOUR PERSONAL INFORMATION
        </Typography>
        <Typography sx={fontStyle}>
          We do not share your information with 3rd parties. We do use Google
          Analytics to help us understand how our customers use the Site–you can
          read more about how Google uses your Personal Information. You can
          also opt-out of Google Analytics.
        </Typography>
        <Typography sx={fontStyle}>
          Finally, we may also share your Personal Information to comply with
          applicable laws and regulations, to respond to a subpoena, search
          warrant or other lawful request for information we receive, or to
          otherwise protect our rights.
        </Typography>
        <Typography sx={{ ...fontStyle, mb: 0 }}>
          — BEHAVIORAL ADVERTISING
        </Typography>
        <Typography sx={fontStyle}>
          As described above, we use your Personal Information to provide you
          with targeted advertisements or marketing communications we believe
          may be of interest to you. For more information about how targeted
          advertising works, you can visit the Network Advertising Initiative’s
          (“NAI”) educational page.
        </Typography>
        <Typography sx={{ ...fontStyle, mb: 0 }}>
          You can opt out of targeted advertising from:
        </Typography>
        <ul style={fontStyle}>
          <li>FACEBOOK</li>
          <li>GOOGLE</li>
          <li>BING</li>
        </ul>
        <Typography sx={{ ...fontStyle, mt: 3 }}>
          Additionally, you can opt out of some of these services by visiting
          the Digital Advertising Alliance’s opt-out portal.
        </Typography>
        <Typography sx={{ ...fontStyle, mb: 0 }}>— DO NOT TRACK</Typography>
        <Typography sx={fontStyle}>
          Please note that we do not alter our Site’s data collection and use
          practices when we see a Do Not Track signal from your browser
        </Typography>
        <Typography sx={{ ...fontStyle, mb: 0 }}>— CHANGES</Typography>
        <Typography sx={fontStyle}>
          For more information about our privacy practices, if you have
          questions, or if you would like to make a complaint, please contact us
          by e-mail at info@transblue.org or by mail using the details provided
          below:
        </Typography>
        <Typography sx={{ ...fontStyle, mb: 0 }}>
          11916 Old Owen Rd #252
        </Typography>
        <Typography sx={{ ...fontStyle, mb: 0 }}>Monroe, WA 98272</Typography>
        <Typography sx={{ ...fontStyle, mb: 0 }}>United States</Typography>
      </Box>

      <Footer />
    </>
  );
}

export default Privacy;
