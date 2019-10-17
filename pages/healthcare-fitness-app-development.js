
import React, { Component } from 'react';
import Head from 'next/head';
import Win_deeds from '../components/win-deeds';
import { site_name } from '../utils/Common';
import { withRouter } from 'next/router';
import Link from 'next/link';
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
              <title>{site_name} | Healthcare & Fitness App Development</title>
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
                      src="../static/images/icons/healthcare-icon-inner-top.svg"
                      alt="i"
                    />{" "}
                  </div>
                  <ScrollAnimation animateIn="flipInY" initiallyVisible={false} animateOnce ="true">
                    <h4>Healthcare & Fitness App Development</h4>
                  </ScrollAnimation>
                  
                </div>
              </div>

              <div className="page-cnt-wrap py-5 py-m-3 pb-0">
                <div className="page-main-cnt pb-5 pb-m-2">
                <ScrollAnimation animateIn="fadeInDown" initiallyVisible={false} animateOnce ="true">
                  <div className="container">
                    <h4>
                    High-Tech Solution to Improve Medical Care & Patients Services.
                    </h4>
                    <p>
                    Healthcare industry is among the fastest growing industries in the technical era and mobile healthcare is among the speediest mounting categories in the app market today. According to the survey, the healthcare industry has been taken bloom after meeting the technology.
                    </p>
                    <p>
                    Technology has been enhanced by the healthcare industry. Right from a small path lab to big hospitals, healthcare app development services achieve all kind of your business to modernize work and increase productivity & work proficiency.
                    </p>
                    <p>
                    Paul is the name with the huge approach in the <Link href="mobile-app-development"><a>mobile app development</a></Link> industry. There are variety and availability of mobility solutions for almost every healthcare & fitness requirement in the form of mobile apps to fulfill their requirements.
                    </p>
                    <p>
                    With the vast knowledge of app development, our dedicated app developers are keen towards developing the high-tech healthcare mobility solution. Our Healthcare technology solutions enable to build new-edge hospitals interacting processes, people & tool to help you gain new efficiencies, scale-up facilities and boost treatment to result in higher patient satisfaction.
                    </p>
                    <p>
                    We aim to remove the obstacles like inaccessible data & insufficient processes, so you can focus on improving lives through better, more affordable, and more accessible healthcare.
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
                          <p>Health Fitness</p>
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
                        Health & Fitness App Development Features
                        </h1>
                        <p className="ttl-p mx-610">
                        With the progress and highlight rich medicinal apps, it turns out to be simple and advantageous for doctors, health experts and health specialists to convey speedy and productive services to their patients through our feature-rich mobile apps.


                        </p>
                        </ScrollAnimation>
                      </div>
                      <div className="com-res py-5 py-m-3 pb-0">
                        <div className="columns is-multiline">
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                          <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                            <h5>Schedule Fitness, Exercise Etc.</h5>
                          </ScrollAnimation>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                          <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                            <h5>Online Consultation</h5>
                          </ScrollAnimation>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                          <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                            <h5>Schedule Conferences</h5>
                          </ScrollAnimation>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                          <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                            <h5>Complete Health Guide</h5>
                          </ScrollAnimation>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                          <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                            <h5>Exercise, Yoga & Tutorial</h5>
                          </ScrollAnimation>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                          <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                            <h5>Track Information</h5>
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

