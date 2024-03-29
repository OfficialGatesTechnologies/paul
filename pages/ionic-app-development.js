
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
                    <title>{site_name} | Ionic App Development</title>
                    <meta name="distribution" content="Global" />
                    <meta name="revisit-after" content="1 days" />
                    <meta name="creator" content="officialgates (www.officialgates.com)" />
                    <meta name="publisher" content="officialgates (www.officialgates.com)" />
                </Head>

                 
                <div className="main-wrap">
                    <div className="inner-banner has-text-centered">
                    
                        <div className="inner-banner-cnt">
                        <div className="circle-ripple"><img src="../static/images/icons/ionic-dev.svg" alt="i"/> </div>
                        <ScrollAnimation animateIn="flipInY" initiallyVisible={false} animateOnce ="true">
                            <h4>Ionic App Development Company</h4>
                        </ScrollAnimation>
                            
                        </div>
                       
                    </div>
                    
                    <div className="page-cnt-wrap py-5 py-m-3 pb-0">
                        <div className="page-main-cnt pb-5 pb-m-2">
                        <ScrollAnimation animateIn="fadeInDown" initiallyVisible={false} animateOnce ="true">
                            <div className="container">
                            <h4>Leverage our proficiency to build robust ionic apps having great performance and functionality.</h4>
                            
                            <p>An Open-source framework which is used to build extremely interactive hybrid apps across distinguishes platforms such as iOS, Android. Ionic frameworks influence the power of Angular JS, HTML5, and CSS to provide the best performance and user experience.</p>

                            <p>Paul is the market leader at Ionic app development. We have extensive domain expertise and profound technical knowledge to provide robust, scalable, and cost-effective apps which enhances the user experience and enable our customer to outshine in the marketplace. Our ionic app development services include advanced integrated flawless apps that are highly functional and combine irresistible features to suit your business.</p>

                            <p>Our experienced team of Ionic framework developers follows the latest app development processes and methodologies to craft high-performing, feature-rich and robust Ionic app solutions for startups and big enterprises.</p>

                            <p>We have worked across diverse industry verticals over the years and catered mobile solutions to the business in diverse domains. We have catered an extensive range of industries like Banking & Finance, Healthcare, Travel & tourism, E-commerce etc. We offer our wide range of services not only in India but across many zones of the world including USA, UAE, Germany & Canada.</p>


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
                                <p className="ttl-p mx-410">We are reputed website development company offer high-rated and scalable web solutions in order to cater across the verticals.</p>
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

