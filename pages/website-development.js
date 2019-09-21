
import React, { Component } from 'react';
import Head from 'next/head';
import Banner from '../components/banner';
import Com_res from '../components/com-res';
import Win_deeds from '../components/win-deeds';
import Our_rec from '../components/our-rec';
import Key_indus from '../components/key-indus';
import { site_name } from '../utils/Common';
import { withRouter } from 'next/router';
import Link from 'next/link'

import Tabs from 'react-responsive-tabs';
import ReactSVG from 'react-svg';
import renderHTML from 'react-render-html';

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
                  
                    title:'Zend',
                    image:'../static/images/icons/logo-zend.svg',
                    tabContent:"Reveal the true power of web-based apps with open-source, robust, object-oriented Zend. We have qualified team of developers who know Zend platform inside out, and develop scalable, robust & cherish able app & web solutions",
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
                    <title>{site_name} | Website Development</title>
                    <meta name="distribution" content="Global" />
                    <meta name="revisit-after" content="1 days" />
                    <meta name="creator" content="officialgates (www.officialgates.com)" />
                    <meta name="publisher" content="officialgates (www.officialgates.com)" />
                </Head>

                 
                <div className="main-wrap">
                    <div className="inner-banner has-text-centered">
                    
                        <div className="inner-banner-cnt">
                        <div className="circle-ripple"><img src="../static/images/icons/web-dev.svg" alt="i"/> </div>
                            <h4>Website Design & Web App Development</h4>
                        </div>
                       
                    </div>
                    
                    <div className="page-cnt-wrap py-5 py-m-3 pb-0">
                        <div className="page-main-cnt pb-5 pb-m-2">
                            <div className="container">
                            <h4>Providing Responsive, User Centric and Scalable Web Apps</h4>
                            <p>Your website is the first introduction of your business in today's digital era, Its says a lot about your business, services vision and mission. Keeping that in mind we as an experience Web Development Company always focus on building highly user engaged web solutions that are incorporated with latest web technology and match with latest SEO guidelines.</p>
                            <p>Our highly skilled web developers are experienced in developing responsive, scalable Web Solutions which is capable of catering huge amount of traffic without any performance hurdles. With a flexibility in our engagement models we open opportunity to meet each and every segment of the business to extend their reach of business on digital platform.</p>
                            <p>Up to date technology stack and eager to be in sync with latest development methodologies makes us a prominent choice among web development service providers. We have experienced developers for MEAN, MERN and LAMP Stack which enables us to cater diversified requirement of various business into a scalable, responsive and robust web applications.</p>
                            <p>Paul offers wide variety of technologies like Wordpress, Node JS, Angular, PHP, Zoomla, Codeigniter, Zend Framework, PHP to build front end and backend web solutions with pixel perfect designs, high responsive rate and duly tested modules that helps our client to generate more ROI and acquire new users for their businesses.</p>
                            </div>
                        </div>
                        <div className="startup-grid py-5 py-m-3 theme-bg">
                            <div className="container">
                                <div className="mx-1000">
                                <div className="sec-ttl has-text-centered">
                                    <h1 className="ttl-head">We Are In Top web App Development Company For Reasons</h1>
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
                                <h1 className="ttl-head">Our Website Development Services Includes</h1>
                                <p className="ttl-p mx-410">We are reputed website development company offer high-rated and scalable web solutions in order to cater across the verticals.</p>
                            </div>
                            
                            <div className="mx-1000">
                                <div className="pack-tab has-text-centered">
                                    <Tabs items={this.getTabs()} />
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

