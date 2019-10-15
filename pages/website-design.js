import React, { Component } from 'react';
import Head from 'next/head';
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
                    </div>
                    </div>
            </div>
        )
    }
})

