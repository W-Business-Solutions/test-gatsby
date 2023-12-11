import React from "react";
import service1 from "../newSrc2/assets/concrete/concrete-removal-and-repair-transblu.png";
import service2 from "../newSrc2/assets/concrete/concrete-foundation-pouring-transblue.png";
import service3 from "../newSrc2/assets/concrete/concrete-sidewalks-curbs-transblue.png";
import header from "../newSrc2/assets/concrete/header.png";
import headerMobile from "../newSrc2/assets/concrete/header_mobile.png";
import { Helmet } from "react-helmet-async";
import { useLocation } from "@reach/router";
import { useEffect, useState } from "react";
import ServicePage from "../newSrc2/components/servicePage/servicePage";

function Concrete() {
  const location = useLocation();
  const { pathname } = location;

  const [title, setTitle] = useState(
    "Concrete | Transblue Facility Management"
  );
  const [meta, setMeta] = useState(
    "Transblue's facility management expertise allows you and your company to receive exceptional results across all your multi-site concrete projects."
  );

  useEffect(() => {
    if (pathname === "/concrete/contact") {
      setTitle("Concrete | Contact | Transblue Facility Management");
      setMeta(
        "Contact us about how Transblue's facility management expertise can accelerate your concrete projects timeline while delivering exceptional results."
      );
    }
  }, []);

  const services = [
    {
      img: service1,
      text: "Removal + Repair",
      alt: "concrete getting broken up by a couple of workers with a concrete jack hammer",
    },
    {
      img: service2,
      text: "Foundations",
      alt: "a transblue worker about to pour concrete foundation",
    },
    {
      img: service3,
      text: "Sidewalks + Curbs",
      alt: "a transblue worker bending down and smoothing out concrete with a concrete tool in hand",
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
        headerText="Concrete"
        sectionTitle1="Strong Foundations for"
        sectionTitle2="Lasting Success"
        sectionBody="Unlock the potential of your commercial spaces with our top-quality concrete services, designed to provide durability and exceptional performance. As your trusted partner, we strive to deliver solutions that not only meet your requirements but surpass your expectations, ensuring a solid foundation for your business's success."
        videoLink="https://www.youtube.com/embed/Hw6AdPO9iNQ"
        services={services}
      />
    </>
  );
}

export default Concrete;
