import React, { Component } from 'react';
import '../styles/styles.scss';
import ReactSVG from 'react-svg';
import { withRouter } from 'next/router';
import ScrollAnimation from 'react-animate-on-scroll';

export default withRouter(class Whychooseus extends Component {

    GenerateSVG = (image,title) => {
        return <> <div className="startup-grid-img cus-img"><ReactSVG src={image} /></div></>;
    }
    
    render() {

        return (

            <div>
                <section className="bg-pau-theme startup-sec py-5">
                <h1 className="why-title-bold">WHY CHOOSE US</h1>
                               
                <div className="container">
                <div className="mx-1200">
                    <div className="pack-tab has-text-centered">
                    
                    <div className="columns is-multiline">
                        <div className="column is-4-tablet">
                        <ScrollAnimation initiallyVisible={false} animateOnce ="true" animateIn="flipInX">
                        <div className="startup-grid-in cus-in-hov">
                            <div className="startup-grid-img cus-img">
                                <img src="../static/images/icons/custom-design.svg" alt="image" />
                            </div>
                            <div className="startup-grid-cnt content-cus">
                                <h4>Custom Design</h4>
                                <p>Your website will be 100% custom hand-coded. We do not provide
off-the-shelf products such as WordPress and Wix</p>
                            </div>
                        </div>
                        </ScrollAnimation>
                        </div>
                        <div className="column is-4-tablet">
                        <ScrollAnimation initiallyVisible={false} animateOnce ="true" animateIn="flipInX">
                        <div className="startup-grid-in cus-in-hov">
                            <div className="startup-grid-img cus-img">
                                <img src="../static/images/icons/track-record.svg" alt="image" />
                            </div>
                            <div className="startup-grid-cnt content-cus">
                                <h4>Track Record</h4>
                                <p>We have a track record of helping local businesses go from zero-
online presence to receiving calls and enquries within days of website going live</p>
                            </div>
                        </div>
                        </ScrollAnimation>
                        </div>
                        <div className="column is-4-tablet">
                        <ScrollAnimation initiallyVisible={false} animateOnce ="true" animateIn="flipInX">
                        <div className="startup-grid-in cus-in-hov">
                            <div className="startup-grid-img cus-img">
                                <img src="../static/images/icons/partner.svg" alt="image" />
                            </div>
                            <div className="startup-grid-cnt content-cus">
                                <h4>Local Partner</h4>
                                <p>We are a local business based in Hazel Grove, Stockport so have an
understanding of local areas, businesses and what is required to make your website
successful</p>
                            </div>
                        </div>
                        </ScrollAnimation>
                        </div>
                        <div className="column is-4-tablet">
                        <ScrollAnimation initiallyVisible={false} animateOnce ="true" animateIn="flipInX">
                        <div className="startup-grid-in cus-in-hov">
                            <div className="startup-grid-img cus-img">
                                <img src="../static/images/icons/af-price.svg" alt="image" />
                            </div>
                            <div className="startup-grid-cnt content-cus">
                                <h4>Affordable Pricing</h4>
                                <p>We have a price model to suit any budget. Whether you require
a 5-page brochure type website or you something more advanced such as user
profiles, login dashboard, accounts etc</p>
                            </div>
                        </div>
                        </ScrollAnimation>
                        </div>
                        <div className="column is-4-tablet">
                        <ScrollAnimation initiallyVisible={false} animateOnce ="true" animateIn="flipInX">
                        <div className="startup-grid-in cus-in-hov">
                            <div className="startup-grid-img cus-img">
                                <img src="../static/images/icons/customer-satisfaction.svg" alt="image" />
                            </div>
                            <div className="startup-grid-cnt content-cus">
                                <h4>Customer Satisfaction</h4>
                                <p>Talk to the person creating your website. No account
managers, salespeople etc</p>
                            </div>
                        </div>
                        </ScrollAnimation>
                        </div>
                        <div className="column is-4-tablet">
                        <ScrollAnimation initiallyVisible={false} animateOnce ="true" animateIn="flipInX">
                        <div className="startup-grid-in cus-in-hov">
                            <div className="startup-grid-img cus-img">
                                <img src="../static/images/icons/certificate.svg" alt="image" />
                            </div>
                            <div className="startup-grid-cnt content-cus">
                                <h4>FREE SSL Certificate</h4>
                                <p>All websites come with a SSL certificate, making your website
secure and saving you £47.99+</p>
                            </div>
                        </div>
                        </ScrollAnimation>
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