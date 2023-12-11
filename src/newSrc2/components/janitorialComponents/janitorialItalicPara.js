import React from "react";
import Typography from "@mui/material/Typography";

function JanitorialItalicPara({ title, body }) {
  return (
    <>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 500,
          pt: 4,
          fontStyle: "italic",
          lineHeight: "normal",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 500,
          lineHeight: "normal",
        }}
      >
        {body}
      </Typography>
    </>
  );
}

export default JanitorialItalicPara;
