import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

function Captcha(props) {
    return (
        <ReCAPTCHA
            sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
            onChange={props.onChange}
        />
    );
}

export default Captcha;
