import React from "react";
import "./about.css";

function About(props) {
  //console.log(props)

  let tel = props.phone.replace(/[^A-Z0-9]/gi, "");
  //console.log(tel)
  return (
    <div className="container-fluid about-container">
      <div className="row">
        <div className="col-lg-12">
          <p className="text-secondary">{props.name.toUpperCase()}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <h1>
            A CONSTRUCTION COMPANY
            <br /> YOU CAN TRUST
          </h1>
          <div className="row contact">
            <div className="franchise-email">
              <a href="mailto:incomingleads@transblue.org">
                <i className="fas fa-envelope"></i> {props.email}
              </a>
            </div>
            <div className="franchise-phone">
              <a href={`tel:+${tel}`}>
                <i className="fas fa-phone"></i> {props.phone}
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <p className="section-p">
            {props.name} is an award-winning exterior design company serving
            local families and businesses in the {props.name.slice(10)}{" "}
            community. Locally owned and operated, and with the experience and
            dedication to do the job right, our team at {props.name} offers
            every service you may need to enhance or beautify your exterior
            space.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
