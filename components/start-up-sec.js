import React, { Component } from 'react';
import '../styles/styles.scss';
import { withRouter } from 'next/router';
import WebSectionThree from '../components/web-section-three';
import Whychooseus from'../components/why-choose-us';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import ScrollAnimation from 'react-animate-on-scroll';
 
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
                 
                    <div className="sec-ttl sec-ttl-01 has-text-centered py-5 container">
                    <ScrollAnimation animateIn="bounceIn" initiallyVisible={false} animateOnce ="true">
                        <h1 className="ttl-head">Welcome to WebsitePilot.co.uk</h1>
                        <p className="ttl-p mg-b-10 mx-1000">At WebsitePilot we specialise in Website Design and Development, Search-Engine-
                        Optimisation (SEO) and Pay-per-Click (PPC). 
                        </p>
                        <p className="ttl-p mg-b-10 mx-1000">
                        Our passion is taking the stress away by helping your local business to get online and to start
                        building your online presence, generating leads and growing your business without having
                        to worry about any of the technical side.
                        </p>
                        <p className="ttl-p mg-b-10 mx-1000">
                        We have helped other local businesses go from zero online presence to receiving calls and
leads within days of their website going live.
                        </p>
                        <p className="ttl-p mg-b-10 mx-1000">
                        Our aim is not just to build you a website and then leave you to it. We want to see your
website and business grow. That’s we also offer packages for SEO, which will help your
website rank naturally higher in Google for your target search terms over a longer period
and PPC, which enables you to be in the top positions on Google as soon as your website
goes live.
                        </p>
                        </ScrollAnimation>
                    </div>
                    
                    <div className="container">
                    <ScrollAnimation animateIn="bounceIn" initiallyVisible={false} animateOnce ="true">
                        <div className="dia has-text-centered">
                         <img src="../static/images/dia-01.png" alt="image"/>
                        </div>
                         </ScrollAnimation>
                    </div>
                    <WebSectionThree />
                    <Whychooseus />
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
                            <ScrollAnimation animateIn="bounceIn" initiallyVisible={false} animateOnce ="true">
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
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
})







