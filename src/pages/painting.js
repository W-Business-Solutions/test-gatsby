import React from "react";
import service1 from "../newSrc2/assets/painting/painting-exterior-painting-transblue.png";
import service2 from "../newSrc2/assets/painting/painting-safety-uniform-transblue.png";
import service3 from "../newSrc2/assets/painting/painting-touch-up-window-transblue.png";
import header from "../newSrc2/assets/painting/header.png";
import headerMobile from "../newSrc2/assets/painting/header_mobile.png";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { useLocation } from "@reach/router";
import ServicePage from "../newSrc2/components/servicePage/servicePage";

function Painting() {
  const location = useLocation();
  const { pathname } = location;
  const [title, setTitle] = useState(
    "Painting | Transblue Facility Management"
  );
  const [meta, setMeta] = useState(
    "Transblue's facility management expertise ensures you will receive professional and consistent painting services across all your multi-site locations."
  );

  useEffect(() => {
    if (pathname === "/painting/contact") {
      setTitle("Painting | Contact | Transblue Facility Management");
      setMeta(
        "Let's talk more about how Transblue's facility management expertise ensures you will receive professional and consistent painting services."
      );
    }
  }, []);

  const services = [
    {
      img: service1,
      text: "Surface Preparation",
      alt: "a transblue employee prepping the exterior walls of a building for painting",
    },
    {
      img: service2,
      text: "Safety + Efficiency",
      alt: "a transblue in safety gear for exterior painting wearing an orange jumpsuit and holding a yellow helmet",
    },
    {
      img: service3,
      text: "Ongoing Maintenance",
      alt: "a transblue employee doing a painting touch up of a window frame -transblue",
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
        headerText="Painting"
        sectionTitle1="Transform Spaces with"
        sectionTitle2="Professional Painting"
        sectionBody="Boost your property's appearance with our top-notch painting services. Our experienced team delivers lasting, beautiful results and an impeccable finish that reflects the highest standards of quality."
        videoLink="https://www.youtube.com/embed/ZPqvAuv1jUs"
        services={services}
      />
    </>
  );
}

export default Painting;
