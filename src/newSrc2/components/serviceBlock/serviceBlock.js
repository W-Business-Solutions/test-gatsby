import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import centeredStyle from "../../styles/centeredStyle";

function ServiceBlock({ service, href, serviceText }) {
    return (
        <Link href={href} underline="none">
            <Box
                sx={{
                    height: {
                        xs: "20vh",
                        md: "25vh",
                        lg: "40vh",
                        xl: "25vh",
                        position: "relative",
                    },
                }}
            >
                <div className="fade-in-overlay" />
                <div className={`redesign ${service}`}>
                    <div className="overlay service-overlay" />
                    <Box
                        sx={{
                            ...centeredStyle,
                            color: "white",
                        }}
                    >
                        <Typography variant="h4" sx={{ fontWeight: 500 }}>
                            {serviceText[service]}
                        </Typography>
                    </Box>
                </div>
            </Box>
        </Link>
    );
}

export default ServiceBlock;
