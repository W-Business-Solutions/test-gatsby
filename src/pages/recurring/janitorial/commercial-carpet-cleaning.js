import React from "react";
import JanitorialService from "../../../newSrc2/components/janitorialComponents/serviceTemplate";
import JanitorialParagraph from "../../../newSrc2/components/janitorialComponents/janitorialParagraph";
import { Helmet } from "react-helmet-async";
import Awards from "../../../newSrc2/components/awards/awards";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import JanitorialList from "../../../newSrc2/components/janitorialComponents/janitorialList";
import ReliabilityCTA from "../../../newSrc2/components/CTA/reliabilityCTA";
import { useState } from "react";
import ContactModal from "../../../newSrc2/components/contactModal/contactModal";

function JanitorialCarpet() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ContactModal open={open} setOpen={setOpen} />

      <Helmet>
        <title>
          Carpet Cleaning | Janitorial | Transblue Facility Management
        </title>
        <meta
          name="description"
          content="Partner with Transblue for reliable facility management and janitorial services, with carpet cleaning services that will make your carpets look brand new."
        />
      </Helmet>
      <JanitorialService
        title="Commercial Carpet Cleaning"
        subtitle="Prolonging carpet life with deep-cleaning expertise"
        page="carpet"
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
              lineHeight: "normal",
            }}
          >
            Your business deserves the comfort and peace of mind that comes from
            consistently clean floors. Amidst the turbulence of the outside
            world, the cleanliness of your workspace forms a foundation for
            calmness, productivity, and propels the growth of your business.
          </Typography>
          <JanitorialParagraph
            title="Deep Carpet Cleaning"
            body="Our team harnesses top-tier, eco-friendly and health-tested cleaning solutions. This ensures your carpets are rid of even the most obstinate grime, grease, and dirt. Beyond visual appeal, this process effectively eliminates allergens, microbes, and residual particles, uplifting the overall air quality within your premises."
          />
          <JanitorialParagraph
            title=" Area Rug Cleaning Services"
            body="Does your workspace utilize area rugs instead of wall-to-wall carpeting? Their charm notwithstanding, area rugs can be breeding grounds for contaminants. Given their dense weave, vacuuming alone may not suffice. Rest assured, our experienced team knows just how to ensure thorough cleanliness for these rugs."
          />
          <JanitorialParagraph
            title="Interim Carpet Cleaning"
            body="At Transblue, we believe in a holistic approach towards carpet cleaning. Interim cleaning—integral to this process—ensures every inch of your carpet receives the care it deserves, contributing to softer, more vibrant carpets that intrigue the eye."
          />
          <JanitorialParagraph
            title="Carpet Deodorizing"
            body="We know that carpets, due to their texture, can entrap a wide variety of contaminants. To combat this, our team employs proactive deodorizing techniques that neutralize odors, leaving your carpets fresh and inviting."
          />
          <JanitorialParagraph
            title="Carpet Protection"
            body="Our commitment extends beyond a one-time service. To ensure long-term cleanliness and maintain the resilience of your carpets, our GBAC-trained technicians apply surface and fabric protectants post the cleaning process. This also includes application of antimicrobial sprays, as required."
          />
          <JanitorialParagraph
            title="Spot Cleaning"
            body="In the face of spills or stains, our team is prepared to respond swiftly, minimizing potential damage. With training in efficient removal and spot cleaning techniques, your peace of mind is our guarantee."
          />
        </Box>
        <Awards page="Carpet Cleaning" />
        <Box
          sx={{
            mx: { xs: "5vw", lg: "15vw", xl: "25vw" },
            // pb: { xs: '10vw', lg: '5vw', xl: '3vw' }
          }}
        >
          <JanitorialList
            title="Our robust carpet cleaning and janitorial services are designed to support businesses across various sectors:"
            list={[
              "Commercial real estate companies managing Class A office buildings, corporate parks, and work centers",
              "Educational facilities (K-12 and higher education)",
              "Medical office buildings",
              "Government buildings",
              "Industrial operations, including manufacturing centers, distribution centers, and data centers",
            ]}
          />
          <JanitorialList
            title="When you choose Transblue, our dedication to your satisfaction extends far beyond just cleaning. Businesses trust us for:"
            list={[
              "On-demand provision of industry-standard antimicrobial coatings",
              "GBAC-trained technicians ensuring high-quality results",
              'Upholding "LEED green" environmental standards',
              "LEED green employee training to further our commitment to eco-friendly practices",
              "Quality control measures with every visit",
              "Clear communication and emphasis on employee well-being",
              "Guaranteed peace of mind",
            ]}
          />
        </Box>
        <ReliabilityCTA
          bgcolor="white"
          handleClick={() => setOpen(true)}
          buttonText="Let's get started"
          smallText={[
            "Invest in a cleaner workspace;",
            "pick *Transblue* to make it",
            "right, from the start.",
          ]}
          largeText={[
            "Invest in a cleaner workspace; pick",
            "*Transblue* to make it right, from the start.",
          ]}
        />
      </JanitorialService>
    </>
  );
}

export default JanitorialCarpet;
