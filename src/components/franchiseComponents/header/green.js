import React from 'react';
import Section from '../../components/section';
import regional from './regional';

function Green(props) {
    return (
        <Section
            page='GREEN'
            name={props.location.name}
            email={props.location.email}
            title='GREEN SOLUTIONS'
            imageSide='right'
            img={regional[props.location.region][2]}
            p1={`Electric vehicle charger projects are front and center in government facility construction. ${props.location.name} offers world class installation of Electric Vehicle Chargers for all of your government facilities. From super-fast DC chargers to Level 2 chargers, Transblue is the right contractor for you. Transblue compliments EV charging with a full range of solar services. Providing renewable energy construction is a core of our business.`}
            p2=''
            contact={props.location}
            services={['EV Chargers', 'Green Roofs', 'Solar Power']}
            services2={['Xeriscapes', 'Permeable Pavement', 'Bioswales']}
        />
    );
}

export default Green;
