import React from "react";
import Typography from "@mui/material/Typography";

const ItalicComp = ({ title, body, subtitle, list }) => {
  return (
    <>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 500,
          mt: 4,
          lineHeight: "normal",
        }}
      >
        <i>{title}</i> {body}
      </Typography>
    </>
  );
};

export default ItalicComp;
