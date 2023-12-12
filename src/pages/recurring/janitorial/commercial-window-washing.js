import React from "react";
import { Helmet } from "react-helmet-async";
import JanitorialService from "../../../newSrc2/components/janitorialComponents/serviceTemplate";
import Awards from "../../../newSrc2/components/awards/awards";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import JanitorialParaWithEntity from "../../../newSrc2/components/janitorialComponents/janitorialParaWithEntity";
import JanitorialList from "../../../newSrc2/components/janitorialComponents/janitorialList";
import ReliabilityCTA from "../../../newSrc2/components/CTA/reliabilityCTA";
import { useState } from "react";
import ContactModal from "../../../newSrc2/components/contactModal/contactModal";

function JanitorialWindow() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ContactModal open={open} setOpen={setOpen} />

      <Helmet>
        <title>
          Window Washing | Janitorial | Transblue Facility Management
        </title>
        <meta
          name="description"
          content="Enhance your workspace image with Transblue facility management's window washing janitorial service, offering pristine and streak-free windows every time."
        />
      </Helmet>
      <JanitorialService
        title="Commercial Window Washing"
        subtitle="Fresh, clear windows for your business environment."
        page="window"
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
              mb: 4,
              lineHeight: "normal",
            }}
          >
            We understand the value of a clear view. That's why we strive to
            safeguard the inspiration you found in it on the first day. Our
            skilled technicians bring rich expertise in all the most effective
            window cleaning methods available today, ensuring you receive the
            best results consistently. We update our team's training regularly
            because your peace of mind is our highest priority.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Inter",
              fontWeight: 500,
              lineHeight: "normal",
            }}
          >
            Our services are meticulously divided into four tiers to meet your
            specific needs:
          </Typography>

          <JanitorialParaWithEntity
            title="Start-Off Window Cleaning"
            body="There is no better time to ensure spotless windows than the beginning of your lease or right after the finalization of your property purchase. These windows frame your perception of the external world—it's crucial they reflect precision and cleanliness. Considering the significant amount of time spent indoors, optimum window cleanliness is paramount. Trust us to get it right the first time."
          />
          <JanitorialParaWithEntity
            title="Routine Window Cleaning"
            body="Maintaining the pristine condition of your windows is vital, particularly when you host stakeholders, investors, or partners. A flawless view can impress and dubious spots can cast doubt. Therefore, we provide dedicated personnel to maintain your windows' impeccable shine regularly. You decide how often, and we ensure the execution."
          />
          <JanitorialParaWithEntity
            title="High-Rise and Low-Rise Window Cleaning"
            body="Safely cleaning high-rise and low-rise windows has been historically challenging. With our technologically advanced gears and equipment, we've successfully mitigated these risks. We refresh our team's training regularly because we want you to enjoy unblemished city views every day without worry."
          />
          <JanitorialParaWithEntity
            title="Window Cleaning for New Constructions"
            body="Cleaning windows of new buildings is a specialized process. It includes the elimination of excess construction materials and chemicals from all window surfaces. We handle this task with unmatched precision because any residual substance can impact the indoor air quality significantly."
          />
        </Box>
        <Awards page="Window Washing" />
        <Box
          sx={{
            mx: { xs: "5vw", lg: "15vw", xl: "25vw" },
          }}
        >
          <JanitorialList
            title="You've invested in premium infrastructure—allow us to help you maintain it."
            subtitle="Our employees work relentlessly to deliver superior cleanliness for our clients, who hail from various industries, including:"
            list={[
              "Commercial Real Estate Companies managing Class A Office Buildings, Corporate Parks, and Work Centers",
              "Educational Facilities (K-12 and Higher Education)",
              "Medical Office Buildings",
              "Government Buildings",
              "Industrial Operations including Manufacturing Centers, Distribution Centers, and Data Centers",
            ]}
          />
          <JanitorialList
            title="Why Choose Our Commercial Window Cleaning Services?"
            subtitle="When you partner with us, you access our comprehensive service package, backed by a phenomenal customer retention rate of over 95%. Our premium services include:"
            list={[
              "On-demand application of industry-standard antimicrobial coatings",
              "Expertise of GBAC-trained technicians",
              "LEED green environmental membership",
              "Continued LEED green employee training",
              "Consistent delivery of world-class service with integrated quality control",
              "Clear communication and focused employee well-being",
            ]}
          />
        </Box>
        <ReliabilityCTA
          bgcolor="white"
          handleClick={() => setOpen(true)}
          buttonText="Let's get started"
          smallText={[
            "Choose a sparkling peace of mind;",
            "let our team at *Transblue* take over",
            "from the start.",
          ]}
          largeText={[
            "Choose a sparkling peace of mind; let our",
            "team at *Transblue* take over from the start.",
          ]}
        />
      </JanitorialService>
    </>
  );
}

export default JanitorialWindow;
