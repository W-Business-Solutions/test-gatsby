import React from "react";
import header from "../newSrc2/assets/industries/recurring.png";
import recurringMobile from "../newSrc2/assets/industries/recurringMobile.png";
import { Helmet } from "react-helmet-async";
// import { navigate } from "gatsby";
import IndustryTemplate from "../newSrc2/components/industryTemplate/industryTemplate";

function Recurring() {
  const bannerArr = [
    {
      text: "Landscaping",
      href: "/recurring/landscaping",
    },
    {
      text: "Lot Sweeping",
      href: "/recurring/lotsweeping",
    },
    {
      text: "Janitorial",
      href: "/recurring/janitorial",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Recurring Services | Transblue Facility Management</title>
        <meta
          name="description"
          content="Simplify property maintenance with Transblue's recurring facility management services that cover a range of tasks, ensuring your spaces always look their best."
        />
      </Helmet>
      <IndustryTemplate
        headerImg={header}
        mobileHeader={recurringMobile}
        headerText="Recurring Services"
        sectionTitle="Making Property Maintenance"
        sectionTitle2="Effortless and Efficient"
        sectionBody="Simplify your property maintenance with our convenient recurring services. Together, we'll keep your spaces in top condition, covering a range of tasks that ensure your property always looks its best. Let us collaborate to ease your maintenance burdens while providing outstanding results."
        services={["landscaping", "lotsweeping", "janitorial"]}
        page="recurring"
        bannerArr={bannerArr}
      />
    </>
  );
}

export default Recurring;
