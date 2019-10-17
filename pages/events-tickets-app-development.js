
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
              <title>{site_name} | Event & Ticket booking Apps Development Company</title>
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
                      src="../static/images/icons/event-icon-inner-top.svg"
                      alt="i"
                    />{" "}
                  </div>
                  <ScrollAnimation animateIn="flipInY" initiallyVisible={false} animateOnce ="true">
                  <h4>Event & Ticket booking Apps Development Company</h4>
                  </ScrollAnimation>
                </div>
              </div>

              <div className="page-cnt-wrap py-5 py-m-3 pb-0">
                <div className="page-main-cnt pb-5 pb-m-2">
                <ScrollAnimation animateIn="fadeInDown" initiallyVisible={false} animateOnce ="true">
                  <div className="container">
                    <h4>
                    We Sustain A Wide Range Of Apps With Exquisite Features In Event & Ticket Industry.
                    </h4>
                    <p>
                    The online event & tickets industry size was valued at $46.59 billion in the past few years & is expected to grow more during the forecast period. Increased proliferation of the internet and growing trend of using mobile apps for booking event tickets online, finding the nearest organized events, number of attendees at that event and many more.

                    </p>
                    <p>
                    Customers now have exhibited willingness to pay marginal internet charges in order to avoid standing in long queues, which has positively shaped the market. People find it easy to use events apps for their participation.
                    </p>
                    <p>
                    We Understand the importance of mobile apps in the lives of users and committed to developing the best mobile application for the even & ticket industry. We have successfully developed many apps that will cater the event & ticket industry and deploy to a large target audience.
                    </p>
                    <p>
                    
Our technical Team consists of many keen app developers who have expertise in creating holistic approaches to targeting, storing, managing and communicating over secure and convenient digital platforms.
                    </p>
                    <p>
                    
Apps which we develop consists of varied features such as better data collection, updates about events, online ticket booking, payment risk & cancellation etc.
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
                          Justikets offers a rapid & easy approach to book tickets online for upcoming events organizes across cities in India. With Justikets, stay updated on events created by others and get the passes or tickets to join them. Navigate easily to the location of an event through the map.
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
                          <p>Events & Tickets</p>
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
                        Events & Tickets booking App Development Features
                        </h1>
                        <p className="ttl-p mx-610">
                        Each event needs a decent application. In order to make easy booking of any events, Apps are the best place to go for. Our Event & Ticket Industry include some important features:
                        </p>
                        </ScrollAnimation>
                      </div>
                      <div className="com-res py-5 py-m-3 pb-0">
                        <div className="columns is-multiline">
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                          <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                            <h5>Attendee List Per Date Time</h5>
                          </ScrollAnimation>
                          </div>
                         
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                          <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                            <h5>Ticket Purchases</h5>
                          </ScrollAnimation>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                          <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                            <h5>Payment Status</h5>
                          </ScrollAnimation>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                          <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                            <h5>Check-In Status</h5>
                          </ScrollAnimation>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                          <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                            <h5>Event & Venue List</h5>
                          </ScrollAnimation>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                          <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                            <h5>Date Time & Registration</h5>
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

