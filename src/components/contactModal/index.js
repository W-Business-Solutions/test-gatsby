import React, {Fragment, Component, useState, lazy, useEffect} from 'react';
import './style.css';

import{ init } from 'emailjs-com';
import * as emailjs from 'emailjs-com'
init("user_iLZ3jXyTzXi5zQFlgf5DG");

const Captcha = lazy(() => import('../captcha/captcha'));

function ContactModal(props) {
    const [disabled, setDisabled] = useState(true);
    const [formCompleted, setFormCompleted] = useState(false);
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        zipcode: '',
        leadSource: ''
    })

    useEffect(() => {
        
        let bool = 
            formValues.firstName.length > 0 && 
            formValues.lastName.length > 0 && 
            formValues.phone.length > 0 && 
            formValues.message.length > 0 && 
            !disabled;
        
        if(bool !== formCompleted) {
            setFormCompleted(bool)
        }
    }, [formValues])

    function handleSubmit(e) {
        e.preventDefault();

        let to_email;
        if(props.email) {
            to_email = props.email
        }
        else to_email = 'incomingleads@transblue.org';

        let templateParams = {
            website: 'GC WEBSITE',
            from_name: `${formValues.firstName} ${formValues.lastName}`,
            to_email: to_email, //CHANGE THIS TO INCOMINGLEADS@TRANSBLUE.ORG
            reply_to: formValues.email,
            phone: formValues.phone,
            message: formValues.message,
            zipcode: formValues.zipcode,
            leadSource: formValues.leadSource
        }

        emailjs.send(
        'service_gekurtf',
        'template_dqy1grk', //CONTACT TEMPLATE
            templateParams,
            process.env.REACT_APP_REACTJS_USER
        )

        // reset form values
        setFormValues({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
            zipcode: '',
            leadSource: ''
        })
    }

    function handleChange(e) {
        setFormValues({
            ...formValues,
            [e.target.id]: e.target.value
        })
    }

    return(
        <Fragment>
                <button 
                    className='cta' 
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalCenter"
                >
                    {props.text !== undefined ? props.text : 'SEND A MESSAGE'}
                </button>
                
                <div className='contact-modal-wrapper'>
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <form className='contact-form container-fluid' >
                                <div className='row'>
                                    <h3>{props.location !== undefined ? `${props.location.name.toUpperCase()}` : 'TRANSBLUE GENERAL CONTRACTING'}</h3>
                                    <p className='section-p'>Transblue is a leading provider of construction management services specializing in Multifamily, Residential and Commercial Properties. Expect unmatched efficiency and expertise for all property installations</p>
                                    <p className='section-p'>Transblue will help your property meet the requirements for an eco-friendly tomorrow.</p>
                                </div>
                                <div className='row'>
                                    <div className='col-sm-6 my-1 input-left'>
                                        <input placeholder='First Name' id='firstName' value={formValues.firstName} onChange={handleChange}></input>
                                    </div>
                                    <div className='col-sm-6 my-1 input-right'>
                                        <input placeholder='Last Name' id='lastName' value={formValues.lastName} onChange={handleChange}></input>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-sm-6 my-2 input-left'>
                                        <input placeholder='Email' id='email' value={formValues.email} onChange={handleChange}></input>
                                    </div>
                                    <div className='col-sm-6 my-2 input-right'>
                                        <input placeholder='Phone Number' id='phone' value={formValues.phone} onChange={handleChange}></input>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-sm-6 my-1 input-left'>
                                        <input placeholder='Zipcode' id='zipcode' value={formValues.zipcode} onChange={handleChange}></input>
                                    </div>
                                    <div className='col-sm-6 my-1 input-right'>
                                        <input placeholder='How did you hear about us?' id='leadSource' value={formValues.leadSource} onChange={handleChange}></input>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-sm-12 px-0 mt-2'>
                                        <textarea placeholder='What can we help you with?' id='message' value={formValues.message} onChange={handleChange}></textarea>
                                    </div>
                                </div>
                                <div className='row'>
                                    <button 
                                        className={!formCompleted ? 'cta disabled' : 'cta'}
                                        disabled={disabled}
                                        onClick={handleSubmit} 
                                        data-bs-dismiss='modal' 
                                    >
                                        SUBMIT
                                    </button>
                                </div>
                                <div className='row'>
                                    <Captcha onChange={() => setDisabled(false)} />
                                </div>
                            </form>
                        </div>      
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ContactModal;