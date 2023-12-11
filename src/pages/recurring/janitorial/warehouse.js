import React from "react";
import { Helmet } from "react-helmet-async";
import JanitorialFacility from "../../../newSrc2/components/janitorialComponents/facilityTemplate";
import Typography from "@mui/material/Typography";
import JanitorialParagraph from "../../../newSrc2/components/janitorialComponents/janitorialParagraph";
import ItalicComp from "../../../newSrc2/components/janitorialComponents/italicComp";

const additionalServices = [
  {
    title: "Trash Removal: ",
    body: "We ensure timely trash removal, focusing on recycling whenever feasible. No type of waste - regular or hazardous - is beyond our handling capabilities.",
  },
  {
    title: "Restroom Cleaning and Disinfection: ",
    body: "Our technicians, trained in disinfecting services, thoroughly cleanse restrooms using high-quality green cleaning and disinfecting products.",
  },
  {
    title: "Floor Care: ",
    body: "We ensure floors are regularly swept, mopped, and inspected, keeping them free from dirt, dust, and debris. Our focus is always on averting slips, trips, and falls.",
  },
  {
    title: "Window Cleaning: ",
    body: "Our trained teams employ safe and effective window cleaning techniques to maintain any windows in your warehouse.",
  },
];

const services = [
  {
    title: "Pallet Management: ",
    body: "We efficiently organize pallets by type, ensuring none are leftover from the previous day. We manage the pickup of full pallet trailers and the delivery of empty ones, keeping your staging area within limits.",
  },
  {
    title: "Pallet Grading: ",
    body: "Our team adheres to your grading process for pallets and determines their appropriate destinations. We move good pallets from Inbound to Outbound docks and unload new pallets as per your instructions.",
  },
  {
    title: "Corrugated Management: ",
    body: "We not only manage all corrugate from staging areas but also their loading into trailers. By ensuring adequate handling of gaylord boxes, we keep the warehouse clutter-free.",
  },
  {
    title: "Compactor/Baler/Auger Operations: ",
    body: "Our teams adeptly operate corrugate balers and auger compactors, ensuring the recycling trailers are appropriately filled with compacted and baled corrugate.",
  },
  {
    title: "Power Industrial Truck (PIT) Operations – Forklift: ",
    body: "Certified in PIT operations, our team can effectively handle any Powered Industrial Truck as needed to complete corrugate and pallet management duties.",
  },
];

function Warehouse() {
  return (
    <>
      <Helmet>
        <title>
          Warehouse + Logistics | Janitorial | Transblue Facility Management
        </title>
        <meta
          content="Transblue's facility management provides janitorial services for your warehouse and logistic center beyond basic sanitization."
          name="description"
        />
      </Helmet>
      <JanitorialFacility
        title="Warehouse + Logistics"
        subtitle="Cleanliness and order for optimal operations."
        page="warehouse"
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
          The importance of a clean, organized warehouse environment cannot be
          overstated. Our comprehensive warehouse cleaning services go beyond
          basic sanitization. We specialize in deep cleaning and organization,
          ensuring your warehouse isn't just spotless but also well-organized
          and maintained.
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
          Choosing us means reducing accident risks, increasing efficiency, and
          maintaining your warehouse's stellar condition. Besides standard
          commercial cleaning services like pressure washing, floor cleaning,
          and debris removal, we offer organization and labeling services for
          easy accessibility and order in your warehouse. We also emphasize
          preventive maintenance, helping you preserve your warehouse's
          condition over time.
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Inter",
            lineHeight: "normal",
            fontWeight: 600,
            mb: 4,
          }}
        >
          Our Exceptional Warehouse Cleaning Solutions
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
          Our highly-trained cleaning and warehouse sanitization team provide an
          array of services extending beyond basic cleaning:
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
          Additional Cleansing Services
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
          Apart from specialized tasks, we offer general janitorial and
          industrial cleaning services. Regular dusting, sweeping, mopping, and
          restroom cleaning are an integral part of our service, ensuring a
          clean and safe environment. We handle general maintenance tasks too,
          like changing light bulbs or replacing filters.
        </Typography>

        {additionalServices.map((service) => (
          <ItalicComp
            title={service.title}
            body={service.body}
            key={service.title}
          />
        ))}

        <JanitorialParagraph
          title="Flexible Service Schedule"
          body="Seasonal fluctuations in warehouse activity are no issue for us. High-volume periods like Black Friday to New Year, Valentine's Day, Mother’s Day, Back-to-School, and Halloween are all within our capabilities. We can create separate peak and off-peak schedules to ensure consistent cleanliness and organization."
        />
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Inter",
            lineHeight: "normal",
            fontWeight: 500,
            mt: 4,
          }}
        >
          Furthermore, our teams are available 24/7 to ensure your operations
          run smoothly without disruptions or downtime.
        </Typography>
        <JanitorialParagraph
          title="ISO 9001 Certification Compliance"
          body="Our team follows ISO 9001 quality management principles, ensuring a strong customer focus and consistent improvement."
        />
        <JanitorialParagraph
          title="Transblue’s Exceptional Warehouse Cleaning Solutions"
          body="Our experienced staff, equipped with state-of-the-art technology, provide reliable warehouse cleaning services for all types of commercial environments. We offer a range of services to meet your specific needs, from disinfection to regular maintenance."
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
          Trust us to provide a safe, clean environment for your business. Have
          queries about our warehouse cleaning services? We welcome your
          questions. Let's talk.
        </Typography>
      </JanitorialFacility>
    </>
  );
}

export default Warehouse;
