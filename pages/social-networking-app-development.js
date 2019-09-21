
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
              <title>{site_name} | Social Networking App Development</title>
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
                      src="../static/images/icons/soc-icon-inner-top.svg"
                      alt="i"
                    />{" "}
                  </div>
                  <h4>Social Networking App Development</h4>
                </div>
              </div>

              <div className="page-cnt-wrap py-5 py-m-3 pb-0">
                <div className="page-main-cnt pb-5 pb-m-2">
                  <div className="container">
                    <h4>
                    Provide Robust Connectivity through Viable Technology.
                    </h4>
                    <p>
                    Social networking refers to user-created content that is published and shared online. Since the launch of the first social media site in 1997, it has changed our lives and affected every industry with a positive bloom. It has grabbed the whole world in a new way, that we feel incomplete if don't use it for an hour. Addiction & engagement of users towards social media has made this industry most popular in this arena.

                    </p>
                    <p>
                    With the progression of technology, the social networking industry has reached new horizons. This industry need technological solutions in order to achieve some vital business purposes such as marketing of brands, promotion of businesses, and transparency of revenue streams.
                    </p>
                    <p>
                    Paul is the only shop for your destination. As we are expert in molding ideas into technology, we provide top-notch mobility solutions for social networking which are embedded with engaging features & mesmerizing designs that user love while using social networking app.
                    </p>
                    <p>
                    We help you to harness the advantages of social media and make your user connect and communicate with engaging social networking features. Our value-based social networking app development lets you find a new way to make user-interact, refining their overall experience.
                    </p>
                    <p>
                    Paul has molded itself according to the industry demands & holds a vital place among top app development companies. In order to always stand on top, our technical geeks cater you with multifarious social networking apps to satisfy business objectives. We consider every aspect and your specific need while developing a social media app that gives a return on investment.
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
                          Rehmie All-In-One Social Networking Mobile App has been exclusively designed and developed for iPhone as well as the Android platform. .Mingle is an innovation for users who are immensely connected with social networking on their Smartphones. An easy user-interface which provide ease in chatting and connecting.
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
                          <p>Social Networking</p>
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
                        Social Networking App Development Features
                        </h1>
                        <p className="ttl-p mx-610">
                        With a specific end goal to make a social networking application effective, it requires including rich and mainstream highlights in light of the desire for your end clients. Some key highlights are
                        </p>
                      </div>
                      <div className="com-res py-5 py-m-3 pb-0">
                        <div className="columns is-multiline">
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                            <h5>Quick Profile Generation</h5>
                          </div>
                         
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                            <h5>Secure Login & Secure Access</h5>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                            <h5>Easy To Connect With Group Chats</h5>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                            <h5>Google Map Integration</h5>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                            <h5>Advanced Search Criteria</h5>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                            <h5>Create & Manage Events</h5>
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

