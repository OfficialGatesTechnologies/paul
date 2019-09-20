
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
                  
                    title:'iBeacon',
                    image:'../static/images/icons/tab-i-05.svg',
                    tabContent:"Apple’s brainchild iBeacon has opened a new way to leverage the benefits of localization. Our team of dedicated iBeacon app developers is having technical expertise in using the cutting-edge tools to deliver high-quality solutions in the domain of iBeacon application development.",
                },
                {
                  
                    title:'Eddystone',
                    image:'../static/images/icons/logo-eddy.svg',
                    tabContent:"Eddystone is a totally new technique for broadcasting BLE data from signals, made by Google yet opens to expansion by the Internet at large. It grasps what iBeacons can do, and includes a significantly more certifiable setting to it.",
                },
                {
                  
                    title:'Location-Based',
                    image:'../static/images/icons/logo-location.svg',
                    tabContent:"With the team of tech-geeks who have immense knowledge in location-based technology, we give Location-based Beacon applications with few services that use area information to control features to make users informative.",
                },
                {
                  
                    title:'GPS Tracking',
                    image:'../static/images/icons/logo-location-01.svg',
                    tabContent:"Our developed Beacon apps incorporate GPS tracking which is the reconnaissance of location through utilization of the GPS to track the area of an element or protest remotely and transmit information by means of GPRS in the type of information bundles.",
                },
                {
                  
                    title:'GeoFencing Based',
                    image:'../static/images/icons/logo-location-01.svg',
                    tabContent:"To compete in this technical world with the high-end knowledge and vast experience, our veteran team caters best in Beacon industry. Our Beacon App Development benefit gives Geo Fencing and it includes area tracking devices of a location-based services (LBS) user entering or leaving a geo-fence.",
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
                    <title>{site_name} | Beacon App Development</title>
                    <meta name='subject' content='www.couponarbitrage.com' />
                    <meta name="distribution" content="Global" />
                    <meta name="revisit-after" content="1 days" />
                    <meta name="creator" content="officialgates (www.officialgates.com)" />
                    <meta name="publisher" content="officialgates (www.officialgates.com)" />
                </Head>

                 
                <div className="main-wrap">
                    <div className="inner-banner has-text-centered">
                    
                        <div className="inner-banner-cnt">
                        <div className="circle-ripple"><img src="../static/images/icons/beacon-dev.svg" alt="i"/> </div>
                            <h4>Beacon App Development Company</h4>
                        </div>
                       
                    </div>
                    
                    <div className="page-cnt-wrap py-5 py-m-3 pb-0">
                        <div className="page-main-cnt pb-5 pb-m-2">
                            <div className="container">
                            <h4>Lets engage and serve your customer with hyper-local engagement</h4>
                            <p>In the world of technologies, we have taken beacon as the pudding in the cake as we have been observing its massive possibilities. We have invested huge amount of resources and time to know about this technology. After doing multiple experiments, we take pride to say that we have the expertise and great level of knowledge with the beacon development. Our aspiring team members have the proficiency in handling with this extreme technology.</p>

                            <p>When it is about finding the best Beacon App Development Company in India, we can be the great solution of all time. We have knowledge about iBeacon App Development and Bluetooth Low Energy devices application development and therefore whatever is the requirement, we can serve the best solution.</p>

                            <p>Paul is a promising name in today’s highly competitive era offering some of the high end app development services to the world. Our enthusiastic and highly responsive developers promise to proffer best results with their expertise and high caliber. We are the development company that has knowledge about the market movement and innovation. With our intelligent team, we ensure offering practical, superior and bespoke solution for the businesses.</p>
                            </div>
                        </div>
                        <div className="startup-grid py-5 py-m-3 theme-bg">
                            <div className="container">
                                <div className="mx-1000">
                                <div className="sec-ttl has-text-centered">
                                    <h1 className="ttl-head">We Are In Top Beacon App Development Company For Reasons</h1>
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
                                <h1 className="ttl-head">Our Beacon App Development Services Includes</h1>
                                <p className="ttl-p mx-410">We bestow Beacon apps with exceptional connectivity & seamless experiencing in order to provide the best connection to the entire world.</p>
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

