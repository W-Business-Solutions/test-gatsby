import React from "react";
import JanitorialService from "../../../newSrc2/components/janitorialComponents/serviceTemplate";
import { Helmet } from "react-helmet-async";
import Awards from "../../../newSrc2/components/awards/awards";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import JanitorialParagraph from "../../../newSrc2/components/janitorialComponents/janitorialParagraph";
import JanitorialList from "../../../newSrc2/components/janitorialComponents/janitorialList";
import ReliabilityCTA from "../../../newSrc2/components/CTA/reliabilityCTA";
import { useState } from "react";
import ContactModal from "../../../newSrc2/components/contactModal/contactModal";

function JanitorialRecycling() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ContactModal open={open} setOpen={setOpen} />

      <Helmet>
        <title>
          Recycling Services | Janitorial | Transblue Facility Management
        </title>
        <meta
          name="description"
          content="Adopt Transblue's eco-friendly janitorial practices with our facility management recycling solutions. Champion environmental responsibility in your workspace."
        />
      </Helmet>
      <JanitorialService
        title="Commercial Recycling Services"
        subtitle="Easy strict recycling solutions for your business."
        page="recycling"
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
            In today's world where eco-friendliness is a substantial part of
            businesses' social responsibilities, commercial recycling services
            are indispensable. At Transblue, we are committed to helping your
            business contribute to a more sustainable future by seamlessly
            integrating recycling solutions into your operations.
          </Typography>
          <JanitorialParagraph
            title="We aim to simplify recycling for you, handling everything from your daily waste disposal to segregation of recyclables such as cardboard and other materials."
            body="The advantage of partnering with a dedicated service provider like us is clear - we manage all the nitty-gritty of your recycling needs so you can stay focused on what you do best; running your business. We take pleasure in handling the talent sourcing, ensuring compliance, and organizing the procedures for this aspect of your business."
          />
          <JanitorialList
            title="Our responsibility is to grant you the space to concentrate on your business, as we've made recycling ours."
            subtitle="With Transblue’s managed recycling services, we articulate precise sorting and disposal of recyclable material. While we routinely manage common materials, we're capable of managing additional ones, case by case."
            subtitle2="Plastic Type Overview"
            list={[
              "PET & PETE (Class 1 Plastics) - Frequent recyclables, found in beverage bottles and lightweight food containers.",
              "HDPE (Class 2 Plastic) – Commonly used for packaging for detergents, shampoos, and some milk jugs, HDPE is cyclable.",
              "PVC (Class 3 Plastic) – Unrecyclable, PVC is usually used in plastic furniture and tubing.",
              "LDPE (Class 4 Plastic), PP (Class 5 Plastic), PS (Class 6 Plastic), and Other Plastics (Class 7 Plastics) can metimes be recycled. Please consult with us if you have incorporated these plastics into your waste stream.",
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
            Our commercial recycling services not only benefit the environment
            but also contribute to an efficient operational setup. Transblue
            believes the dual purpose of recycling is one of the reasons we have
            consistently retained more than 95% of our clients throughout our
            century-long history.
          </Typography>
        </Box>
        <Awards page="Recycling Services" />
        <Box
          sx={{
            mx: { xs: "5vw", lg: "15vw", xl: "25vw" },
          }}
        >
          <JanitorialList
            subtitle="We provide resource efficiency solutions to various businesses, whether it be a Commercial Real Estate Company, Educational Facility, Medical Office Building, Government Building, or Industrial Manufacturing and Distribution Data Center."
            subtitle2="Partnering with Transblue also comes with additional benefits:"
            list={[
              "Access to industry-leading training and preparation programs",
              "Pride in partnering with a LEED Green and Green Seal certified company",
              "Regularly updated training for our technicians",
              "Benefit from our century-long experience in the industry",
              "Be part of our impressive 95% customer retention rate proving our attention to detail",
              "Quality assurance with eDocumented process",
            ]}
          />
        </Box>
        <ReliabilityCTA
          bgcolor="white"
          handleClick={() => setOpen(true)}
          buttonText="Let's get started"
          smallText={[
            "Strive for a cleaner future; let our",
            "team at *Transblue* make it right",
            "from the start.",
          ]}
          largeText={[
            "Strive for a cleaner future; let our team at",
            "*Transblue* make it right from the start.",
          ]}
        />
      </JanitorialService>
    </>
  );
}

export default JanitorialRecycling;
