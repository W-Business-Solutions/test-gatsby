import React from "react";
import Captcha from "../components/captcha/captcha";
import snow from "../newSrc2/assets/lunch/snow.png";
import commercial from "../newSrc2/assets/lunch/commercial.png";
import multifamily from "../newSrc2/assets/lunch/multifamily.png";
import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import dave from "../newSrc2/assets/lunch/dave.png";
import Navbar from "../newSrc2/components/navbar/navbar";
import Footer from "../newSrc2/components/footer/newFooter";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import StyledButton from "../newSrc2/components/styledButton/styledButton";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LinkComp from "../newSrc2/components/linkComp/linkComp";

const bodyStyle = {
  fontWeight: 500,
  width: "100%",
  maxWidth: "450px",
  // fontSize: { xs: '16px',  lg: '14px', xl: '16px'},
  fontFamily: "Inter",
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

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

function Lunch() {
  const formRef = useRef();

  const handleScroll = () => {
    window.scrollTo({
      behavior: "smooth",
      top: formRef.current.offsetTop,
    });
  };
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({
    email: false,
    phone: false,
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const submit = () => {
    let errObj = errors;

    if (!formValues.email) {
      errObj.email = true;
    }

    if (!formValues.phone) {
      errObj.phone = true;
    }

    setErrors({
      ...errObj,
    });

    if (formValues.email && formValues.phone) {
      const hubspotContact = {
        fields: [
          {
            objectTypeId: "0-1",
            name: "email",
            value: formValues?.email || "",
          },
          {
            objectTypeId: "0-1",
            name: "firstname",
            value: formValues?.firstName || "",
          },
          {
            objectTypeId: "0-1",
            name: "lastname",
            value: formValues?.lastName || "",
          },
          {
            objectTypeId: "0-1",
            name: "company",
            value: formValues?.company || "",
          },
          {
            objectTypeId: "0-1",
            name: "message",
            value: formValues?.message || "",
          },
          {
            objectTypeId: "0-1",
            name: "phone",
            value: formValues?.phone || "",
          },
          // {
          //     objectTypeId: '0-1',
          //     name: 'hubspot_owner_id',
          //     // "value": "403184143"         // my id for sales test account
          //     //"value": "372517968" // my id for transblue account
          //     //"value": '372512583' // Donald's hubspot id
          //     //"value": hubspot_owner_ids[formValues.region]
          //     //"value": hubspot_owner_ids[formValues.service]
          //     //value: '216697650' // vince's hubspot owner id,
          //     //value: '391760018' // aj's hubspot owner id
          //     value: '391760169' // pauls hubspot owner id
          // }
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
              Authorization: `Bearer pat-na1-cfcdc14b-3967-45cf-94f8-48b6cbf407d9`,
            },
          }
        )
        .then((res) => {
          setFormValues(initialValues);
          setIsSubmitted(true);
        });
    }
  };

  function getDol() {
    axios
      .post(
        "https://my-tb-cors.herokuapp.com/https://professions.dol.wa.gov/s/sfsites/aura?r=11&other.Polaris_LicenseLookup.fetchProfessionTypeDetails=1",
        {
          message: {
            actions: [
              {
                id: "228;a",
                descriptor:
                  "apex://Polaris_LicenseLookupController/ACTION$fetchProfessionTypeDetails",
                callingDescriptor: "markup://c:License_Lookup",
                params: {
                  professionDetials: "Real Estate",
                  licenseNumber: "75604",
                },
              },
            ],
          },
          aura: {
            context: {
              mode: "PROD",
              fwuid:
                "MlRqRU5YT3pjWFRNenJranFOMWFjQXlMaWFpdmxPSTZWeEo0bWtiN0hsaXcyNDQuMjAuNC0yLjQxLjQ",
              app: "siteforce:communityApp",
              loaded: {
                "APPLICATION@markup://siteforce:communityApp":
                  "2L0JGxcI-Ap-Okf-PqAa0Q",
                "COMPONENT@markup://instrumentation:o11ySecondaryLoader":
                  "WAlywPtXLxVWA9DxV-jd3A",
              },
              dn: [],
              globals: {},
              uad: false,
            },
            pageURI: "/s/license-lookup",
            token: null,
          },
        }
      )
      .then((res) => {});
  }

  return (
    <>
      <Navbar />

      <Box sx={{ py: { xs: "10vh", lg: "20vh", xl: "10vh" } }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Inter",
            fontWeight: 700,
            textAlign: "center",
            mb: { xs: 5, xl: 7 },
            width: "90vw",
            ml: "5vw",
          }}
        >
          Can we buy your office lunch?
        </Typography>
        <Grid
          container
          width={{ xs: "90vw", xl: "70vw" }}
          ml={{ xs: "5vw", xl: "15vw" }}
        >
          <Grid
            item
            xs={12}
            md={6}
            xl={7}
            pl={{ xs: 0, md: 3 }}
            pr={{ xs: 0, xl: 7 }}
            my="auto"
          >
            <Box
              sx={{
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{ ...bodyStyle, m: "0 auto", mb: 3 }}
              >
                Are snow and ice plaguing your commercial real estate? This
                winter season, be equipped with the knowledge to manage these
                challenges like a pro. Join our complimentary Lunch + Learn
                workshop - the answer to your snow and ice clearing needs.
              </Typography>
              <Typography
                variant="h6"
                sx={{ ...bodyStyle, m: "0 auto", mb: 3 }}
              >
                Enjoy the food, foster conversations, and let's pave the way for
                successful collaboration!
              </Typography>
              <StyledButton
                sx={{
                  bgcolor: "black",
                  fontFamily: "Inter",
                  borderRadius: "30px",
                  width: "140px",
                  color: "white",
                  fontWeight: 500,
                  height: "37px",
                }}
                variant="contained"
                onClick={handleScroll}
              >
                sign up <ExpandMore />
              </StyledButton>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            xl={5}
            pt={{ xs: 5, md: 0 }}
            my="auto"
            px={{ lg: 10, xl: 0 }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "center",
                  xl: "flex-start",
                },
                width: { xl: "70%" },
              }}
            >
              <img
                src={dave}
                alt=""
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          py: { xs: "10vh", lg: "10vh", xl: "7vh" },
          bgcolor: "#F5F5F7",
        }}
        ref={formRef}
      >
        <Box
          sx={{
            width: { xs: "90vw", lg: "50vw", xl: "40vw" },
            ml: { xs: "5vw", lg: "25vw", xl: "30vw" },
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <InputBase
                value={formValues?.firstName}
                fullWidth
                size="small"
                onChange={handleChange}
                id="firstName"
                placeholder="First Name"
                inputProps={{
                  sx: {
                    bgcolor: "#fff",
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
                value={formValues?.lastName}
                fullWidth
                size="small"
                onChange={handleChange}
                id="lastName"
                placeholder="Last Name"
                inputProps={{
                  sx: {
                    border: "0px",
                    bgcolor: "#fff",
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
                value={formValues?.email}
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
                    bgcolor: "#fff",
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
                value={formValues?.phone}
                fullWidth
                size="small"
                id="phone"
                placeholder="Phone Number *"
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
                    bgcolor: "#fff",
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
                value={formValues?.company}
                fullWidth
                size="small"
                onChange={handleChange}
                id="company"
                placeholder="Company"
                inputProps={{
                  sx: {
                    bgcolor: "#fff",
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
                value={formValues?.message}
                fullWidth
                size="small"
                onChange={handleChange}
                id="message"
                placeholder="Message"
                multiline
                minRows={4}
                inputProps={{
                  sx: {
                    bgcolor: "#fff",
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 2,
              }}
            >
              <Captcha onChange={() => setSubmitEnabled(true)} />
            </Box>
          )}

          {!isSubmitted && submitEnabled && (
            <StyledButton
              sx={{
                bgcolor: "#007AFF",
                fontSize: "12px",
                width: "100%",
                mt: { xs: 2, lg: 3, xl: 4 },
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
      </Box>

      <Box
        sx={{
          py: { xs: "10vh", md: "10vh", xl: "9vh" },
          width: { xs: "90vw", md: "60vw", lg: "90vw", xl: "80vw" },
          ml: { xs: "5vw", md: "20vw", lg: "5vw", xl: "10vw" },
        }}
      >
        <Grid container spacing={{ xs: 2, lg: 5, xl: 15 }}>
          <LinkComp
            title="Snow Removal"
            img={snow}
            href="/snow-and-ice-removal"
          />
          <LinkComp
            title="Commercial Services and Operations"
            img={commercial}
            href="/commercial"
          />
          <LinkComp
            title="Multifamily Service and Operations"
            img={multifamily}
            href="/multifamily"
          />
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default Lunch;
