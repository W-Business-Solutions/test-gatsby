import React from 'react';
import Section from '../../components/section';
import govtFence from '../../newSrc/images/government/govtfence.jpeg';

function Govt(props) {
    return (
        <Section
            location={props.location}
            email={props.location.email}
            page='GOVERNMENT'
            img={govtFence}
            name={props.location.name}
            title='GOVERNMENT SERVICES'
            p1={`${props.location.name} provides a full range of construction services to Government Facilities, whether it be Federal Government, Military, Municipality, School Districts, Parks and Recreation, etc. Transblue is positioned to deliver on the projects you’re planning to improve your properties. With a track record of success, we understand the scope from paperwork to prevailing wage and construction to completion.`}
            p2=''
            p3=''
            contact={props.location}
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
                'Concrete work',
                'Drainage Systems',
                'Decking, fencing and railing systems',
                'EV Charging Systems',
                'Solar Power',
                props.displaySnow && 'Snow and Ice Management'
            ]}
        ></Section>
    );
}

export default Govt;
