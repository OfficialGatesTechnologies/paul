
import React, { Component } from 'react';
import Head from 'next/head';
import Com_res from '../components/com-res';
import Win_deeds from '../components/win-deeds';
import Our_rec from '../components/our-rec';
import Key_indus from '../components/key-indus';
import { site_name } from '../utils/Common';
import { withRouter } from 'next/router';
import Tabs from 'react-responsive-tabs';
import ReactSVG from 'react-svg';
import renderHTML from 'react-render-html';
import ScrollAnimation from 'react-animate-on-scroll';
export default withRouter(class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabItems: [
                {
                  
                    title:'PHP',
                    image:'../static/images/icons/logo-php.svg',
                    tabContent:"PHP is launched for the feature-pack & elite website development. Our team of expert PHP developers combines the best technological frameworks to offer robust and cost-effective solutions to the users.",
                },
                {
                  
                    title:'Java',
                    image:'../static/images/icons/logo-java.svg',
                    tabContent:"From the release, java is used to develop scalable & secure mobile apps. Our team of canny developers uses this framework's flexibility to build the most innovative apps by leveraging the right java expertise in everything from architecture to implementation.",
                },
                {
                  
                    title:'HTML5',
                    image:'../static/images/icons/logo-html.svg',
                    tabContent:"HTML5 web development framework has led to a whole new era of web apps. Our HTML5 developers hold expertise in this technology and provide immaculate websites according to the user demand.",
                },
                {
                  
                    title:'Codeigniter',
                    image:'../static/images/icons/logo-codeigniter.svg',
                    tabContent:"Powered by MVC architectural design, Codignitor ensures safe, economical web development; our team of technical savvy makes quick deliveries of scalable web solutions in well-documented phases.",
                },
                {
                  
                    title:'Laravel',
                    image:'../static/images/icons/logo-laravel.svg',
                    tabContent:"Right from the release of Laravel, website development becomes a level easy. Backed up with the team of zealous developers who develop innovative apps with elegant design at high speed with Laravel.",
                },
                {
                  
                    title:'Angular JS',
                    image:'../static/images/icons/logo-angular.svg',
                    tabContent:"Powered by Google, Angular JS is an open source web app framework, which tackles the challenges encountered during developing the single-page app. Our developers uphold the dynamic and agile friendly approach towards web app development to build result-driven solutions.",
                }
        ]
        }
    }

    componentDidMount = () => {
    }
    GenerateSVG = (image,title) => {
        return <> <div className="tab-top"> <span className="tab-icon"><ReactSVG src={image} /></span> <p>{title}</p> </div></>;
    }
    getTabs = () => {
        return this.state.tabItems.map((president, index) => ({
            title: this.GenerateSVG(president.image,president.title),
            getContent: () => renderHTML(president.tabContent), 
            /* Optional parameters */
            key: index,
            tabClassName: 'tab',
            panelClassName: 'panel',
          }));
    }
    render() {
        return (
            <div>
                <Head>
                    <meta charSet="utf-8" />
                    <title>{site_name} | Xamarin App Development</title>
                    <meta name="distribution" content="Global" />
                    <meta name="revisit-after" content="1 days" />
                    <meta name="creator" content="officialgates (www.officialgates.com)" />
                    <meta name="publisher" content="officialgates (www.officialgates.com)" />
                </Head>

                 
                <div className="main-wrap">
                    <div className="inner-banner has-text-centered">
                    
                        <div className="inner-banner-cnt">
                        <div className="circle-ripple"><img src="../static/images/icons/xamarin-dev.svg" alt="i"/> </div>
                        <ScrollAnimation animateIn="flipInY" initiallyVisible={false} animateOnce ="true">
                            <h4>Xamarin App Development Company</h4>
                        </ScrollAnimation>
                        </div>
                       
                    </div>
                    
                    <div className="page-cnt-wrap py-5 py-m-3 pb-0">
                        <div className="page-main-cnt pb-5 pb-m-2">
                        <ScrollAnimation animateIn="fadeInDown" initiallyVisible={false} animateOnce ="true">
                            <div className="container">
                            <h4>Develop Hybrid Applications With The Power Of Xamarin & Boost Your Business Growth.</h4>
                            <p>Xamarin is a boon to all those startups & enterprises who requires alternative mobile solutions. It is an app development platform used for developing native and hybrid mobile applications. By using C# and Xamarin tools, we create native apps for different platforms include Android and iOS.</p>

                            <p>Paul is a reputed xamarin app development company based in India, which takes your enterprise mobile app strategy to the next level with most advanced Xamarin app development. Being a certified mobile app development partner, we help organizations in building complex business apps using our efficient project management process and transparent work methodologies.</p>

                            <p>We have a team of experienced developers who have in-depth knowledge and proficiency in C#, C, & Java which allow them to develop high-performance and lucrative cross-platform Xamarin apps. Our team performs a complete spectrum from analyzing, defining, testing, and deployment to ensure reliable and flexible delivery of the project.</p>

                            <p>Our Xamarin proficiency harnesses the power of our expertise to build native apps belonging to different platforms- Android-iOS. Our services for diverse business verticals are not only in India but also in USA, UAE, Germany, and Canada.</p>




                            </div>
                            </ScrollAnimation>
                        </div>
                        <div className="startup-grid py-5 py-m-3 theme-bg">
                            <div className="container">
                                <div className="mx-1000">
                                <div className="sec-ttl has-text-centered">
                                    <h1 className="ttl-head">We are in top web-based service provider for reasons</h1>
                                    <p className="ttl-p mx-610">Being an early adopter of latest technology, processes and tools, Our geeks are well versed in Programming Languages and Frameworks.</p>
                                </div>
                                <div className="com-res py-5 py-m-3 pb-0">
                                    <Com_res/>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="page-cnt-tab">
                            <section className="startup-sec py-5">
                            <div className="container">
                            <div className="sec-ttl has-text-centered">
                                <h1 className="ttl-head">Our Web-Based Services Includes</h1>
                                <p className="ttl-p mx-410">Being a leader of the web, we deliver a perfect blend of innovative web-based development services.</p>
                            </div>
                            
                            <div className="mx-1000">
                                <div className="pack-tab has-text-centered">
                                <ScrollAnimation animateIn="bounceIn" initiallyVisible={false} animateOnce ="true">
                                    <Tabs items={this.getTabs()} />
                                </ScrollAnimation>
                                </div>
                                </div>
                            </div>
                            </section>
                        </div>
                        <Win_deeds/>
                        <Our_rec/>
                        <Key_indus/>
                    </div>
                    </div>
            </div>
        )
    }
})

