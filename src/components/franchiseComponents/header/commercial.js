import React from 'react';
import Section from '../../components/section';
import regional from './regional';
import './commercial.css';

function Commercial(props) {
    return (
        <Section
            location={props.location}
            page='COMMERCIAL'
            name={props.location.name}
            email={props.location.email}
            img={regional[props.location.region][0]}
            title='UPGRADE YOUR BUSINESS'
            p1={`At ${props.location.name}, our teams are focused on making your life simple and reducing the burden that comes with the capital projects required to keep your business looking its best.`}
            p2='We understand that cost and quality are keys to the success of your initiative. Our promise is to deliver a truly World Class Experience.'
            imageSide='right'
            contact={{
                phone: props.location.phone,
                email: props.location.email
            }}
            services={[
                'Pool Construction',
                'Pool Resurfacing',
                'Asphalt Paving',
                'Large Landscape Installs',
                'Roofing',
                'Siding',
                'ESG Service Offerings',
                props.displaySnow && 'Snow and Ice Management'
            ]}
            services2={[
                'Painting',
                'Remodels and refreshes',
                ' Concrete work',
                ' Drainage Systems',
                'Decking, fencing and railing systems',
                'EV Charging Systems',
                'Solar Power'
            ]}
        />
    );
}

export default Commercial;
