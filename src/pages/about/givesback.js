import React, { useContext, useState } from "react";
import dees from "../../newSrc2/assets/givesback/dees.png";
import heed from "../../newSrc2/assets/givesback/heed.png";
import mission from "../../newSrc2/assets/givesback/mission.png";
// import { ScreenSizeContext } from "../App.js";
import { Helmet } from "react-helmet-async";
import hlc from "../../newSrc2/assets/givesback/hlc.png";
import hope from "../../newSrc2/assets/givesback/hope.png";
import mbridge from "../../newSrc2/assets/givesback/mbridge.png";
import marked from "../../newSrc2/assets/givesback/marked.png";
import solidrock from "../../newSrc2/assets/givesback/solidrock.png";
import Navbar from "../../newSrc2/components/navbar/navbar";
import Footer from "../../newSrc2/components/footer/newFooter";
import SmallHeader from "../../newSrc2/components/smallHeader/smallHeader";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import NavigateNext from "@mui/icons-material/NavigateNext";
import ContactModal from "../../newSrc2/components/contactModal/contactModal";
import ReliabilityCTA from "../../newSrc2/components/CTA/reliabilityCTA";

const aboutStyle = {
  fontFamily: "Inter",
  fontWeight: 500,
  fontSize: "18px",
  color: "#424245",
  lineHeight: "normal",
  width: "90vw",
  maxWidth: { md: "600px", lg: "450px", xl: "450px" },
  fontSize: { xs: "16px", md: "20px", lg: "16px", xl: "18px" },
  textAlign: "center",
  m: "0 auto",
  pt: { xs: 4, lg: 0 },
};

const sectionHeight = {
  py: { xs: "10vh", md: "12vh", lg: "15vh", xl: "10vh" },
};

const bodyStyle = {
  color: "#86868B",
  lineHeight: "normal",
  fontFamily: "Inter",
  fontWeight: 500,
  fontSize: { lg: "14px", xl: "16px" },
  maxWidth: "80vw",
  m: "0 auto",
};

const LearnMore = ({ link }) => {
  return (
    <Typography
      component="a"
      href={link}
      target="_blank"
      rel="noreferrer"
      sx={{
        color: "#007AFF",
        mt: 2,
        fontFamily: "Inter",
        fontWeight: 500,
        fontSize: { lg: "14px", xl: "16px" },
        // fontSize: { xl: '18px'}
      }}
    >
      Learn more <NavigateNext sx={{ fontSize: "18px" }} />
    </Typography>
  );
};

const LeftText = ({ text, link, children }) => {
  return (
    <Box
      sx={{
        width: "90vw",
        // border: '1px solid red',
        maxWidth: { lg: "70vw", xl: "60vw" },
        margin: "0 auto",
        textAlign: { xs: "center", md: "left" },
        ...sectionHeight,
      }}
    >
      <Grid container spacing={{ xs: 3, lg: 5 }}>
        <Grid item xs={12} md={6} my="auto">
          {text.map((sentence) => (
            <Typography sx={{ ...bodyStyle, mb: 2 }}>{sentence}</Typography>
          ))}
          {link && <LearnMore link={link} />}
        </Grid>
        <Grid item xs={12} md={6} my="auto">
          <Box
            sx={{
              width: { xs: "75%", lg: "100%" },
              textAlign: "center",
              m: "0 auto",
            }}
          >
            {children}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const RightText = ({ text, link, children, video }) => {
  return (
    <Box sx={{ bgcolor: "#F5F5F7", width: "100vw" }}>
      <Box
        sx={{
          width: "90vw",
          // border: '1px solid red',
          maxWidth: { lg: "70vw", xl: "60vw" },
          margin: "0 auto",
          textAlign: { xs: "center", md: "left" },
          ...sectionHeight,
        }}
      >
        <Grid container spacing={{ xs: 3, lg: 10 }}>
          <Grid item xs={12} md={6} my="auto">
            <Box
              sx={{
                width: {
                  xs: video ? "90%" : "75%",
                  lg: "100%",
                },
                textAlign: "center",
                m: "0 auto",
              }}
            >
              {children}
            </Box>
          </Grid>
          <Grid item xs={12} md={6} my="auto">
            {text.map((sentence, index) => (
              <Typography sx={{ ...bodyStyle, mb: 2 }} key={index}>
                {sentence}
              </Typography>
            ))}
            {link && <LearnMore link={link} />}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

function GivesBack() {
  // const screenSizeContext = useContext(ScreenSizeContext);
  // const { screenSize } = screenSizeContext;
  const screenSize = "xl";

  const [open, setOpen] = useState(false);

  const imageStyle = {
    width: screenSize === "small" ? "100%" : "350px",
  };

  return (
    <>
      <Helmet>
        <title>Giving Back | Transblue Facility Management</title>
        <meta
          name="description"
          content="Explore how Transblue actively supports local and international communities and strives to make a positive impact short-term and long-term."
        />
      </Helmet>
      <ContactModal open={open} setOpen={setOpen} page="givesback" />
      <Navbar page="about" />
      <SmallHeader page="about" title="Giving Back" />
      <Box
        sx={{
          ...sectionHeight,
          textAlign: "center",
          width: "90vw",
          m: "0 auto",
          maxWidth: { lg: "80vw", xl: "1200px" },
        }}
      >
        <Grid container spacing={{ xs: 2, lg: 5, xl: 8 }}>
          <Grid
            item
            xs={12}
            lg={6}
            py={3}
            pl={{ xs: 0, md: 3, xl: 5 }}
            my="auto"
            order={{ xs: 2, lg: 1 }}
          >
            <Typography sx={{ ...aboutStyle, mb: { xs: 2, lg: 3 } }}>
              At Transblue, our sense of community extends beyond business; we
              want to showcase our commitment to making a positive difference!
            </Typography>
            <Typography sx={{ ...aboutStyle, mb: { xs: 2, lg: 3 } }}>
              Every site visit, completed project, and service performed puts us
              closer and closer to successes for all our non-profit
              affiliations.
            </Typography>
            <Typography sx={{ ...aboutStyle }}>
              Join us as we transform lives, and read below to see some of our
              partners and the work they do in communities near and far.
            </Typography>
          </Grid>
          <Grid item sm={1} display={{ sm: "block", md: "none" }} />
          <Grid
            item
            xs={12}
            sm={10}
            lg={6}
            pr={{ xs: 0, lg: 3, xl: 5 }}
            pl={{ md: 15, lg: 0 }}
            pb={{ xs: 3, md: 0 }}
            order={{ xs: 1, lg: 2 }}
          >
            <iframe
              src="https://www.youtube.com/embed/dqUMBmZ-7hY"
              style={{
                minHeight: "100%",
                minWidth: "100%",
                objectFit: "cover",
                height:
                  screenSize === "small" || screenSize === "medium"
                    ? "300px"
                    : "100%",
              }}
              frameborder="0"
            ></iframe>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ bgcolor: "#F5F5F7", width: "100vw" }}>
        <Box
          sx={{
            width: "90vw",
            maxWidth: { lg: "80vw", xl: "1200px" },
            margin: "0 auto",
            textAlign: { xs: "center", md: "left" },
            ...sectionHeight,
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={5} my="auto">
              <Grid item xs={12} lg={5}>
                <Box
                  sx={{
                    width: {
                      xs: "75%",
                      md: "100%",
                      lg: "100%",
                    },
                    textAlign: "center",
                    m: "0 auto",
                  }}
                >
                  <img src={mbridge} alt="" style={imageStyle} />
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} lg={7} my="auto">
              <Typography sx={{ ...bodyStyle }}>
                The partners at mBridge bring a deep understanding of both the
                for-profit businesses and the nonprofit sectors together with
                extensive experience working with missions organizations around
                the world. We work closely with both missions workers and those
                interested in missional causes that will have the greatest
                impact.
              </Typography>
              <Typography sx={{ ...bodyStyle, my: 2 }}>
                mBridge is dedicated to helping people maximize their potential
                through earnest giving to deserving organizations. We curate
                noble causes we believe in—those causes that put the most effort
                toward those most in need—and connect you with them so you can
                do the most good.
              </Typography>
              <LearnMore link="https://mbridge.global/" />
            </Grid>
          </Grid>
        </Box>
      </Box>

      <LeftText
        link="https://www.deeshope.org/"
        text={[
          "Dee's Hope is a nonprofit organization helping orphan girls in Uganda to have an education and a better life by giving them education, food, and shelter. Our vision is to create an option for the girls in Uganda to go beyond their current life and become successful.",
          "In the future, Dee’s Hope’s goal is to have a place to plant a school where all the children being served by the organization may attend, to teach life skills to end the cycle of education and poverty for girls.",
        ]}
      >
        <img
          src={dees}
          style={{ width: screenSize === "small" ? "100%" : "350px" }}
        />
      </LeftText>

      <RightText
        link="https://www.dawsonplace.org/"
        text={[
          "Dawson Place Child Advocacy Center is a nonprofit organization providing safety, justice, and healing to victims of child physical and sexual abuse, assault, and neglect. Dawson Place has every service needed for victims and their families to receive the help they need. the Child Advocacy Center model minimizes the number of times a child has to tell their story, by bringing each professional needed for a case into one building, reducing the trauma of a victim's experience.",
        ]}
        video={true}
      >
        <iframe
          src="https://www.youtube.com/embed/RxTqT8AsBP0"
          style={{
            minHeight: "100%",
            minWidth: "100%",
            width: "100%",
            height: screenSize !== "small" ? "250px" : "100%",
          }}
          frameborder="0"
        ></iframe>
      </RightText>

      <LeftText
        link="https://solidrockmission.org/"
        text={[
          "Solid Rock Mission reaches into rural and war torn regions of southern and eastern Ukraine. These are communities where the Russian Orthodox Church is firmly established but has been ineffective in ministering to the younger generation.",
          "Solid Rock Mission has built a mission school and discipleship center that is expanding throughout the region through camps and retreats reaching this young generation for Christ.",
        ]}
      >
        <img
          src={solidrock}
          style={{ width: screenSize === "small" ? "100%" : "350px" }}
        />
      </LeftText>

      <RightText
        link="https://www.marked.org/"
        text={[
          "Marked provides options for orphaned children to have a safe alternatives to gangs and abuse though creative programs and orphan support services.",
          "Marked has seen those statistics begin to change for good among the communities they serve. Reduced crime rates and increased job opportunities for families allowing thousands of children to come out of the workforce and putting them back into school, now with over a 95% enrollment rate.",
        ]}
      >
        <img
          src={marked}
          style={{ width: screenSize === "small" ? "100%" : "350px" }}
        />
      </RightText>
      <LeftText
        link="https://hopeunlimited.org/"
        text={[
          "Hope Unlimited provides critical support to both our first responders and the families of Snohomish County that are in crisis. They provide comfort, support and training during crisis events in our county.",
        ]}
      >
        <img
          src={hope}
          style={{ width: screenSize === "small" ? "100%" : "250px" }}
        />
      </LeftText>
      <RightText
        link=""
        text={[
          "Pastor Jit Lama understands how to stand in a culture that is anti-Christian. Nepal persecutes Christians though many cultural laws that inhibit the freedom of worship. HLC church is a strong relational reproducing church in the heart of Katmandu. They serve the poor, help those who are in need and proclaim the gospel of Jesus.",
          "Last year, they reached out and served 200+ families in crisis due to natural disasters and the pandemic. They are always serving those around them, whether they are believers or not.",
        ]}
      >
        <img src={hlc} style={{ width: "100%" }} />
      </RightText>
      <LeftText
        link="https://www.heeduganda.org/"
        text={[
          "HEED has been instrumental in transforming communities. What started as a rural village without any infrastructure has blossomed into a functioning community with clean water, strong schools and pathways to transformation.",
          "HEED has gathered a team that understands what is needed for a community development in Africa; they serve a 5 village area with over 6000 people.",
        ]}
      >
        <img
          src={heed}
          style={{ width: screenSize === "small" ? "100%" : "400px" }}
        />
      </LeftText>
      <RightText
        link="https://mission-green.org/"
        text={[
          "Mission Green plants eucalyptus trees for education. 1 acre of trees planted provides tuition for 20 students for school; 1 acre of trees can be planted for only $500 yet it will produce over $9000 after harvest in 6 years.",
        ]}
      >
        <img
          src={mission}
          style={{ width: screenSize === "small" ? "100%" : "" }}
        />
      </RightText>

      <ReliabilityCTA
        buttonText="Let's get started"
        handleClick={() => setOpen(true)}
        bgcolor="white"
        largeText={[
          "Discover our rich history, mission, and the unwavering",
          "dedication to helping your business *succeed*.",
        ]}
        smallText={[
          "Discover our rich history,",
          "mission, and the unwavering",
          "dedication to helping",
          "your business *succeed*.",
        ]}
      />
      <Footer />
    </>
  );
}

export default GivesBack;
