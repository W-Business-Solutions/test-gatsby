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

function JanitorialPorter() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ContactModal open={open} setOpen={setOpen} />

      <Helmet>
        <title>
          Porter Services | Janitorial | Transblue Facility Management
        </title>
        <meta
          name="description"
          content="Experience seamless facility management with Transblue's proactive janitorial porter services, addressing any urgent issues with swift diligence."
        />
      </Helmet>
      <JanitorialService
        title="Porter Services"
        subtitle="Ensuring an orderly, well-maintained business environment."
        page="porter"
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
            We understand the crucial role of porter services in representing
            the public image of an establishment. A clean and well-maintained
            building speaks volumes to your customers, clients, and employees
            about your commitment to excellence.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Inter",
              fontWeight: 500,
              lineHeight: "normal",
            }}
          >
            Choose our porter services to ensure your commercial spaces stay
            pristine and inviting, reflecting a professional image 24/7.
          </Typography>
          <JanitorialList
            title="With the right porter service like ours, you can ensure each day starts on the right note with a spotless, well-maintained environment."
            subtitle="Porter services are essential for businesses across various sectors—from retail complexes and office buildings to educational facilities and medical institutions. Our porters handle the crucial tasks that go beyond regular janitorial services, providing benefits like:"
            list={[
              "Maintaining a Professional Image: Our porters work behind the scenes, ensuring cleanliness and organization that reflects positively on your brand.",
              "Preemptive Problem-Solving: Ports nip potential hygiene or maintenance issues in the bud, helping you save on expensive repairs or deep cleanings in the long run.",
              "Enhanced Customer Experience: A clean facility can significantly boost customer satisfaction, leaving a lasting impression and building loyalty.",
            ]}
          />
          <JanitorialList
            title="What Does Our Porter Service Include?"
            subtitle="Our porter service comprises wide-ranging tasks that address cleanliness, hygiene, organization, and maintenance of your facility. We cater to:"
            list={[
              "General cleaning and disinfection of high-traffic areas",
              "Restroom maintenance",
              "Lobby and public area upkeep",
              "Restocking essential supplies",
              "Trash collection and disposal",
              "Immediate response to spills and accidents",
            ]}
          />
          <JanitorialList
            subtitle="Our porter services are customizable and adaptable to the specific needs of your commercial facility. We offer tailored solutions for:"
            list={[
              "Shopping Centers and Malls",
              "Office Buildings",
              "Schools and Universities",
              "Medical Facilities",
              "Sports Arenas and Entertainment Venues",
            ]}
          />
          <JanitorialParagraph
            title="Don't let daily wear and tear tarnish your commercial property's image. Rely on Transblue’s porter services to maintain a fresh, clean, and inviting facility."
            body="We go the extra mile to ensure your property is meticulously maintained, reflecting your commitment to excellence and professionalism. Reach out to our team today to learn more about our customized porter services."
          />
        </Box>
        <Awards page="Porter Services" />
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
            "Choose reliability and expertise;",
            "see how *Transblue* ends your",
            "nonstop frustrations.",
          ]}
          largeText={[
            "Choose reliability and expertise; see how",
            "*Transblue* ends your nonstop frustrations",
          ]}
        />
      </JanitorialService>
    </>
  );
}

export default JanitorialPorter;
