
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
              <title>{site_name} | Educational App Development Company</title>
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
                      src="../static/images/icons/education-icon-inner-top.svg"
                      alt="i"
                    />{" "}
                  </div>
                  <h4>Educational App Development Company</h4>
                </div>
              </div>

              <div className="page-cnt-wrap py-5 py-m-3 pb-0">
                <div className="page-main-cnt pb-5 pb-m-2">
                  <div className="container">
                    <h4>
                    Enhancing the Academic Experience with the Educational Mobility Solution.
                    </h4>
                    <p>
                    Technology has altered the face of the education industry. As the evolving economy is capitalizing on intellectual resources in the classroom, technological innovations have made it possible to push education beyond boundaries and develop workable learning modules through virtual learning.
                    </p>
                    <p>
                    Online learning is the new avenue in the education industry. According to the New York Times, online education not only extends cost savings for educators but also promotes efficient training for students.
                    </p>
                    <p>
                    With the educational apps, one can access data from any corner of the world. Therefore, the mobile apps are the most interactive and constructive way to attract the students towards studies and enhance their productivity. It also helps educators in teaching. Since mobile apps are must for educational sector, as most of the institutions, tutorial centers, and individual educators have changed their path of learning & earning.
                    </p>
                    <p>
                    With a deep understanding of how technology has converged the Education industry, Paul is an excellent technology partner for institutions looking to transform their ambiguities into a sustainable competitive advantage.
                    </p>
                    <p>
                    Along with the vast experience in app development field and with the adroit amount of research, Paul come up with high-revenue generating apps, right developed by the team of top mobile app developers comprises to design higher level education apps for custom needs of educational sectors.
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
                          <p>Education</p>
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
                        Educational App Development Features
                        </h1>
                        <p className="ttl-p mx-610">
                        In order to achieve the requirement of online education or e-learning, an educational mobile app must build using keen features which provide users' real time experience.


                        </p>
                      </div>
                      <div className="com-res py-5 py-m-3 pb-0">
                        <div className="columns is-multiline">
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                            <h5>Addition Of Courses</h5>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                            <h5>Advanced Search Criteria</h5>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                            <h5>Interactive Messaging</h5>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                            <h5>Completely Secure Login</h5>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                            <h5>Secure Transaction</h5>
                          </div>
                          <div className="column is-full-mobile is-6-tablet is-4-desktop">
                            <h5>Online Exam Practice</h5>
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

