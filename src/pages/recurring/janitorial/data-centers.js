import React from "react";
import { Helmet } from "react-helmet-async";
import JanitorialFacility from "../../../newSrc2/components/janitorialComponents/facilityTemplate";
import Typography from "@mui/material/Typography";
import JanitorialList from "../../../newSrc2/components/janitorialComponents/janitorialList";
import ItalicComp from "../../../newSrc2/components/janitorialComponents/italicComp";

// You can now use these components directly in your code without lazy loading.

const services = [
  {
    title: "Subfloor Cleaning and Anti-Static Finishing: ",
    body: " Our trained technicians apply specialized critical vacuums on the concrete plenum, ensuring compliance with respected cleanliness standards. In addition, we assist with the necessary finishes that extend beyond floor cleaning, such as epoxy coatings and approved anti-static finishes applied over non-raised floor surfaces.",
  },
  {
    title: "Equipment Cleaning: ",
    body: "We meticulously clean racks, cages, wire management, and electronics, resulting in a healthy and safe working environment. Rest assured, we use environmentally friendly cleaning solutions when handling your networking equipment and storage units.",
  },
  {
    title: "Above Ceiling Cleaning: ",
    body: "We focus on optimizing cooling efficiency without incurring excessive maintenance costs, thanks to our proficiency in managing in-rack ventilation systems.",
  },
  {
    title: "Post Construction Cleaning: ",
    body: "We ensure flawless air cleanliness, necessary to maintain hardware longevity after any construction or modification at your data center.",
  },
  {
    title: "Disaster Recovery: ",
    body: "Our technicians are adept at meticulous cleanup execution post any natural disaster, thereby avoiding unnecessary damage to sensitive electronics.",
  },
  {
    title: "MDF/IDF Closet Cleaning: ",
    body: "We are skilled in cleaning and navigating around sensitive cabling and network hardware, ensuring the health of your Main Distribution Frame (MDF) and Intermediate Distribution Frame (IDF) closets.",
  },
  {
    title: "Critical Cleaning: ",
    body: "Regular cleanings of server rooms, command centers, raised flooring, and other contaminant-prone areas reduce the risk of downtime and improve the efficiency of generator and battery backup rooms.",
  },
  {
    title: "Custodial Cleaning: ",
    body: "From cleaning workstations and tables to lesser sensitive areas, our commercial janitorial staff manages all aspects of your data room, ensuring safety and maintenance.",
  },
  {
    title: "Cleanroom Compliance Cleaning: ",
    body: "We assure reduced pollutants to specified standards, in alignment with the widely adopted Federal Standard 209E.",
  },
];

function Data() {
  return (
    <>
      <Helmet>
        <title>Data Centers | Janitorial | Transblue Facility Management</title>
        <meta
          content="Transblue's janitorial facility management services guarantee your data center stays clean and your computer never gets sticky keys again."
          name="description"
        />
      </Helmet>
      <JanitorialFacility
        title="Data Centers | Janitorial"
        subtitle="Precision cleaning for critical installations."
        page="data"
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Inter",
            lineHeight: "normal",
            fontWeight: 500,
          }}
        >
          Data centers are at the heart of today's digital world. They ensure
          constant uptime for businesses of all sizes, retain control over data
          flows and enhance overall company resilience. Regardless of your
          company size, our expert data center cleaning service is here to
          facilitate your server room upkeep, contributing to overall efficiency
          and reliability.
        </Typography>
        <JanitorialList
          title="Why do you need our Data Center Cleaning Service?"
          list={[
            "Assures adherence to cleanroom compliance standards",
            "Enhances equipment reliability",
            "Helps eliminate dust, dirt, and contaminants",
            "Reduces the risk of unplanned downtime",
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
          At Transblue, we excel at offering comprehensive data center cleaning
          services. Our team is guided by ISO standard training, assuring
          appropriate cleanliness and optimal air quality within your data
          center environment.
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Inter",
            lineHeight: "normal",
            fontWeight: 600,
          }}
        >
          Our Expansive Suite of Data Center Cleaning Services
        </Typography>
        {services.map((service) => (
          <ItalicComp
            title={service.title}
            body={service.body}
            key={service.title}
          />
        ))}

        <Typography
          variant="h5"
          sx={{
            fontFamily: "Inter",
            lineHeight: "normal",
            fontWeight: 600,
            my: 4,
          }}
        >
          Embracing Industry-leading Expertise
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Inter",
            lineHeight: "normal",
            fontWeight: 500,
            mb: 4,
          }}
        >
          We take pride in our unparalleled expertise, achieved through
          continuous training and retraining of our technicians in line with
          evolving standards such as ASHRAE TC9 and ISO 14644. We believe in
          building long-term partnerships with our clients, integrating into
          their culture, and continually adding value.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Inter",
            lineHeight: "normal",
            fontWeight: 500,
            mb: 4,
          }}
        >
          All our technicians lead by example and help maintain a safety culture
          ensuring that nothing but the best is delivered to you, our esteemed
          client.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Inter",
            lineHeight: "normal",
            fontWeight: 500,
            mb: 4,
          }}
        >
          We integrate smart technology into our processes, ensuring that no
          task is left unattended. Each plan we build, our teams are proficient
          at executing it thanks to our efficient training on the latest
          cleaning tools.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Inter",
            lineHeight: "normal",
            fontWeight: 500,
            mb: 4,
          }}
        >
          Our technician teams consistently maintain industry qualifications,
          and we ensure they are continually re-trained as standards evolve.
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Inter",
            lineHeight: "normal",
            fontWeight: 600,
            pb: 4,
          }}
        >
          Why Choose Transblue?
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Inter",
            lineHeight: "normal",
            fontWeight: 500,
            mb: 4,
          }}
        >
          Our industry-veteran teams are committed to meeting high standards,
          available 24/7 upon request. Alongside creating customized cleaning
          plans based on your unique needs, we take comprehensive measures for
          contamination check in your data center.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Inter",
            lineHeight: "normal",
            fontWeight: 500,
            mb: 4,
          }}
        >
          Choose Transblue for your Data Center Cleaning needs. We're here not
          just to meet your expectations but exceed them.
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Inter",
            lineHeight: "normal",
            fontWeight: 600,
          }}
        >
          Get in touch with us to explore how we can work together towards a
          cleaner and safer data center environment.
        </Typography>
      </JanitorialFacility>
    </>
  );
}

export default Data;
