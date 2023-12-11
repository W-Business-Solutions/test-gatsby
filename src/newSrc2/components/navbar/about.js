import React from "react";

import about from "../../assets/navbar/about.png";
// import careers from '../../assets/navbar/careers.png';
import core from "../../assets/navbar/core.png";
import giving from "../../assets/navbar/giving.png";
import leadership from "../../assets/navbar/leadership.png";
import blog from "../../assets/navbar/blog.png";
import locations from "../../assets/navbar/locations.png";
import RowComp from "./components/rowComp";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const aboutLinks = [
    {
        icon: about,
        title: "About",
        description: "Our commitment to you",
        href: "/about",
    },
    {
        icon: core,
        title: "Core Values",
        description: "Passion-driven principles",
        href: "/about/corevalues",
    },
    {
        icon: giving,
        title: "Giving Back",
        description: "Community impact focus",
        href: "/about/givesback",
    },
    {
        icon: leadership,
        title: "Leadership",
        description: "Expert team guidance",
        href: "/about/leadership",
    },
    {
        icon: blog,
        title: "Blog",
        description: "Authoritative insights",
        href: "/blog",
    },
    {
        icon: locations,
        title: "Locations",
        description: "Our franchise affiliates",
        href: "/locations",
    },
];

function About() {
    return (
        <Box
            sx={{
                maxWidth: "300px",
                py: 2,
            }}
        >
            <Box sx={{ pl: 3 }}>
                <Grid container spacing={3}>
                    {aboutLinks.map((link) => (
                        <RowComp
                            title={link.title}
                            icon={link.icon}
                            description={link.description}
                            href={link.href}
                        />
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}

export default About;
