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
                    <title>{site_name} | Website Hosting</title>
                    <meta name="distribution" content="Global" />
                    <meta name="revisit-after" content="1 days" />
                    <meta name="creator" content="officialgates (www.officialgates.com)" />
                    <meta name="publisher" content="officialgates (www.officialgates.com)" />
                </Head>

                 
                <div className="main-wrap">
                    
                    <div className="page-cnt-wrap pb-5 pt-5 py-m-3 pb-0">
                        <div className="page-main-cnt pb-0 pb-m-2">
                            
                                <div className="about-cnt pb-5">
                                <div className="container">
                                    <div className="columns is-multiline is-vcentered">
                                        
                                        <div className="column is-6-desktop">
                                        <ScrollAnimation animateIn="fadeInDown" delay={1000} initiallyVisible={false} animateOnce ="true">
                                            <div className="abt-top-cnt">
                                                
                                                <h1>WEB HOSTING</h1>
                                                <p>Are you looking for a UK based Web Hosting company which is fast and reliable? Look no further, here at 5 Star Web Design we provide all our packages with FREE SSL Certificate.</p>
                                                <p>All our packages listed below include 12 months FREE Domain Renewal.</p>
                                                   
                                            </div>
                                            </ScrollAnimation>
                                        </div>
                                        <div className="column is-6-desktop">
                                        <ScrollAnimation animateIn="flipInX" delay={1000} initiallyVisible={false} animateOnce ="true">
                                        <div className="abt-img cont-img"><img src="../static/images/webhosting.png" alt="img"/></div>
                                        </ScrollAnimation>
                                        </div>
                                    </div>
                                    
                                    </div>
                                </div>
                               
                            
                        </div>
                        
                    <div className="mx-1200 bg-light-gray py-5 has-text-center">
                        <div className="abt-top-cnt cus-prices mg-b-50">
                            <h1>OUR WEB HOSTING PACKAGES</h1>
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
                                <div className="pricing-price"><span className="pricing-currency">£</span>69.95<span className="sml-txt">/ PER YEAR</span>
                                
                                </div>
                             
                              </div>
                              <ul className="pricing-feature-list gold">
                              <li className="pricing-feature d-flex">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check text-green"></i></span>
                                <span className="pricing-list-feature">Unlimited Email Accounts</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check text-green"></i></span>
                                <span className="pricing-list-feature">Monthly Website Backup</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check text-green"></i></span>
                                <span className="pricing-list-feature">1 Hour FREE Training</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-times text-danger"></i></span>
                                <span className="pricing-list-feature">Support & Maintenance</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-times text-danger"></i></span>
                                <span className="pricing-list-feature">30 Days Facebook Support</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-times text-danger"></i></span>
                                <span className="pricing-list-feature">Live Chat On Site</span></li>
                               
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
                                      <div className="pricing-price"><span className="pricing-currency">£</span>99.95<span className="sml-txt">/ PER YEAR</span>
                                      
                                      </div>
                                     
                                    </div>
                                    <ul className="pricing-feature-list silver">
                                    <li className="pricing-feature d-flex">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check text-green"></i></span>
                                <span className="pricing-list-feature">Unlimited Email Accounts</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check text-green"></i></span>
                                <span className="pricing-list-feature">Monthly Website Backup</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check text-green"></i></span>
                                <span className="pricing-list-feature">2 Hour FREE Training</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check text-green"></i></span>
                                <span className="pricing-list-feature">Support & Maintenance</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-times text-danger"></i></span>
                                <span className="pricing-list-feature">30 Days Facebook Support</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-times text-danger"></i></span>
                                <span className="pricing-list-feature">Live Chat On Site</span></li>
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
                                    <div className="pricing-price"><span className="pricing-currency">£</span>149.95<span className="sml-txt">/ PER YEAR</span>
                                    
                                    </div>
                                 
                                  </div>
                                  <ul className="pricing-feature-list free">
                                  <li className="pricing-feature d-flex">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check text-green"></i></span>
                                <span className="pricing-list-feature">Unlimited Email Accounts</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check text-green"></i></span>
                                <span className="pricing-list-feature">Monthly Website Backup</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check text-green"></i></span>
                                <span className="pricing-list-feature">3 Hour FREE Training</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check text-green"></i></span>
                                <span className="pricing-list-feature">Support & Maintenance</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check text-green"></i></span>
                                <span className="pricing-list-feature">30 Days Facebook Support</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check text-green"></i></span>
                                <span className="pricing-list-feature">Live Chat On Site</span></li>
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

