
import React, { Component } from 'react';
import Head from 'next/head';
import Win_deeds from '../components/win-deeds';
import { site_name } from '../utils/Common';
import { withRouter } from 'next/router';


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
              <title>{site_name} | Ecommerce App Development Company</title>
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
                      src="../static/images/icons/ecom-icon-inner-top.svg"
                      alt="i"
                    />{" "}
                  </div>
                  <h4>Ecommerce App Development Company</h4>
                </div>
              </div>

              <div className="page-cnt-wrap py-5 py-m-3 pb-0">
                <div className="page-main-cnt pb-5 pb-m-2">
                  <div className="container">
                    <h4>
                    Experience Scalable Online Commerce Solutions across All Electronics Platforms.
                    </h4>
                    <p>
                    The rapidly growing e-commerce industry is gradually shifting to the technical world, as people browsing the shopping stores on their Smartphone instead of visiting shopping malls, moving back & forth across the shelves by holding trolleys.
                    </p>
                    <p>
                    The adoption of new technologies has accelerated among the e-commerce industry in the last ten years and has changed the way of shopping & purchasing. However, as with many industries experiencing growing pain, retail industry often runs into issues such as obsolete infrastructure, limited delivery chain visibility, and inefficient logistic.
                    </p>
                    <p>
                    In order to avoid the fatal issues in the e-commerce industry, Paul blends technology with methodology and provides new opportunities for businesses as well as consumers. We help to transform the shopping experience with an engaging mobile app or improve business operations with comprehensive mobility suites.
                    </p>
                    <p>
                    Paul stays on top of providing e-commerce apps which offers high-performance e-commerce solutions for online businesses right from startups to enterprise-grade e-commerce stores. Our canny developers are passionate about app development and our developed apps help you optimize your online site for high performance, increased traffic, and enhance profitability.
                    </p>
                    <p>
                    With innovative web and mobile app solutions using emerging technologies, we deliver omnichannel user experience, ultimately increasing your bottom line and help you expand your reach.
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
                          <p>E-Commerce</p>
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
                        Ecommerce App Development Features
                        </h1>
                        <p className="ttl-p mx-610">
                        Keeping in mind the end goal to give your clients' best digital development, we plan and create E-commerce Mobile apps that give your user best & engaging shopping experience.
                        </p>
                      </div>
                      <div className="com-res py-5 py-m-3 pb-0">
                        <div className="columns is-multiline">
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                            <h5>E-Catalogues</h5>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                            <h5>User-Friendly App Navigation</h5>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                            <h5>Advanced Products Search Criteria/Filters</h5>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                            <h5>Order Tracking</h5>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                            <h5>Product Reviews</h5>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                            <h5>Highly Secured Payment Methods</h5>
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

