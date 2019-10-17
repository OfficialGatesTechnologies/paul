
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
              <title>{site_name} | Gaming App Development</title>
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
                      src="../static/images/icons/game-icon-inner-top.svg"
                      alt="i"
                    />{" "}
                  </div>
                  <ScrollAnimation animateIn="flipInY" initiallyVisible={false} animateOnce ="true">
                      <h4>Gaming App Development</h4>
                  </ScrollAnimation>
                </div>
              </div>

              <div className="page-cnt-wrap py-5 py-m-3 pb-0">
                <div className="page-main-cnt pb-5 pb-m-2">
                <ScrollAnimation animateIn="fadeInDown" initiallyVisible={false} animateOnce ="true">
                  <div className="container">
                    <h4>
                    Providing High Revenue Generating Gaming Mobility Solutions.
                    </h4>
                    <p>
                    If there was any question that mobile had disrupted the traditional gaming industry, then questions & doubts should now be put to rest.
                    </p>
                    <p>
                    In this era, the gaming sector is spreading its boundaries and its penetrating fresh geographic. Now, this industry is becoming more interactive to attract a new generation of customers.
                    </p>
                    <p>
                    The inclusion of technology in the gaming sector has taken it to the top among the list of developing industries. Due to the colossal use of Smartphone & dependency of the internet, most of the people love to play games in their free time. As there are various mobile game apps which offers users engaging experience with complete entertainment without constraining the age group.
                    </p>
                    <p>
                    Paul is a renowned name in the gaming app development field. We combine desires & technologies together and result in it as a user-centric app which loved and cherish by game app users.
                    </p>
                    <p>
                    Our specialized team understands the modern gaming landscape as they are one among those gaming enthusiasts who love playing and discovering the technology behind every element. Whether a causal puzzle or engrossing storylines, we are the game changers. We use industry-leading tools like Unity 3D, Corona and others.
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
                          <p>Gaming</p>
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
                        Gaming App Development Features
                        </h1>
                        <p className="ttl-p mx-610">
                        With a specific end goal to achieve the best gaming experience, a mobile game app need mobile application needs to develop utilizing most developed highlights gives clients' continuous experience to utilize an application.
                        </p>
                        </ScrollAnimation>
                      </div>
                      <div className="com-res py-5 py-m-3 pb-0">
                        <div className="columns is-multiline">
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                          <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                            <h5>Social Login</h5>
                          </ScrollAnimation>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                          <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                            <h5>Social Media Status Update</h5>
                          </ScrollAnimation>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                          <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                            <h5>Share Score On Leader Board</h5>
                          </ScrollAnimation>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                          <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                            <h5>Invites & Referrals</h5>
                          </ScrollAnimation>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                          <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                            <h5>In-Game Chatting Or Call</h5>
                          </ScrollAnimation>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                          <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                            <h5>Friend Blocking</h5>
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

