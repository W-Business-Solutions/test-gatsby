import React from "react";
import JanitorialService from "../../../newSrc2/components/janitorialComponents/serviceTemplate";
import { Helmet } from "react-helmet-async";
import Awards from "../../../newSrc2/components/awards/awards";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import JanitorialList from "../../../newSrc2/components/janitorialComponents/janitorialList";
import JanitorialParagraph from "../../../newSrc2/components/janitorialComponents/janitorialParagraph";
import ReliabilityCTA from "../../../newSrc2/components/CTA/reliabilityCTA";
import { useState } from "react";
import ContactModal from "../../../newSrc2/components/contactModal/contactModal";

function JanitorialDisinfecting() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ContactModal open={open} setOpen={setOpen} />

      <Helmet>
        <title>
          Disinfecting Services | Janitorial | Transblue Facility Management
        </title>
        <meta
          name="description"
          content="Prioritize health and safety with Transblue facility management's meticulous disinfecting services, keeping workspaces germ-free with our janitorial expertise."
        />
      </Helmet>
      <JanitorialService
        title="Commercial Disinfecting Services"
        subtitle="Advanced procedures for a safe workspace."
        page="disinfecting"
      >
        <Box
          sx={{
            mx: { xs: "5vw", lg: "15vw", xl: "25vw" },
            pt: { xs: "10vw", lg: "5vw", xl: "3vw" },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Inter",
              fontWeight: 500,
              pb: 4,
              lineHeight: "normal",
            }}
          >
            At Transblue, our commercial disinfecting services fuse top-notch
            sanitation techniques with more than a century of expertise. With
            rigorous quality assurance, ongoing training, and cutting-edge
            equipment, we provide robust support for businesses of all sizes.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Inter",
              fontWeight: 500,
              lineHeight: "normal",
            }}
          >
            Choosing the right commercial disinfection service is key to
            maintaining a healthy, energetic, and motivated team. It's our
            responsibility to shield your customers and staff from potential
            health risks posed by bacteria and germs.
          </Typography>
          <JanitorialParagraph
            title="We understand that ensuring clean and hygienic surroundings might pose some challenges—it's where our expertise comes in."
            body="No matter what kind of organization you run, be it educational, office-based, medical, or transportation, cleanliness and hygiene play pivotal roles. A commercial cleaning service is indispensable to safeguard a healthy environment for both your employees and customers. While regular janitorial service can handle visible dirt, deeper sanitation is critical to combat underlying germs and bacteria."
          />
          <JanitorialList
            title="Equipped with specialized tools and years of industry experience, our expert teams counter unseen hygiene threats potentially overlooked by conventional cleaning methods."
            subtitle="Our service offers:"
            list={[
              "Enhanced Health & Safety: Our efficient disinfecting service curtails the risk of infection and illness by effectively eliminating harmful bacteria and viruses.",
              "Reduced Risk: By wiping away hidden germs and dangerous microbes, we help you curtail the risk of illness outbreaks and contamination within your commercial premises.",
              "Boosted Productivity: Safe and healthy employees are happier, and happier employees are more productive—your investment in their well-being pays off in numerous ways.",
              "Improved Reputation: We assist you in flaunting your commitment to customers and employees' safety with cutting-edge commercial disinfection services, customized to your requirements.",
            ]}
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Inter",
              fontWeight: 500,
              pb: 4,
              lineHeight: "normal",
            }}
          >
            Numerous areas within a commercial setting can benefit from our
            professional cleaning services— the restrooms and communal areas
            being just a few of them. These parts of a professional environment
            teem with hazardous germs that must be consistently and swiftly
            addressed to ensure your team's safety.
          </Typography>
          <JanitorialList
            title="Our Process — From Beginning to Clean"
            subtitle="Our proprietary disinfection processes cater to all sorts of commercial spaces. Following stringent guidelines, our innovative team ensures adherence to the highest health and safety standards."
            list={[
              "Starts with preparation: We begin by clearing away clutter and debris from surfaces targeted for cleaning, ensuring nothing hinders our disinfection process.",
              "Involves the use of top-grade disinfectant: Our highest-quality cleaning tools are designed to obliterate as many dangerous germs as possible. We use potent products including Spartan solutions and eco-friendly cleaning tools which cater to any need. Our team is well-versed with proper techniques and dwell time—assuring maximized results.",
              "Ends with post-cleaning inspections: Excellence is at the heart of our service. Our GBAC-accredited team undertakes a comprehensive quality control process to consistently adhere to the highest standards for our clients.",
            ]}
          />
        </Box>
        <Awards page="Disinfecting Services" />
        <Box
          sx={{
            mx: { xs: "5vw", lg: "15vw", xl: "25vw" },
          }}
        >
          <JanitorialList
            subtitle="Your business simply can't afford to overlook your customers' and employees' health and safety."
            subtitle2="Transblue employees work tirelessly to uphold the highest standards of cleanliness daily, catering to diverse industry types including:"
            list={[
              "Commercial Real Estate Companies managing Class A Office Buildings, Corporate Parks, and Work Centers",
              "Educational Facilities (K-12 and Higher Education)",
              "Medical Office Buildings",
              "Government Buildings",
              "Industrial Operations Including Industrial Manufacturing Centers, Industrial Distribution Centers, and Industrial Data Centers",
            ]}
          />
          <JanitorialList
            title="Choosing Transblue is choosing comprehensive quality. "
            subtitle="Our offerings extend beyond disinfecting services. We pledge:"
            list={[
              "Industry-standard antimicrobial coatings on-demand",
              "GBAC-trained experts handling each fogging machine",
              "Strict adherence to “LEED green” environmental regulations",
              "LEED green training for our employees",
              "Unwavering commitment to quality control and maintaining a healthy work environment",
            ]}
          />
        </Box>
        <ReliabilityCTA
          bgcolor="white"
          handleClick={() => setOpen(true)}
          buttonText="Let's get started"
          smallText={[
            "Find top-tier service; let",
            "our team at *Transblue* make it right",
            "from the start.",
          ]}
          largeText={[
            "Find top-tier service; let our team at",
            "*Transblue* make it right from the start.",
          ]}
        />
      </JanitorialService>
    </>
  );
}

export default JanitorialDisinfecting;
