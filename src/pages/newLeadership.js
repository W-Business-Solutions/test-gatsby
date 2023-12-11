import React, { useState, useEffect } from "react";

import larry from "../newSrc2/assets/about/larry-hyatt-transblue.png";
import vince from "../newSrc2/assets/about/vince-ortiz-transblue.png";
import vetter from "../newSrc2/assets/about/dave-vetter-transblue.png";
import dave from "../newSrc2/assets/about/dave-wescott-transblue.png";
import dylan from "../newSrc2/assets/about/dylan-moses-transblue.png";
import Navbar from "../newSrc2/components/navbar/navbar";
import Footer from "../newSrc2/components/footer/newFooter";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const leadership = [
  {
    name: "Dave Wescott",
    title: "CEO and Founder",
    bio: `At the forefront of TransBlue is our dynamic CEO and Founder, Dave Wescott. Dave's exceptional business acumen and broad vision have led to the evolution of our company into a national, distinguished multi-site facility service provider. As a result, we can now cater to a diverse set of projects, such as high-end residential, commercial, and government facilities. Dave's inclusive leadership helps our team achieve great heights by fostering collaboration, innovation, and excellence. Not only does Dave focus on guiding our company to success, but he is also deeply devoted to community involvement and corporate social responsibility. His passion for supporting Native American businesses showcases his commitment to making a meaningful difference in various communities, a trait that truly inspires us all.`,
    linkedin: `https://www.linkedin.com/in/thedavewescott/`,
    img: dave,
  },
  {
    name: "David Vetter",
    title: "Senior VP, Operations",
    bio: `With three decades of experience in the trenches of the construction and facilities management industries, David Vetter, our Senior VP of Operations, is a cornerstone of our company's success. David's expertise in optimizing processes and fostering relationships with clients has been invaluable in building and maintaining a solid foundation for our company's growth and our franchise model. David's dedication to operational excellence ensures that our services always exceed customer expectations. By developing and implementing advanced training programs, he continues to empower our franchisees and team members, paving the way for the success of both parties.`,
    linkedin: "https://www.linkedin.com/in/davidvetter-tb/",
    img: vetter,
  },
  {
    name: `Jim Wescott`,
    title: `VP, Technology`,
    bio: `Jim Wescott is the technological powerhouse at Transblue. As our VP of Technology, he not only brings a wealth of experience from the software engineering sector but also a deep understanding of marketing strategies and product management. Under Jim's leadership, our company has embraced an innovative culture where we constantly explore new ways to adopt technology in our services, helping us stand out and stay ahead of the competition. His unique ability to blend technology with our marketing endeavors enables us to provide unparalleled, efficient, and solution-oriented services to our clients. Jim's seamless integration of technology paves the way for continuous business growth.`,
    linkedin: "https://www.linkedin.com/in/jim-wescott/",
  },
  {
    name: `Jonathan McQuade`,
    title: `General Counsel`,
    bio: `As our General Counsel, Jonathan McQuade's astute knowledge and vast experience in the realms of construction, franchise, and real estate law have been invaluable to our success. Jonathan's commitment to fostering our growth while ensuring we operate within the legal boundaries is demonstrated by his unwavering dedication and keen attention to detail. His unparalleled legal guidance empowers our company and franchisees to navigate complex legal landscapes, securing our nationwide presence with confidence. Jonathan is an essential pillar of our team, guaranteeing that our brand remains strong and our goals within reach.`,
    linkedin: "https://www.linkedin.com/in/jonathan-mcquade-1804353/",
  },
  {
    name: `Dylan Moses`,
    title: `Senior Director, Snow Operations`,
    bio: `Dylan Moses, our esteemed Senior Director of Snow Operations, brings a wealth of experience acquired over a decade working on a wide range of projects in both the private and public sectors. Dylan's vast knowledge and practical application have significantly bolstered Transblue's training and franchisee support initiatives. His expertise spans numerous areas, including financial acumen, business development, and operational execution. Dylan's exceptional ability to share his insights has helped lay a robust foundation for the success of new franchise owners and the continued growth of our company as a whole.`,
    linkedin: "https://www.linkedin.com/in/dylan-moses/",
    img: dylan,
  },
  {
    name: `Todd Chapman`,
    title: `VP, Human Resources`,
    bio: `Todd Chapman, our esteemed VP of Human Resources, masterfully nurtures Transblue's human resource framework in alignment with our core values. Through his vast experience in establishing and developing businesses, Todd understands the importance of fostering a culture that unites faith, family, and business values in a harmonious bond. Todd's passion manifests itself in his unwavering commitment to business development, marketing, and operational support. He actively champions our employees, cultivating an environment where they can grow and develop professionally while staying true to our vision.`,
    linkedin: "https://www.linkedin.com/in/todd-chapman-54473422/",
  },
  {
    name: `Vince Ortiz`,
    title: `Senior VP, Business Development`,
    bio: `Transblue's expansive growth can, in huge part, be attributed to Vince Ortiz's exceptional talent in business development. As Senior VP, Vince brings two decades of experience in construction, facilities management, and entrepreneurship to the table. His vast reservoir of skills and insights has propelled Transblue to new heights in the franchise industry. Vince works tirelessly to support and guide our franchise prospects, ensuring they understand the intricacies of our industry to succeed in their entrepreneurial endeavors. His dedication to our partners' success reflects the brand's core principle of partnership, professionalism, and mutual growth.`,
    linkedin: "https://www.linkedin.com/in/vinceortizgc/",
    img: vince,
  },
  {
    name: `Larry Hyatt`,
    title: `VP, Operations`,
    bio: `Larry Hyatt, our dedicated VP of Operations, is an essential factor behind Transblue's incredible growth. Larry's 25 years of government construction management experience, including prestigious projects on overseas U.S. military bases, have enriched our organizational expertise, fueling our expansion in the franchise industry. As a committed partner to our franchisees, Larry leverages his invaluable insights and skills to help you comprehend our industry's nuances and prosper in your entrepreneurial journey. Our collaboration with Larry embodies Transblue's pillars of partnership, professionalism, and mutual growth, ensuring we're always here to support you and help you succeed.`,
    linkedin: "https://www.linkedin.com/in/larry-hyatt-06210624b/",
    img: larry,
  },
];

function NewLeadership() {
  const [activeMember, setActiveMember] = useState(0);
  return (
    <>
      <Navbar />
      <Box sx={{ minHeight: "100vh", mt: 8 }}>
        <Stack direction="row" spacing={3}>
          <ToggleButtonGroup
            value={activeMember}
            exclusive
            onChange={(e, nextMember) => setActiveMember(nextMember)}
            orientation="vertical"
            sx={{ width: "60vw" }}
          >
            {leadership.map((member, index) => (
              <ToggleButton value={index}>
                <>
                  <Typography
                    sx={{
                      width: "100%",
                      mb: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography variant="body2">{member.title}</Typography>
                </>
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
          <>
            {leadership[activeMember].img && (
              <img src={leadership[activeMember].img} alt="" />
            )}
          </>
          <>
            <Typography
              variant="h5"
              sx={{ fontFamily: "Inter", fontWeight: 600, mt: 1 }}
            >
              {leadership[activeMember].name}
            </Typography>
            <Typography
              sx={{
                color: "#86868B",
                fontFamily: "Inter",
                mb: 2,
              }}
            >
              {leadership[activeMember].title}
            </Typography>
            <Typography
              sx={{
                color: "#86868B",
                fontFamily: "Inter",
                maxWidth: "50%",
              }}
            >
              {leadership[activeMember].bio}
            </Typography>
          </>
        </Stack>
      </Box>
      <Footer />
    </>
  );
}

export default NewLeadership;
