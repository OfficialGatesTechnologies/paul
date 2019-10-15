import React, { Component } from 'react';
import Head from 'next/head';
import { site_name } from '../utils/Common';
import { withRouter } from 'next/router';
import Link from 'next/link';
import ReactSVG from 'react-svg';
import ScrollAnimation from 'react-animate-on-scroll';
export default withRouter(class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
           
        }
    }

    componentDidMount = () => {
    }
    GenerateSVG = (image) => {
        return <ReactSVG src={image} />;
    }
    
    render() {
        return (
            <div>
                <Head>
                    <meta charSet="utf-8" />
                    <title>{site_name} | Prices</title>
                    <meta name="distribution" content="Global" />
                    <meta name="revisit-after" content="1 days" />
                    <meta name="creator" content="officialgates (www.officialgates.com)" />
                    <meta name="publisher" content="officialgates (www.officialgates.com)" />
                </Head>

                 
                <div className="main-wrap">
                    
                    <div className="page-cnt-wrap py-5 py-m-3 pb-0">
                        <div className="page-main-cnt pb-5 pb-m-2">
                            
                        <div className="pricing pricing-palden">
                          <div>
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
                          loading={() => <span>Loading</span>}
                          renumerateIRIElements={false}
                          wrapper="span"
                          className="wrapper-class-name"
                          onClick={() => {
                            console.log('wrapper onClick')
                          }} 
                          />
                          <h3 className="pricing-title-status">Entry</h3>
                                <div className="pricing-price"><span className="pricing-currency">£</span>449
                                
                                </div>
                                <h3 className="pricing-title">Perfect For Start Ups</h3>
                              </div>
                              <ul className="pricing-feature-list gold">
                              <li className="pricing-feature d-flex">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Fully responsive website</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Up to 20 Pages</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Free .co.uk domain (registered for 1 year)</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Free SSL Certificate</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Free hosting for 1 year</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Free core updates for 1 year</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Contact form sent to your designated email</span></li>
                                      
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Social media links</span></li>
                              </ul>
                              <div class="con-frm-btn has-text-centered pricing-action">
                                    <Link href="contact"><a class="theme-color ban-theme-btn" href="">Contact Me Now</a></Link>
                                </div>
                              
                            </div>
                            </ScrollAnimation> 
                          </div>
                            <div>
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
                                      <h3 className="pricing-title-status">Local</h3>
                                      <div className="pricing-price"><span className="pricing-currency">£</span>649
                                      
                                      </div>
                                      <h3 className="pricing-title">Perfect For Local Businesses</h3>
                                    </div>
                                    <ul className="pricing-feature-list silver">
                                    <li className="pricing-feature d-flex">
                                      <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                      <span className="pricing-list-feature">Fully responsive website</span></li>
                                      <li className="pricing-feature">
                                      <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                      <span className="pricing-list-feature">Up to 20 Pages</span></li>
                                      <li className="pricing-feature">
                                      <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                      <span className="pricing-list-feature">Free .co.uk domain (registered for 1 year)</span></li>
                                      <li className="pricing-feature">
                                      <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                      <span className="pricing-list-feature">Free SSL Certificate</span></li>
                                      <li className="pricing-feature">
                                      <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                      <span className="pricing-list-feature">Free hosting for 1 year</span></li>
                                      <li className="pricing-feature">
                                      <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                      <span className="pricing-list-feature">Free core updates for 1 year</span></li>
                                      <li className="pricing-feature">
                                      <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                      <span className="pricing-list-feature">Contact form sent to your designated email</span></li>
                                      <li className="pricing-feature">
                                      <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                      <span className="pricing-list-feature">Gallery</span></li>
                                      
                                      <li className="pricing-feature">
                                      <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                      <span className="pricing-list-feature">Social media links</span></li>
                                      <li className="pricing-feature">
                                      <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                      <span className="pricing-list-feature">Open Graph & Twitter Cards</span></li>
                                      <li className="pricing-feature">
                                      <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                      <span className="pricing-list-feature">Google Console account</span></li>
                                      <li className="pricing-feature">
                                      <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                      <span className="pricing-list-feature">Google My Business creation</span></li>
                                      <li className="pricing-feature">
                                      <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                      <span className="pricing-list-feature">Google Analytics</span></li>
                                      <li className="pricing-feature">
                                      <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                      <span className="pricing-list-feature">Google Map embedded into contact page</span></li>
                                    </ul>
                                    <div class="con-frm-btn has-text-centered pricing-action">
                                          <Link href="contact"><a class="theme-color ban-theme-btn" href="">Contact Me Now</a></Link>
                                      </div>
                                     
                                  </div>
                                  </ScrollAnimation>

                            </div>
                            <div>
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
                                    <h3 className="pricing-title-status">Professional</h3>
                                    <div className="pricing-price"><span className="pricing-currency">£</span>949
                                    
                                    </div>
                                    <h3 className="pricing-title">Perfect For SMEs & Professionals</h3>
                                  </div>
                                  <ul className="pricing-feature-list free">
                                    <li className="pricing-feature d-flex">
                                    <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                    <span className="pricing-list-feature">Fully responsive website</span></li>
                                    <li className="pricing-feature">
                                    <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                    <span className="pricing-list-feature">Up to 20 Pages</span></li>
                                    <li className="pricing-feature">
                                    <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                    <span className="pricing-list-feature">Free .co.uk domain (registered for 1 year)</span></li>
                                    <li className="pricing-feature">
                                    <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                    <span className="pricing-list-feature">Free SSL Certificate</span></li>
                                    <li className="pricing-feature">
                                    <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                    <span className="pricing-list-feature">Free hosting for 1 year</span></li>
                                    <li className="pricing-feature">
                                    <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                    <span className="pricing-list-feature">Free core updates for 1 year</span></li>
                                    <li className="pricing-feature">
                                    <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                    <span className="pricing-list-feature">Contact form sent to your designated email</span></li>
                                    <li className="pricing-feature">
                                    <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                    <span className="pricing-list-feature">Gallery</span></li>
                                    <li className="pricing-feature">
                                    <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                    <span className="pricing-list-feature">Blog</span></li>
                                    <li className="pricing-feature">
                                    <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                    <span className="pricing-list-feature">Social media links</span></li>
                                    <li className="pricing-feature">
                                    <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                    <span className="pricing-list-feature">Open Graph & Twitter Cards</span></li>
                                    <li className="pricing-feature">
                                    <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                    <span className="pricing-list-feature">Google Console account</span></li>
                                    <li className="pricing-feature">
                                    <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                    <span className="pricing-list-feature">Google My Business creation</span></li>
                                    <li className="pricing-feature">
                                    <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                    <span className="pricing-list-feature">Google Analytics</span></li>
                                    <li className="pricing-feature">
                                    <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                    <span className="pricing-list-feature">Google Map embedded into contact page</span></li>
                                    <li className="pricing-feature">
                                    <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                    <span className="pricing-list-feature">XML sitemap creation and submission</span></li>
                                    <li className="pricing-feature">
                                    <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                    <span className="pricing-list-feature">SEO page titles</span></li>
                                    <li className="pricing-feature">
                                    <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                    <span className="pricing-list-feature">SEO meta descriptions</span></li>
                                    <li className="pricing-feature">
                                    <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                    <span className="pricing-list-feature">Google page indexing</span></li>
                                  </ul>
                                  <div class="con-frm-btn has-text-centered pricing-action">
                                        <Link href="contact"><a class="theme-color ban-theme-btn" href="">Contact Me Now</a></Link>
                                    </div>
                                  
                                </div>
                                </ScrollAnimation>
                            </div>
    
  </div>
                            
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
})

