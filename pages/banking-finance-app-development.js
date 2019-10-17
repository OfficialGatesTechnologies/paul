
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
              <title>{site_name} | Banking & Finance App Development</title>
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
                      src="../static/images/icons/bank-icon-inner-top.svg"
                      alt="i"
                    />{" "}
                  </div>
                  <ScrollAnimation animateIn="flipInY" initiallyVisible={false} animateOnce ="true">
                    <h4>Banking & Finance App Development</h4>
                  </ScrollAnimation>
                </div>
              </div>

              <div className="page-cnt-wrap py-5 py-m-3 pb-0">
                <div className="page-main-cnt pb-5 pb-m-2">
                <ScrollAnimation animateIn="fadeInDown" initiallyVisible={false} animateOnce ="true">
                  <div className="container">
                    <h4>
                    Get Secure As Well As Reliable Banking & Finance Mobility Solutions.
                    </h4>
                    <p>
                    One of the biggest boons to mankind in recent years has been the internet. It has made the world one large marketplace where communication happens in real time. The internet has affected every spectrum of our life making things more convenient. Banking & finance industry is also among them which have taken a gigantic boon through the internet.
                    </p>
                    <p>
                    The inclusion of mobility technology in banking & finance industry has turned it more reliable, productive & secure. To make this industry smooth in the process, there are various apps are available in the market. Mobile technology and financial apps are changing the way customers, banks and sellers interact.
                    </p>
                    <p>
                    As per survey says that 21% of Smartphone users have used mobile banking in the past 12 months and 11% of those who haven’t used mobile banking yet, will do so in next 12 months.
                    </p>
                    <p>
                    Being a market pioneer in mobile app development zone, Paul offer deep & broad scalable solutions to support your business critical, finance-focused models. With the blend of innovation & idea, we provide banking & financial apps which add worth to financial organizations, banking institutions & insurance companies.
                    </p>
                    <p>
                    At Paul, our team of tech geeks can simplify an often-complicated process into connected, real-time development solutions. Apps which we provide allows users to track their investments, allocate assets, and manage portfolios and trade in real time.
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
                          <p>Banking & Finance</p>
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
                        Banking & Finance App Development Features
                        </h1>
                        <p className="ttl-p mx-610">
                        In order to make Banking& Finance a successful industry, mobile app of this industry should be successful; and it requires feature-rich apps which based on the expectation of your end users.
                        </p>
                        </ScrollAnimation>
                      </div>
                      <div className="com-res py-5 py-m-3 pb-0">
                        <div className="columns is-multiline">
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                          <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                            <h5>Fast-Track Development</h5>
                          </ScrollAnimation>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                          <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                            <h5>Integrate Back-End Systems</h5>
                          </ScrollAnimation>
                          </div>
                          
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                          <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                            <h5>Safety& Security,</h5>
                          </ScrollAnimation>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                          <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                            <h5>Data Encryption</h5>
                          </ScrollAnimation>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                          <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                            <h5>Post Development Support</h5>
                          </ScrollAnimation>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                          <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                            <h5>Advanced Reporting</h5>
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

