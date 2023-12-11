import React from "react";
import { Helmet } from "react-helmet-async";
import JanitorialFacility from "../../../newSrc2/components/janitorialComponents/facilityTemplate";
import Typography from "@mui/material/Typography";
import JanitorialList from "../../../newSrc2/components/janitorialComponents/janitorialList";
import JanitorialItalicPara from "../../../newSrc2/components/janitorialComponents/janitorialItalicPara";
import JanitorialParagraph from "../../../newSrc2/components/janitorialComponents/janitorialParagraph";

// You can then use these components directly in your code

const services = [
  {
    title: "Event Space Preparation + Cleanup",
    body: "Our dedicated team can support event setup, provide on-site staff, and handle post-event tear-down and cleaning.",
  },
  {
    title: "General Area Cleaning + Disinfecting",
    body: "We specialize in cleaning and disinfecting campus common areas, emphasizing touchpoint cleaning, wall washing, stairwell disinfection, and more. Our thorough approach not only creates a healthier environment but also protects your property and equipment investments.",
  },
  {
    title: "Floor + Carpet Cleaning",
    body: "Our crews stay ready with eco-friendly floor wax strippers and fresh wax applications to maintain your floors and carpets.",
  },
  {
    title: "Exterior + Interior Window Cleaning",
    body: "A sparkling campus inside and out gives a bright, welcoming experience.",
  },
  {
    title: "Grounds Maintenance",
    body: "We manage daily recycling and garbage pickup, seasonal landscaping, and snow removal, ensuring your campus stays beautiful and safe year-round.",
  },
];

const solutions = [
  {
    title: "Common Areas",
    body: "We take care of all common areas such as school cafeterias, break rooms, hallways, and auditoriums. Each space comes with its unique cleaning requirements, and our team is fully equipped to address them efficiently. Your common areas will always shine with our regular janitorial services and deep cleaning solutions.",
  },
  {
    title: "Restrooms",
    body: "Our restroom cleanup services include thorough cleaning, disinfection, and restocking of essential consumables like toilet paper, soap, and paper towels. We employ top-quality cleaning products to ensure maximum cleanliness.",
  },
  {
    title: "Parking Areas and Grounds",
    body: "Boost your campus' curb appeal by letting us handle landscaping and power washing. A well-maintained school environment leads to improved information retention, enhanced student and teacher morale, and increased property value. Focus on running the school while we take care of the exterior.",
  },
  {
    title: "Gym and Locker Rooms",
    body: "Our school cleaning services also cover locker room cleanups, gym cleaning, and disinfecting. Special attention is given to areas like cheerleader club rooms, sports locker rooms, and weight rooms to prevent microbial growth. Our environmentally friendly antimicrobial coatings and regular disinfection keep your facilities safe.",
  },
  {
    title: "Classrooms",
    body: "As the center of education, classrooms require meticulous cleaning. We ensure regular disinfection and restocking of essentials like hand sanitizer, tissues, and waste bags to provide a safe and clean learning environment.",
  },
];

function School() {
  return (
    <>
      <Helmet>
        <title>K-12 Schools | Janitorial | Transblue Facility Management</title>
        <meta
          content="Keep the sick days for students to a minimum by providing a clean environment for them to learn in with Transblue's janitorial facility management services."
          name="description"
        />
      </Helmet>
      <JanitorialFacility
        title="K-12 Schools | Janitorial"
        subtitle="Clean, healthy environments for enthusiastic learners."
        page="school"
      >
        <JanitorialList
          subtitle="Our professional commercial cleaners and facilities management service providers are available 24/7 to address any maintenance and janitorial service needs on your campus. We understand the unique demands of K-12 schools and cater to various types of educational institutions, including:"
          list={[
            "Elementary schools",
            "High schools",
            "College campuses",
            "Private schools",
            "Professional development classrooms",
            "Conference centers",
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
          Our school cleaning services are tailored to cover every corner of
          your campus, ensuring a clean, healthy, and safe learning environment.
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Inter",
            lineHeight: "normal",
            fontWeight: 600,
          }}
        >
          Comprehensive Cleaning Solutions for Your Campus
        </Typography>
        {solutions.map((solution) => (
          <JanitorialItalicPara
            title={solution.title}
            body={solution.body}
            key={solution.title}
          />
        ))}
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Inter",
            lineHeight: "normal",
            fontWeight: 600,
            mt: 4,
          }}
        >
          Specialized Services for Your Unique Needs
        </Typography>
        {services.map((service) => (
          <JanitorialItalicPara
            title={service.title}
            body={service.body}
            key={service.title}
          />
        ))}
        <JanitorialList
          title="Why Choose Transblue?"
          subtitle="Outsourcing your school's cleaning needs to our professional janitorial service will:"
          list={[
            "Streamline general cleaning services",
            "Enhance sanitization and infection control",
            "Ensure timely restocking of daily essentials",
            "Guarantee campus-wide quality control",
          ]}
        />
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Inter",
            lineHeight: "normal",
            fontWeight: 500,
          }}
        >
          We focus on environmentally friendly cleaning solutions. Count on our
          team for exceptional school cleaning services that contribute to a
          greener world.
        </Typography>
        <JanitorialParagraph
          title="Take the First Step with Transblue"
          body="Whether you need cleaning services for an elementary school, high school, or college campus, Transblue is ready to help. We strive to meet your unique commercial cleaning needs while keeping sustainability in mind."
        />
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Inter",
            lineHeight: "normal",
            fontWeight: 600,
            mt: 4,
          }}
        >
          Contact us today to learn more about our premium school cleaning
          solutions – we look forward to working with you to create a top-notch
          learning environment.
        </Typography>
      </JanitorialFacility>
    </>
  );
}

export default School;
