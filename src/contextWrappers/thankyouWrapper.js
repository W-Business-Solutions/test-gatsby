import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "@reach/router";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import StyledButton from "../newSrc2/components/styledButton/styledButton";
import modalStyle from "../newSrc2/styles/modal";
import { navigate } from "gatsby";

function ThankyouWrapper({ children }) {
  const location = useLocation();
  const { pathname } = location;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (pathname.includes("/thankyou")) {
      setOpen(true);
    }
  }, [pathname]);

  const handleClose = () => {
    setOpen(false);
    let newPath = pathname.replace("/thankyou", "");
    navigate(newPath);
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            ...modalStyle,
            maxWidth: "400px",
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Inter",
              fontWeight: 600,
              mb: 2,
            }}
          >
            Thank you!
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              mb: 3,
            }}
          >
            Someone from our team will be in contact with you shortly
          </Typography>
          <StyledButton
            sx={{
              color: "white",
              fontFamily: "Inter",
              borderRadius: "30px",
              width: "200px",
              bgcolor: "#007AFF",
            }}
            variant="contained"
            disableElevation
            onClick={handleClose}
          >
            back to browsing
          </StyledButton>
        </Box>
      </Modal>
      {children}
    </>
  );
}

export default ThankyouWrapper;
