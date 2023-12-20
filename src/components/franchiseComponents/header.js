import React, { Fragment } from "react";
import "./style.css";

function Header(props) {
  let { franchise, title, subtitle } = props;
  console.log(title);
  return (
    <Fragment>
      <div className="header-wrapper" name={props.name} region={props.region}>
        {props.name !== "locations" && <div className="overlay"></div>}
        <div
          className={franchise ? "header-text franchise-header" : "header-text"}
        >
          {title}
          <div className="header-subtext">{subtitle}</div>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
