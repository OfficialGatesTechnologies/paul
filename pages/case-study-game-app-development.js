
import React, { Component } from 'react';
import Head from 'next/head';

import AliceCarousel from 'react-alice-carousel';
import { site_name } from '../utils/Common';
import { withRouter } from 'next/router';


export default withRouter(class Index extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
          testimonialItems : {
            0: { items: 1 },
          },
          ourRecItems : {
            0: { items: 1 },
          },
          brandsItems : {
            575: { items: 3 },
            768: { items: 4 },
          }
        }
    }

    componentDidMount = () => {
    }
    
    render() {
      
        return (
          <div>
            <Head>
              <meta charSet="utf-8" />
              <title>{site_name} | Case Study of Game App</title>
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
              <div className="inner-banner case-study-bg has-text-centered" style={{ backgroundImage: `url("../static/images/others/case-st-page-top.jpg")` }}>
                <div className="inner-banner-cnt pos-inner-gradi">
                  {/* <div className="circle-ripple">
                    <img
                      src="../static/images/icons/soc-icon-inner-top.svg"
                      alt="i"
                    />{" "}
                  </div> */}
                  <h4>Case Study of <span className="has-text-weight-light">Shopping App</span> </h4>
                </div>
              </div>

              <div className="page-cnt-wrap py-5 py-m-3 pb-0">
                <div className="page-main-cnt pb-5 pb-m-2 font-md">
                  <div className="container lg-tilte">
                    <h4>
                    Introductory
                    </h4>
                    <p className="has-text-centered">
                    Get your brain exercised with Baranoy where several categories are available that throws number of questions on you and you have to find the right one. If, you have a high surety for the correct than you are let to choose the highest bid available there to increase your point which you will be able to redeem in your next quiz. There are different levels available to train your brain to work faster.
                    </p>
                  </div>
                </div>
                <div className="client-case-study">
                  <div className="container lg-tilte">
                    <div className="sec-box-bg">
                    <h4>
                  CLIENT REQUIREMENTS
                    </h4>

                    <div className="com-res mg-t-20">
                        <div className="columns is-multiline">
                            <div className="column is-full-mobile is-6-tablet is-4-desktop">
                                <h5>Attract the Market Audience</h5>
                            </div>
                            <div className="column is-full-mobile is-4-tablet is-4-desktop">
                                <h5>Live Tracking</h5>
                            </div>
                            <div className="column is-full-mobile is-6-tablet is-4-desktop">
                                <h5>Re - Order services opted in past.</h5>
                            </div>
                            <div className="column is-full-mobile is-6-tablet is-4-desktop">
                                <h5>Multiple restaurant in a single order.</h5>
                            </div>
                            <div className="column is-full-mobile is-6-tablet is-4-desktop">
                                <h5>Search based on dish, restaurants.</h5>
                            </div>
                            <div className="column is-full-mobile is-6-tablet is-4-desktop">
                                <h5>Application useful for Small shops/ restaurants.</h5>
                            </div>
                            <div className="column is-full-mobile is-6-tablet is-4-desktop">
                                <h5>Rating & Reviews for the services.</h5>
                            </div>
                        </div>
                    </div>
                    </div>
                  
                  </div>
                </div>
                {/* Work Case study section */}
                <div className="1case-study">
                  <div className="container">
                    <div className="banner-items columns">
                      <div className="banner-img column has-text-centered-mobile is-full-mobile ">
                        <div className="w-min-app-img-first">
                        <img src="../static/images/others/1-min-app.png" />
                        </div>
                        <div className="w-min-app-pos">
                      
                        <img src="../static/images/others/2-min-app.png" />
                      </div>
                        
                      </div>
                      
                      <div className="banner-txt our-work-txt column has-text-centered-mobile">
                        <div className="lg-tilte">
                        <h4>PROJECT CHALLENGE</h4>
                        </div>
                        <div className="work-carousel-txt font-md">
                          <p>
                          Rehmie All-In-One Social Networking Mobile App has been exclusively designed and developed for iPhone as well as the Android platform. .Mingle is an innovation for users who are immensely connected with social networking on their Smartphones. An easy user-interface which provide ease in chatting and connecting.
                          </p>
                        </div>
                        <div className="d-block bg-round-box has-text-centered-mobile">
                            <img src="../static/images/others/work-logo-01.png" />
                         </div>
                       
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Work Case study section */}
                 {/* Start Work how-we-solve section */}
                <div className="how-we-solve-case-study ">
                  <div className="container">
                    <div className="banner-items columns">
                      
                      
                      <div className="banner-txt our-work-txt column has-text-centered-mobile">
                        <div className="how-solive-txt">
                        <div className="lg-tilte">
                        <h4>HOW WE SOLVE?</h4>
                        </div>
                        <div className="work-carousel-txt font-md has-text-left-mobile">
                          <div className="how-solve-cont-title">
                            <h4>Gathers the ideas</h4>
                            <p>As, we have a glimpse of ideas fluctuating in each of our mind, started to get into it make a research and gathered the fullest of the knowledge.</p>
                          </div>

                          <div className="how-solve-cont-title">
                            <h4>Collaborated</h4>
                            <p>We, collaborated each idea and way out the best of it.</p>
                          </div>
                          <div className="how-solve-cont-title">
                            <h4>Implemented & Tested</h4>
                            <p>Our, unit implemented it with worthless efforts with a loop of implementing - testing untill we have a cream of our effort.</p>
                          </div>
                          <div className="how-solve-cont-title">
                            <h4>Presented</h4>
                            <p>We presented a result that is the replica of the need.</p>
                          </div>
                          
                        </div>
                        
                        </div>
                        
                       
                      </div>
                      <div className="banner-img column has-text-centered-mobile is-full-mobile is-half-tablet is-one-fifths-desktop">
                        <div className="w-min-app-img-first1 has-text-centered-mobile">
                        <img src="../static/images/others/how-solve-img.png" />
                        </div>
                        
                        
                      </div>
                    </div>
                  </div>
                </div>
                 {/* End Work how-we-solve section */}
                 <div className="brand-case py-0 py-m-3">
                 <section className="py-5">
                    
                    <div className="container">

                        <div className="brands-carousel mx-800">
                            <AliceCarousel responsive={this.state.brandsItems} mouseDragEnabled  buttonsDisabled ={true}>
                                <div className="brand-img-wrap"><img src="../static/images/others/brand-01.png"/></div>
                                <div className="brand-img-wrap"><img src="../static/images/others/brand-02.png"/></div>
                                <div className="brand-img-wrap"><img src="../static/images/others/brand-03.png"/></div>
                                <div className="brand-img-wrap"><img src="../static/images/others/brand-04.png"/></div>
                                <div className="brand-img-wrap"><img src="../static/images/others/brand-03.png"/></div>
                                <div className="brand-img-wrap"><img src="../static/images/others/brand-01.png"/></div>
                                <div className="brand-img-wrap"><img src="../static/images/others/brand-04.png"/></div>
                                <div className="brand-img-wrap"><img src="../static/images/others/brand-02.png"/></div>
                                <div className="brand-img-wrap"><img src="../static/images/others/brand-01.png"/></div>
                                <div className="brand-img-wrap"><img src="../static/images/others/brand-02.png"/></div>
                                <div className="brand-img-wrap"><img src="../static/images/others/brand-03.png"/></div>
                                <div className="brand-img-wrap"><img src="../static/images/others/brand-04.png"/></div>
                            </AliceCarousel>
                        </div>

                    </div>
                </section>
                 </div>
                 {/* Start Work MORE CASE STUDIES and CLIENT REVIEWS */}
                <div className="1 py-0 py-m-3">
                  <div className="container1">
                  <div className="columns is-gapless">
                  <div className="column has-text-centered-mobile bg-light-low is-full-mobile is-half-tablet">
                  <section className="startup-sec py-5">
                  <div className="sec-ttl testimonial-ttl has-text-centered">
                        <h1 className="ttl-head has-text-black">MORE CASE STUDIES</h1>
                    </div>
               
                   

                    <div className="container">
                    <div className="our-rec-slider has-text-centered">
                        <AliceCarousel responsive={this.state.ourRecItems} mouseDragEnabled  buttonsDisabled ={true}>
                            <div className="mg-t-30 is-shadowless mx-720">
                                <div className="our-rec-img is-relative margin-auto">
                                <img src="../static/images/others/pro-logo-01.png" alt="image"/>
                                
                                </div>
                                <h4 className="mg-t-20 sub-title has-text-black is-uppercase">Case Study of Flipcanvas app</h4>
                            </div>
                            <div className="mg-t-30 is-shadowless mx-720">
                                <div className="our-rec-img is-relative margin-auto">
                                <img src="../static/images/others/pro-logo-01.png" alt="image"/>
                                </div>
                                <h4 className="mg-t-20 sub-title has-text-black is-uppercase">Case Study of Flipcanvas app</h4>
                            </div>
                            <div className="mg-t-30 is-shadowless mx-720">
                                <div className="our-rec-img is-relative margin-auto">
                                <img src="../static/images/others/pro-logo-01.png" alt="image"/>
                                </div>
                                <h4 className="mg-t-20 sub-title has-text-black is-uppercase">Case Study of Flipcanvas app</h4>
                            </div>
                        </AliceCarousel>
                    </div>
                    </div>

                </section>
                  </div>
                      <div className="column has-text-centered-mobile is-full-mobile is-half-tablet">
                      <section className="startup-sec testimonials1 bg-secound-light-color py-5">
                    <div className="sec-ttl testimonial-ttl has-text-centered">
                        <h1 className="ttl-head">CLIENT REVIEWS</h1>
                    </div>
                    <div className="container">

                        <div className="testimonial-carousel mx-900">
                            <AliceCarousel responsive={this.state.testimonialItems} mouseDragEnabled  buttonsDisabled ={true}>
                                <div className="testimonial-cnt-wrap">
                                    <div className="testimonial-avatar"><img src="../static/images/others/test-avatar.png"/></div>
                                    <div className="testimonial-caps">
                                        <h5>Brilliancy Comes With Officialgates</h5>
                                        <p>Professionalism, excellence, client attention, precise and great communication are only a few aspect of the way Officialgates works. 
Since the first approach, to their proposal with sketches and to the final delivery is a great process of professional work. There is a 
constant communication in order to have your idea being put into a concrete working app</p>
                                        <span className="testimonial-name">Gianluca</span>
                                    </div>
                                </div>
                                <div className="testimonial-cnt-wrap">
                                    <div className="testimonial-avatar"><img src="../static/images/others/test-avatar.png"/></div>
                                    <div className="testimonial-caps">
                                        <h5>Brilliancy Comes With Officialgates</h5>
                                        <p>Professionalism, excellence, client attention, precise and great communication are only a few aspect of the way Officialgates works. 
Since the first approach, to their proposal with sketches and to the final delivery is a great process of professional work. There is a 
constant communication in order to have your idea being put into a concrete working app</p>
                                        <span className="testimonial-name">Gianluca</span>
                                    </div>
                                </div>
                                <div className="testimonial-cnt-wrap">
                                    <div className="testimonial-avatar"><img src="../static/images/others/test-avatar.png"/></div>
                                    <div className="testimonial-caps">
                                        <h5>Brilliancy Comes With Officialgates</h5>
                                        <p>Professionalism, excellence, client attention, precise and great communication are only a few aspect of the way Officialgates works. 
Since the first approach, to their proposal with sketches and to the final delivery is a great process of professional work. There is a 
constant communication in order to have your idea being put into a concrete working app</p>
                                        <span className="testimonial-name">Gianluca</span>
                                    </div>
                                </div>
                            </AliceCarousel>
                        </div>

                    </div>
                </section>
                      </div>
                    </div>
                  </div>
                </div>
                 {/* End Work MORE CASE STUDIES and CLIENT REVIEWS */}
                
                
              </div>
            </div>
          </div>
        );
    }
})

