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
            keyIndusItems : {
                0: { items: 2 },
                575: { items: 3 },
                767: { items: 4 },
                1200: { items: 5 },
                1600: { items: 6 },
              }
        }
    }
    componentDidMount = () => {
        
    }
    
    render() {

        return (

            <div>
                <section className="startup-sec testimonials  py-5">
                <div className="container">
                    <div className="sec-ttl testimonial-ttl has-text-centered">
                        <h1 className="ttl-head">Key Industries Solutions We Provide</h1>
                        <p className="ttl-p mx-610">We align our mobile & web services along with various industry lines, right from small business to unicorn industries.</p>
                    </div>

                    
                    <div className="key-indus-slider testimonial-carousel has-text-centered">
                        <AliceCarousel responsive={this.state.keyIndusItems} mouseDragEnabled  buttonsDisabled ={true}>
                                <div className="key-ind-i-wrap">
                                    <Link href="iot-application">
                                        <a>
                                            <div className="indus-icon"><img src="../static/images/icons/iot-icon.svg" alt="i"/></div>
                                            <div className="indus-caps">IOT Application</div>
                                        </a>
                                    </Link>
                                </div>
                                <div className="key-ind-i-wrap">
                                    <Link href="healthcare-fitness-app-development">
                                        <a>
                                            <div className="indus-icon"><img src="../static/images/icons/healthcare-icon.svg" alt="i"/></div>
                                            <div className="indus-caps">Healthcare & Fitness</div>
                                        </a>
                                    </Link>
                                </div>
                                <div className="key-ind-i-wrap">
                                    <Link href="education-app-development">
                                        <a>
                                            <div className="indus-icon"><img src="../static/images/icons/education-icon.svg" alt="i"/></div>
                                            <div className="indus-caps">Education</div>
                                        </a>
                                    </Link>
                                </div>
                                <div className="key-ind-i-wrap">
                                    <Link href="banking-finance-app-development">
                                        <a>
                                            <div className="indus-icon"><img src="../static/images/icons/bank-icon.svg" alt="i"/></div>
                                            <div className="indus-caps">Banking & Finance</div>
                                        </a>
                                    </Link>
                                </div>
                                <div className="key-ind-i-wrap">
                                    <Link href="ecommerce-app-development">
                                        <a>
                                            <div className="indus-icon"><img src="../static/images/icons/ecom-icon.svg" alt="i"/></div>
                                            <div className="indus-caps">Ecommerce</div>
                                        </a>
                                    </Link>
                                </div>
                                <div className="key-ind-i-wrap">
                                    <Link href="gaming-app-development">
                                        <a>
                                            <div className="indus-icon"><img src="../static/images/icons/game-icon.svg" alt="i"/></div>
                                            <div className="indus-caps">Gaming</div>
                                        </a>
                                    </Link>
                                </div>
                                <div className="key-ind-i-wrap">
                                    <Link href="food-restaurant-app-development">
                                        <a>
                                            <div className="indus-icon"><img src="../static/images/icons/food-icon.svg" alt="i"/></div>
                                            <div className="indus-caps">Food & Restaurnt</div>
                                        </a>
                                    </Link>
                                </div>
                                <div className="key-ind-i-wrap">
                                    <Link href="taxi-booking-app-development">
                                        <a>
                                            <div className="indus-icon"><img src="../static/images/icons/taxi-icon.svg" alt="i"/></div>
                                            <div className="indus-caps">Taxi Booking</div>
                                        </a>
                                    </Link>
                                </div>
                                <div className="key-ind-i-wrap">
                                    <Link href="dating-app-development">
                                        <a>
                                            <div className="indus-icon"><img src="../static/images/icons/couple-icon.svg" alt="i"/></div>
                                            <div className="indus-caps">Dating</div>
                                        </a>
                                    </Link>
                                </div>
                                <div className="key-ind-i-wrap">
                                    <Link href="travel-transport-app-development">
                                        <a>
                                            <div className="indus-icon"><img src="../static/images/icons/travel-icon.svg" alt="i"/></div>
                                            <div className="indus-caps">Travel & Transport</div>
                                        </a>
                                    </Link>
                                </div>
                                <div className="key-ind-i-wrap">
                                    <Link href="events-tickets-app-development">
                                        <a>
                                            <div className="indus-icon"><img src="../static/images/icons/event-icon.svg" alt="i"/></div>
                                            <div className="indus-caps">Events & Tickets</div>
                                        </a>
                                    </Link>
                                </div>
                                <div className="key-ind-i-wrap">
                                    <Link href="social-networking-app-development">
                                        <a>
                                            <div className="indus-icon"><img src="../static/images/icons/soc-icon.svg" alt="i"/></div>
                                            <div className="indus-caps">Social Networking</div>
                                        </a>
                                    </Link>
                                </div>
                        </AliceCarousel>
                    </div>
                    </div>

                </section>
            </div>
        )
    }
})







