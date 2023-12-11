import React from "react";
import header from "../newSrc2/assets/industries/multifamily.png";
import multifamilyMobile from "../newSrc2/assets/industries/multifamilyMobile.png";
import { Helmet } from "react-helmet-async";
import IndustryTemplate from "../newSrc2/components/industryTemplate/industryTemplate";

function Multifamily() {
  const bannerArr = [
    {
      text: "Snow",
      href: "/snow",
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
        <title>Multi-Family Services | Transblue</title>
        <meta
          name="description"
          content="Experience our tailored solutions designed to meet the unique needs of multi-family properties while enhancing their appeal and function."
        />
      </Helmet>
      <IndustryTemplate
        headerImg={header}
        mobileHeader={multifamilyMobile}
        headerText="Multi-Family Services"
        headerTextLine2="and Operations"
        sectionTitle="Optimize Your Multi-Family Properties"
        sectionBody="Experience our customized solutions designed to address the unique needs of multi-family properties. Together, we'll enhance the appeal and functionality of your shared spaces, ensuring a cohesive and welcoming environment for residents."
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
      ></IndustryTemplate>
    </>
  );
}

export default Multifamily;
