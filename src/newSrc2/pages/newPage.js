import React from "react";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { makeStyles } from "@mui/styles";

const services = [
    { title: "High-Rise Condos", description: "Empowering your experience..." },
    // ... other services
];

const condoImage = "https://unsplash.com/path-to-image"; // replace path-to-image with actual URL

const ServicesSection = () => {
    const useStyles = makeStyles({
        servicesContainer: {
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
        },
        serviceCard: {
            width: "30%",
            margin: "20px 0",
        },
    });
    const classes = useStyles();
    return (
        <div className={classes.servicesContainer}>
            <Typography variant="h4">Who do we work with?</Typography>
            {services.map((service) => (
                <Card className={classes.serviceCard}>
                    <CardContent>
                        <Typography variant="h5">{service.title}</Typography>
                        <Typography variant="body1">
                            {service.description}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

const HeroSection = () => {
    const useStyles = makeStyles({
        heroContainer: {
            backgroundImage: `url(${condoImage})`,
            padding: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
        },
        heroText: {
            marginBottom: "20px",
        },
    });
    const classes = useStyles();
    return (
        <div className={classes.heroContainer}>
            <Typography variant="h2" className={classes.heroContainer}>
                We provide the best services for you.
            </Typography>
            <Typography variant="body1">With our expert team...</Typography>
            <Button variant="contained" color="primary">
                Pricing
            </Button>
            <Button variant="outlined" color="primary">
                Contact Us
            </Button>
        </div>
    );
};

const Header = () => {
    const useStyles = makeStyles({
        appBar: {
            backgroundColor: "#fff",
            color: "#000",
        },
        menuButton: {
            marginRight: 16,
        },
        title: {
            flexGrow: 1,
        },
    });
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                >
                    ...
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    ...
                </Typography>
                ...
            </Toolbar>
        </AppBar>
    );
};

const TestPage = () => {
    const useStyles = makeStyles({
        appBar: {
            backgroundColor: "#fff",
            color: "#000",
        },
        menuButton: {
            marginRight: 16,
        },
        title: {
            flexGrow: 1,
        },
    });
    return (
        <div>
            <Header />
            <HeroSection />
            <ServicesSection />
            {/* ... other sections */}
        </div>
    );
};

export default TestPage;
