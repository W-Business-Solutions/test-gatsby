import React from "react";
import { Helmet } from "react-helmet-async";
import JanitorialFacility from "../../../newSrc2/components/janitorialComponents/facilityTemplate";
import Typography from "@mui/material/Typography";
import JanitorialList from "../../../newSrc2/components/janitorialComponents/janitorialList";
import JanitorialItalicPara from "../../../newSrc2/components/janitorialComponents/janitorialItalicPara";

function JanitorialOffices() {
  return (
    <>
      <Helmet>
        <title>
          Commercial Offices | Janitorial | Transblue Facility Management
        </title>
        <meta
          name="description"
          content="Your office is like your second home, and it should be cleaned like it is with Transblue's janitorial facility management services."
        />
      </Helmet>
      <JanitorialFacility
        title="Commercial Offices | Janitorial"
        subtitle="Efficient cleaning solutions for productive workspaces."
        page="offices"
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Inter",
            lineHeight: "normal",
            fontWeight: 500,
          }}
        >
          Perfectly cleaned office spaces are fundamental in maintaining a
          professional and inviting environment for employees, clients, and
          visitors. Our commercial office cleaning services are here to achieve
          that ideal setting for you, allowing you to focus on what matters most
          - your business.
        </Typography>
        <JanitorialList
          title="Our Commercial Cleaning Services"
          subtitle="Through our office cleaning services, our focus is on performing those rigorous cleaning tasks that free up your time and allow you to focus on your core business."
          subtitle2="Here's a sneak-peek into our variety of office cleaning services:"
          list={[
            "Carpet cleaning",
            "Upholstery cleaning",
            "Window cleaning",
            "Pressure washing",
            "Hard surface floor cleaning",
            "Emptying of trash receptacles",
            "Sanitizing of surfaces and additional deep cleaning options",
          ]}
        />
        <JanitorialList
          title="Why Choose Our Commercial Cleaning Service?"
          subtitle="Apart from routine cleaning, deep cleaning is a critical aspect in maintaining a highly productive and efficient office. Here’s how our office cleaning services benefit you:"
          list={[
            "Promotes a healthy environment by eliminating allergens, dirt, and germ.",
            "Enhances productivity with an organized, clutter-free workspace.",
            "Boosts your brand image with an appealing, clean office.",
            "Maintains office furniture and fixtures, prolonging their lifespan.",
            "Keeps communal areas like restrooms and breakrooms spotless.",
            "Ensures compliance with health and safety standards.",
            "Saves your valuable time by letting professionals handle clean-up.",
          ]}
        />
        <JanitorialList
          title="Our Approach to Commercial Office Cleaning Services"
          subtitle="Our goal is to verify your commercial office space is regularly cleaned and sanitized. An unclean common area can quickly become an employee pain point, which we strive to avoid."
          subtitle2="Our team uses eco-friendly cleaning products that leave minimal Volatile Organic Chemicals (VOCs) in your building. As cleaning supplies play a pivotal role in a professional cleaning engagement, we select only the best."
          subtitle3="Trust our janitorial service for various office areas like:"
          list={[
            "Individual offices",
            "Lobbies",
            "Restrooms",
            "Break rooms",
            "Kitchens",
          ]}
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
          Why Choose Us For Your Commercial Cleaning Services
        </Typography>
        <JanitorialItalicPara
          title="Experienced Team"
          body="Our cleaning teams are among the most experienced, constantly undergo training, and are industry veterans. We strive to innovate in commercial cleaning by combining expertise and best practices shared among professional cleaning associations."
        />
        <JanitorialItalicPara
          title="Safety-Focused Approach"
          body="Our approach centers on care for people. We aim to motivate your employees to work at their best by maintaining a safe, clean environment. Our meticulous attention to detail allows us to anticipate and mitigate potential risks."
        />
        <JanitorialItalicPara
          title="Cutting-Edge Technology"
          body="Our quality assurance system, accessible to each of our deployed teams, ensures no cleaning details are missed."
        />
        <JanitorialItalicPara
          title="24/7 Availability"
          body="Our teams are always available, guaranteeing clean and healthy environments for your employees. Depending on your needs, we can provide 24/7 cleaning services or special occasion set-ups and deep cleanings."
        />
        <JanitorialItalicPara
          title="Client Partnerships"
          body="We foster long-term partnerships with our clients. We regularly review project performance, measure improvements, and set future goals to ensure we’re meeting your expectations."
        />
        <JanitorialItalicPara
          title="Certifications"
          body="As a leading cleaning service provider, we hold multiple certifications and associations in the green cleaning and wellness sectors."
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
          Discover the benefits of Transblue’s comprehensive commercial office
          cleaning services today.
        </Typography>
      </JanitorialFacility>
    </>
  );
}

export default JanitorialOffices;
