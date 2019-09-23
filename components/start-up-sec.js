import React, { Component } from 'react';
import '../styles/styles.scss';
import Link from 'next/link';
import { withRouter } from 'next/router';

import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
 
export default withRouter(class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    componentDidMount = () => {
       
    }
 
    
    render() {

        return (

            <div>
                <section className="startup-sec">
                    <div className="sec-ttl sec-ttl-01 has-text-centered py-5">
                        <h1 className="ttl-head">Passion To Drive Small Startups Into Unicorns Comes With PAULTECH!</h1>
                        <p className="ttl-p mx-410">We develop apps which get trending & multiply your ROI, turn your 
customers delighted & make you Brand Visible.</p>
                    </div>
                    <div className="container">
                        <div className="dia has-text-centered">
                         <img src="../static/images/dia-01.png" alt="image"/>
                        </div>
                    </div>
                    <div className="por-count-wrap py-5">
                        <div className="container">
                            <div className="mx-1000">
                                <div className="columns is-multiline" id="counter">
                                    <div className="column is-4-tablet">
                                        <div className="por-count has-text-centered">
                                            <div className="pro-count-in">
                                           
                                                <h4>
                                                <VisibilitySensor>
                                                {({isVisible}) =>
                                                        <span className="counter-value pro-cunt" data-count="60">     {isVisible ? <CountUp end={60} > </CountUp> : '0'}  </span>
                                                        }
                                             
                                                     </VisibilitySensor>
                                                     <span className="pro-cunt-plus">+</span></h4>
                                            </div>
                                            <h5>Apps Featured on AppStore</h5>
                                        </div>
                                    </div>
                                    <div className="column is-4-tablet">
                                        <div className="por-count has-text-centered">
                                            <div className="pro-count-in">
                                            <h4>

                                               
                                                <VisibilitySensor>
                                                {({isVisible}) =>
                                                        <span className="counter-value pro-cunt" data-count="60">     {isVisible ? <CountUp end={15} > </CountUp> : '0'}  </span>
                                                        }
                                             
                                                     </VisibilitySensor>
                                                
                                                <span className="pro-cunt-plus">+</span></h4> 
                                            </div>
                                            <h5>Apps With 1M+ Downloads</h5>
                                        </div>
                                    </div>
                                    <div className="column is-4-tablet">
                                        <div className="por-count has-text-centered">
                                            <div className="pro-count-in">
                                            <h4>
                                            <VisibilitySensor>
                                                {({isVisible}) =>
                                                        <span className="counter-value pro-cunt" data-count="60">     {isVisible ? <CountUp end={4,5} > </CountUp> : '0'}  </span>
                                                        }
                                            </VisibilitySensor>
                                                <span className="pro-cunt-plus">+</span></h4> 
                                            </div>
                                            <h5>Raised From Investors</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="startup-grid py-5">
                        <div className="container">
                            <div className="mx-1000">
                                <div className="columns is-multiline">
                                    <div className="column is-6-tablet">
                                        <div className="startup-grid-in">
                                            <div className="startup-grid-img">
                                            <img src="../static/images/icons/st-01.svg" alt="image"/>
                                            </div>
                                            <div className="startup-grid-cnt">
                                                <h4>Product Ideation & Consultation</h4>
                                                <p>Want to convert conceptualization into actualization, Get a free quote of knowledge.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column is-6-tablet">
                                        <div className="startup-grid-in">
                                            <div className="startup-grid-img">
                                            <img src="../static/images/icons/st-02.svg" alt="image"/>
                                            </div>
                                            <div className="startup-grid-cnt">
                                                <h4>Research Led Analysis</h4>
                                                <p>We perform competitor research & user-analysis, so as what we design & develop stays on top of the available.</p>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="columns is-multiline">
                                    <div className="column is-6-tablet">
                                        <div className="startup-grid-in">
                                            <div className="startup-grid-img">
                                            <img src="../static/images/icons/st-03.svg" alt="image"/>
                                            </div>
                                            <div className="startup-grid-cnt">
                                                <h4>User-Centric Design</h4>
                                                <p>Appealing design that engage user & help to maximize the Successful Transaction is what we aim.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column is-6-tablet">
                                        <div className="startup-grid-in">
                                            <div className="startup-grid-img">
                                            <img src="../static/images/icons/st-04.svg" alt="image"/>
                                            </div>
                                            <div className="startup-grid-cnt">
                                                <h4>Agile Development</h4>
                                                <p>We adhere to an agile process that takes user feedback & combines it into next version of the released code.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
})







