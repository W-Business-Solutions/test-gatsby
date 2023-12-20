import React from 'react';

function ServiceCard(props) {
    return (
        <div className='service-card'>
            <img src={props.image} alt='Service Card' />
            <h5>{props.service}</h5>
        </div>
    );
}

export default ServiceCard;
