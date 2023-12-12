import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";

import StyledButton from "../styledButton/styledButton";
import modalStyle from "../../styles/modal";
import { useState } from "react";
import Clear from "@mui/icons-material/Clear";
import Captcha from "../../../components/captcha/captcha";

import { init } from "emailjs-com";
import * as emailjs from "emailjs-com";
import { useLocation } from "@reach/router";
init("user_iLZ3jXyTzXi5zQFlgf5DG");

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

function SubcontractorModal({ open, setOpen }) {
  const location = useLocation();
  const { pathname } = location;
  const [submitEnabled, setSubmitEnabled] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const [contactForm, setContactForm] = useState({});

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

    let templateId =
      pathname === "/subcontractor" ? "template_k6egc5c" : "template_p5k56xr";

    if (contactForm.email && contactForm.phone) {
      emailjs.send(
        "service_gekurtf",
        templateId, //CONTACT TEMPLATE
        contactForm,
        process.env.GATSBY_APP_REACTJS_USER
      );
      setOpen(false);
      setContactForm({});
    }
  }

  const handleChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.id]: e.target.value,
    });
  };

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
          {pathname === "/subcontractor" && (
            <>
              <Typography
                sx={{
                  color: "#86868B",
                  fontFamily: "Inter",
                  pb: 2,
                  maxWidth: "500px",
                  m: "0 auto",
                }}
              >
                By joining our network of subcontractors and professionals,
                you'll gain a dedicated partner focused on fostering your growth
                and development. Together, let's offer unparalleled solutions
                and customer service, ensuring shared success in this thriving
                partnership.
              </Typography>
              <Typography
                sx={{
                  color: "#86868B",
                  fontFamily: "Inter",
                  maxWidth: "500px",
                  m: "0 auto",
                }}
              >
                Submit your details to take the first step!
              </Typography>
            </>
          )}
          {pathname === "/about/careers" && (
            <Typography
              sx={{
                color: "#86868B",
                fontFamily: "Inter",
                maxWidth: "500px",
                m: "0 auto",
              }}
            >
              Together, let's offer unparalleled solutions and customer service,
              ensuring shared success in this thriving partnership. Submit your
              details to take the first step!
            </Typography>
          )}
          <Grid container spacing={2} mt={1}>
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
                    bgcolor: "#F5F5F7",
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
                    bgcolor: "#F5F5F7",
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

export default SubcontractorModal;
