import React from "react";
import {
  Modal,
  Box,
  Grid,
  Typography,
  Select,
  MenuItem,
  IconButton,
  InputBase,
  FormControl,
  InputLabel,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import StyledButton from "../styledButton/styledButton";
import modalStyle from "../../styles/modal";
import { useState } from "react";
import axios from "axios";
import Clear from "@mui/icons-material/Clear";
import { styled } from "@mui/material/styles";
import { useLocation } from "@reach/router";
import Captcha from "../../../components/captcha/captcha";

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

function ContactModal({ open, setOpen, page }) {
  const location = useLocation();
  const pathname = location.pathname;
  const [submitEnabled, setSubmitEnabled] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const [contactForm, setContactForm] = useState({
    // service: page === "givesback" ? "mBridge partnership" : "",
    numLocations: 1,
    slug: pathname === "/" ? "Home Page" : pathname,
    sms: true,
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

    // setOpen(false);
    // setContactForm({});
    // window.location.href =
    //     pathname === "/"
    //         ? `${window.location.href}thankyou`
    //         : `${window.location.href}/thankyou`;

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
            value: contactForm?.service || "",
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
          //     objectTypeId: '0-1',
          //     name: 'hubspot_owner_id',
          //     // "value": "403184143"         // my id for sales test account
          //     //"value": "372517968" // my id for transblue account
          //     //"value": '372512583' // Donald's hubspot id
          //     //"value": hubspot_owner_ids[contactForm.region]
          //     //"value": hubspot_owner_ids[contactForm.service]
          //     //value: '216697650' // vince's hubspot owner id,
          //     value: '391760018' // aj's hubspot owner id
          // },
          {
            objectTypeId: "0-1",
            name: "website_page",
            value: contactForm?.slug,
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
          // window.location.href =
          //   pathname === "/"
          //     ? `${window.location.href}thankyou`
          //     : `${window.location.href}/thankyou`;
        });
    }

    // // sales test account
    // axios.post(`https://my-tb-cors.herokuapp.com/https://api.hsforms.com/submissions/v3/integration/secure/submit/39710783/cdfc9932-77c7-4b17-957c-03d9f80aec8a`, hubspotContact, {
    //     headers: {
    //         Authorization: `Bearer ${process.env.GATSBY_APP_RECAPTCHA_KEY}`
    //     }
    // }).then(res => {
    //     console.log(res)

    //     setOpen(false);
    //     setContactForm({});
    // })
  }

  const menuItems = [
    "Snow Removal",
    "Janitorial",
    "Landscaping",
    "Lot Sweeping",
    "Other",
  ];

  const handleChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.id]: e.target.value,
    });
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

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          ...modalStyle,
          textAlign: "center",
          borderRadius: "10px",
          maxHeight: "90vh",
          overflowY: "auto",
          p: 0,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={handleClose} color="error">
            <Clear />
          </IconButton>
        </Box>
        <Box sx={{ px: 5, pb: 5 }}>
          <Typography
            sx={{
              color: "#86868B",
              pb: 2,
              maxWidth: "500px",
              m: "0 auto",
            }}
          >
            Reach out to our dedicated team at Transblue to discover how we can
            elevate your commercial and multi-site operations by providing
            exceptional solutions tailored to your needs.
          </Typography>
          <Typography
            sx={{
              color: "#86868B",
              maxWidth: "500px",
              m: "0 auto",
            }}
          >
            We're here to help you succeed in your business ventures.
          </Typography>
          <Grid container spacing={3} mt={1}>
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

            {page !== "givesback" && (
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel
                    id="service-label"
                    sx={{
                      color: "#cfcfcf",
                      fontFamily: "Inter",
                      fontSize: "12px",
                    }}
                  >
                    Please select a service
                  </InputLabel>
                  <Select
                    input={<StyledSelect />}
                    onChange={(e) => {
                      setContactForm({
                        ...contactForm,
                        service: e.target.value,
                      });
                    }}
                    size="small"
                    fullWidth
                    value={contactForm?.service}
                    inputProps={{
                      sx: {
                        bgcolor: "#f5f5f7",
                        pb: "35px",
                        pt: "0px",
                        height: "40px",
                      },
                    }}
                    label="Please select which service you need"
                    labelId="service-label"
                  >
                    {menuItems.map((item) => (
                      <MenuItem
                        value={item}
                        sx={{
                          fontSize: "12px",
                          fontFamily: "Inter",
                        }}
                        key={item}
                      >
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
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
                minRows={4}
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

          {submitEnabled && (
            <StyledButton
              sx={{
                bgcolor: "#007AFF",
                fontSize: "12px",
                width: "75%",
                mt: 2,
              }}
              variant="contained"
              onClick={submit}
            >
              submit
            </StyledButton>
          )}
        </Box>
      </Box>
    </Modal>
  );
}

export default ContactModal;
