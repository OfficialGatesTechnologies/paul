
import React, { Component } from 'react';
import Head from 'next/head';
import Win_deeds from '../components/win-deeds';
import { site_name } from '../utils/Common';
import { withRouter } from 'next/router';
import Link from 'next/link'


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
              <title>{site_name} | Iot Application</title>
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
                      src="../static/images/icons/iot-icon-inner-top.svg"
                      alt="i"
                    />{" "}
                  </div>
                  <h4>Internet of Things App Development</h4>
                </div>
              </div>

              <div className="page-cnt-wrap py-5 py-m-3 pb-0">
                <div className="page-main-cnt pb-5 pb-m-2">
                  <div className="container">
                    <h4>
                      Devices Communicate With Each Other Via Our
                      Developed IoT Apps.
                    </h4>
                    <p>
                      IoT is a term that signifies the devices
                      interconnected over the internet for operational
                      ease. The IoT industry has been exponentially
                      growing since 2009. A survey says the overall IoT
                      market will reach over $1.7 trillion. With the
                      change of IoT, the world has a wide variety of new
                      ideas. The possibilities are boundless.
                    </p>
                    <p>
                      IoT, the revolutionary technology is making lives
                      easier where daily activities can be performed by
                      the devices over the Internet. Smart homes are a
                      classic example of IoT use case where a single
                      device can control multiple web-connected devices.
                    </p>
                    <p>
                      With the inclusion of mobile app solutions to IoT,
                      it is also changing the landscape of{" "}
                      <Link href="">
                        <a>mobile app development.</a>
                      </Link>{" "}
                      Artificial Intelligence and IoT are the two major
                      aspects of technology that are changing the mobile
                      apps that are developed today.
                    </p>
                    <p>
                      Paul is the leading IoT app development company,
                      which fuels this industry with the feature-rich
                      IoT apps and helps users to be more comfortable
                      with the help of apps. Our technical giants are
                      expert in this field as they have huge experience
                      & vast learning in IoT app development field.
                    </p>
                    <p>
                      We believe in the growth potential of Internet of
                      Things,{" "}
                      <Link href="">
                        <a>IoT app development</a>
                      </Link>{" "}
                      which makes everything connectable. With smart
                      devices taking your homes, workplaces, and
                      industries like healthcare and agriculture- we aim
                      to create a network of IoT devices which will talk
                      to each other and can be controlled over a mobile
                      app.
                    </p>
                  </div>
                </div>
                {/* Work Case study section */}
                <div className="banner-carousel work-carousel inner-work">
                  <div className="container">
                    <div className="banner-items columns">
                      <div className="banner-img column has-text-centered-mobile is-full-mobile is-half-tablet is-two-fifths-desktop">
                        <img src="../static/images/others/rehmie-mob-iot.png" />
                      </div>
                      <div className="banner-txt our-work-txt column has-text-centered-mobile">
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
                          <p>IoT</p>
                        </div>
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
                        <h1 className="ttl-head">
                          Internet of Things App Development Features
                        </h1>
                        <p className="ttl-p mx-610">
                          Any IoT app built for a smart device should
                          aim for scalability, security and reliability
                          by offering some important features like...
                        </p>
                      </div>
                      <div className="com-res py-5 py-m-3 pb-0">
                        <div className="columns is-multiline">
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                            <h5>Real-Time analytics</h5>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                            <h5>Device Connectivity</h5>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                            <h5>Remote Device management</h5>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                            <h5>Scalable Cloud Infrastructure</h5>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                            <h5>Developer Portal</h5>
                          </div>
                        </div>
                        <div className="columns is-mobile is-centered">
                        <div className="bg-color-theme">
                        <a className="theme-color ban-theme-btn" href="#">View Our Work</a>
                        <a className="theme-color ban-theme-btn" href="#">Contact Us</a>
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

