import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CardContent from "@mui/material/CardContent";
import ArrowForward from "@mui/icons-material/ArrowForward";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { navigate } from "gatsby";

const StyledButton = styled(Button)(({ theme }) => ({
  border: "1px solid black",
  borderRadius: "30px",
  fontFamily: "Inter",
  color: "black",
  fontWeight: 500,
  fontSize: "16px",
  textTransform: "capitalize",
  padding: "6px 8px",
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  // transition: theme.transitions.create("transform", {
  //   duration: theme.transitions.duration.shortest,
  // }),
}));

const ServiceComp = ({ title, img, description, href }) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        border: "1px solid black",
        boxShadow: 0,
        borderRadius: { xs: 6, md: 3 },
        "&:hover": {
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        },
        bgcolor: "transparent",
        px: { xs: 0, md: 2 },
        py: { xs: 0, md: 3 },
      }}
    >
      <CardHeader
        onClick={() => setExpanded(!expanded)}
        action={
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon fontSize="large" />
          </ExpandMore>
        }
        avatar={<img src={img} alt="" />}
        title={title}
        titleTypographyProps={{
          sx: {
            fontWeight: 700,
            fontFamily: "Inter",
            fontSize: { xs: "20px", md: "25px" },
          },
        }}
      />
      <Collapse in={expanded}>
        <CardContent sx={{ py: 0, pb: 0 }}>
          <Typography
            sx={{
              fontFamily: "Inter",
              color: "rgba(67, 67, 68, 1)",
              mb: 3,
            }}
          >
            {description}
          </Typography>

          <StyledButton onClick={() => navigate(href)}>
            Learn More
            <ArrowForward
              fontSize="small"
              sx={{ verticalAlign: "middle", ml: 1 }}
            />
          </StyledButton>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ServiceComp;
