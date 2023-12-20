import React from "react";
import { Helmet } from "react-helmet-async";
import ServicePage from "../newSrc2/components/servicePage/servicePage";
import service1 from "../newSrc2/assets/asphalt/asphalt-milling-trucks-transblue.png";
import service2 from "../newSrc2/assets/asphalt/asphalt-seal-coating-transblue.png";
import service3 from "../newSrc2/assets/asphalt/asphalt-lot-striping-transblue.png";
import header from "../newSrc2/assets/asphalt/header.png";
import headerMobile from "../newSrc2/assets/asphalt/header_mobile.png";

function Asphalt() {
  const title = "Asphalt | Transblue Facility Management";
  const meta =
    "Transform your multi-site business locations with Transblue facility management's high-quality asphalt services.";
  const services = [
    {
      img: service1,
      text: "Paving + Milling",
      alt: "an unmarked dump truck dumping into a carlson asphalt paver",
    },
    {
      img: service2,
      text: "Seal Coating",
      alt: "an asphalt squeegee seal coating a crack in the pavement",
    },
    {
      img: service3,
      text: "Lot Striping",
      alt: "a construction worker restriping a parking lot spot",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={meta} />
      </Helmet>
      <ServicePage
        headerImg={header}
        mobileHeader={headerMobile}
        headerText="Asphalt"
        sectionTitle1="Durable and Attractive"
        sectionTitle2="Surfaces, Guaranteed"
        sectionBody="Our expert asphalt services ensure that your commercial spaces have a strong foundation and an eye-catching appearance. Combining high-quality materials and industry-leading techniques, we deliver durable and low-maintenance surfaces that are tailored to your needs, helping your business make a lasting impression."
        videoLink="https://www.youtube.com/embed/Hw6AdPO9iNQ"
        services={services}
      />
    </>
  );
}

export default Asphalt;
