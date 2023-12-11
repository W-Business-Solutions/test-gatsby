import React from "react";
import header from "../newSrc2/assets/industries/commercial.png";
import commercialMobile from "../newSrc2/assets/industries/commercialMobile.png";
import commercialIcon from "../newSrc2/assets/industries/commercialIcon.png";
import commercialIcon2 from "../newSrc2/assets/industries/commercialIcon2.png";
import { Helmet } from "react-helmet-async";
import IndustryTemplate from "../newSrc2/components/industryTemplate/industryTemplate";
import IndustryIconComp from "../newSrc2/components/industryIconComp/industryIconComp";

function Commercial() {
  const bannerArr = [
    {
      text: "Snow",
      href: "/snow-and-ice-removal",
    },
    {
      text: "Asphalt",
      href: "/asphalt",
    },
    {
      text: "Concrete",
      href: "/concrete",
    },
    {
      text: "Recurring",
      href: "/recurring",
    },
    {
      text: "Roofing",
      href: "/roofing",
    },
    {
      text: "Painting",
      href: "/painting",
    },
    {
      text: "EV Chargers",
      href: "/evchargers",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Services | Transblue Facility Management</title>
        <meta
          name="description"
          content="Explore Transblue's comprehensive suite of facility management services and operations tailored to address the needs of commercial and multi-site businesses."
        />
      </Helmet>
      <IndustryTemplate
        headerImg={header}
        mobileHeader={commercialMobile}
        headerText="Commercial Services"
        headerTextLine2="and Operations"
        sectionTitle="Elevating Your"
        sectionTitle2="Business Performance"
        services={[
          "snow",
          "asphalt",
          "concrete",
          "recurring",
          "roofing",
          "painting",
          "evchargers",
        ]}
        bannerArr={bannerArr}
      >
        <IndustryIconComp
          icon1={commercialIcon}
          icon2={commercialIcon2}
          body1="Our comprehensive coverage of commercial services and operations are designed to address your unique needs and help your business thrive."
          body2="With our personalized approach, we work closely with you to create a seamless experience that drives efficiency, enhances productivity, and delivers exceptional results."
        />
      </IndustryTemplate>
    </>
  );
}

export default Commercial;
