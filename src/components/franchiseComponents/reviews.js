import React, { Component } from 'react';
import './reviews.css';
import db from './reviewDb';
import back from '../../images/back50.png';
import forward from '../../images/forward50.png';

class Reviews extends Component {
    state = {
        activeReview: 0,
        reviews: []
    };

    componentDidMount() {
        this.setState({ reviews: db[this.props.location.name] });
    }

    changeReview(operation) {
        if (operation === 'decrement') {
            if (this.state.activeReview > 0) {
                this.setState({ activeReview: this.state.activeReview - 1 });
            } else
                this.setState({ activeReview: this.state.reviews.length - 1 });
        }
        if (operation === 'increment') {
            if (this.state.activeReview < this.state.reviews.length - 1) {
                this.setState({ activeReview: this.state.activeReview + 1 });
            } else this.setState({ activeReview: 0 });
        }
    }

    render() {
        return (
            this.state.reviews.length > 0 && (
                <div className='new-reviews bg-light container-fluid w-100'>
                    <div className='row reviews-title'>
                        <div className='col-lg-2 col-2'></div>
                        <div className='col-lg-4 col-xl-3 pr-0 col-8 my-auto'>
                            <div className='row'>
                                <span>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star mr-2'></i>
                                    Testimonials
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-4 d-none d-lg-block pl-0 col-xl-5'>
                            <div className='h-50'></div>
                        </div>
                        <div className='col-lg-2 col-2 col-md-2'></div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-1 d-none d-sm-block'></div>
                        <div className='col-lg-1 col-2 my-auto text-center'>
                            <div className='decrement'>
                                <button
                                    onClick={() =>
                                        this.changeReview('decrement')
                                    }
                                >
                                    <img src={back} alt='previous review' />
                                </button>
                            </div>
                        </div>
                        <div className='col-lg-8 col-8 px-0 my-auto'>
                            <blockquote className='blockquote'>
                                <p className='mb-2 text-secondary'>
                                    {
                                        this.state.reviews[
                                            this.state.activeReview
                                        ].review
                                    }
                                </p>
                                <footer className='blockquote-footer'>
                                    {
                                        this.state.reviews[
                                            this.state.activeReview
                                        ].name
                                    }
                                    ,{' '}
                                    <cite title='Source Title'>
                                        {
                                            this.state.reviews[
                                                this.state.activeReview
                                            ].location
                                        }
                                    </cite>
                                </footer>
                            </blockquote>
                        </div>
                        <div className='col-lg-1 col-2 my-auto text-center'>
                            <div className='increment'>
                                <button
                                    onClick={() =>
                                        this.changeReview('increment')
                                    }
                                >
                                    <img src={forward} alt='next review' />{' '}
                                </button>
                            </div>
                        </div>
                        <div className='col-lg-1'></div>
                    </div>
                </div>
            )
        );
    }
}

export default Reviews;
