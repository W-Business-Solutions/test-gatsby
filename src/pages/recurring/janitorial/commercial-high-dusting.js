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

function JanitorialDusting() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ContactModal open={open} setOpen={setOpen} />

      <Helmet>
        <title>High Dusting | Janitorial | Transblue Facility Management</title>
        <meta
          name="description"
          content="Improve indoor air quality through Transblue facility management's janitorial high dusting services, eliminating hard-to-reach dust accumulations."
        />
      </Helmet>
      <JanitorialService
        title="Commercial High Dusting"
        subtitle="Thorough cleaning, reaching the unreachable corners."
        page="dusting"
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
            You may not often look up and notice the dust and grime that gather
            in the high, hard-to-reach areas of your building. But here's the
            thing: overlooking doesn't remove it. This is where our professional
            high dusting services can make all the difference.
          </Typography>
          <JanitorialParagraph
            title="Why High Dusting Matters"
            body="Unlike your regular cleaning routine, high dusting reaches the hidden areas—light fixtures, crown molding, air ducts, and high shelving—parts of your facility that traditional dusting cannot reach. Over time, dust buildup in these areas becomes more than just an eyesore; it can negatively impact your employees’ health and productivity. Trust us; this is one aspect of cleaning you don't want to overlook."
          />
          <JanitorialParagraph
            title="How We Can Help"
            body="Our team of experts is specialized and experienced, equipped with high-level access equipment that ensures safety while delivering impeccable service. Using state-of-the-art technology, we go above and beyond to ensure nothing is left unattended. Our mission is to make sure that when you look up, all you see is the design and architecture of your workspace, not dust or dirt."
            body2="With our high dusting services, we're not just cleaning;
						we're actively contributing to a healthier, more
						productive work environment for you and your team. We
						understand how important it is for your business to
						maintain a clean and trustworthy atmosphere. We're here
						to alleviate your frustrations about cleaning hard to
						reach areas and ensure a comprehensive clean, proving
						the value of our service beyond the surface."
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Inter",
              fontWeight: 500,
              mt: 4,
              lineHeight: "normal",
            }}
          >
            Don't let dust dwell in the overlooked corners of your workspace.
            Choose our high dusting services for a thorough job, ensuring no
            area is left untouched. You focus on what you do best —growing your
            business, and we'll take care of creating a cleaner, better
            workspace for you.
          </Typography>
        </Box>
        <Awards page="High Dusting" />
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
            subtitle="Our offerings extend beyond mere janitorial services. We pledge:"
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
            "We’re here to help you succeed; let",
            "our team at *Transblue* make it right",
            "from the start.",
          ]}
          largeText={[
            "We’re here to help you succeed; let our team",
            "at *Transblue* make it right from the start.",
          ]}
        />
      </JanitorialService>
    </>
  );
}

export default JanitorialDusting;
