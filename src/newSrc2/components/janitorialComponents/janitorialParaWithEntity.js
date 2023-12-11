import React from "react";
import Typography from "@mui/material/Typography";

function JanitorialParaWithEntity({ title, body }) {
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
        &gt; {title}
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

export default JanitorialParaWithEntity;
