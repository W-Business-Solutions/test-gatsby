import React, { Component } from 'react';
import './style.css';

class CityZip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: this.props.locations,
            activeCity: '',
            cities: [],
            zipcodes: []
        };
    }

    componentDidMount() {
        this.setState({ cities: this.props.cities });
        this.setState({ zipcodes: this.props.zipcodes });
    }

    render() {
        //console.log(this.state.cities)
        return (
            <div className='row'>
                <div className='col-lg-4 col-sm-4 col-6'>
                    <h6>CITIES:</h6>
                    <div className='city-list'>
                        {this.state.cities.length > 0 &&
                            this.state.cities.map((city) => {
                                return <div>{city}</div>;
                            })}
                    </div>
                </div>
                <div className='d-none d-sm-block col-sm-2 col-lg-1'></div>
                <div className='col-lg-4 col-sm-4 col-6'>
                    <h6>ZIPCODES:</h6>
                    <div className='zipcode-list'>
                        {this.state.zipcodes.map((zipcode) => {
                            var zip;
                            if (zipcode.toString().length === 4) {
                                zip = '0' + zipcode;
                            } else zip = zipcode;
                            return <div>{zip}</div>;
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default CityZip;
