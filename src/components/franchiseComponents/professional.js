import React from "react";
import ContactModal from "../../components/contactModal";
import "./professional.css";
import { Box } from "@mui/material";

function Professional(props) {
  return (
    <div className="professional-wrapper">
      <div className="container-fluid">
        <h3>OUR PROMISE TO YOU</h3>
        <p className="section-p title">
          We are 100% dedicated to customer satisfaction
        </p>
        <div className="row">
          <div className="col-12 col-lg-4 text-center">
            <i className="fas fa-seedling fa-2x"></i>
            <h5>TURNKEY SOLUTIONS</h5>
            <p className="section-p body">
              Our flexible turnkey solutions are affordable and simple. At
              Transblue, we provide quality work while ensuring your day to day
              life and operations are not disrupted.
            </p>
          </div>
          <div className="col-12 col-lg-4 text-center">
            <i className="fas fa-seedling fa-2x"></i>
            <h5>
              OUTSTANDING SERVICE
              {/* <svg viewBox="0 0 100 100" width="25">
                                <path d="M25,2 L2,2 L2,25" fill="none" stroke="black" stroke-width="3" />
                                <path d="M75,98 L98,98 L98,75" fill="none" stroke="black" stroke-width="3" />
                            </svg> */}
            </h5>
            <p className="section-p body">
              We strive to provide a World Class service we are proud of on
              every project. Your satisfaction is always our top priority.
            </p>
          </div>

          <div className="col-12 col-lg-4 text-center">
            {/* <svg viewBox="0 0 100 100"  width="50">
                            GREAT COMMUNICATION
                            <path d="M25,2 L2,2 L2,25" fill="none" stroke="black" stroke-width="3" />
                            <path d="M75,98 L98,98 L98,75" fill="none" stroke="black" stroke-width="3" />
                        </svg> */}
            <i className="fas fa-seedling fa-2x"></i>
            <h5>GREAT COMMUNICATION</h5>
            <p className="section-p body">
              We pride ourselves on excellent communication from start to finish
              of our projects. You can count on only one point of contact, no
              matter how many trades are involved
            </p>
          </div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              pt: 5,
            }}
          >
            <ContactModal
              text="SEND US A MESSAGE"
              franchise={true}
              location={props.location}
            />
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Professional;
