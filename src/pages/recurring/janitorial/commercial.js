import React from "react";
import JanitorialService from "../../../newSrc2/components/janitorialComponents/serviceTemplate";
import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Awards from "../../../newSrc2/components/awards/awards";
import JanitorialList from "../../../newSrc2/components/janitorialComponents/janitorialList";
import ReliabilityCTA from "../../../newSrc2/components/CTA/reliabilityCTA";
import { useState } from "react";
import ContactModal from "../../../newSrc2/components/contactModal/contactModal";

function JanitorialCommercial() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ContactModal open={open} setOpen={setOpen} />
      <Helmet>
        <title>
          Commercial Janitorial Services | Transblue Facility Management
        </title>
        <meta
          name="description"
          content="Partner with us for reliable commercial janitorial and facility management services, elevating your work environment's cleanliness and fostering productivity."
        />
      </Helmet>
      <JanitorialService
        title="Janitorial Services"
        page="commercial-janitorial"
        subtitle="Tailored cleaning solutions for your business needs."
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
            At Transblue, your business's cleanliness, safety, and productivity
            are our top priority. We offer extensive janitorial services
            designed to tackle your day-to-day buildup of debris, dust, and
            germs. Our health-tested cleaning solutions and anti-microbial
            coatings ensure that your workspace stays spotless and hygienic,
            supporting the productivity as you have come to expect.
          </Typography>
          <JanitorialList
            title="Our services extend to high touchpoint areas including:"
            list={[
              "Doorknobs, sink faucets, and other handles",
              "Light switches",
              "Desks and tables",
              "Countertops",
              "Handrails",
              "Sinks",
              "Electronics, such as keyboards and phones",
              "Water fountains",
              "Toilets",
              "Common-area objects like couches or food-prep surfaces",
            ]}
          />

          <JanitorialList
            title="For custom-tailored hygiene, we offer the following à la carte janitorial services:"
            list={[
              "Disinfection with fogging machines",
              "Antimicrobial spray application",
              "Dedicated day-staff for continuous high-touch sanitization",
            ]}
          />
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Inter",
              fontWeight: 600,
              pt: 4,
              lineHeight: "normal",
            }}
          >
            Every person in your workspace - employees, clients or business
            partner - deserves an impressively clean environment. Our services,
            optimized over more than 20 years, deliver just that.
          </Typography>
        </Box>
        <Awards page="Janitorial Services" />
        <Box
          sx={{
            mx: { xs: "5vw", lg: "15vw", xl: "25vw" },
            // pb: { xs: '10vw', lg: '5vw', xl: '3vw' }
          }}
        >
          <JanitorialList
            title="You can trust our dedicated professionals to maintain superior cleanliness standards whether you are:"
            list={[
              "Commercial real estate companies managing Class A office buildings, corporate parks or work centers",
              "Running educational facilities, K-12 or higher education",
              "Operating medical office buildings",
              "Government offices",
              "Industrial operations including manufacturing centers, distribution centers, and data centers",
            ]}
          />
          <JanitorialList
            title="When you partner with Transblue, expect the full benefits that have made us leaders in the cleaning industry with a customer retention rate over 95%:"
            list={[
              "EPA-approved antimicrobial coatings on demand",
              "GBAC trained technicians operating each fogging machine",
              "Employee training for LEED Green practices",
              "A promise to deliver our best with each visit, inclusive of quality control checks",
              "Clear communication and focus on employee well-being",
              "Guaranteed peace of mind",
            ]}
          />
        </Box>
        <ReliabilityCTA
          bgcolor="white"
          handleClick={() => setOpen(true)}
          buttonText="Let's get started"
          smallText={[
            "Maintain a clean, healthy, and",
            "productive work environment; pick",
            "*Transblue* to make it right,",
            "from the start.",
          ]}
          largeText={[
            "Maintain a clean, healthy, and productive",
            "work environment; pick *Transblue* to make it",
            "right, from the start.",
          ]}
        />
      </JanitorialService>
    </>
  );
}

export default JanitorialCommercial;
