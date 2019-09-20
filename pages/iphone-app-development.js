
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
                  
                    title:'Swift',
                    image:'../static/images/icons/logo-swift.svg',
                    tabContent:"Swift is launched by Apple for developing iOS and Mac app. It is a highly efficient programming language used by our experienced & talented developers for developing high- quality functional apps for various purposes.",
                },
                {
                    title:'Objective C', 
                    image:'../static/images/icons/logo-obj.svg',
                    tabContent:"Objective C is released by Apple for smooth iOS app development. Our pool of talented developers is highly endorsed by the technology and develops robust apps for customers as well as business holders.",
                },
                {
                    title:'iPhone Apps', 
                    image:'../static/images/icons/logo-iphone.svg',
                    tabContent:"The most approachable offering from Apple is the iPhone. With the knowledge of latest tools & technologies, our team is backed up with the experts who have achieved success in iPhone app development.",
                },
                {
                    title:'iPad Apps', 
                    image:'../static/images/icons/logo-ipad.svg',
                    tabContent:"iPad is among one of the popular boons from Apple. Demands of customers have led to our app developers to gear up and go with the pace of developing responsive, robust & cherish able apps.",
                },
                {
                    title:'Healthkit', 
                    image:'../static/images/icons/logo-health.svg',
                    tabContent:"To manage health & fitness technically, Apple launched HealthKit. Our technical geeks have the capability to integrate HealthKit into health & fitness apps & have the ability to develop user-centric apps.",
                },
                {
                    title:'Apple TV', 
                    image:'../static/images/icons/logo-mactv.svg',
                    tabContent:"Since the day Apple has extended the experience of Apple TV to Games or utilizing your efficiency or social apps the application development has altered for tvOS quickly. TVOS has a help for a shared multi-client encounter that enlarges the extension for new application thoughts that our well-versed team is set up to create.",
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
                    <title>{site_name} | iPhone App Development</title>
                    <meta name='subject' content='www.couponarbitrage.com' />
                    <meta name="distribution" content="Global" />
                    <meta name="revisit-after" content="1 days" />
                    <meta name="creator" content="officialgates (www.officialgates.com)" />
                    <meta name="publisher" content="officialgates (www.officialgates.com)" />
                </Head>

                 
                <div className="main-wrap">
                    <div className="inner-banner has-text-centered">
                    
                        <div className="inner-banner-cnt">
                        <div className="circle-ripple"><img src="../static/images/icons/iphone-head.svg" alt="i"/> </div>
                            <h4>Top-Notch iPhone App Development Company</h4>
                        </div>
                       
                    </div>
                    
                    <div className="page-cnt-wrap py-5 py-m-3 pb-0">
                        <div className="page-main-cnt pb-5 pb-m-2">
                            <div className="container">
                            <h4>Creating chartbuster iPhone Applications that rule AppStore</h4>
                            <p>Almost 120+ mobile applications ships to App Store, Paul is the Top iPhone App Development Company providing cost-effective and robust solutions to various industries including Enterprise Businesses and Startups. Our Team of iPhone App Developers is well versed in the latest technology and frameworks of iOS including UIKit, CocoaTouch, HealthKit, ARKit, and WatchKit.</p>
                            <p>Whether you are looking for developing a new idea from scratch or enhancing the existing one, blend of our iPhone App Developers, Market Researchers, Analysts and UI/UX Designers have capability to handle any complex or static project requirement, provide iPhone App Development Solutions that best meets our client requirements, and help them to achieve their objectives.</p>
                            <p>Our team of iOS App Developers is marshaled in providing a seamless experience on iPhone, and iWatch. Developing top-notch iOS applications with elegant UI, High Transactional UX and User Engaged navigation are the prime area of focus, which we consider while developing a single interaction in the application.</p>
                            <p>Our experienced iOS Developers always make themselves updated with the latest technology be it C, Objective C or Swift and emerging frameworks so that they can leverage the applications with the benefits of them. You can count your application success on us.</p>
                            <p>Paul is a top-ranked iOS App Development Company in India and in the world having flourishing centers in the USA, UAE, Canada, and Australia, widely acclaimed for its innovative iOS App Development Services that are expandable & extremely useful in catering growing businesses & startups with the ability to attain maximum productivity.</p>
                            </div>
                        </div>
                        <div className="startup-grid py-5 py-m-3 theme-bg">
                            <div className="container">
                                <div className="mx-1000">
                                <div className="sec-ttl has-text-centered">
                                    <h1 className="ttl-head">We Are In Top iPhone App Development Company For Reasons</h1>
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
                                <h1 className="ttl-head">Our iOS App Development Services Includes</h1>
                                <p className="ttl-p mx-410">Our exclusive approach to iOS app development has resulted in award-winning products that have been downloaded by millions.</p>
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

