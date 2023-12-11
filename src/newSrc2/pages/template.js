import React from 'react';
import service1 from '../assets/janitorial/service1.png';
import service2 from '../assets/janitorial/service2.png';
import service3 from '../assets/janitorial/service3.png';
import header from '../assets/janitorial/header.png';
import headerMobile from '../assets/janitorial/header_mobile.png';
import ServicePage from '../components/servicePage/servicePage';

function Janitorial() {
    const services = [
        {
            img: service1,
            text: ''
        },
        {
            img: service2,
            text: ''
        },
        {
            img: service3,
            text: ''
        }
    ];

    return (
        <>
            <ServicePage
                headerImg={header}
                mobileHeader={headerMobile}
                headerText=''
                sectionTitle1=''
                sectionTitle2=''
                sectionBody=''
                videoLink=''
                services={services}
            />
        </>
    );
}

export default Janitorial;
