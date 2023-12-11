import React from "react";
import JanitorialService from "../../../newSrc2/components/janitorialComponents/serviceTemplate";
import { Helmet } from "react-helmet-async";
import Awards from "../../../newSrc2/components/awards/awards";
import Box from "@mui/material/Box";
import JanitorialSublist from "../../../newSrc2/components/janitorialComponents/janitorialSublist";
import ReliabilityCTA from "../../../newSrc2/components/CTA/reliabilityCTA";
import { useState } from "react";
import ContactModal from "../../../newSrc2/components/contactModal/contactModal";
import JanitorialList from "../../../newSrc2/components/janitorialComponents/janitorialList";

function JanitorialRestroom() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ContactModal open={open} setOpen={setOpen} />

      <Helmet>
        <title>
          Restroom Cleaning | Janitorial | Transblue Facility Management
        </title>
        <meta
          name="description"
          content="Assure pristine, hygienic restrooms with Transblue facility management's meticulous janitorial cleaning services."
        />
      </Helmet>
      <JanitorialService
        title="Commercial Restroom Cleaning"
        subtitle="Sanitary, comfortable restrooms for your workplace."
        page="restroom"
      >
        <Box
          sx={{
            mx: { xs: "5vw", lg: "15vw", xl: "25vw" },
            pt: { xs: "10vw", lg: "5vw", xl: "3vw" },
          }}
        >
          <JanitorialSublist
            variant="h5"
            title="Our specialized service releases you from the need for maintaining complex cleaning equipment."
            subtitle="We're here to maintain your commercial restrooms in immaculate condition with our specialized cleaning services. We affirm that a clean restroom is a fundamental sign of your business's commitment to health, safety, and excellence."
            list={[
              {
                title: "Sanitization is Key",
                body: "Complete disinfection can't be achieved without spotless surfaces. Even a minor speck of dirt can host harmful bacteria, including COVID. To guarantee sanitation, our team meticulously cleans every nook, from counters to toilets, before initiating disinfection. Therefore, we ensure your restrooms are clean, safe, and trustworthy at all times.",
              },
              {
                title: "Intense High-Pressure Cleaning",
                body: "We equip our technicians with high-pressure cleaning gear to eliminate any potential hideouts for germs in your restroom. Every customer, client, and employee deserves a safe restroom, and we are invested in providing that through our years of expertise in maintaining sparkling facilities.",
              },
              {
                title: "Elimination of Soil and Bacteria",
                body: "Our restroom cleaning service is chalked out specifically to eradicate dirt and bacteria lurking in hidden corners. We work meticulously so your customers aren't distracted by unsightly filth. Trust us to uphold your clean image as steadfastly as you strive to earn your clients' trust—a testament to this commitment is our impressive client retention rate of 95%.",
              },
            ]}
          />
        </Box>
        <Awards page="Restroom Cleaning" />
        <Box
          sx={{
            mx: { xs: "5vw", lg: "15vw", xl: "25vw" },
          }}
        >
          <JanitorialList
            subtitle="Transblue employees work tirelessly to uphold the highest standards of cleanliness daily, catering to diverse industry types including:"
            list={[
              "Commercial Real Estate Companies managing Class A Office Buildings, Corporate Parks, and Work Centers",
              "Educational Facilities (K-12 and Higher Education)",
              "Medical Office Buildings",
              "Government Buildings",
              "Industrial Operations Including Industrial Manufacturing Centers, Industrial Distribution Centers, and Industrial Data Centers",
            ]}
          />
          <JanitorialList
            subtitle="Choosing Transblue is choosing comprehensive quality. Our offerings extend beyond mere janitorial services. We pledge:"
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
            "Choose comprehensive quality; let",
            "our team at *Transblue* make it right",
            "from the start.",
          ]}
          largeText={[
            "Choose comprehensive quality; let our team",
            "at *Transblue* make it right from the start",
          ]}
        />
      </JanitorialService>
    </>
  );
}

export default JanitorialRestroom;
