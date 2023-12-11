import React from "react";
import Typography from "@mui/material/Typography";

function JanitorialParagraph({ title, body, body2 }) {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          py: 4,
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
      {body2 && (
        <Typography
          variant="h6"
          sx={{
            fontWeight: 500,
            mt: 4,
            lineHeight: "normal",
          }}
        >
          {body2}
        </Typography>
      )}
    </>
  );
}

export default JanitorialParagraph;
