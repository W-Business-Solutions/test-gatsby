import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputBase from "@mui/material/InputBase";
import Alert from "@mui/material/Alert";
import StyledButton from "../components/styledButton/styledButton";
import { useState } from "react";
import axios from "axios";
import { useLocation } from "@reach/router";

import { styled } from "@mui/material/styles";
import Captcha from "../../components/captcha/captcha";

const placeholderStyle = {
  border: "0px",
  "& ::placeholder": {
    color: "#7c7c7c",
    fontFamily: "Inter",
    fontSize: "14px",
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

const StyledSelect = styled(InputBase)(({ theme }) => ({
  "& .MuiSelect-select .MuiSelect-outlined": {
    p: "0px",
  },
  "& .MuiInputBase-input": {
    bgcolor: "#f5f5f7",
  },
  "& ::placeholder": {
    color: "#cfcfcf",
    fontFamily: "Inter",
    fontSize: "12px",
    textAlign: "center",
  },
  color: "#cfcdcf",
  fontSize: "12px",
  fontFamily: "Inter",
  bgcolor: "#cfcfcf",
  fontWeight: 400,
}));

function ContactPageForm() {
  const location = useLocation();
  const pathname = location.pathname;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitEnabled, setSubmitEnabled] = useState(false);

  const [contactForm, setContactForm] = useState({
    slug: "Contact Page",
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
            email: "",
            phone: "",
            message: "",
          });
          setIsSubmitted(true);
          //   window.location.href =
          //     pathname === "/"
          //       ? `${window.location.href}thankyou`
          //       : `${window.location.href}/thankyou`;
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
        ml: { xs: "5vw", lg: "25vw", xl: "35vw" },
        width: { xs: "90vw", lg: "50vw", xl: "30vw" },
      }}
    >
      <Grid container spacing={{ xs: 2, lg: 2, xl: 3 }}>
        {/* <Grid item xs={12}>

                    <Select
                        input={<StyledSelect />}
                        onChange={(e) => {
                            setContactForm({
                                ...contactForm,
                                service: e.target.value
                            })
                        }}
                        size='small'
                        fullWidth
                        value={contactForm?.service || 'projectQuestion'}
                        inputProps={{ sx: {bgcolor: '#f5f5f7', p: '10px'}}}
                    >
                        <MenuItem value='projectQuestion' sx={{fontSize: '16px', fontFamily: 'Inter'}}>I have a question about my project</MenuItem>
                        <MenuItem value='billing' sx={{fontSize: '16px', fontFamily: 'Inter'}}>I have a question about billing</MenuItem>
                    </Select>
                </Grid> */}
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
                bgcolor: "white",
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
                bgcolor: "white",
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
                bgcolor: "white",
                borderRadius: "5px",
                p: 1,
                textAlign: "center",
              },
            }}
            sx={errors.email ? errorStyle : placeholderStyle}
          />
        </Grid>
        <Grid item xs={12}>
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
                bgcolor: "white",
                borderRadius: "5px",
                p: 1,
                textAlign: "center",
              },
            }}
            sx={errors.phone ? errorStyle : placeholderStyle}
          />
        </Grid>

        <Grid item xs={12}>
          <InputBase
            value={contactForm?.message}
            fullWidth
            size="small"
            onChange={handleChange}
            id="message"
            placeholder="Message"
            multiline
            minRows={4}
            inputProps={{
              sx: {
                bgcolor: "white",
                borderRadius: "5px",
                p: 1,
                textAlign: "center",
              },
            }}
            sx={placeholderStyle}
          />
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
            mt: { xs: 2, lg: 3, xl: 4 },
            ml: { md: "13%" },
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

export default ContactPageForm;
