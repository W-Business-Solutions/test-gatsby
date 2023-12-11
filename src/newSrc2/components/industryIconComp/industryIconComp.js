import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";

function IndustryIconComp({ icon1, icon2, body1, body2 }) {
    return (
        <Grid
            container
            sx={{ width: "90vw", maxWidth: "800px", pt: { xs: 5, md: 7 } }}
        >
            <Grid item xs={12} md={6} my="auto" sx={{ textAlign: "center" }}>
                <img src={icon1} style={{ maxWidth: "150px" }} />
            </Grid>
            <Grid item xs={12} md={6} my="auto">
                <Typography
                    sx={{
                        color: "#86868B",
                        width: "100%",
                        fontSize: "18px",
                        textAlign: { xs: "center", md: "left" },
                        mt: { xs: 2, md: 0 },
                    }}
                >
                    {body1}
                </Typography>
            </Grid>

            <Grid
                item
                xs={12}
                md={6}
                my="auto"
                pt={6}
                sx={{ textAlign: "center" }}
            >
                <img src={icon2} style={{ maxWidth: "150px" }} />
            </Grid>

            <Grid item xs={12} md={6} my="auto" pt={{ xs: 0, md: 6 }}>
                <Typography
                    sx={{
                        color: "#86868B",
                        width: "100%",
                        fontSize: "18px",
                        textAlign: { xs: "center", md: "left" },
                        mt: { xs: 2, md: 0 },
                    }}
                >
                    {body2}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default IndustryIconComp;
