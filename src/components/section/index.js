import React, { Fragment, useState } from "react";
import downarrow from "../../images/featured/downarrow.png";
import ContactModal from "../contactModal";
import "./style.css";

function Section(props) {
  const [displayServices, setDisplayServices] = useState(false);
  return (
    <div className="section-wrapper container-fluid">
      <div className="row">
        <div
          className={
            props.imageSide === "left"
              ? "col-md-6 col-12"
              : "col-md-6 col-12 order-lg-12"
          }
        >
          <img src={props.img} alt="" />
        </div>
        <div
          className={
            props.imageSide === "left"
              ? "col-12 col-md-6 left-text"
              : "col-12 col-md-6 right-text"
          }
        >
          <h4 className="section-header">{props.title}</h4>
          <p className="section-p">{props.p1}</p>
          <p className="section-p">{props.p2}</p>
          {/* <ContactModal
						location={props.location}
						email={props.email}
					/> */}
          <div className="services">
            <button onClick={() => setDisplayServices(!displayServices)}>
              <h6>
                {props.name.toUpperCase()} {props.page} SERVICES
              </h6>
              <img className="expand" src={downarrow} alt="Display Services" />
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
          {/* <p className='section-p' dangerouslySetInnerHTML={{__html: props.p3}}></p> */}
        </div>
      </div>
    </div>
  );
}

export default Section;
