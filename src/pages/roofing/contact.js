import React from "react";
import service1 from "../../newSrc2/assets/roofing/roofing-arial-roof-replacement-transblue.png";
import service2 from "../../newSrc2/assets/roofing/roofing-rooftops-city-transblue.png";
import service3 from "../../newSrc2/assets/roofing/roofing-upkept-residential-roofs.png";
import header from "../../newSrc2/assets/roofing/header.png";
import headerMobile from "../../newSrc2/assets/roofing/header_mobile.png";
import { Helmet } from "react-helmet-async";
import ServicePageContact from "../../newSrc2/components/servicePageContact/servicePageContact";

function Roofing() {
  const title = "Roofing | Contact | Transblue Facility Management";
  const meta =
    "Contact us about how Transblue's facility management expertise can ensure the longevity of your commercial roof across all your multi-site locations.";

  const services = [
    {
      img: service1,
      text: "Replacement + Remodel",
      alt: "an arial view of a house's roof in the middle of a roof replacement",
    },
    {
      img: service2,
      text: "Repairs + Restorations",
      alt: "an arial shot of the rooftops of a variety of different buildings",
    },
    {
      img: service3,
      text: "Upkeep + Maintenance",
      alt: "residential rooftops showing what well upkept and maintained roofs look like",
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
        headerText="Roofing"
        sectionTitle1="Invest in Quality"
        sectionTitle2="Commercial Roofing"
        sectionBody="Safeguard your property and prolong its lifespan with our expert commercial roofing services. We use high-quality materials and superior workmanship to provide a durable and attractive roofing solution tailored to your needs."
        videoLink="https://www.youtube.com/embed/LO7QPT0wf-4"
        services={services}
      />
    </>
  );
}

export default Roofing;
