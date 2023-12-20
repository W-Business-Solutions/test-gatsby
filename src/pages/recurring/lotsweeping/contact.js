import React, { useEffect, useState } from "react";
import service1 from "../../../newSrc2/assets/lotSweeping/lotsweeping-lot-sweeper-transblue.png";
import service2 from "../../../newSrc2/assets/lotSweeping/lotsweeping-sweeped-lot-transblue.png";
import service3 from "../../../newSrc2/assets/lotSweeping/lotsweeping-lot-washer-transblue.png";
import header from "../../../newSrc2/assets/lotSweeping/header.png";
import headerMobile from "../../../newSrc2/assets/lotSweeping/header_mobile.png";
import { Helmet } from "react-helmet-async";
import ServicePageContact from "../../../newSrc2/components/servicePageContact/servicePageContact";

function LotSweeping() {
  const title = "Lot sweeping | Contact | Transblue Facility Management";
  const meta =
    "Let's talk more about how Transblue's facility management expertise allows us to ensure our lot sweeping services will leave your parking lots clean and safe.";

  const services = [
    {
      img: service1,
      text: "Sidewalks + Parking Lots",
      alt: "low angle view of a transblue lot sweeper sweeping up leaves in a parking lot",
    },
    {
      img: service2,
      text: "Recurring + Situational",
      alt: "arial view of an empty clean parking lot after transblue's lotsweeping service",
    },
    {
      img: service3,
      text: "Commercial + Multi-Family",
      alt: "low angle view of a transblue truck washing a parking lot of dirt and minerals",
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
        headerText="Lot Sweeping"
        sectionTitle1="Create Safe and"
        sectionTitle2="Welcoming Parking Lots"
        sectionBody="Ensure your parking lots are clean, safe, and inviting with our efficient and thorough lot sweeping services. We take care of the little details, maintaining a pristine environment for your customers, tenants, and employees."
        videoLink="https://www.youtube.com/embed/3oZ2xq-0RBM"
        services={services}
      />
    </>
  );
}

export default LotSweeping;
