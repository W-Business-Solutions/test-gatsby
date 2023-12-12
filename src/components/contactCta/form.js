import React, { useState } from "react";
import Captcha from "../captcha/captcha";
import "./style.css";

// const api_key = process.env.GATSBY_APP_MAILGUN_API;
// const domain = 'sandboxcf6c7b2e02cc4d50947369ccf5924304.mailgun.org';
// var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

import { init } from "emailjs-com";
import * as emailjs from "emailjs-com";
init("user_iLZ3jXyTzXi5zQFlgf5DG");

// const Captcha = lazy(() => import('../captcha/captcha'))

function Form(props) {
  const { setDisplayForm } = props;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitEnabled, setSubmitEnabled] = useState(false);

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    zipcode: "",
    leadSource: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    setIsSubmitted(true);

    //send message to incomingleads@transblue.org or franchises email address
    let to_email;
    props.email
      ? (to_email = props.email)
      : (to_email = "incomingleads@transblue.org");

    let website;
    props.location
      ? (website = `GC Website - ${props.location}`)
      : (website = "GC Website");

    let templateParams = {
      website: website,
      from_name: `${formValues.firstName} ${formValues.lastName}`,
      to_email: to_email, //CHANGE THIS TO props.email or incoming leads
      reply_to: formValues.email,
      phone: formValues.phone,
      message: formValues.message,
      zipcode: formValues.zipcode,
      leadSource: formValues.leadSource,
    };

    emailjs.send(
      "service_gekurtf",
      "template_dqy1grk", //CONTACT TEMPLATE
      templateParams,
      process.env.GATSBY_APP_REACTJS_USER
    );

    // reset state of component
    setDisplayForm(false);
    setSubmitEnabled(false);
    setIsSubmitted(false);
    setFormValues({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      zipcode: "",
      leadSource: "",
    });
  }

  function handleChange(e) {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  }

  return (
    <div className="container">
      {/* <div className='form-header'> */}
      <button
        onClick={() => setDisplayForm(false)}
        type="button"
        className="btn-close"
        aria-label="Close"
      >
        x
      </button>
      <h6>SEND US A MESSAGE</h6>
      {/* </div> */}
      <form onSubmit={handleSubmit}>
        <div className="row mx-0">
          <div className="col-6 pl-0 pr-2">
            <input
              id="firstName"
              onChange={handleChange}
              placeholder="First Name"
              value={formValues.firstName}
              required
            ></input>
          </div>
          <div className="col-6 px-0">
            <input
              id="lastName"
              onChange={handleChange}
              placeholder="Last Name"
              value={formValues.lastName}
              required
            ></input>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12">
            <input
              id="zipcode"
              onChange={handleChange}
              placeholder="Zipcode"
              value={formValues.zipcode}
              required
            ></input>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12">
            <input
              id="phone"
              onChange={handleChange}
              placeholder="Phone"
              value={formValues.phone}
              required
            ></input>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12">
            <input
              id="email"
              onChange={handleChange}
              placeholder="Email"
              value={formValues.email}
              required
            ></input>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12">
            <input
              id="leadSource"
              onChange={handleChange}
              placeholder="How did you hear about us?"
              value={formValues.leadSource}
              required
            ></input>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12">
            <textarea
              id="message"
              onChange={handleChange}
              placeholder="Tell us about your project"
              value={formValues.message}
              required
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12">
            <button
              className={!submitEnabled ? "disabled" : ""}
              disabled={!submitEnabled}
              type="submit"
              id="send"
            >
              SUBMIT
            </button>
            {!isSubmitted && (
              <Captcha onChange={() => setSubmitEnabled(true)} />
            )}
          </div>
        </div>
        {isSubmitted && (
          <div className="row submitted">
            <div className="col-12">Thank you! We will contact you shortly</div>
          </div>
        )}
      </form>
    </div>
  );
}

export default Form;
