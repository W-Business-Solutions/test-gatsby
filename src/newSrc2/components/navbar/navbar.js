import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import React, { useState } from "react";
import StyledButton from "../styledButton/styledButton";
import ExpandMore from "@mui/icons-material/ExpandMore";
import NavigateBefore from "@mui/icons-material/NavigateBefore";
import PhoneEnabled from "@mui/icons-material/PhoneEnabled";
import MenuIcon from "@mui/icons-material/Menu";
// import ContactModal from "../contactModal/contactModal";
// import { useContext } from "react";
// import { ScreenSizeContext } from "../../../../src/App.js";
import ServiceBanner from "../serviceBanner/serviceBanner";
import Services from "./services";
import About from "./about";
import AboutBanner from "../aboutBanner/aboutBanner";
import linkedin from "../../assets/navbar/linkedin.png";
import facebook from "../../assets/navbar/facebook.png";
import youtube from "../../assets/navbar/youtube.png";
import instagram from "../../assets/navbar/instagram.png";
import RecurringBanner from "../recurringBanner/recurringBanner";
import Banner from "../banner/banner";
import fullLogo from "../../assets/fullLogo.png";
import { navigate } from "gatsby";

const style = {
  color: "white",
  fontSize: "14px",
  fontFamily: "Inter",
  textTransform: "capitalize",
  fontWeight: 400,
  color: "#D9D9DA",
  mx: 2,
};

const LargeNav = ({ page }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => setAnchorElNav(null);

  const [aboutAnchorEl, setAboutAnchorEl] = useState(null);
  const handleAboutClose = () => setAboutAnchorEl(null);
  const handleAboutOpen = (e) => setAboutAnchorEl(e.currentTarget);

  return (
    <>
      {/* <ContactModal open={modalOpen} setOpen={setModalOpen} /> */}
      <AppBar
        position="fixed"
        sx={{ zIndex: 10, bgcolor: "transparent" }}
        elevation={0}
      >
        <Toolbar
          elevation={0}
          variant="dense"
          sx={{
            justifyContent: "center",
            display: "flex",
            bgcolor: "#434344",
            flexGrow: 1,
          }}
        >
          <Link href="/">
            <img src={fullLogo} alt="" style={{ marginRight: "30px" }} />
          </Link>
          <StyledButton
            onClick={handleOpenNavMenu}
            sx={{ ...style }}
            onMouseEnter={handleOpenNavMenu}
            //onMouseLeave={handleCloseNavMenu}
          >
            services <ExpandMore />
          </StyledButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            PaperProps={{
              style: {
                borderRadius: "16px",
                padding: "0px 3px 0px 3px",
              },
              onMouseLeave: () => handleCloseNavMenu(),
            }}
          >
            <Services />
          </Menu>

          <StyledButton
            onClick={handleAboutOpen}
            sx={style}
            onMouseEnter={handleAboutOpen}
            // onMouseLeave={handleAboutClose}
          >
            explore <ExpandMore />
          </StyledButton>
          <Menu
            id="menu-appbar"
            anchorEl={aboutAnchorEl}
            open={Boolean(aboutAnchorEl)}
            onClose={handleAboutClose}
            PaperProps={{
              style: {
                borderRadius: "16px",
                padding: "0px",
              },
              onMouseLeave: () => handleAboutClose(),
            }}
          >
            <About />
          </Menu>
          <StyledButton sx={style} onClick={() => navigate("/subcontractor")}>
            subcontractors
          </StyledButton>
          <StyledButton sx={style} onClick={() => navigate("/about/careers")}>
            careers
          </StyledButton>
          <StyledButton sx={style} onClick={() => navigate("/contact")}>
            contact
          </StyledButton>
          <Link
            href="/contact"
            sx={{
              ...style,
              color: "#2997FF",
              fontFamily: "Inter",
              textTransform: "capitalize",
            }}
          >
            <PhoneEnabled fontSize="small" />
          </Link>

          {/* <SearchBar /> */}
        </Toolbar>
        {page === "landing" && <Banner />}
        {page === "service" && <ServiceBanner />}
        {page === "about" && <AboutBanner />}
        {page === "recurring" && <RecurringBanner />}
      </AppBar>
    </>
  );
};

const MobileNav = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => setAnchorElNav(null);

  const [modalOpen, setModalOpen] = useState(false);

  const newLinks = [
    {
      text: "Subcontractors",
      href: "/subcontractor",
    },
    {
      text: "Careers",
      href: "/about/careers",
    },
    {
      text: "Contact",
      href: "/contact",
    },
  ];

  return (
    <>
      {/* <ContactModal open={modalOpen} setOpen={setModalOpen} /> */}
      <AppBar
        position="fixed"
        sx={{ zIndex: 10, bgcolor: "transparent" }}
        elevation={0}
      >
        <Toolbar
          elevation={0}
          variant="dense"
          sx={{ width: "100vw", display: "flex", bgcolor: "#434344" }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Link href="/">
              <img src={fullLogo} alt="" />
            </Link>
          </Box>
          <>
            <IconButton onClick={handleOpenNavMenu}>
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              PaperProps={{
                style: {
                  borderRadius: "0px",
                  width: "100vh",
                  height: "100vh",
                  paddingLeft: "10px",
                  position: "relative",
                },
              }}
            >
              {aboutOpen && (
                <>
                  <IconButton
                    onClick={() => setAboutOpen(false)}
                    sx={{ mb: 1 }}
                  >
                    <NavigateBefore />
                  </IconButton>
                  <About />
                </>
              )}
              {servicesOpen && (
                <>
                  <IconButton
                    onClick={() => setServicesOpen(false)}
                    sx={{ mb: 1 }}
                  >
                    <NavigateBefore />
                  </IconButton>
                  <Services />
                </>
              )}
              {!servicesOpen && !aboutOpen && (
                <Grid container direction="column" sx={{ height: "85vh" }}>
                  <Grid item>
                    <IconButton onClick={handleCloseNavMenu}>
                      <NavigateBefore />
                    </IconButton>
                    <MenuItem
                      onClick={() => setServicesOpen(true)}
                      sx={{ fontFamily: "Inter" }}
                    >
                      Services
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAboutOpen(true)}
                      sx={{ fontFamily: "Inter" }}
                    >
                      Explore
                    </MenuItem>
                    {newLinks.map((link) => (
                      <MenuItem
                        key={link.text}
                        sx={{ fontFamily: "Inter" }}
                        onClick={() => navigate(link.href)}
                      >
                        {link.text}
                      </MenuItem>
                    ))}
                  </Grid>
                  <Divider sx={{ mt: 2 }} />
                  <Grid
                    item
                    xs={1}
                    alignItems="center"
                    sx={{ textAlign: "center" }}
                    pt={3}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        mb: 2,
                        color: "black",
                      }}
                    >
                      <a style={{ color: "black" }} href="tel:+8444822583">
                        844-482-2583
                      </a>{" "}
                      |{" "}
                      <a
                        style={{ color: "black" }}
                        href="mailto:sales@transblue.org"
                      >
                        sales@transblue.org
                      </a>
                    </Typography>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <img
                        src={linkedin}
                        alt=""
                        style={{
                          maxWidth: "25px",
                          marginRight: "30px",
                        }}
                        onClick={
                          () =>
                            navigate(
                              "https://www.linkedin.com/company/transblue-facilities-management"
                            )
                          // window.open(
                          //   "https://www.linkedin.com/company/transblue-facilities-management",
                          //   "_blank"
                          // )
                        }
                      />
                      <img
                        src={facebook}
                        alt=""
                        style={{
                          maxWidth: "25px",
                          marginRight: "30px",
                        }}
                        onClick={
                          () =>
                            navigate("https://www.facebook.com/TransblueGC/")
                          // window.open(
                          //   "https://www.facebook.com/TransblueGC/",
                          //   "_blank"
                          // )
                        }
                      />
                      <img
                        src={youtube}
                        alt=""
                        style={{
                          maxWidth: "25px",
                          marginRight: "30px",
                        }}
                        onClick={() =>
                          // window.open(
                          //   "https://www.youtube.com/channel/UC72_rqlaYYyqydfycR588hw",
                          //   "_blank"
                          // )
                          navigate(
                            "https://www.youtube.com/channel/UC72_rqlaYYyqydfycR588hw"
                          )
                        }
                      />
                      <img
                        src={instagram}
                        alt=""
                        style={{ maxWidth: "25px" }}
                        onClick={() =>
                          // window.open(
                          //   "https://www.instagram.com/transblue_/?hl=en",
                          //   "_blank"
                          // )
                          navigate(
                            "https://www.instagram.com/transblue_/?hl=en"
                          )
                        }
                      />
                    </Stack>
                  </Grid>
                </Grid>
              )}
            </Menu>
          </>
        </Toolbar>
      </AppBar>
    </>
  );
};

function Navbar({ page }) {
  // const screenSizeContext = useContext(ScreenSizeContext);
  // const { screenSize } = screenSizeContext;
  const screenSize = "xl";

  return screenSize === "small" ? <MobileNav /> : <LargeNav page={page} />;
}

export default Navbar;
