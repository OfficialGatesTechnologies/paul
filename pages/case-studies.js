
import React, { Component } from 'react';
import Head from 'next/head';
import AliceCarousel from 'react-alice-carousel';
import { site_name } from '../utils/Common';
import { withRouter } from 'next/router';
import ScrollAnimation from 'react-animate-on-scroll';
import Link from 'next/link';
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
              <title>{site_name} | Case Studies</title>
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
                               
                      <h4>
                      <ScrollAnimation animateIn="flipInY" initiallyVisible={false} animateOnce ="true">
                      Case Studies
                      </ScrollAnimation>
                       </h4>
                                   
                </div>
              
              </div>

              <div className="page-cnt-wrap">
                
                
                {/* Work Case study section */}
                <div className="1case-study">
                  <div className="container">
                    <div className="banner-items columns">
                      <div className="banner-img column has-text-centered-mobile is-full-mobile ">
                      <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true"> 
                        <div className="w-min-app-img-first">
                        
                             <img src="../static/images/others/1-min-app.png" />
                       
                        </div>
                        <div className="w-min-app-pos">
                      
                        <img src="../static/images/others/2-min-app.png" />
                      </div>
                      </ScrollAnimation>
                      </div>
                      
                      <div className="banner-txt our-work-txt column has-text-centered-mobile">
                      <ScrollAnimation animateIn="slideInRight" initiallyVisible={false} animateOnce ="true"> 
                        
                        <div className="lg-tilte">
                        <h4>Rehmie Online Shopping App</h4>
                        </div>
                        <div className="work-carousel-txt font-md">
                          <p>
                          Rehmie All-In-One Social Networking Mobile App has been exclusively designed and developed for iPhone as well as the Android platform. .Mingle is an innovation for users who are immensely connected with social networking on their Smartphones. An easy user-interface which provide ease in chatting and connecting.
                          </p>
                          <div className="pt-2"><Link href="case-study-app-development"><a className="hightlight-a">Read the case study</a></Link></div>
                        </div>
                        
                         </ScrollAnimation>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="page-cnt-wrap">
                
                
                {/* Work Case study section */}
                <div className="1case-study">
                  <div className="container">
                    <div className="banner-items columns">
                     
                      
                      <div className="banner-txt our-work-txt column has-text-centered-mobile">
                      <ScrollAnimation animateIn="slideInLeft" initiallyVisible={false} animateOnce ="true"> 
                        
                        <div className="lg-tilte">
                        <h4>Rehmie Online Shopping Website</h4>
                        </div>
                        <div className="work-carousel-txt font-md">
                          <p>
                          Rehmie All-In-One Social Networking Mobile App has been exclusively designed and developed for iPhone as well as the Android platform. .Mingle is an innovation for users who are immensely connected with social networking on their Smartphones. An easy user-interface which provide ease in chatting and connecting.
                          </p>
                          <div className="pt-2"><Link href="case-study-app-development"><a className="hightlight-a">Read the case study</a></Link></div>
                        </div>
                        
                         </ScrollAnimation>
                      </div>
                      <div className="banner-img column has-text-centered-mobile is-full-mobile ">
                      <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true"> 
                        
                        <div className="w-min-app-pos1">
                      
                        <img src="../static/images/case-sty-rehmie.png" />
                      </div>
                      </ScrollAnimation>
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

