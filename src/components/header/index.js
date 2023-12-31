import React, { Fragment } from "react";
import "./style.css";
import { Box } from "@mui/material";
// import Fade from 'react-reveal/Fade';

function Header(props) {
  let { franchise, title, subtitle } = props;
  return (
    <Fragment>
      <div className="header-wrapper" name={props.name} region={props.region}>
        {props.name !== "locations" && <div className="overlay"></div>}
        <div
          className={franchise ? "header-text franchise-header" : "header-text"}
        >
          {!franchise && title.split(" ").length > 1 ? (
            <Box>
              {title.split(" ")[0]}
              {title.split(" ")[1]}
            </Box>
          ) : (
            title
          )}

          {/* <Fade top cascade>{title}</Fade> */}
          <div className="header-subtext">{subtitle}</div>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
