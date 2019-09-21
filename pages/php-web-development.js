
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
                    <title>{site_name} | PHP Web Development</title>
                    <meta name="distribution" content="Global" />
                    <meta name="revisit-after" content="1 days" />
                    <meta name="creator" content="officialgates (www.officialgates.com)" />
                    <meta name="publisher" content="officialgates (www.officialgates.com)" />
                </Head>

                 
                <div className="main-wrap">
                    <div className="inner-banner has-text-centered">
                    
                        <div className="inner-banner-cnt">
                        <div className="circle-ripple"><img src="../static/images/icons/php-dev.svg" alt="i"/> </div>
                            <h4>PHP Web Development Company</h4>
                        </div>
                       
                    </div>
                    
                    <div className="page-cnt-wrap py-5 py-m-3 pb-0">
                        <div className="page-main-cnt pb-5 pb-m-2">
                            <div className="container">
                            <h4>Remarkable PHP Web App Development That Yield Lucrative Results</h4>
                            <p>PHP is like a cherry on the cake to the era of technologies. It is free & open source technology. As a server-side scripting language, it is capable of rendering dynamic pages & apps. Speed, reliability, and security make it a widely-favored choice for developers.</p>
                            <p>Paul is the leading PHP web app development company based in India, offering customized PHP web app solutions with the advanced use of PHP framework. We hold extensive experience in PHP app development, which boost us to offer customer's cost-effective web solution spread across all the sectors such as entrepreneurs, private businesses or a multi-national corporate.</p>
                            <p>Our agile team of certified PHP developers works with LAMP stack (Linux, Apache, MySQL, PHP); Ajax, Web 2.0 & 3.0 technologies to add interactivity to your web applications and makes them highly secure, reliable & effective.</p>
                            <p>Paul is the most trusted company providing web related solutions to make your individual or business dream come true not only in India but also in many head spots including UAE, USA, Germany, and Canada as well.</p>
                            </div>
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
                                <h1 className="ttl-head">Our PHP Development Services Includes</h1>
                                <p className="ttl-p mx-410">Being a leader of the web, we deliver a perfect blend of innovative web-based development services.</p>
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

