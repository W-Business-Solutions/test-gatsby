import React from "react";
import header from "../newSrc2/assets/careers/header.png";
import headerMobile from "../newSrc2/assets/careers/headerMobile.png";
import icon1 from "../newSrc2/assets/careers/icon1.png";
import icon2 from "../newSrc2/assets/careers/icon2.png";
import icon3 from "../newSrc2/assets/careers/icon3.png";
import { Helmet } from "react-helmet-async";
import CareersTemplate from "../newSrc2/components/careersTemplate/careersTemplate";

function Careers() {
  return (
    <>
      <Helmet>
        <title>Careers | Transblue Facility Management</title>
        <meta
          name="description"
          content="Join our dynamic team of facility management professionals at Transblue and build a rewarding career alongside us."
        />
      </Helmet>
      <CareersTemplate
        headerImg={header}
        mobileHeader={headerMobile}
        headerText="Build a Better"
        headerTextLine2="Future With Us"
        sectionTitle1="Apply now and become"
        sectionTitle2="a part of our dynamic"
        sectionTitle3="and growing team!"
        sectionBody="Join Transblue, where we value teamwork, innovation, and continuous improvement. Whether you're an experienced professional or a keen learner, we have a place for you to grow, contribute to diverse projects, and make a difference. We offer competitive compensation, comprehensive benefits, and professional development opportunities. Take the first step towards a fulfilling career with us!"
        videoLink="https://www.youtube-nocookie.com/embed/XxF12bx1NuI?modestbranding=1&rel=0&fs=0&color=white&controls=0%22"
        icon1={icon1}
        iconText1="What We Offer"
        icon2={icon2}
        iconText2="Who We're Seeking"
        icon3={icon3}
        iconText3="Benefits + Perks"
        body1="At Transblue, we are dedicated to providing our employees with a rewarding and growth-oriented work environment. We believe in fostering a culture of teamwork, innovation, and continuous improvement. By joining our team, you'll have the opportunity to work on diverse projects, develop your skills, and make a meaningful impact on the industry."
        body2="We're on the lookout for talented, driven individuals who share our passion for creating outstanding commercial spaces. If you have a strong work ethic, excellent problem-solving skills, and a desire to be part of a collaborative team, we want to hear from you!"
        body3="As a valued member of our team, you'll enjoy a competitive compensation package, comprehensive benefits, and opportunities for professional development. We're committed to investing in our employees' growth and well-being, and we offer a range of perks designed to help you thrive both personally and professionally."
        buttonText="Contact Us"
      >
        {/* <Box sx={{width: '100vw', bgcolor: '#f5f5f7', px: { xs: '5vw', md: '10vw'}, textAlign: 'center', pb: '5vh'}}>
                <Typography variant='h4' sx={{fontWeight: 600, fontFamily: 'Inter', py: '4vh'}}>Current Openings</Typography>
                <Typography sx={{fontFamily: 'Inter', color: '#86868B', bgcolor: 'white', py: '10vh', px: { xs: '10%', md: 0}}}>No current openings; feel free to keep in touch by subscribing to our <a href='/' style={{color: '#2997FF'}}>email list here</a>.</Typography>
            </Box> */}
      </CareersTemplate>
    </>
  );
}

export default Careers;
