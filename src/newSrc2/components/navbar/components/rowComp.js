import React from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const RowComp = ({ icon, title, description, href }) => {
  return (
    <>
      <Grid item xs={1}>
        <img src={icon} style={{ width: "24px" }} />
      </Grid>
      <Grid item xs={11}>
        <Link href={href} underline="none">
          <Typography
            sx={{
              fontWeight: 600,
              pl: 2,
              width: "100%",
              underline: "none",
              lineHeight: "150%",
              color: "black",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "#434344",
              opacity: ".74",
              pl: 2,
              fontSize: "14px",
              fontWeight: 500,
              width: "100%",
              lineHeight: "150%",
            }}
          >
            {description}
          </Typography>
        </Link>
      </Grid>
    </>
  );
};

export default RowComp;
