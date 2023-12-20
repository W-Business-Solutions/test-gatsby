import React from 'react';
import './snow.css';

function Snow(props) {
    return (
        <div className='franchise-snow'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 col-lg-4 my-auto right-text'>
                        <h2>SNOW &amp; ICE MANAGEMENT</h2>
                        <p>
                            As a leader in snow and ice management, we
                            understand what your property needs this winter.
                        </p>
                        <a className='cta' href='/snow'>
                            SNOW WEBSITE
                        </a>
                    </div>
                    <div className='col-12 col-lg-8'>
                        <div className='card-deck row'>
                            <div className='col-12 col-lg-6 card'>
                                <h3 className='section-header'>OUR SERVICES</h3>
                                <hr />
                                <div className='section-p'>
                                    Snow Plowing
                                    <br />
                                    Deicing – liquid and granular
                                    <br />
                                    Snow Hauling
                                    <br />
                                    Sidewalk shoveling
                                    <br />
                                    Sidewalk deicing
                                    <br />
                                    Snow Melting
                                    <br />
                                    Truck Brush Services
                                    <br />
                                    Icicle Melting
                                    <br />
                                    Rooftop clearing
                                </div>
                            </div>
                            <div className='col-12 col-lg-6 card'>
                                <h3 className='section-header'>OUR CLIENTS</h3>
                                <hr />
                                <div className='section-p'>
                                    Property management companies
                                    <br />
                                    Retail stores
                                    <br />
                                    Restaurants
                                    <br />
                                    Gas Stations
                                    <br />
                                    Malls
                                    <br />
                                    Big Box locations
                                    <br />
                                    Industrial parks
                                    <br />
                                    Airports
                                    <br />
                                    Medical Facilities
                                    <br />
                                    Federal, state, and local government
                                    agencies
                                    <br />
                                    Apartments, Condos, HOA’s
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Snow;
