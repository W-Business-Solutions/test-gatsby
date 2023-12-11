import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { Parallax } from "react-scroll-parallax";

function TestParallax() {
    return (
        <Box
            container
            sx={{
                position: "relative",
                display: "flex",
                flexFlow: "column wrap",
                justifyContent: "space-between",
                alignItems: "center",
                minHeight: "50vh",
                marginBottom: "50vh",
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    width: "40em",
                }}
            >
                <Parallax
                    style={{
                        position: "absolute",
                        top: "28%",
                        left: 0,
                        width: "33%",
                        textAlign: "center",
                    }}
                    translateY={[-50, 50]}
                    translateX={[50, -50]}
                >
                    <Typography variant="h4">Grid 1</Typography>
                </Parallax>

                <Parallax
                    style={{
                        position: "absolute",
                        top: "28%",
                        left: "33%",
                        width: "33%",
                        textAlign: "center",
                    }}
                    translateY={[50, -50]}
                    translateX={[-50, 50]}
                >
                    <Typography variant="h4">Grid 2</Typography>
                </Parallax>

                {/* <Parallax                         
                    sx={{
                        position: 'absolute',
                        top: '20%',
                        right: '7%',
                        width: '100%',
                        height: '100%',
                        zIndex: 1,
                        
                    }} 
                    translateY={[-35, 35]}
                >
                    <Box 
                        sx={{width: '50px', height: '50px', border: '1px solid red'}}
                    />
                </Parallax> */}
            </Box>
        </Box>
    );
}

export default TestParallax;
