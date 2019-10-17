import React, { Component } from 'react';
import Head from 'next/head';
import { site_name } from '../utils/Common';
import { withRouter } from 'next/router';
import ReactSVG from 'react-svg';
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
                    <title>{site_name} | Website Design</title>
                    <meta name="distribution" content="Global" />
                    <meta name="revisit-after" content="1 days" />
                    <meta name="creator" content="officialgates (www.officialgates.com)" />
                    <meta name="publisher" content="officialgates (www.officialgates.com)" />
                </Head>

                 
                <div className="main-wrap">
                    
                    <div className="page-cnt-wrap pb-5 pt-3 py-m-3 pb-0">
                        <div className="page-main-cnt pb-5 pb-m-2">
                            
                                <div className="about-cnt">
                                <div className="container">
                                    <div className="columns is-multiline is-vcentered">
                                        
                                        <div className="column is-6-desktop">
                                        <ScrollAnimation animateIn="fadeInDown" delay={1000} initiallyVisible={false} animateOnce ="true">
                                            <div className="abt-top-cnt">
                                                
                                                <h1>WEB DESIGN</h1>
                                                <p>We create bespoke, stylish websites that help you to promote your business and build your
                                                online presence. Our aim is not only to provide you with a fantastic looking, easy-to-
                                                navigate, customer friendly website but also deliver a final product that actually generates
                                                calls and enquiries to your business.</p>
                                                <p>Whether you are looking for a simple brochure type website to showcase your business or
                                                 you require something more advanced, we are here to help you get online.</p>
                                                   
                                            </div>
                                            </ScrollAnimation>
                                        </div>
                                        <div className="column is-6-desktop">
                                        <ScrollAnimation animateIn="flipInX" delay={1000} initiallyVisible={false} animateOnce ="true">
                                        <div className="abt-img cont-img"><img src="../static/images/icons/website-design.svg" alt="img"/></div>
                                        </ScrollAnimation>
                                        </div>
                                    </div>
                                    <div className="columns is-multiline is-vcentered">
                                    <div className="column is-6-desktop">
                                        <ScrollAnimation animateIn="flipInX" delay={1000} initiallyVisible={false} animateOnce ="true">
                                        <div className="abt-img cont-img"><img src="../static/images/icons/custom-sdesign.svg" alt="img"/></div>
                                        </ScrollAnimation>
                                        </div>
                                        <div className="column is-6-desktop">
                                        <ScrollAnimation animateIn="fadeInDown" delay={1000} initiallyVisible={false} animateOnce ="true">
                                            <div className="abt-top-cnt">
                                                
                                                <h1>HAND-CODED CUSTOM WEBSITES</h1>
                                                <p>Whilst using popular frameworks such as WordPress and Wix have some benefits such as
                                                    speed of development and thousands of ready-made templates to use, there are a number
                                                    of downsides to using software like this to create your website ranging from a lack of
                                                    flexibility, limited customisation options, poor performance to issues with Search Engine
                                                    Optimisation (SEO).</p>
                                                <p>We believe it is extremely important to understand every line of code that powers your
                                                website so that any performance issues can be quickly addressed, upgrades can be easily
                                                integrated and further development of your website in the future is not restricted by the
                                                limitations of an off-the-shelf website building software such as Wix.</p>
                                                <p>All of our websites are 100% hand-coded using the latest technologies which facilitate top
                                                    performance, loading speed and customisation. This allows us to have complete control and
                                                    flexibility of the code which powers your website.</p>
                                                   
                                            </div>
                                            </ScrollAnimation>
                                        </div>
                                       
                                    </div>
                                   
                                        
                                      
                                    
                                    </div>
                                </div>
                               
                            
                        </div>
                        <div className="mx-1200 bg-light-gray py-5 has-text-center">
                            <div className="container custom-web-design">
                            
                            <div className="columns is-multiline">
                                <div className="column is-3-tablet">
                                <ScrollAnimation initiallyVisible={false} animateOnce ="true" animateIn="flipInY">
                                <div className="startup-grid-in cus-in-hov">
                                    <div className="startup-grid-img cus-img">
                                        <img src="../static/images/icons/discussion.svg" alt="image" />
                                    </div>
                                    <div className="startup-grid-cnt content-cus">
                                        <h4>INITIAL DISCUSSION</h4>
                                        <p>Discuss your brief. What do you want to achieve? Any specific
    requirements?</p>
                                    </div>
                                </div>
                                </ScrollAnimation>
                                </div>
                                <div className="column is-3-tablet">
                                <ScrollAnimation initiallyVisible={false} animateOnce ="true" animateIn="flipInY">
                                <div className="startup-grid-in cus-in-hov">
                                    <div className="startup-grid-img cus-img">
                                        <img src="../static/images/icons/website-draft.svg" alt="image" />
                                    </div>
                                    <div className="startup-grid-cnt content-cus">
                                        <h4>DRAFT WEBSITE</h4>
                                        <p>We will create and provide you with a number of design templates so you
    can choose which aspects you like</p>
                                    </div>
                                </div>
                                </ScrollAnimation>
                                </div>
                                <div className="column is-3-tablet">
                                <ScrollAnimation initiallyVisible={false} animateOnce ="true" animateIn="flipInY">
                                <div className="startup-grid-in cus-in-hov">
                                    <div className="startup-grid-img cus-img">
                                        <img src="../static/images/icons/design-confirm.svg" alt="image" />
                                    </div>
                                    <div className="startup-grid-cnt content-cus">
                                        <h4>DESIGN CONFIRMATION</h4>
                                        <p>We will create a final design template. You can request any
    changes to design, layout, headings before confirming the design</p>
                                    </div>
                                </div>
                                </ScrollAnimation>
                                </div>
                                <div className="column is-3-tablet">
                                <ScrollAnimation initiallyVisible={false} animateOnce ="true" animateIn="flipInY">
                                <div className="startup-grid-in cus-in-hov">
                                    <div className="startup-grid-img cus-img">
                                        <img src="../static/images/icons/website-launch.svg" alt="image" width="82px" height="82px"/>
                                    </div>
                                    <div className="startup-grid-cnt content-cus">
                                        <h4>WEBSITE LAUNCH</h4>
                                        <p>Delivery of your website and setting live on your domain name</p>
                                    </div>
                                </div>
                                </ScrollAnimation>
                                </div>
                                
                            </div>
                            
                            </div>
                    </div>
                    <div className="mx-1200 py-5 has-text-center">
                        <div className="abt-top-cnt cus-prices mg-b-50">
                            <h1>OUR WEB DESIGN PACKAGES</h1>
                            <p>Can’t find a package to suit your business needs?</p>
                        </div>
                        <div className="container custom-web-design">
                        <div className="pricing pricing-palden">
                          <div className="column is-4-tablet"> 
                          <ScrollAnimation initiallyVisible={false} animateOnce ="true" animateIn="fadeInRight"> 
                          <div className="pricing-item">
    
                              <div className="pilot-pricing-gk Gold">
                              <ReactSVG src="../static/images/icons/pric-svg.svg"
                          afterInjection={(error, svg) => {
                            if (error) {
                              console.error(error)
                              return
                            }
                            console.log(svg)
                          }}
                          beforeInjection={svg => {
                            svg.classList.add('svg-class-name')
                            svg.setAttribute('style', 'width: 200px')
                          }}
                          evalScripts="always"
                          fallback={() => <span>Error!</span>}
                         
                          renumerateIRIElements={false}
                          wrapper="span"
                          className="wrapper-class-name"
                          onClick={() => {
                            console.log('wrapper onClick')
                          }} 
                          />
                          <h3 className="pricing-title-status">SILVER</h3>
                                <div className="pricing-price"><span className="pricing-currency">£</span>449
                                
                                </div>
                                <h3 className="pricing-title">Website Delivered in 7 Working Days</h3>
                              </div>
                              <ul className="pricing-feature-list gold">
                              <li className="pricing-feature d-flex">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">5 Page Bespoke Design</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">12 Months Web Hosting</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">12 Months Domain Registration</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">2x Business Email Accounts</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Google Map Integration</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Social Media Integration</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Contact Form to Email</span></li>
                                      
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Request a Call Back Form</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">On - Site SEO & Keywords</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Google & Bing Submission</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Monthly Google Analytics Report</span></li>
                              </ul>
                             
                              
                            </div>
                            </ScrollAnimation> 
                          </div>
                            <div className="column is-4-tablet">
                            <ScrollAnimation initiallyVisible={false} animateOnce ="true" animateIn="fadeInDown">
                            <div className="pricing-item pricing__item--featured">
                                
                                    <div className="pilot-pricing-gk silver">
                                    <ReactSVG src="../static/images/icons/pric-svg.svg"
                                afterInjection={(error, svg) => {
                                  if (error) {
                                    console.error(error)
                                    return
                                  }
                                  console.log(svg)
                                }}
                                beforeInjection={svg => {
                                  svg.classList.add('svg-class-name')
                                  svg.setAttribute('style', 'width: 200px')
                                }}
                                evalScripts="always"
                                fallback={() => <span>Error!</span>}
                                loading={() => <span>Loading</span>}
                                renumerateIRIElements={false}
                                wrapper="span"
                                className="wrapper-class-name"
                                onClick={() => {
                                  console.log('wrapper onClick')
                                }} 
                                />
                                      <h3 className="pricing-title-status">GOLD</h3>
                                      <div className="pricing-price"><span className="pricing-currency">£</span>249.95
                                      
                                      </div>
                                      <h3 className="pricing-title">Website Delivered in 10 Working Days</h3>
                                    </div>
                                    <ul className="pricing-feature-list silver">
                                    <li className="pricing-feature d-flex">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">10 Page Bespoke Design</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">12 Months Web Hosting</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">12 Months Domain Registration</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">5x Business Email Accounts</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Google Map Integration</span></li>
                                
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Social Media Integration</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Contact Form to Email</span></li>
                                      
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Request a Call Back Form</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">On - Site SEO & Keywords</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Google & Bing Submission</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">On - Site Live Chat</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Weekly Site & Email Backup</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Online Shop & Payments</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Social Media Page Design</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">500 Facebook Page Likes</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Weekly Google Analytics Report</span></li>
                                    </ul>
                                    
                                     
                                  </div>
                                  </ScrollAnimation>

                            </div>
                            <div className="column is-4-tablet">
                            <ScrollAnimation initiallyVisible={false} animateOnce ="true" animateIn="fadeInLeft">
                            <div className="pricing-item">
                                
                                  <div className="pilot-pricing-gk free">
                                  <ReactSVG src="../static/images/icons/pric-svg.svg"
                              afterInjection={(error, svg) => {
                                if (error) {
                                  console.error(error)
                                  return
                                }
                                console.log(svg)
                              }}
                              beforeInjection={svg => {
                                svg.classList.add('svg-class-name')
                                svg.setAttribute('style', 'width: 200px')
                              }}
                              evalScripts="always"
                              fallback={() => <span>Error!</span>}
                              loading={() => <span>Loading</span>}
                              renumerateIRIElements={false}
                              wrapper="span"
                              className="wrapper-class-name"
                              onClick={() => {
                                console.log('wrapper onClick')
                              }} 
                              />
                                    <h3 className="pricing-title-status">PLATINUM</h3>
                                    <div className="pricing-price"><span className="pricing-currency">£</span>399.95
                                    
                                    </div>
                                    <h3 className="pricing-title">Website Delivered in 14 Working Days</h3>
                                  </div>
                                  <ul className="pricing-feature-list free">
                                  <li className="pricing-feature d-flex">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">30 Page Bespoke Design</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">18 Months Web Hosting</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">12 Months Domain Registration</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Unlimited Email Accounts</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Google Map Integration</span></li>
                                
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Social Media Integration</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Contact Form to Email</span></li>
                                      
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Request a Call Back Form</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">On - Site SEO & Keywords</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Google & Bing Submission</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">On - Site Live Chat</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Daily Site & Email Backup</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">eCommerce Shop</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Social Media Page Design</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">1000 Facebook Page Likes</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Newsletter Signup</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">cPanel Login Details</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Security Scan & Malware Check</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Daily Google Analytics Report</span></li>
                                  </ul>
                                 
                                  
                                </div>
                                </ScrollAnimation>
                            </div>
    
  </div>
                        </div>
                    </div>
                                            
                    </div>
                    </div>
            </div>
        )
    }
})

