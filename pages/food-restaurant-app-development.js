
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
              <title>{site_name} | Food & Restaurant App Development</title>
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
                      src="../static/images/icons/food-icon-inner-top.svg"
                      alt="i"
                    />{" "}
                  </div>
                  <h4>Food & Restaurant App Development</h4>
                </div>
              </div>

              <div className="page-cnt-wrap py-5 py-m-3 pb-0">
                <div className="page-main-cnt pb-5 pb-m-2">
                  <div className="container">
                    <h4>
                    Taste the Best with the Quicker Delivery Service via Our Mobility Solutions.
                    </h4>
                    <p>
                    The business of delivering restaurants meals to the home is undergoing rapid changes as new online platforms race to capture markets and customers across the world. Technology has taken bloom in many industries, restaurants are not the exception to avail the technologies.
                    </p>
                    <p>
                    Let's have a deep glance over this industry, a survey says that usual customers love their smartphones are utilized for everything to be accessed and a lot of restaurants owners are using mobile apps to streamline the entire process, right from ordering food and serving their customers.
                    </p>
                    <p>
                    Being a champ in mobile app development field, we perform app development at the next level and allow your esteemed customers to tantalize & tamper their taste buds with just a few taps on the device screen.
                    </p>
                    <p>
                    Paul is a reliable technology caterer that merge innovation with elegance and experience to develop feature-rich food & restaurants apps and solutions. Our passionate app developers develop apps with splendid designs which reduces the reachability gap between your restaurant and user.
                    </p>
                    <p>
                    The app we develop provides smooth user-interface and consists of varied features right from table wait-list turnover to dinner table analytics and more to let you offer remarkable service to guests. We serve restaurant solution so that you serve your guests better.
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
                          <p>Food & Restaurants</p>
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
                        Food & Restaurnt App Development Features
                        </h1>
                        <p className="ttl-p mx-610">
                        In order to make food delivery as much easy to users, apps are the best way to serve. Mobile apps which we deliver include:
                        </p>
                      </div>
                      <div className="com-res py-5 py-m-3 pb-0">
                        <div className="columns is-multiline">
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                            <h5>Restaurant Management</h5>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                            <h5>Waiter Tracking</h5>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                            <h5>Customer Engagement</h5>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                            <h5>Kitchen Dashboard</h5>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                            <h5>Managing Cash Inflow</h5>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                            <h5>Navigation & Search Option</h5>
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

