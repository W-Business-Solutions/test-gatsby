import React from "react";
import { Helmet } from "react-helmet-async";
import JanitorialFacility from "../../../newSrc2/components/janitorialComponents/facilityTemplate";
import Typography from "@mui/material/Typography";
import JanitorialParagraph from "../../../newSrc2/components/janitorialComponents/janitorialParagraph";
import ItalicComp from "../../../newSrc2/components/janitorialComponents/italicComp";

const services = [
  {
    title: "Janitorial Services: ",
    body: "Leveraging our green cleaning solutions, efficient staff, and quality control measures, our janitorial services ensure every space, from classrooms to dorms, stays clean and safe.",
  },
  {
    title: "Window Cleaning: ",
    body: "Our window cleaning services cover all campus buildings, keeping windows clear and free from dirt for a brighter learning environment.",
  },
  {
    title: "Floor and Carpet Cleaning:",
    body: "With regular sweeping, mopping, and fresh waxing for hardwood floors and spot cleaning along with deep steam cleaning for carpets, we use eco-friendly cleaning solutions to help enhance indoor air quality.",
  },
  {
    title: "Exterior Power Washing: ",
    body: "Our power washing services offer deep cleaning of all exterior surfaces, from sidewalks to roofing. We utilize eco-friendly solutions aiming to leave a lasting first impression.",
  },
  {
    title: "Landscaping and Snow Removal: ",
    body: "Enjoy neatly kept grounds and gardens with our landscaping services. We also ensure safety during winter with reliable snow removal.",
  },
  {
    title: "Trash and Recycling: ",
    body: "Our waste management solutions, including collection, sorting, and disposal, uphold local environmental regulations. Engage our recycling services to reduce landfill waste and foster campus sustainability.",
  },
];

function College() {
  return (
    <>
      <Helmet>
        <title>
          Colleges + Universities | Janitorial | Transblue Facility Management
        </title>
        <meta
          content="Transblue's janitorial facility management services can service small campuses to college town sized educational institutions."
          name="description"
        />
      </Helmet>
      <JanitorialFacility
        title="Colleges + Universities | Janitorial"
        subtitle="Cleaning, fostering conducive learning atmospheres."
        page="college"
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Inter",
            lineHeight: "normal",
            fontWeight: 500,
          }}
        >
          A clean and welcoming university campus is key to fostering a positive
          learning experience. Rely on Transblue’s expert university cleaning
          services, enabling students, faculty, and staff to focus on their core
          mission—education—rather than cleanliness concerns.
        </Typography>
        <JanitorialParagraph
          title="Sustaining Learning Environments"
          body="Our regular and comprehensive cleaning services not only maintain campus cleanliness but also ensure a safe and healthy environment. Lower the spread of viruses and germs with our thorough disinfection and afford everyone the peace of mind to concentrate on learning."
        />
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Inter",
            lineHeight: "normal",
            fontWeight: 600,
            my: 4,
          }}
        >
          Comprehensive Cleaning Services
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
          We offer an extensive range of university cleaning services, aimed to
          meet your unique needs:
        </Typography>
        {services.map((service) => (
          <ItalicComp
            title={service.title}
            body={service.body}
            key={service.title}
          />
        ))}
        <JanitorialParagraph
          title="Common Areas Maintenance"
          body="We provide up-to-date cleaning and disinfection services for all common areas, ensuring a sanitary environment for everyone on campus. These areas include restrooms, hallways, classrooms, offices, gymnasiums, cafeterias, labs, and residence halls."
        />
        <JanitorialParagraph
          title="Partner with Transblue for a Cleaner Campus Experience"
          body="A study by APPA with Brigham Young University revealed about 88% of polled university students were distracted due to unclean facilities. Your institution deserves more than the mere 12% students able to focus fully. With Transblue’s comprehensive commercial cleaning services, you can boost this number."
          body2="Partnering with Transblue offers you tailored, prompt, and cost-effective cleaning services. Our experienced staff uses the latest cleaning technologies, combined with eco-friendly practices, to deliver the highest cleaning standards while maintaining the safety of students and staff."
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
          Contact us today to learn more about how Transblue can help maintain a
          clean, safe, and attractive campus. Request a quote for our university
          cleaning services today.
        </Typography>
      </JanitorialFacility>
    </>
  );
}

export default College;
