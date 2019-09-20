
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
                    <title>{site_name} | Angular JS Development</title>
                    <meta name='subject' content='www.couponarbitrage.com' />
                    <meta name="distribution" content="Global" />
                    <meta name="revisit-after" content="1 days" />
                    <meta name="creator" content="officialgates (www.officialgates.com)" />
                    <meta name="publisher" content="officialgates (www.officialgates.com)" />
                </Head>

                 
                <div className="main-wrap">
                    <div className="inner-banner has-text-centered">
                    
                        <div className="inner-banner-cnt">
                        <div className="circle-ripple"><img src="../static/images/icons/angular-dev.svg" alt="i"/> </div>
                            <h4>Angular JS Development</h4>
                        </div>
                       
                    </div>
                    
                    <div className="page-cnt-wrap py-5 py-m-3 pb-0">
                        <div className="page-main-cnt pb-5 pb-m-2">
                            <div className="container">
                            <h4>Touch height of success with Angular JS at Paul only.</h4>
                            <p>Google's boon, Angular JS is a JavaScript-based open-source front-end web app framework that tackles challenges encountered during developing single-page applications and also enables dynamic views in web apps. The framework helps extend HTML vocabulary, build well-structured & rich apps in an expressive & readable environment.</p>
                            <p>Paul is among the top Angular JS development companies that develop single page enterprise apps wit MVC capability. We extend the dynamic capabilities of HTML by exploring the paradigm of modular design, third-party integration & extensibility of Angular JS technology. Acquire our Angular JS services to show up your innovative & effective business concepts into successful web enterprises with the proficient utilization of customized options.</p>
                            <p>Our specialist developers follow agile processes and efficient approaches to bring onwards a solution that's admired by your audience. Our technical savvies develop high-end web apps using the extreme flexibility of Angular JS. The team is equipped with the latest resources and advanced tools that help us offer Angular JS development solutions & services with the great ability, agility & ease.</p>
                            <p>As a leading Angular JS development company, Paul strives to translate maximum benefits of Angular JS through our resourceful web development services all across the world including USA, UAE, Germany, and Canada.</p>
                            </div>
                        </div>
                        <div className="startup-grid py-5 py-m-3 theme-bg">
                            <div className="container">
                                <div className="mx-1000">
                                <div className="sec-ttl has-text-centered">
                                    <h1 className="ttl-head">Our Web-Based Services Includes</h1>
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

