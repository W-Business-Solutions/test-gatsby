import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Alert from "@mui/material/Alert";
import StyledButton from "../components/styledButton/styledButton";
import { useState } from "react";
import axios from "axios";
import { useLocation } from "@reach/router";

import { useContext } from "react";
// import { ScreenSizeContext } from "../../App.js";
import { ScreenSizeContext } from "../../contextWrappers/screenSizeContext";
import Captcha from "../../components/captcha/captcha";
import { FormControl, FormControlLabel, Checkbox } from "@mui/material";

const hubspot_owner_ids = {
  Maintenance: "216697651", // virginia's hubspot id
  "Snow Removal": "355112878", // Brett
  Janitorial: "391765177", // Patrick
  //"Asphalt": '372512583', // Donalds hubspot id
  Asphalt: "216697651", // virginia's hubspot id
  "Construction + Remodels": "391850666", // chris's hubspot id
  Other: "216697651", // virginia
};

const placeholderStyle = {
  border: "0px",
  "& ::placeholder": {
    color: "#cfcfcf",
    fontFamily: "Inter",
    fontSize: "12px",
    textAlign: "center",
  },
};

const errorStyle = {
  border: "1px solid red",
  borderRadius: "5px",
  "& ::placeholder": {
    color: "red",
    fontFamily: "Inter",
    fontSize: "12px",
    textAlign: "center",
  },
};

function ContactForm({ service, page }) {
  const screenSizeContext = useContext(ScreenSizeContext);
  const { screenSize } = screenSizeContext;

  const location = useLocation();
  const pathname = location.pathname;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitEnabled, setSubmitEnabled] = useState(false);

  const [contactForm, setContactForm] = useState({
    numLocations: 1,
    slug: pathname === "/" ? "Home Page" : pathname,
    sms: false,
  });

  const [errors, setErrors] = useState({
    email: false,
    phone: false,
  });

  function submit() {
    let errObj = errors;

    if (!contactForm.email) {
      errObj.email = true;
    }

    if (!contactForm.phone) {
      errObj.phone = true;
    }

    setErrors({
      ...errObj,
    });

    // make sure email and phone number are filled out
    if (contactForm.email && contactForm.phone) {
      const hubspotContact = {
        fields: [
          {
            objectTypeId: "0-1",
            name: "email",
            value: contactForm?.email || "",
          },
          {
            objectTypeId: "0-1",
            name: "firstname",
            value: contactForm?.firstName || "",
          },
          {
            objectTypeId: "0-1",
            name: "lastname",
            value: contactForm?.lastName || "",
          },
          {
            objectTypeId: "0-1",
            name: "service",
            value: service,
          },
          //   {
          //     "objectTypeId": "0-1",
          //     "name": "region",
          //     "value": contactForm?.region || 'eastern'
          //   },
          {
            objectTypeId: "0-1",
            name: "message",
            value: contactForm?.message || "",
          },
          {
            objectTypeId: "0-1",
            name: "phone",
            value: contactForm?.phone || "",
          },
          {
            objectTypeId: "0-1",
            name: "numlocations",
            value: parseInt(contactForm?.numlocations) || 0,
          },
          // {
          // 	objectTypeId: '0-1',
          // 	name: 'hubspot_owner_id',
          // 	// "value": "403184143"         // my id for sales test account
          // 	//"value": "372517968" // my id for transblue account
          // 	//"value": '372512583' // Donald's hubspot id
          // 	//"value": hubspot_owner_ids[contactForm.region]
          // 	//"value": hubspot_owner_ids[contactForm.service]
          // 	//value: '216697650' // vince's hubspot owner id,
          // 	value: '391760018' // aj's hubspot owner id
          // },
          {
            objectTypeId: "0-1",
            name: "website_page",
            value: contactForm.slug,
          },
        ],
        legalConsentOptions: {
          consent: {
            // Include this object when GDPR options are enabled
            consentToProcess: true,
            text: "I agree to allow Example Company to store and process my personal data.",
            communications: [
              {
                value: true,
                subscriptionTypeId: 999,
                text: "I agree to receive marketing communications from Example Company.",
              },
            ],
          },
        },
      };

      // production api call
      axios
        .post(
          `https://my-tb-cors.herokuapp.com/https://api.hsforms.com/submissions/v3/integration/secure/submit/22505818/425c369e-3769-4cd1-8812-163304877e18`,
          hubspotContact,
          {
            headers: {
              Authorization: `Bearer ${process.env.GATSBY_APP_HUBSPOT_KEY}`,
            },
          }
        )
        .then((res) => {
          setContactForm({
            firstName: "",
            lastName: "",
            numLocations: 0,
            message: "",
            email: "",
            phone: "",
          });
          setIsSubmitted(true);
          // window.location.href =
          //   pathname === "/"
          //     ? `${window.location.href}thankyou`
          //     : `${window.location.href}/thankyou`;
        });
    }
  }

  const handleChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "white",
        boxShadow: { xs: 0, lg: 24 },
        py: page === "everett" ? 2 : 5,
        px: { xs: 2, md: 15, lg: 7 },
        borderRadius: "5px",
        maxHeight: { xs: "100%", md: "90vh" },
        overflowY: "auto",
      }}
    >
      {page === "everett" && (
        <>
          <Typography
            sx={{
              fontFamily: "Inter",
              m: "0 auto",
            }}
          >
            Our new customers:
          </Typography>
          <ul
            style={{
              textAlign: "left",
              marginBottom: "24px",
              fontFamily: "Inter",
            }}
          >
            <li>Save on average 20-30% in overhead costs</li>
            <li>Lower your facilities vendor list to one company</li>
          </ul>
        </>
      )}
      {screenSize !== "large" && screenSize !== "xl" && !service && (
        <>
          <Typography
            sx={{
              color: "#86868B",
              fontFamily: "Inter",
              pb: 2,
              maxWidth: "90%",
              m: "0 auto",
              fontSize: "14px",
            }}
          >
            Reach out to our dedicated team at Transblue to discover how we can
            elevate your commercial and multi-site operations by providing
            exceptional solutions tailored to your needs.
          </Typography>
          <Typography
            sx={{
              color: "#86868B",
              fontFamily: "Inter",
              maxWidth: "90%",
              m: "0 auto",
              fontSize: "14px",
              pb: 1,
            }}
          >
            We're here to help you succeed in your business ventures.
          </Typography>
        </>
      )}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <InputBase
            value={contactForm?.firstName}
            fullWidth
            size="small"
            onChange={handleChange}
            id="firstName"
            placeholder="First Name"
            inputProps={{
              sx: {
                bgcolor: "#F5F5F7",
                borderRadius: "5px",
                p: 1,
                textAlign: "center",
              },
            }}
            sx={placeholderStyle}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputBase
            value={contactForm?.lastName}
            fullWidth
            size="small"
            onChange={handleChange}
            id="lastName"
            placeholder="Last Name"
            inputProps={{
              sx: {
                border: "0px",
                bgcolor: "#F5F5F7",
                borderRadius: "5px",
                p: 1,
                textAlign: "center",
              },
            }}
            sx={placeholderStyle}
          />
        </Grid>

        <Grid item xs={12}>
          <InputBase
            value={contactForm?.email}
            fullWidth
            size="small"
            onChange={(e) => {
              handleChange(e);
              setErrors({
                ...errors,
                email: false,
              });
            }}
            id="email"
            placeholder="Email *"
            required
            inputProps={{
              sx: {
                border: "0px",
                bgcolor: "#F5F5F7",
                borderRadius: "5px",
                p: 1,
                textAlign: "center",
              },
            }}
            sx={errors.email ? errorStyle : placeholderStyle}
          />
        </Grid>
        <Grid item xs={12} md={page === "everett" ? 12 : 6}>
          <InputBase
            value={contactForm?.phone}
            fullWidth
            size="small"
            id="phone"
            placeholder="Phone *"
            required
            onChange={(e) => {
              handleChange(e);
              setErrors({
                ...errors,
                phone: false,
              });
            }}
            inputProps={{
              sx: {
                bgcolor: "#F5F5F7",
                borderRadius: "5px",
                p: 1,
                textAlign: "center",
              },
            }}
            sx={errors.phone ? errorStyle : placeholderStyle}
          />
        </Grid>
        {page !== "everett" && (
          <Grid item xs={12} md={6}>
            <InputBase
              value={contactForm?.numlocations}
              fullWidth
              size="small"
              onChange={handleChange}
              id="numlocations"
              placeholder="Number of Locations"
              inputProps={{
                sx: {
                  bgcolor: "#F5F5F7",
                  borderRadius: "5px",
                  p: 1,
                  textAlign: "center",
                },
                type: "number",
                min: 0,
              }}
              sx={placeholderStyle}
            />
          </Grid>
        )}

        <Grid item xs={12}>
          <InputBase
            value={contactForm?.message}
            fullWidth
            size="small"
            onChange={handleChange}
            id="message"
            placeholder="Message"
            multiline
            minRows={page === "everett" && screenSize === "large" ? 1 : 4}
            inputProps={{
              sx: {
                bgcolor: "#F5F5F7",
                borderRadius: "5px",
                p: 1,
                textAlign: "center",
              },
            }}
            sx={placeholderStyle}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <FormControlLabel
              control={
                <Checkbox
                  checked={contactForm.sms}
                  onChange={() =>
                    setContactForm({
                      ...contactForm,
                      sms: !contactForm.sms,
                    })
                  }
                />
              }
              label="Opt-In to receive SMS Messages"
            />
          </FormControl>
        </Grid>
      </Grid>

      {!submitEnabled && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Captcha onChange={() => setSubmitEnabled(true)} />
        </Box>
      )}

      {!isSubmitted && submitEnabled && (
        <StyledButton
          sx={{
            bgcolor: "#007AFF",
            fontSize: "12px",
            width: { xs: "100%", md: "74%" },
            mt: 2,
          }}
          variant="contained"
          onClick={submit}
        >
          submit
        </StyledButton>
      )}

      {isSubmitted && (
        <Alert severity="success" fullWidth sx={{ mt: { xs: 2, lg: 3 } }}>
          Thank you! Someone from our team will reach out to you shortly
        </Alert>
      )}
    </Box>
  );
}

export default ContactForm;
