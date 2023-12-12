import React, { useState } from "react";
import { Box, Typography, Chip, Stepper, Step, StepLabel } from "@mui/material";
// import { ScreenSizeContext } from "../../../src/App.js";
import { useContext } from "react";
import { useLocation } from "@reach/router";
import axios from "axios";
import { styled } from "@mui/material/styles";
import { TaskAlt } from "@mui/icons-material";
import Captcha from "../../components/captcha/captcha";
import centeredStyle from "../styles/centeredStyle";
import StyledButton from "../components/styledButton/styledButton";
import { ScreenSizeContext } from "../../contextWrappers/screenSizeContext";

const arr = [
  {
    question: "What solution do you need most?",
    answers: [
      "Snow Removal",
      "Janitorial",
      "Landscaping",
      "Lot Sweeping",
      "Other",
    ],
    key: "service",
  },
  {
    question: "Which best describes your role?",
    answers: ["Individual", "Manager", "Director", "Vice President", "C-Suite"],
    key: "message",
  },
  {
    question: "How can we best get in touch?",
    answers: ["First Name", "Last Name", "Phone Number *", "Email *"],
    keys: ["firstName", "lastName", "phone", "email"],
  },
];

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 35,
  height: 35,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Inter",
  fontWeight: 500,
  fontSize: "20px",
  ...(ownerState.active && {
    backgroundColor: "#007aff",
  }),
  ...(ownerState.completed && {
    backgroundColor: "#1d1d1f",
  }),
  ...(!ownerState.completed &&
    !ownerState.active && {
      color: "#1d1d1f",
      border: "2px solid black",
      backgroundColor: "#F5F5F7",
    }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {String(props.icon)}
    </ColorlibStepIconRoot>
  );
}

function LandingContact() {
  const { screenSize } = useContext(ScreenSizeContext);
  console.log(screenSize);

  const [activeStep, setActiveStep] = useState(0);
  const [contactForm, setContactForm] = useState({
    service: "Snow Removal",
    numLocations: 1,
    slug: "Home Page",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitEnabled, setSubmitEnabled] = useState(false);

  const [errors, setErrors] = useState({
    email: false,
    phone: false,
  });

  const [validEmail, setValidEmail] = useState(true);

  const handleFormChange = (step) => {
    setContactForm({
      ...contactForm,
      [arr[activeStep].key]: step,
    });

    if (activeStep < 2) {
      setActiveStep((step) => step + 1);
    }
  };

  function validateEmail() {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(contactForm.email)
    ) {
      return true;
    }
    return false;
  }

  function submit() {
    // check if email is valid format
    const isEmailValid = validateEmail();
    if (!isEmailValid) {
      setValidEmail(false);
    }

    let errorObj = errors;
    if (!contactForm.email) {
      errorObj.email = true;
    }
    if (!contactForm.phone) {
      errorObj.phone = true;
    }
    setErrors({
      ...errorObj,
    });

    if (contactForm.email && contactForm.phone && isEmailValid) {
      const {
        email = "",
        firstName = "",
        lastName = "",
        service = "",
        message = "",
        phone = "",
        numlocations = 0,
        slug,
      } = contactForm;

      const hubspotContact = {
        fields: [
          {
            objectTypeId: "0-1",
            name: "email",
            value: email,
          },
          {
            objectTypeId: "0-1",
            name: "firstname",
            value: firstName,
          },
          {
            objectTypeId: "0-1",
            name: "lastname",
            value: lastName,
          },
          {
            objectTypeId: "0-1",
            name: "service",
            value: service,
          },
          {
            objectTypeId: "0-1",
            name: "message",
            value: message,
          },
          {
            objectTypeId: "0-1",
            name: "phone",
            value: phone,
          },
          {
            objectTypeId: "0-1",
            name: "numlocations",
            value: parseInt(numlocations),
          },
          {
            objectTypeId: "0-1",
            name: "website_page",
            value: slug,
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
          `https://my-tb-cors.herokuapp.com/https://api.hsforms.com/submissions/v3/integration/secure/submit/22505818/846af819-113c-4fe9-8a40-b5289c9e852c`,
          hubspotContact,
          {
            headers: {
              Authorization: `Bearer pat-na1-cfcdc14b-3967-45cf-94f8-48b6cbf407d9`,
            },
          }
        )
        .then((res) => {
          setContactForm({});
          setSubmitted(true);
          setActiveStep(0);
          // window.location.href = `${window.location.href}thankyou`;
        });
    }

    // // sales test account
    // axios.post(`https://my-tb-cors.herokuapp.com/https://api.hsforms.com/submissions/v3/integration/secure/submit/39710783/cdfc9932-77c7-4b17-957c-03d9f80aec8a`, hubspotContact, {
    //     headers: {
    //         Authorization: `Bearer pat-na1-94226ec6-355b-471b-91e5-0bfa0583565b`
    //     }
    // }).then(res => {
    //     console.log(res)

    //     setOpen(false);
    //     setContactForm({});
    // })
  }

  const handleInputChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <Box
      sx={{
        width: "100vw",
        py: { xs: "35vh", md: "30vh", xl: "20vh" },
        bgcolor: "#F5F5F7",
        position: "relative",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Box sx={{ ...centeredStyle, width: "90vw" }}>
        <Typography
          variant="h5"
          sx={{ fontFamily: "Inter", mb: 5, fontWeight: 500 }}
        >
          {arr[activeStep].question}
        </Typography>
        <Stepper
          activeStep={activeStep}
          sx={{
            fontFamily: "Inter",
            fontWeight: 500,
            mb: activeStep === 2 ? 2 : 5,
            width: "200px",
            ml: "calc(50% - 100px )",
            "& .MuiStepLabel-iconContainer": {
              pr: 0,
            },
            "& .MuiStep-root": {
              pr: 0,
              pl: 0,
            },
            "& .MuiStepConnector-line": {
              borderColor: "#000000",
              borderTopWidth: "2px",
            },
          }}
        >
          <Step onClick={() => setActiveStep(0)}>
            <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
          </Step>
          <Step onClick={() => setActiveStep(1)}>
            <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
          </Step>
          <Step onClick={() => setActiveStep(2)}>
            <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
          </Step>
        </Stepper>

        {activeStep === 2 && screenSize === "small" && (
          <>
            <Typography
              sx={{
                mb: 1,
                fontFamily: "Inter",
                fontWeight: 300,
                fontSize: "12px",
              }}
            >
              Click on a field below to start typing.
            </Typography>
            <Typography
              sx={{
                mb: 2,
                fontFamily: "Inter",
                fontWeight: 300,
                fontSize: "12px",
              }}
            >
              All fields are required.
            </Typography>
          </>
        )}
        {activeStep === 2 &&
          (screenSize === "medium" ||
            screenSize === "large" ||
            screenSize === "xl") && (
            <Typography
              sx={{
                mb: 2,
                fontFamily: "Inter",
                fontWeight: 300,
                fontSize: "12px",
              }}
            >
              Click on a field below to start typing. All fields are required.
            </Typography>
          )}

        {arr[activeStep].answers.map((step, index) => {
          return (
            <>
              {activeStep !== 2 && (
                <Chip
                  variant="outlined"
                  key={step}
                  label={step}
                  sx={{
                    mx: 1,
                    border: "2px solid #333333",
                    mb:
                      screenSize !== "small" && screenSize !== "medium" ? 0 : 2,
                    width: "200px",
                    fontFamily: "Inter",
                    fontWeight: 500,
                  }}
                  onClick={() => handleFormChange(step)}
                />
              )}
              {activeStep === 2 && (
                <input
                  placeholder={step}
                  style={{
                    margin:
                      screenSize === "large" || screenSize === "xl"
                        ? "0px 8px 0px 8px"
                        : "0px 8px 16px 8px",
                    border:
                      (step === "Email *" && errors.email) ||
                      (step === "Phone Number *" && errors.phone)
                        ? "2px solid red"
                        : "2px solid #333333",
                    width: "200px",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    borderRadius: "16px",
                    textAlign: "center",
                    height: "32px",
                    fontSize: "0.8125rem",
                  }}
                  onChange={(e) => {
                    handleInputChange(e);
                    if (step === "Email *") {
                      setErrors({
                        ...errors,
                        email: false,
                      });
                      setValidEmail(true);
                    }
                    if (step === "Phone Number *") {
                      setErrors({
                        ...errors,
                        phone: false,
                      });
                    }
                  }}
                  id={arr[2].keys[index]}
                  required
                  value={contactForm[arr[2].keys[index]] || ""}
                />
              )}

              {screenSize === "small" && <br />}
              {screenSize === "medium" && index === 2 && <br />}
            </>
          );
        })}

        {(errors.phone || errors.email) && (
          <Typography
            color="error"
            sx={{
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: 600,
              my: 2,
            }}
          >
            Please fill out the required fields
          </Typography>
        )}

        {!validEmail && (
          <Typography
            color="error"
            sx={{
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: 600,
              my: 2,
            }}
          >
            Please enter a valid email
          </Typography>
        )}

        {(screenSize === "large" || screenSize === "xl") &&
          activeStep === 2 &&
          !errors.phone &&
          !errors.email &&
          validEmail && (
            <>
              <br />
              <br />
            </>
          )}

        {activeStep === 2 && !submitted && submitEnabled && (
          <StyledButton
            sx={{ fontSize: "12px" }}
            onClick={submit}
            variant="contained"
          >
            Submit
          </StyledButton>
        )}

        {activeStep === 2 && !submitted && !submitEnabled && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Captcha onChange={() => setSubmitEnabled(true)} />
          </Box>
        )}

        {submitted && (
          <Typography
            sx={{
              mt: { xs: 3, md: 5 },
              fontFamily: "Inter",
              fontWeight: 500,
            }}
          >
            <TaskAlt color="success" sx={{ verticalAlign: "middle", mr: 1 }} />
            Thank you for contacting us! Someone will reach out to shortly
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default LandingContact;
