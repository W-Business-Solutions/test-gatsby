import React from "react";
import larry from "../../assets/about/larry-hyatt-transblue.png";
import vince from "../../assets/about/vince-ortiz-transblue.png";
import vetter from "../../assets/about/dave-vetter-transblue.png";
import dave from "../../assets/about/dave-wescott-transblue.png";
import dylan from "../../assets/about/dylan-moses-transblue.png";
import NavigateNext from "@mui/icons-material/NavigateNext";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const LeftComp = ({ name, title, body, image, link, alt }) => {
  return (
    <>
      <Grid
        item
        xs={12}
        md={4}
        textAlign={{ xs: "center", md: "left" }}
        display={{ xs: "none", md: "block" }}
      >
        <Typography variant="h5" sx={{ fontWeight: 600, mt: 1 }}>
          {name}
        </Typography>
        <Typography sx={{ color: "#86868B", mb: 2 }}>{title}</Typography>
        <Typography
          sx={{
            color: "#1d1d1f",
            fontWeight: 500,
            pr: { xs: 0, md: 4, xl: 8 },
            mb: link ? 3 : 0,
          }}
        >
          {body}
        </Typography>
        {link && (
          <a
            href={link}
            target="blank"
            rel="noreferrer"
            style={{
              color: "#007AFF",
              fontFamily: "Inter",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            Connect with {name.split(" ")[0]}{" "}
            <NavigateNext sx={{ fontSize: "18px" }} />
          </a>
        )}
      </Grid>
      <Grid item sm={3} display={{ sm: "block", md: "none" }} />
      <Grid item xs={12} sm={6} md={4}>
        <img
          src={image}
          alt={alt}
          style={{
            width: "90%",
            marginLeft: "5%",
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        textAlign={{ xs: "center", md: "left" }}
        display={{ md: "none" }}
      >
        <Typography variant="h5" sx={{ fontWeight: 600, mt: 1 }}>
          {name}
        </Typography>
        <Typography sx={{ color: "#86868B", mb: 2 }}>{title}</Typography>
        <Typography
          sx={{
            color: "#1d1d1f",
            fontWeight: 500,
            pr: { xs: 0, md: 4, xl: 8 },
            mb: link ? 3 : 0,
          }}
        >
          {body}
        </Typography>
        {link && (
          <a
            href={link}
            target="blank"
            rel="noreferrer"
            style={{
              color: "#007AFF",
              fontFamily: "Inter",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            Connect with {name.split(" ")[0]}{" "}
            <NavigateNext sx={{ fontSize: "18px" }} />
          </a>
        )}
      </Grid>
      <Grid item xs={12} md={4}></Grid>
    </>
  );
};

const RightComp = ({ name, title, body, image, link, alt }) => (
  <>
    <Grid item xs={12} md={4} />
    <Grid item sm={3} display={{ sm: "block", md: "none" }} />
    <Grid item xs={12} sm={6} md={4}>
      <img src={image} alt={alt} style={{ width: "90%", marginLeft: "5%" }} />
    </Grid>
    <Grid item xs={12} md={4} textAlign={{ xs: "center", md: "right" }}>
      <Typography variant="h5" sx={{ fontWeight: 600, mt: 1 }}>
        {name}
      </Typography>
      <Typography sx={{ color: "#86868B", mb: 2 }}>{title}</Typography>
      <Typography
        sx={{
          color: "#1d1d1f",
          fontWeight: 500,
          pl: { xs: 0, md: 4, xl: 6 },
          mb: link ? 3 : 0,
        }}
      >
        {body}
      </Typography>
      {link && (
        <a
          href={link}
          target="blank"
          rel="noreferrer"
          style={{
            color: "#007AFF",
            fontFamily: "Inter",
            fontWeight: 500,
            textDecoration: "none",
          }}
        >
          Connect with {name.split(" ")[0]}{" "}
          <NavigateNext sx={{ fontSize: "18px" }} />
        </a>
      )}
    </Grid>
  </>
);

function Leadership({ bgcolor, displayLinks }) {
  return (
    <Box sx={{ py: "5vh", justifyContent: "center", bgcolor: bgcolor }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 600,
          textAlign: "center",
          mb: { xs: 5, md: 10 },
        }}
      >
        Meet Our Team
      </Typography>

      <Box
        sx={{
          width: { xs: "90vw", md: "70vw", xl: "54vw" },
          ml: { xs: "5vw", md: "15vw", xl: "23vw" },
        }}
      >
        <Grid container spacing={{ xs: 3, md: 2 }}>
          <LeftComp
            name="Dave Wescott"
            title="CEO"
            body="Experienced CEO in construction industry for 25+ years. Expert in remodel, snow, landscape. Published author and philanthropist. Expertise in the industry: second to none."
            image={dave}
            //link='https://davewescott.com'
            link={displayLinks ? "https://davewescott.com" : null}
            alt="dave wescott"
          />
          <RightComp
            name="David Vetter"
            title="Senior VP, Operations"
            body="20+ year experience focused on profit growth for national service providers. Experienced business coach and customer experience whiz."
            image={vetter}
            link={
              displayLinks
                ? "https://www.linkedin.com/in/davidvetter-tb/"
                : null
            }
            alt="dave vetter"
          />
          <LeftComp
            name="Vince Ortiz"
            title="Senior VP, Business Development"
            body="20+ years of experience managing construction and facility businesses. He offers valuable insights on Transblue's world class business and is the in-house expert on best application of our services."
            image={vince}
            link={
              displayLinks ? "https://www.linkedin.com/in/vinceortizgc/" : null
            }
            alt="vince ortiz"
          />
          <RightComp
            name="Larry Hyatt"
            title="VP, Operations"
            body="A seasoned member of Transblue, Larry brings 25 years of Government construction management experience, including overseas projects on a US military base. Accomplished in managing diverse teams."
            image={larry}
            link={
              displayLinks
                ? "https://www.linkedin.com/in/larry-hyatt-06210624b/"
                : null
            }
            alt="larry hyatt"
          />
          <LeftComp
            name="Dylan Moses"
            title="Senior Director, Snow Operations"
            body="With 15+ years in construction, Dylan specializes in construction management, contractual obligations, and upholding industry standards. Committed to Transblue's vision, we prevail on every problem that Dylan handles."
            image={dylan}
            link={
              displayLinks ? "https://www.linkedin.com/in/dylan-moses/" : null
            }
            alt="dylan moses"
          />
        </Grid>
      </Box>
    </Box>
  );
}

export default Leadership;
