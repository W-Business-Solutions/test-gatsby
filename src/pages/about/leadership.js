import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
// import { navigate } from "gatsby";
import Leadership from "../../newSrc2/components/leadership/leadership";
import Navbar from "../../newSrc2/components/navbar/navbar";
import Footer from "../../newSrc2/components/footer/newFooter";
import ContactModal from "../../newSrc2/components/contactModal/contactModal";
import SmallHeader from "../../newSrc2/components/smallHeader/smallHeader";
import CTA from "../../newSrc2/components/CTA/reliabilityCTA";

function LeadershipPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Leadership | Transblue Facility Management</title>
        <meta
          name="description"
          content="Meet the experienced leaders who guide and inspire our team to consistently deliver top-notch facility management solutions and services at Transblue."
        />
      </Helmet>
      <ContactModal open={open} setOpen={setOpen} />
      <Navbar page="about" />
      <SmallHeader title="Executive Team" page="leadership" />
      <Leadership bgcolor="white" displayLinks={true} />

      <CTA
        buttonText="Let's get started"
        handleClick={() => setOpen(true)}
        bgcolor="#f5f5f7"
        largeText={[
          "Choose reliability and expertise; let our team",
          "at *Transblue* make it right from the start.",
        ]}
        smallText={[
          "Choose reliability and expertise;",
          "let our team at *Transblue*",
          "make it right from the start.",
        ]}
      />
      <Footer />
    </>
  );
}

export default LeadershipPage;
