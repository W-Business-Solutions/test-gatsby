import React from "react";
import { Helmet } from "react-helmet-async";
import JanitorialFacility from "../../../newSrc2/components/janitorialComponents/facilityTemplate";
import Typography from "@mui/material/Typography";
import JanitorialList from "../../../newSrc2/components/janitorialComponents/janitorialList";
import JanitorialParagraph from "../../../newSrc2/components/janitorialComponents/janitorialParagraph";

function JanitorialMedical() {
  return (
    <>
      <Helmet>
        <title>
          Medical Facilities | Janitorial | Transblue Facility Management
        </title>
        <meta
          name="description"
          content="Transblue's janitorial facility management services disinfect and sterilize your medical facilities to make sure they are ready for that next patient.
"
        />
      </Helmet>
      <JanitorialFacility
        title="Medical Facilities | Janitorial"
        subtitle="Cleanliness and hygiene for healthcare environments."
        page="medical"
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Inter",
            lineHeight: "normal",
            fontWeight: 500,
            mb: 4,
          }}
        >
          Your patients trust you to take care of their health and well-being;
          the last thing they need is to worry about the cleanliness of your
          medical facilities. As a professional commercial cleaning service, we
          partner with you to meet your medical office cleaning needs, allowing
          you to focus on what’s most important—caring for your patients.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Inter",
            lineHeight: "normal",
            fontWeight: 500,
          }}
        >
          Our mission is to consistently maintain and disinfect your medical
          facilities, creating a safe and healthy environment for your patients,
          staff, and visitors alike.
        </Typography>
        <JanitorialParagraph
          title="Comprehensive Medical Office Cleaning Solutions"
          body="Running a medical office is already challenging enough without worrying about cleaning tasks. That's where we step in with our wide range of medical office cleaning services to ensure a clean and hygienic environment, enabling your staff to concentrate on providing exceptional patient care."
        />
        <JanitorialList
          title="Expertise Across Various Medical Facilities"
          subtitle="Our commercial cleaning skills extend to areas requiring regular sanitization, janitorial services, and maintenance. Utilizing hospital-grade disinfectants, our expertise covers:"
          list={[
            "Imaging areas",
            "Medical labs",
            "Surgical centers",
            "Exam rooms",
            "Cleanrooms",
            "Other critical facilities",
          ]}
        />
        <JanitorialList
          title="Tailored Solutions for Medical Office Buildings"
          subtitle="We offer full-service care for medical office buildings, including:"
          list={[
            "Doctor's offices",
            "Consultation rooms",
            "Patient waiting rooms",
            "High-traffic areas",
            "Specialized Approach for Surgical Centers and Labs",
          ]}
        />
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Inter",
            lineHeight: "normal",
            fontWeight: 500,
            mb: 4,
          }}
        >
          We understand that cleaning surgical centers and medical labs requires
          a unique approach, which is why we prioritize air quality alongside
          standard cleaning practices. By reducing or eliminating Volatile
          Organic Compounds (VOCs) during our cleaning process, we maintain
          optimal indoor air quality for both medical professionals and their
          patients.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Inter",
            lineHeight: "normal",
            fontWeight: 500,
          }}
        >
          Our skilled and experienced cleaning teams ensure that all medical
          facilities are thoroughly cleaned, and we remain committed to
          upholding the highest standards in preventing cross-contamination of
          surfaces.
        </Typography>
        <JanitorialParagraph
          title="Cleanrooms and Laboratories"
          body="We recognize the importance of reliable and efficient cleaning services in ensuring accurate results from life sciences labs to pharmaceutical labs. Our specialized cleaning techniques, which include decontamination and sterilization, contribute to preventing cross-contamination and maintaining the stringent cleanliness standards required by cleanrooms."
        />
        <JanitorialList
          title="Addressing Key Areas in Your Medical Facility"
          subtitle="We have the tools, products, and expertise to deliver outstanding results across your medical facility, focusing on essential areas such as:"
          list={[
            "General office spaces",
            "Patient intake areas",
            "Waiting rooms",
            "Corridors and hallways",
            "Patient and exam rooms",
            "Restrooms, including restocking supplies",
            "Imaging areas",
            "Medical labs",
            "Surgical suites",
            "Other critical facilities",
          ]}
        />
        <JanitorialParagraph
          title="Compliance and Quality Control You Can Trust"
          body="Our specialized medical office cleaning services [are underpinned by years of experience and compliance with the latest standards set by the EPA, CDC, WHO, OSHA, and JCAHO. Our certified cleaning professionals use environmentally friendly and EPA-approved antiviral solutions, delivering the highest quality control measures for your peace of mind."
        />
        <JanitorialParagraph
          title="Experience the Transblue Difference"
          body="If you're in need of a professional, qualified janitorial service for your healthcare facility, we're here to provide an unparalleled cleaning experience tailored to your requirements. We look forward to discussing your specific medical office cleaning needs and collaborating on a plan to fulfill them."
        />
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Inter",
            lineHeight: "normal",
            fontWeight: 600,
            pt: 4,
          }}
        >
          Let's work together for a cleaner, healthier, and safer medical
          environment.
        </Typography>
      </JanitorialFacility>
    </>
  );
}

export default JanitorialMedical;
