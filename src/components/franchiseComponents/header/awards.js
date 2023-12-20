import React from 'react';
import './awards.css';
import awardsDb from './awardsDb';

function Awards(props) {
    let awards = awardsDb[props.location];
    return (
        <div
            className='awards-wrapper'
            style={{ width: '90%', margin: '0 auto' }}
        >
            <h2>AWARDS &amp; CERTIFICATES</h2>
            <div className='row'>
                <a href='https://www.ussbchamber.org/simmsmccann-llc/'>
                    <img />
                </a>
                {awards.map((award) => {
                    if (award.indexOf('static') === -1) {
                        return (
                            <div className='col my-auto text-center pt-4'>
                                <a
                                    href='https://www.bbb.org/us/ma/foxboro/profile/general-contractor/transblue-norfolk-0021-549040#sealclick'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <img
                                        src={award}
                                        alt=''
                                        style={{ width: '150px' }}
                                    />
                                </a>
                            </div>
                        );
                    } else
                        return (
                            <div className='col my-auto text-center pt-4'>
                                <img
                                    src={award}
                                    alt=''
                                    style={{ width: '150px' }}
                                />
                            </div>
                        );
                })}
            </div>
        </div>
    );
}

export default Awards;
