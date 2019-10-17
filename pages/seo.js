import React, { Component } from 'react';
import Head from 'next/head';
import { site_name } from '../utils/Common';
import { withRouter } from 'next/router';
import ReactSVG from 'react-svg';
import ScrollAnimation from 'react-animate-on-scroll';
export default withRouter(class seo extends Component {

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
                    <title>{site_name} | Seo</title>
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
                                        <ScrollAnimation animateIn="flipInX" delay={1000} initiallyVisible={false} animateOnce ="true">
                                        <div className="abt-img cont-img w-90"><img src="../static/images/seo.png" alt="img"/></div>
                                        </ScrollAnimation>
                                        </div>
                                        <div className="column is-6-desktop">
                                        <ScrollAnimation animateIn="fadeInDown" delay={1000} initiallyVisible={false} animateOnce ="true">
                                            <div className="abt-top-cnt">
                                                
                                                <h1>SEARCH ENGINE OPTIMISATION</h1>
                                                <p>Are you looking to improve your website ranking on Google or other search engines? Search
                                                Engine Optimisation (SEO) will increase your website visibility, ranking, and performance.</p>
                                                <p>At WebsitePilot we are passionate about ensuring that your business and website are
                                                successful.</p>
                                                <p>Nowadays it is essential to have some level of online presence for your local business.</p>
                                                <p>Some clients choose to have a website created as a reference point for their regular
                                                  business so that prospective customers can view examples of their work, find contact details
                                                  and more information about their business.</p>
                                                <p>In cases like this, traffic will generally be driven to your website from offline-marketing. For
                                                example, this could be in the form of word-of-mouth referrals or somebody seeing your
                                                company advertised somewhere offline and then seeking out your business online.</p>
                                               <p>In other cases, clients choose to have a website created to actually generate new business
                                                leads and calls from people searching online for goods or services that they are interested
                                                in.</p>
                                                <p>If your aim is to generate new business online from prospective clients then it is essential
                                                that you improve your website’s ‘Search Visibility.’</p>
                                                <ul>
                                                  <li>Search visibility means how many relevant keywords you rank in Google for and
                                                  how high in Google you rank for your target keywords</li>
                                                </ul>
                                                <p>For example, if you run a plumbing business in Stockport you will want to appear on the first
                                                page of Google for search terms like ‘Plumbers in Stockport’. Additionally, you will want to
                                                appear in the Google maps search results.</p>
                                                <p>In order to achieve higher rankings in Google and other search engines, you must apply
                                                Search Engine Optimisation techniques to your website.</p>
                                            </div>
                                            </ScrollAnimation>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                               
                            
                        </div>
                        
                        <div className="mx-1200 bg-light-gray py-5 has-text-center">
                        <div className="abt-top-cnt cus-prices mg-b-50">
                            <h1 className="is-uppercase">SEO PACKAGES</h1>
                            <p>Can’t find a package to suit your business needs?</p>
                        </div>
                        <div className="container custom-web-design">
                        <div className="pricing pricing-palden columns is-multiline ">
                          <div className="column is-4-desktop"> 
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
                                <div className="pricing-price"><span className="pricing-currency">£</span>149.95
                                
                                </div>
                              
                              </div>
                              <ul className="pricing-feature-list gold">
                              <li className="pricing-feature d-flex">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Title Tags</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Meta Description</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Organic Keywords</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">H1, H2, H3 Tags Optimised</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Link Alt Tags</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Page Speed Optimised</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">CSS, HTML, JS Minify</span></li>
                                      
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Eliminate Render Blocking</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Google Analytics</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">404 Error Page Optimised</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Remove Duplicated Content</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Email & Tel Links</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Weekly Backups</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">.htaccess Optimised</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">SSL Certificate</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Fix Insecure Links & Resources</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Sitemap</span></li>
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
                                   
                                    </div>
                                    <ul className="pricing-feature-list silver">
                                    <li className="pricing-feature d-flex">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Title Tags</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Meta Description</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Organic Keywords</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">H1, H2, H3 Tags Optimised</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Image Size Optimised</span></li>
                                
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Image Hyperlinks</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Image Alt Tags</span></li>
                                      
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Link Alt Tags</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Internal Page Linking</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">External Page Linking</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Call to Action</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Page Speed Optimised</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">CSS, HTML, JS Minify</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Eliminate Render Blocking</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Google Analytics</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">404 Error Page Optimised</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Remove Duplicated Content</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">F.A.Q's Section</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Email & Tel Links</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Social Media Integration</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Permalinks Optimised</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">.htaccess Optimised</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Robot.txt Optimised</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">SSL Certificate</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Fix Insecure Links & Resources</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Sitemap</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Wordfence Security</span></li>
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
                                   
                                  </div>
                                  <ul className="pricing-feature-list free">
                                  <li className="pricing-feature d-flex">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Title Tags</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Meta Description</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Organic Keywords</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">H1, H2, H3 Tags Optimised</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Image Size Optimised</span></li>
                                
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Image Hyperlinks</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Image Alt Tags</span></li>
                                      
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Link Alt Tags</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Internal Page Linking</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">External Page Linking</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Call to Action</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">SEO Optimised Content</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Page Speed Optimised</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">CSS, HTML, JS Minify</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Eliminate Render Blocking</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Google Analytics</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Google Search Console</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Google My Business Page</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Redirects Old to New</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">404 Error Page Optimised</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Remove Duplicated Content</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Blog Section Optimised</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">F.A.Q's Section</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Email & Tel Links</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Social Media Integration</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Social Media Optimised</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Permalinks Optimised</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Mobile Optimised</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Weekly Backups</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">.htaccess Optimised</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Robot.txt Optimised</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">SSL Certificate</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Fix Insecure Links & Resources</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Sitemap</span></li>
                                <li className="pricing-feature">
                                <span className="flex-1 mr-2 mt-4"><i className="fa fa-check"></i></span>
                                <span className="pricing-list-feature">Wordfence Security</span></li>
                                  </ul>
                                 
                                  
                                </div>
                                </ScrollAnimation>
                            </div>
    
  </div>
                        </div>
                    </div>
                                            
                    </div>
                    </div>
            </div></div>
        )
    }
})

