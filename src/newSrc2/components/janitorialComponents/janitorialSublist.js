import React from "react";
import Typography from "@mui/material/Typography";
function JanitorialSublist({ title, subtitle, subtitle2, list, variant }) {
  return (
    <>
      {title && (
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
      )}
      {subtitle && (
        <Typography
          variant="h6"
          sx={{
            fontWeight: 500,
            mb: 4,
            mt: title ? 0 : 4,
            lineHeight: "normal",
          }}
        >
          {subtitle}
        </Typography>
      )}
      {subtitle2 && (
        <Typography
          variant="h6"
          sx={{
            fontWeight: 500,
            mb: 4,
            lineHeight: "normal",
          }}
        >
          {subtitle2}
        </Typography>
      )}
      <ul
        style={{
          listStyleType: "none",
          fontFamily: "Inter",
          paddingLeft: "0px",
        }}
      >
        {list.map((item) => (
          <>
            <Typography
              variant={variant}
              sx={{
                fontWeight: variant === "h6" ? 500 : 600,
                my: 4,
                lineHeight: "normal",
              }}
            >
              &gt; {item.title}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                lineHeight: "normal",
              }}
            >
              {item.body}
            </Typography>
          </>
        ))}
      </ul>
    </>
  );
}

export default JanitorialSublist;
