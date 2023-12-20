import React from "react";
import service1 from "../../newSrc2/assets/ev/evchargers-two-ev-chargers-transblue.png";
import service2 from "../../newSrc2/assets/ev/evchargers-car-ev-charger-transblue.png";
import service3 from "../../newSrc2/assets/ev/evchargers-ev-charger-and-plug-transblue.png";
import header from "../../newSrc2/assets/ev/header.png";
import headerMobile from "../../newSrc2/assets/ev/header_mobile.png";
import { Helmet } from "react-helmet-async";
import ServicePageContact from "../../newSrc2/components/servicePageContact/servicePageContact";

function EvChargers() {
  const title = "EV Chargers | Contact | Transblue Facility Management";
  const meta =
    "Let's talk about your EV charging plans and how Transblue's facility management services can meet your company's needs across all your multi-site locations.";

  const services = [
    {
      img: service1,
      text: "Professional + Convenient",
      alt: "two ev chargers in a parking lot",
    },
    {
      img: service2,
      text: "Safe + Efficient",
      alt: "the front side of a white car with an ev charger behind it",
    },
    {
      img: service3,
      text: "Sustainable + Green",
      alt: "a ev charger plug going back into the holding port",
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
        headerText="EV Chargers"
        sectionTitle1="Power Up With Reliable"
        sectionTitle2="EV Charging Stations"
        sectionBody="Adopt our state-of-the-art EV charging solutions to accommodate the growing demands of electric vehicle users. Let's work together to ensure your facilities are equipped for the future of transportation and remain attractive to eco-conscious clients."
        videoLink="https://www.youtube.com/embed/9tGEJkIs9H0"
        services={services}
      />
    </>
  );
}

export default EvChargers;
