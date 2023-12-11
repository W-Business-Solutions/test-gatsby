import React from "react";
import Typography from "@mui/material/Typography";

function JanitorialList({ title, subtitle, subtitle2, list }) {
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
          paddingLeft: "0px",
        }}
      >
        {list.map((item) => (
          <li key={item}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                lineHeight: "normal",
              }}
            >
              &gt; {item}
            </Typography>
          </li>
        ))}
      </ul>
    </>
  );
}

export default JanitorialList;
