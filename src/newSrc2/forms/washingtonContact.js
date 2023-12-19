import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Alert from "@mui/material/Alert";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import axios from "axios";
import { useLocation } from "@reach/router";
import Captcha from "../../components/captcha/captcha";
import { FormControl, FormControlLabel } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

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

function WashingtonContact({ service }) {
  const location = useLocation();
  const pathname = location.pathname;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const [selectedServices, setSelectedServices] = useState({
    Janitorial: false,
    Landscaping: false,
    "Lot Sweeping": false,
    "Snow Removal": false,
  });

  const [contactForm, setContactForm] = useState({
    numLocations: 1,
    slug: pathname,
    sms: false,
  });

  const [errors, setErrors] = useState({
    email: false,
    phone: false,
    firstName: false,
    lastName: false,
    zipcode: false,
  });

  function submit() {
    let errObj = errors;

    if (!contactForm.email) {
      errObj.email = true;
    }

    if (!contactForm.phone) {
      errObj.phone = true;
    }

    if (!contactForm.firstName) {
      errObj.firstName = true;
    }
    if (!contactForm.lastName) {
      errObj.lastName = true;
    }
    if (!contactForm.zipcode) {
      errObj.zipcode = true;
    }

    setErrors({
      ...errObj,
    });

    const services = Object.keys(selectedServices)
      .filter((key) => selectedServices[key] === true)
      .join(", ");

    //make sure email and phone number are filled out
    if (
      contactForm.email &&
      contactForm.phone &&
      contactForm.firstName &&
      contactForm.lastName
    ) {
      const hubspotContact = {
        fields: [
          {
            objectTypeId: "0-1",
            name: "zip",
            value: contactForm?.zipcode || "",
          },
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
            value: services,
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
          //   {
          //     objectTypeId: "0-1",
          //     name: "hubspot_owner_id",
          //     // "value": "403184143"         // my id for sales test account
          //     value: "372517968", // my id for transblue account
          //     //"value": '372512583' // Donald's hubspot id
          //     //"value": hubspot_owner_ids[contactForm.region]
          //     //"value": hubspot_owner_ids[contactForm.service]
          //     //value: '216697650' // vince's hubspot owner id,
          //     //value: '391760018' // aj's hubspot owner id
          //   },
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
          `https://my-tb-cors.herokuapp.com/https://api.hsforms.com/submissions/v3/integration/secure/submit/22505818/ed740644-2054-4dfb-a5c3-afd7efeb0a24`,
          hubspotContact,
          {
            headers: {
              Authorization: `Bearer pat-na1-cfcdc14b-3967-45cf-94f8-48b6cbf407d9`,
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
          window.location.href = `${window.location.href}/thankyou`;
        });
    }
  }

  const handleChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.id]: e.target.value,
    });
  };

  const handleServiceChange = (e) => {
    setSelectedServices({
      ...selectedServices,
      [e.target.name]: !selectedServices[e.target.name],
    });
  };

  return (
    <Box sx={{ px: 0 }}>
      <>
        <Typography
          sx={{
            fontFamily: "Inter",
            m: "0 auto",
            textAlign: { xs: "left" },
            pl: { xs: 2, md: 0 },
          }}
        >
          Let's meet up and consult in-person! Our new customers:
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
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <InputBase
            value={contactForm?.firstName}
            fullWidth
            size="small"
            onChange={(e) => {
              handleChange(e);
              setErrors({
                ...errors,
                firstName: false,
              });
            }}
            id="firstName"
            placeholder="First Name *"
            inputProps={{
              sx: {
                bgcolor: "#F5F5F7",
                borderRadius: "5px",
                p: 1,
                textAlign: "center",
              },
            }}
            sx={errors.firstName ? errorStyle : placeholderStyle}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputBase
            value={contactForm?.lastName}
            fullWidth
            size="small"
            id="lastName"
            onChange={(e) => {
              handleChange(e);
              setErrors({
                ...errors,
                lastName: false,
              });
            }}
            placeholder="Last Name *"
            inputProps={{
              sx: {
                border: "0px",
                bgcolor: "#F5F5F7",
                borderRadius: "5px",
                p: 1,
                textAlign: "center",
              },
            }}
            sx={errors.lastName ? errorStyle : placeholderStyle}
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
        <Grid item xs={12} md={6}>
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
        <Grid item xs={12} md={6}>
          <InputBase
            value={contactForm?.zipcode}
            fullWidth
            size="small"
            onChange={(e) => {
              handleChange(e);
              setErrors({
                ...errors,
                zipcode: false,
              });
            }}
            id="zipcode"
            placeholder="Zip Code *"
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
            sx={errors.zipcode ? errorStyle : placeholderStyle}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography sx={{ mt: 1, textAlign: "center" }}>
            Which facility service(s) are you interested in?
          </Typography>

          <Grid
            container
            direction={{ xs: "column", md: "row" }}
            justifyContent="center"
            sx={{
              textAlign: "left",
              width: "86%",
              py: 1,
              m: "0 auto",
              maxWidth: "390px",
            }}
          >
            <Grid item xs={12} md={6}>
              {" "}
              <FormControlLabel
                sx={{ m: 0 }}
                control={
                  <Checkbox
                    sx={{ p: 0 }}
                    name="Snow Removal"
                    checked={selectedServices["Snow Removal"]}
                    onChange={handleServiceChange}
                  />
                }
                label="Snow Removal"
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ justifyContent: "flex-start" }}>
              {" "}
              <FormControlLabel
                sx={{ m: 0 }}
                control={
                  <Checkbox
                    sx={{ p: 0 }}
                    name="Janitorial"
                    checked={selectedServices["Janitorial"]}
                    onChange={handleServiceChange}
                  />
                }
                label="Janitorial"
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ justifyContent: "flex-start" }}>
              {" "}
              <FormControlLabel
                sx={{ m: 0 }}
                control={
                  <Checkbox
                    sx={{ p: 0 }}
                    name="Landscaping"
                    checked={selectedServices.Landscaping}
                    onChange={handleServiceChange}
                  />
                }
                label="Landscaping"
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ justifyContent: "flex-start" }}>
              <FormControlLabel
                sx={{ m: 0 }}
                control={
                  <Checkbox
                    sx={{ p: 0 }}
                    name="Lot Sweeping"
                    checked={selectedServices["Lot Sweeping"]}
                    onChange={handleServiceChange}
                  />
                }
                label="Asphalt/Lot Sweeping"
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <InputBase
            value={contactForm?.message}
            fullWidth
            size="small"
            onChange={handleChange}
            id="message"
            placeholder="Anything else we should know?"
            multiline
            minRows={1}
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
          <Box sx={{ width: "100%" }}>
            <FormControl
              fullWidth
              sx={{
                textAlign: "left",
                py: 1,
                maxWidth: "390px",
                ml: { xs: "7%", md: 0 },
                mb: 2,
              }}
            >
              <FormControlLabel
                sx={{ fontFamily: "Inter", m: 0 }}
                control={
                  <Checkbox
                    checked={contactForm.sms}
                    onChange={() =>
                      setContactForm({
                        ...contactForm,
                        sms: !contactForm.sms,
                      })
                    }
                    sx={{ p: 0 }}
                  />
                }
                label="Opt-In to receive SMS Messages"
              />
            </FormControl>
          </Box>
        </Grid>
      </Grid>
      {!submitEnabled && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Captcha onChange={() => setSubmitEnabled(true)} />
        </Box>
      )}
      {!isSubmitted && submitEnabled && (
        <Stack
          sx={{ height: "76px" }}
          alignItems="center"
          direction="row"
          justifyContent="center"
        >
          <Button
            sx={{
              textTransform: "capitalize",
              bgcolor: "#007AFF",
              width: { xs: "100%", md: "74%" },
              mb: 2,
            }}
            variant="contained"
            onClick={submit}
            disableElevation
          >
            submit
          </Button>
        </Stack>
      )}
      {isSubmitted && (
        <Alert severity="success" fullWidth sx={{ mt: { xs: 2, lg: 3 } }}>
          Thank you! Someone from our team will reach out to you shortly
        </Alert>
      )}
    </Box>
  );
}

export default WashingtonContact;
