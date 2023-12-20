import React, { Fragment, useState } from "react";
import downarrow from "../../images/featured/downarrow.png";
import ContactModal from "../../components/contactModal/index.js";
import "./style.css";
import { Grid } from "@mui/material";

function Section(props) {
  const [displayServices, setDisplayServices] = useState(false);
  const { imageSide } = props;
  return (
    <div className="section-wrapper container-fluid">
      <Grid container>
        <Grid item xs={12} lg={6} order={{ lg: imageSide === "left" ? 1 : 2 }}>
          <img src={props.img} alt="" />
        </Grid>
        <Grid item xs={12} lg={6} order={{ lg: imageSide === "left" ? 2 : 1 }}>
          <div className={imageSide === "left" ? "left-text" : "right-text"}>
            <h4 className="section-header">{props.title}</h4>
            <p className="section-p">{props.p1}</p>
            <p className="section-p">{props.p2}</p>
            <ContactModal location={props.location} email={props.email} />
            <div className="services">
              <button onClick={() => setDisplayServices(!displayServices)}>
                <h6>
                  {props.name.toUpperCase()} {props.page} SERVICES
                </h6>
                <img
                  className="expand"
                  src={downarrow}
                  alt="Display Services"
                />
              </button>
              {displayServices && (
                <div className="row service-list">
                  <hr />
                  <div className="col-lg-6">
                    {props.services.map((service) => {
                      return (
                        <Fragment>
                          {service}
                          <br />
                        </Fragment>
                      );
                    })}
                  </div>
                  <div className="col-lg-6">
                    {props.services2.map((service) => {
                      return (
                        <Fragment>
                          {service}
                          <br />
                        </Fragment>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* <p className='section-p' dangerouslySetInnerHTML={{__html: props.p3}}></p> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default Section;
