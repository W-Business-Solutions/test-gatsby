import React from "react";
import service1 from "../../../newSrc2/assets/landscaping/landscaping-front-loader-dirt-transblue.png";
import service2 from "../../../newSrc2/assets/landscaping/landscaping-upkeep-transblue.png";
import service3 from "../../../newSrc2/assets/landscaping/landscaping-grass-transblue.png";
import header from "../../../newSrc2/assets/landscaping/header.png";
import headerMobile from "../../../newSrc2/assets/landscaping/header_mobile.png";
import { Helmet } from "react-helmet-async";
import ServicePageContact from "../../../newSrc2/components/servicePageContact/servicePageContact";

function Landscaping() {
  const title = "Landscaping | Contact | Transblue Facility Management";
  const meta =
    "Contact us about how Transblue's facility management expertise can give you consistent, quality landscaping design and maintenance results.";

  const services = [
    {
      img: service1,
      text: "Design + Renovation",
      alt: "a transblue front loader scooping up dirt from a dirt lawn during a lawn remodel",
    },
    {
      img: service2,
      text: "Maintenance + Upkeep",
      alt: "transblue workers performing landscaping maintenance with fresh dirt for plants",
    },
    {
      img: service3,
      text: "Recurring Services",
      alt: "a transblue employee rolling sod rolls onto a lawn",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={meta} />
      </Helmet>
      <ServicePageContact
        headerImg={header}
        mobileHeader={headerMobile}
        headerText="Landscaping"
        sectionTitle1="Enhance Your Property"
        sectionTitle2="with Expert Landscaping"
        sectionBody="Trust Transblue's expert landscaping design and maintenance services to elevate your property's aesthetics and value. Let our experienced team create an inviting and visually stunning environment that reflects your brand's vision."
        videoLink="https://www.youtube.com/embed/dje-shJA-wA"
        services={services}
      />
    </>
  );
}

export default Landscaping;
