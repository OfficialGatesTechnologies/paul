import React, { Component } from 'react';
import '../styles/styles.scss';
import Link from 'next/link';
import AliceCarousel from 'react-alice-carousel';
import { withRouter } from 'next/router';

import $ from 'jquery';
export default withRouter(class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ourRecItems : {
                0: { items: 1 },
              }
        }
    }
    componentDidMount = () => {
        
    }
    
    render() {

        return (

            <div>
                <section className="startup-sec py-5">
                <div className="container">
                    <div className="g-ad has-text-centered">
                         <img src="../static/images/ad-01.png" alt="image"/>
                        </div>
                    </div>
                    <div className="sec-ttl has-text-centered">
                    <div className="container">
                        <h1 className="ttl-head">Our-Recognitions</h1>
                        <p className="ttl-p mx-610">Our work characterizes us itself, but appreciations are nice too. Industry recognition is 
the accelerator that keeps us moving towards success.</p>
                    </div>
                    </div>
                    <div className="container">
                    <div className="our-rec-slider has-text-centered">
                        <AliceCarousel responsive={this.state.ourRecItems} mouseDragEnabled  buttonsDisabled ={true}>
                            <div className="our-rec-items mx-720">
                                <div className="our-rec-img">
                                <img src="../static/images/others/pro-logo-01.png" alt="image"/>
                                </div>
                                <div className="our-rec-cnt">
                                    <p>Officialgates is globally recognized under Top 10 Mobile App and Web Developers on FlipCanvas.</p>
                                    <div className="has-text-right">
                                    <Link href=""><a>VIEW SITE</a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="our-rec-items mx-720">
                                <div className="our-rec-img">
                                <img src="../static/images/others/pro-logo-01.png" alt="image"/>
                                </div>
                                <div className="our-rec-cnt">
                                    <p>Officialgates is globally recognized under Top 10 Mobile App and Web Developers on FlipCanvas.</p>
                                    <div className="has-text-right">
                                    <Link href=""><a>VIEW SITE</a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="our-rec-items mx-720">
                                <div className="our-rec-img">
                                <img src="../static/images/others/pro-logo-01.png" alt="image"/>
                                </div>
                                <div className="our-rec-cnt">
                                    <p>Officialgates is globally recognized under Top 10 Mobile App and Web Developers on FlipCanvas.</p>
                                    <div className="has-text-right">
                                    <Link href=""><a>VIEW SITE</a></Link>
                                    </div>
                                </div>
                            </div>
                        </AliceCarousel>
                    </div>
                    </div>

                </section>
            </div>
        )
    }
})







