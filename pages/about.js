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
                    <title>{site_name} | About</title>
                    <meta name="distribution" content="Global" />
                    <meta name="revisit-after" content="1 days" />
                    <meta name="creator" content="officialgates (www.officialgates.com)" />
                    <meta name="publisher" content="officialgates (www.officialgates.com)" />
                </Head>

                 
                <div className="main-wrap">
                    
                    <div className="page-cnt-wrap py-5 py-m-3 pb-0">
                        <div className="page-main-cnt pb-5 pb-m-2">
                            
                                <div className="about-cnt">
                                <div className="container">
                                    <div className="columns is-multiline is-vcentered">
                                        <div className="column is-6-desktop">
                                        <ScrollAnimation animateIn="flipInX" delay={1000} initiallyVisible={false} animateOnce ="true">
                                        <div className="abt-img"><img src="../static/images/others/about.png" alt="img"/></div>
                                        </ScrollAnimation>
                                        </div>
                                        <div className="column is-6-desktop">
                                        <ScrollAnimation animateIn="flipInX" delay={1000} initiallyVisible={false} animateOnce ="true">
                                            <div className="abt-top-cnt">
                                                <h6>About us</h6>
                                                <h1>Take a quick tour of about us!</h1>
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here. Many desktop publishing packages and web page editors web sites. </p>
                                                    <ul>
                                                        <li>Adipiscing sem neque sed ipsum. Nam quam</li>
                                                        <li>Honcus, sem quam semper libero, sit amet adipiscing sem neque</li>
                                                        <li>Ulamcorper ultricies nisi. Nam eget dui. Etiam rhoncus</li>
                                                        <li>Maecenas tempus, tellus eget condimentum rhoncus</li>
                                                    </ul>
                                            </div>
                                            </ScrollAnimation>
                                        </div>
                                    </div>
                                   
                                   
                                    <div className="abt-grid-sec pt-5">
                                        <div className="columns is-multiline">
                                            <div className="column is-full-tablet is-4-desktop">
                                            <ScrollAnimation delay={1500} animateIn="flipInY" initiallyVisible={false} animateOnce ="true">
                                                <div className="abt-grid-wrap">
                                                    <div className="abt-grid-img abt-grid-img-01">
                                                        <span>01</span>
                                                    </div>
                                                    <div className="abt-grid-cnt">
                                                        <h3>Converstion with <br/> Client</h3>
                                                        <p>Quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.</p>
                                                    </div>
                                                </div>
                                                </ScrollAnimation>
                                            </div>
                                            <div className="column is-full-tablet is-4-desktop">
                                            <ScrollAnimation delay={1500} animateIn="flipInY" initiallyVisible={false} animateOnce ="true">
                                                <div className="abt-grid-wrap">
                                                    <div className="abt-grid-img abt-grid-img-02">
                                                        <span>02</span>
                                                    </div>
                                                    <div className="abt-grid-cnt">
                                                        <h3>Find the relevent <br/> problem</h3>
                                                        <p>Quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.</p>
                                                    </div>
                                                </div>
                                                </ScrollAnimation>
                                            </div>
                                            <div className="column is-full-tablet is-4-desktop">
                                            <ScrollAnimation delay={1500} animateIn="flipInY" initiallyVisible={false} animateOnce ="true">
                                                <div className="abt-grid-wrap">
                                                    <div className="abt-grid-img abt-grid-img-03">
                                                        <span>03</span>
                                                    </div>
                                                    <div className="abt-grid-cnt">
                                                        <h3>Start the<br/> project</h3>
                                                        <p>Quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.</p>
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
                    </div>
            </div>
        )
    }
})

