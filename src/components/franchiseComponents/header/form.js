import React, { Component, lazy } from 'react';
import './contact2.css';

import { init } from 'emailjs-com';
import * as emailjs from 'emailjs-com';
init('user_iLZ3jXyTzXi5zQFlgf5DG');

const Captcha = lazy(() => import('../../components/captcha/captcha'));

class Form extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        formCompleted: false,
        disabled: true,
        zipcode: '',
        leadSource: ''
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

        const formCompleted =
            this.state.firstName.length > 0 &&
            this.state.lastName.length > 0 &&
            this.state.email.length > 0 &&
            this.state.message.length > 0 &&
            this.state.zipcode.length > 0 &&
            this.state.leadSource.length > 0;

        if (formCompleted) this.setState({ formCompleted: true });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit();

        //EMAILJS
        let templateParams = {
            website: 'GC WEBSITE',
            from_name: `${this.state.firstName} ${this.state.lastName}`,
            to_email: this.props.email, //CHANGE THIS TO this.props.email to send to LOCATIONLEADS@TRANSBLUE.ORG
            reply_to: this.state.email, //CALL BLUE CAN REPLY TO USER
            phone: this.state.phone,
            message: this.state.message,
            leadSource: this.state.leadSource,
            zipcode: `${this.state.zipcode} - sent from ${this.props.location}s website`
        };

        emailjs.send(
            'service_gekurtf',
            'template_dqy1grk', //CONTACT TEMPLATE
            templateParams,
            process.env.REACT_APP_REACTJS_USER
        );

        // reset form
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
            formCompleted: false,
            disabled: true,
            zipcode: '',
            leadSource: ''
        });
    };

    enableForm = () => {
        this.setState({ disabled: false });
    };

    render() {
        return (
            <form className='form-wrapper' onSubmit={this.onSubmit}>
                <h2 className='lg-screen-title'>GET IN TOUCH.</h2>
                <p className='section-p lg-screen-title w-100'>
                    We are happy to provide a complimentary quote or answer any
                    questions you may have.
                </p>
                <span>
                    <input
                        onChange={this.onChange}
                        className='left-input firstName'
                        name={'firstName'}
                        placeholder='First Name'
                    />
                    <input
                        onChange={this.onChange}
                        className='right-input'
                        name='lastName'
                        placeholder='Last Name'
                    />
                </span>
                <span>
                    <input
                        onChange={this.onChange}
                        className='left-input'
                        name='email'
                        placeholder='Email'
                    ></input>
                    <input
                        onChange={this.onChange}
                        className='right-input'
                        name='phone'
                        placeholder='Phone Number'
                    ></input>
                </span>
                <span>
                    <input
                        onChange={this.onChange}
                        className='left-input'
                        name='zipcode'
                        placeholder='Zipcode'
                    ></input>
                    <input
                        onChange={this.onChange}
                        className='right-input'
                        name='leadSource'
                        placeholder='How did you hear about us?'
                    ></input>
                </span>
                <span>
                    <textarea
                        onChange={this.onChange}
                        name='message'
                        placeholder='Tell us about your project'
                    ></textarea>
                </span>
                {!this.state.disabled && (
                    <button type='submit'>SEND MESSAGE</button>
                )}
                {this.state.disabled && this.state.formCompleted && (
                    <Captcha onChange={this.enableForm} />
                )}
            </form>
        );
    }
}

export default Form;
