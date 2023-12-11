import React from "react";
import JanitorialService from "../../../newSrc2/components/janitorialComponents/serviceTemplate";
import { Helmet } from "react-helmet-async";
import Awards from "../../../newSrc2/components/awards/awards";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import JanitorialList from "../../../newSrc2/components/janitorialComponents/janitorialList";
import JanitorialSublist from "../../../newSrc2/components/janitorialComponents/janitorialSublist";
import ReliabilityCTA from "../../../newSrc2/components/CTA/reliabilityCTA";
import { useState } from "react";
import ContactModal from "../../../newSrc2/components/contactModal/contactModal";

function JanitorialPressure() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ContactModal open={open} setOpen={setOpen} />

      <Helmet>
        <title>
          Pressure Washing | Janitorial | Transblue Facility Management
        </title>
        <meta
          name="description"
          content="Refresh your building's exterior through Transblue facility management's professional janitorial pressure washing services."
        />
      </Helmet>
      <JanitorialService
        title="Commercial Pressure Washing"
        subtitle="High-powered exterior cleaning for optimum appeal."
        page="pressure"
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
            We offer an eco-friendly commercial power washing service that not
            only enhances the aesthetic appeal of your space but also
            communicates your attention to detail to your customers. Remember,
            first impressions can be decisive.
          </Typography>

          <JanitorialSublist
            variant="h6"
            title="We're here to ensure your clients perceive the excellence of your business right at the get-go."
            subtitle="
Maintaining a clean exterior through routine power washing speaks volumes for your commitment to detail, reassuring customers of your business's stellar standards. An unwashed building might give off a poor impression about your company's inner workings."
            subtitle2="We offer the following services so your business stands superior:"
            list={[
              {
                title: "Exterior Wall Washing",
                body: "Given the exposure to weather, foot traffic, and pollution, your exterior walls demand periodic cleaning. Accumulated dirt not only results in costly removal but might also affect your business. Regular cleaning prevents careless passersby from adhering gum or creating other messes that mar your professional facade.",
              },
              {
                title: "Roof Cleaning",
                body: "Your roof acts as the guardian of all internal investments, demanding the same level of care as your interiors. Regular power washing fends off corrosive substances, extending your roof's lifespan. It can also detect potential leaks or damages, particularly for shingled roofs.",
              },
              {
                title: "Gutters & Downspouts",
                body: "These elements are critical in directing rainwater runoff. Blocked gutters and downspouts can cause intrusive water spillage, risk foundation damage, and soil erosion. Timely cleaning is crucial to avoid these risks.",
              },
              {
                title: "Awning Cleaning",
                body: "Awnings are more than just business signboards. A clean awning is inviting while a dirty one can lead to undesirable incidents like sagging or breakage. Our professional cleaning service ensures your awnings stay eye-pleasing and safe.",
              },
              {
                title: "Graffiti Removal",
                body: "While some may view graffiti as art, others might find it degrading. If you feel it's undermining your professional image, our experts can remove it for you.",
              },
            ]}
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Inter",
              fontWeight: 500,
              lineHeight: "normal",
            }}
          >
            We cover a variety of surface types, including Concrete, Brick,
            Steel, Vinyl, and more. For your varied requirements, we also offer
            on-demand services, such as chewing gum removal.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Inter",
              fontWeight: 600,
              pt: 4,
              lineHeight: "normal",
            }}
          >
            Start winning more business with eye-catching aesthetics that stay
            appealing, longer.
          </Typography>
        </Box>
        <Awards page="Pressure Washing" />
        <Box
          sx={{
            mx: { xs: "5vw", lg: "15vw", xl: "25vw" },
          }}
        >
          <JanitorialList
            subtitle="Our expertise in commercial power washing services has enabled us to retain more than 95% of our clients over a century's operations. These services are available to numerous business types, including commercial real estate companies, educational facilities, medical office buildings, government buildings, and industrial data centers."
            subtitle2="With Transblue, you also benefit from:"
            list={[
              "Our industry-leading training and preparation programs",
              "Our LEED Green and Green Seal certifications, displaying our commitment to the environment",
              "Regular training updates for our team",
              "Our meticulous eDocumented QA process",
              "Over a century of refined approaches to effective planning and implementation.",
            ]}
          />
        </Box>
        <ReliabilityCTA
          bgcolor="white"
          handleClick={() => setOpen(true)}
          buttonText="Let's get started"
          smallText={[
            "Reflect the quality of your",
            "business inside and out; let",
            "our team at *Transblue* make it",
            "right from the start.",
          ]}
          largeText={[
            "Reflect the quality of your business inside",
            "and out; let our team at *Transblue* make it",
            "right from the start.",
          ]}
        />
      </JanitorialService>
    </>
  );
}

export default JanitorialPressure;
