import React from "react";
import header from "../newSrc2/assets/industries/capex.png";
import recurringMobile from "../newSrc2/assets/industries/capexMobile.png";
import { Helmet } from "react-helmet-async";
import IndustryTemplate from "../newSrc2/components/industryTemplate/industryTemplate";

function CapEx() {
  let bannerArr = [
    {
      text: "Asphalt",
      href: "/asphalt",
    },
    {
      text: "Concrete",
      href: "/concrete",
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
        <title>Capital Expenditures | Transblue Facility Management</title>
        <meta
          name="description"
          content="Transblue's facility management expertise allows you and your company to maximize your return on capital expenditure investments."
        />
      </Helmet>
      <IndustryTemplate
        headerImg={header}
        mobileHeader={recurringMobile}
        headerText="Capital"
        headerTextLine2="Expenditures"
        sectionTitle="Maximizing Your Investments"
        sectionBody="At Transblue, we understand the importance of efficient capital expenditure strategies for the long-term growth of your business. Our tailored services combine expert financial planning with our industry know-how, ensuring that your investments in commercial solutions yield significant returns and drive sustainable success."
        services={["asphalt", "concrete", "roofing", "painting", "evchargers"]}
        bannerArr={bannerArr}
      ></IndustryTemplate>
    </>
  );
}

export default CapEx;
