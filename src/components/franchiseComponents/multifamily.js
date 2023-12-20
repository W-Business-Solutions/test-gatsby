import React from 'react';
import Section from '../../components/section';
import regional from './regional';
//import './multifamily.css';

function Multifamily(props) {
    return (
        <Section
            location={props.location}
            name={props.location.name}
            email={props.location.email}
            page='MULTIFAMILY'
            img={regional[props.location.region][1]}
            title='BEAUTIFY YOUR MULTIFAMILY RESIDENCE'
            p1={`At ${props.location.name}, we understand that as a property manager, you are extremely busy. Our professionals make your life easier by turning proposals around quickly.`}
            p2='Our teams attend board meetings and describe projects and services to ensure the delivery to your communities is exactly what it should be, World Class. Transblue is an expert in the Capital Projects that your community budgets for each year.'
            p3=''
            contact={{
                phone: props.location.phone,
                email: props.location.email
            }}
            imageSide='left'
            services={[
                'Pool Construction',
                'Pool Resurfacing',
                'Asphalt Paving',
                'Large Landscape Installs',
                'Roofing',
                'Siding',
                'ESG Service Offerings'
            ]}
            services2={[
                'Painting',
                'Remodels and refreshes',
                ' Concrete work',
                ' Drainage Systems',
                'Decking, fencing and railing systems',
                'EV Charging Systems',
                'Solar Power',
                props.displaySnow && 'Snow and Ice Management'
            ]}
        />
    );
}

export default Multifamily;
