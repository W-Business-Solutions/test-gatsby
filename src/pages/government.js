import React from "react";
import header from "../newSrc2/assets/industries/government.png";
import governmentMobile from "../newSrc2/assets/industries/governmentMobile.png";
import { Helmet } from "react-helmet-async";
import IndustryTemplate from "../newSrc2/components/industryTemplate/industryTemplate";

function Government() {
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
        <title>Government Services | Transblue Facility Management</title>
        <meta
          name="description"
          content="Learn about Transblue's specialized facility management services tailored to meet the needs of governmental institutions and operations."
        />
      </Helmet>
      <IndustryTemplate
        headerImg={header}
        mobileHeader={governmentMobile}
        headerText="Government Services"
        headerTextLine2="and Operations"
        sectionTitle="Specialized Solutions"
        sectionTitle2="for Government Needs"
        sectionBody="Learn about our unique services tailored to meet the specific requirements of government institutions and operations. We pride ourselves on delivering efficient, solution-oriented, and reliable support to these vital sectors."
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

export default Government;
