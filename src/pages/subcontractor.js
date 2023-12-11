import React from "react";
import header from "../newSrc2/assets/subcontractor/header.png";
import headerMobile from "../newSrc2/assets/subcontractor/headerMobile.png";
import icon1 from "../newSrc2/assets/subcontractor/icon1.png";
import icon2 from "../newSrc2/assets/subcontractor/icon2.png";
import icon3 from "../newSrc2/assets/subcontractor/icon3.png";
import { Helmet } from "react-helmet-async";
import CareersTemplate from "../newSrc2/components/careersTemplate/careersTemplate";

function Subcontractor() {
  return (
    <>
      <Helmet>
        <title>Partner with Transblue</title>
        <meta
          name="description"
          content="Transblue is a trusted partner for subcontractors seeking growth, reliability, and exceptional support in delivering top-notch solutions and services."
        />
      </Helmet>
      <CareersTemplate
        headerImg={header}
        mobileHeader={headerMobile}
        headerText="Partner with"
        headerTextLine2="Transblue"
        sectionTitle1="Join our growing"
        sectionTitle2="network of snow and"
        sectionTitle3="service professionals"
        sectionBody="As a subcontractor, collaborating with Transblue means securing a trusted partner committed to your growth, reliability, and exceptional support. Together, we'll deliver top-notch commercial solutions and remodeling services while ensuring mutual success and satisfaction. Forge a future where we both thrive as a powerful team."
        videoLink="https://www.youtube.com/embed/HUzz0oQMdiM"
        iconTitle="We Provide the Tools to Succeed"
        icon1={icon1}
        icon2={icon2}
        icon3={icon3}
        body1="We understand the importance of mutual respect and open communication in fostering successful collaborations. That's why we strive to treat you the way we would like to be treated – with fairness, courtesy, and respect at all times."
        body2="An easy-to-use online vendor portal designed to assist you with work order scheduling, invoicing, and prompt payment processing. We prioritize your convenience, making it effortless for you to manage your projects."
        body3="Accurate site maps and scopes of work tailored to ensure you have the information and guidance necessary to excel in your partnered services. With these resources at your disposal, you can confidently undertake projects and deliver outstanding results."
        buttonText="Apply Now"
      ></CareersTemplate>
    </>
  );
}

export default Subcontractor;
