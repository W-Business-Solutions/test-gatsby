import React from "react";
import JanitorialService from "../../../newSrc2/components/janitorialComponents/serviceTemplate";
import { Helmet } from "react-helmet-async";
import Awards from "../../../newSrc2/components/awards/awards";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import JanitorialList from "../../../newSrc2/components/janitorialComponents/janitorialList";
import ReliabilityCTA from "../../../newSrc2/components/CTA/reliabilityCTA";
import { useState } from "react";
import ContactModal from "../../../newSrc2/components/contactModal/contactModal";

function JanitorialFloor() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ContactModal open={open} setOpen={setOpen} />

      <Helmet>
        <title>Floor Care | Janitorial | Transblue Facility Management</title>
        <meta
          name="description"
          content="Transblue facility management's floor care expertise maintains and rejuvenates your workspace surfaces. Preserve your floors with our janitorial services."
        />
      </Helmet>
      <JanitorialService
        title="Commercial Floor Care"
        subtitle="Protecting and enhancing your facility's floors."
        page="floor"
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
            Your floors represent your organization's commitment to quality and
            cleanliness. They reflect your dedication to your clients and
            employees and showcase a caring demeanor. Harness our extensive
            expertise in floor cleaning and preservation to safeguard your
            sensible investments.
          </Typography>
          <JanitorialList
            title="We pledge a consistent, calming clean, because both your brand and your clients merit the outstanding impression it enables."
            subtitle="We expertly clean various types of hard floors, including:"
            list={[
              "Vinyl Composition Tile (VCT)",
              "Luxury Vinyl Tile (LVT)",
              "Asphalt tile",
              "Rubber",
              "Laminate",
              "Ceramic",
              "Sheet vinyl",
              "Porcelain",
              "Linoleum",
              "Stone",
              "Marble",
              "Terrazzo",
              "Quarry Tile",
              "Epoxy Flooring Systems",
            ]}
          />
          <JanitorialList
            title="To meet your precise operational cleanliness requirements, we bank on our veteran staff's industry experience and innovative cleaning technology."
            subtitle="Our team continuously expands their knowledge pool with ongoing training on emerging methods and technology—they often even spearhead the training, thanks to the synergy of our research and field teams."
            subtitle2="Essential tools and methods we employ include:"
            list={[
              "Industrial vacuum cleaners outfitted with HEPA filters",
              "Microfiber Mop and cleaning cloths",
              "FDA/EPA-approved cleaners, disinfectants, surfactants, and antibacterial solutions based on oversight agencies",
              "Semi-automated floor cleaning and care machines",
              "Sweeping compound to control dust and leave no oily residue",
              "Rust removers for concrete floors",
              "Natural/Botanical EPA-registered floor deodorizers",
              "Hydrogen peroxide-based carpet deodorizers and stain removers",
            ]}
          />
          <JanitorialList
            subtitle="Services we offer as needed encompass:"
            list={[
              "Carpet deep cleaning to eliminate embedded dirt and allergens",
              "Carpet shampooing and brushing",
              "Floor wax stripping to prepare for new wax application",
              "Solvent-based floor wax for enhanced scuff and slip resistance",
              "Recommended treatments (based upon floor type) for improved durability and aesthetics",
            ]}
          />
        </Box>
        <Awards page="Floor Care" />
        <Box
          sx={{
            mx: { xs: "5vw", lg: "15vw", xl: "25vw" },
          }}
        >
          <JanitorialList
            subtitle="Every day, our dedicated staff works unyieldingly to uphold the highest cleanliness standards for our clients from diverse sectors, including:"
            list={[
              "Commercial Real Estate",
              "Educational Facilities (K-12 and Higher Education)",
              "Medical Office buildings",
              "Government Buildings",
              "Industrial Operations",
            ]}
          />
          <JanitorialList
            title="Exceptional Benefits with Us"
            subtitle="When you engage with us, anticipate the whole package. Coupled with an industry-leading customer retention rate (>95%), we ensure our clients enjoy:"
            list={[
              "On-demand industry-standard antimicrobial coatings",
              "Expert service from GBAC-trained technicians",
              "LEED green environmental consideration at our core",
              "Consistent LEED green employee training",
              "Uncompromised quality control with each visit",
              "Clear communication and focus on employee well-being",
              "Assurance of desired results for peace of mind",
            ]}
          />
        </Box>
        <ReliabilityCTA
          bgcolor="white"
          handleClick={() => setOpen(true)}
          buttonText="Let's get started"
          smallText={[
            "Elevate your company’s image; let",
            "our team at *Transblue* make it right",
            "from the start.",
          ]}
          largeText={[
            "Elevate your company’s image; let our team",
            "at *Transblue* make it right from the start",
          ]}
        />
      </JanitorialService>
    </>
  );
}

export default JanitorialFloor;
