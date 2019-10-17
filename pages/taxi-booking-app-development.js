
import React, { Component } from 'react';
import Head from 'next/head';
import Win_deeds from '../components/win-deeds';
import { site_name } from '../utils/Common';
import { withRouter } from 'next/router';
import ScrollAnimation from 'react-animate-on-scroll';

export default withRouter(class Index extends Component {

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
            <Head>
              <meta charSet="utf-8" />
              <title>{site_name} | Taxi-Booking App Development Company</title>
              <meta name="distribution" content="Global" />
              <meta name="revisit-after" content="1 days" />
              <meta
                name="creator"
                content="officialgates (www.officialgates.com)"
              />
              <meta
                name="publisher"
                content="officialgates (www.officialgates.com)"
              />
            </Head>

            <div className="main-wrap">
              <div className="inner-banner has-text-centered">
                <div className="inner-banner-cnt">
                  <div className="circle-ripple">
                    <img
                      src="../static/images/icons/taxi-icon-inner-top.svg"
                      alt="i"
                    />{" "}
                  </div>
                  <ScrollAnimation animateIn="flipInY" initiallyVisible={false} animateOnce ="true">
                  <h4>Taxi-Booking App Development Company</h4>
                  </ScrollAnimation>
                  
                </div>
              </div>

              <div className="page-cnt-wrap py-5 py-m-3 pb-0">
                <div className="page-main-cnt pb-5 pb-m-2">
                <ScrollAnimation animateIn="fadeInDown" initiallyVisible={false} animateOnce ="true">
                  <div className="container">
                    <h4>
                    Our Fast & Feasible Taxi-Booking Mobility Solutions Solve the World's Problem.
                    </h4>
                    <p>
                    Taxis are the most considered mode of transportation, this had an vast importance and gained a vast recognition in recent years, & has become an important part of both the business and leisure tourism sectors.
                    </p>
                    <p>
                    Taxi-booking industry is one of the most significant industry in the transportation services of the globalized economy. The continuous growth in technology has changed the face of the taxi-booking industry.
                    </p>
                    <p>
                    The rapid mobile app development technology has shrunk the world to the Smartphone only. Whether there is a need to book a taxi or it is about getting a hotel room or you need to book a seat in the movie hall, there is an app for every possible requirement. Among these useful apps, taxi-booking apps are becoming more popular because of growing demand from the users.
                    </p>
                    <p>
                    Paul Technologies does own industry expertise in providing accurate & efficient mobility solutions to the taxi-booking industry with an objective to take a particular industry through a convenient and result-oriented procedure.
                    </p>
                    <p>
                    With the team of professional developers who are well informed of all the contemporary things related to taxi-mobile industry, we develop robust apps for taxi-booking. The user will enjoy the flexible features such as hassle-free booking, GPS for tracking ride, notifications on any move, proper pick & drop etc.
                    </p>
                  </div>
                  </ScrollAnimation>
                </div>
                {/* Work Case study section */}
                <div className="banner-carousel work-carousel inner-work">
                  <div className="container">
                    <div className="banner-items columns">
                      <div className="banner-img column has-text-centered-mobile is-full-mobile is-half-tablet is-two-fifths-desktop">
                      <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                        <img src="../static/images/others/rehmie-mob-iot.png" />
                        </ScrollAnimation>
                      </div>
                      <div className="banner-txt our-work-txt column has-text-centered-mobile">
                      <ScrollAnimation animateIn="slideInRight" initiallyVisible={false} animateOnce ="true">
                        <div className="o-wk-logo">
                          <div className="o-wk-logo-img">
                            <img src="../static/images/others/work-logo-01.png" />
                          </div>
                          <div className="o-wk-cnt">
                            <h6>Rehmie App: Connect & Find</h6>
                            <p>
                              Online Shopping, Mobile Recharge, Bill
                              Payments
                            </p>
                          </div>
                        </div>
                        <div className="work-carousel-txt">
                          <p>
                            Rehmie is No.1 Nigeria’s most widely
                            accepted online shopping, mobile recharge,
                            bill payments app!
                          </p>
                          <p>
                            Rehmie also provide Online Hotel booking,
                            Flight booking, Taxi booking, Car Rental,
                            Furniture shopping, Visa service, Money
                            Transfer, Phone Book service, Flight Delay
                            Compensation, Event, and Party booking,
                            Food, Movies, Real Estate, Bus booking.
                          </p>
                        </div>
                        <div className="avail-app">
                          <span className="avail-app-caps">
                            Platform Availability
                          </span>
                          <p className="mg-t-10">
                            <ul className=" is-marginless">
                              <li>
                                <span>
                                  <img src="../static/images/icons/and-i.svg" />
                                </span>
                              </li>
                              <li>
                                <span>
                                  <img src="../static/images/icons/ios-i.svg" />
                                </span>
                              </li>
                            </ul>
                          </p>
                        </div>
                        <div className="avail-app">
                          <span className="avail-app-caps">
                            Business Domain
                          </span>
                          <p>Taxi-Booking App</p>
                        </div>
                        </ScrollAnimation>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Work Case study section */}
                

                <Win_deeds />
                <div className="startup-grid py-5 py-m-3 theme-bg">
                  <div className="container">
                    <div className="mx-1000">
                      <div className="sec-ttl has-text-centered">
                      <ScrollAnimation animateIn="fadeInRight" initiallyVisible={false} animateOnce ="true">
                        <h1 className="ttl-head">
                        Taxi-Booking App Development Features
                        </h1>
                        <p className="ttl-p mx-610">
                        The mobile revolution sweeping this age is creating waves in the entire service industry. This industry has widespread impact on users who can now simply download the taxi-booking app with loaded features...
                        </p>
                        </ScrollAnimation>
                      </div>
                      <div className="com-res py-5 py-m-3 pb-0">
                        <div className="columns is-multiline">
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                          <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                            <h5>On-Demand Booking</h5>
                            </ScrollAnimation>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                          <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                            <h5>Vehicle Tracking</h5>
                            </ScrollAnimation>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                          <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                            <h5>Real-Time Arrival Status</h5>
                            </ScrollAnimation>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                          <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                            <h5>Transparent Payment Features</h5>
                            </ScrollAnimation>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                          <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                            <h5>Overview of Past booking</h5>
                            </ScrollAnimation>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                          <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                            <h5>Add Reviews</h5>
                            </ScrollAnimation>
                          </div>
                        </div>
                        <div className="columns is-mobile is-centered">
                        <div className="bg-color-theme">
                        <ScrollAnimation animateIn="tada" initiallyVisible={false} animateOnce ="true">
                        <a className="theme-color ban-theme-btn" href="#">View Our Work</a>
                        <a className="theme-color ban-theme-btn" href="#">Contact Us</a>
                        </ScrollAnimation>
                        </div>
                        
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        );
    }
})

