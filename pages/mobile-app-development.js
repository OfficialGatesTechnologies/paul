
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
                  
                    title:'IOS',
                    image:'../static/images/icons/logo-apple.svg',
                    tabContent:"From the commencement of the concept of iOS application to the actual app development, our iOS specialists use a systematic & organized approach to develop a robust and cherishable iOS App Solution.",
                },
                {
                    title:'Android', 
                    image:'../static/images/icons/logo-android.svg',
                    tabContent:"With an eye on the continuous growth of Android, our well-marshaled team is highly focused on developing highly innovative & scalable Android Apps to delight customer experience & building brand value.",
                },
                {
                    title:'Reactive Native', 
                    image:'../static/images/icons/logo-react.svg',
                    tabContent:"Successfully backed by Facebook, React Native puts a stop to the age-old decision in app development technology and our technical giants leverage the react-native advantages to develop the stunning apps.",
                },
                {
                    title:'Flutter', 
                    image:'../static/images/icons/logo-flutter.svg',
                    tabContent:"Flutter is Google’s offering to the world of cross-platform App Development. We come up with the talented & marshaled team of developers who have expertise in Flutter app development.",
                },
                {
                    title:'Ionic', 
                    image:'../static/images/icons/logo-Ionic.svg',
                    tabContent:"Ionic mobile app development offers seamless performance in different platforms like iOS and Android. Our team incorporates with extensive domain expertise and profound technical knowledge to provide robust and cost-effective apps.",
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
                    <title>{site_name} | Mobile App Development</title>
                    <meta name='subject' content='www.couponarbitrage.com' />
                    <meta name="distribution" content="Global" />
                    <meta name="revisit-after" content="1 days" />
                    <meta name="creator" content="officialgates (www.officialgates.com)" />
                    <meta name="publisher" content="officialgates (www.officialgates.com)" />
                </Head>

                 
                <div className="main-wrap">
                    <div className="inner-banner has-text-centered">
                    
                        <div className="inner-banner-cnt">
                        <div className="circle-ripple"><img src="../static/images/icons/mob-dev-01.svg" alt="i"/> </div>
                            <h4>Best Mobile App Development Company</h4>
                        </div>
                       
                    </div>
                    
                    <div className="page-cnt-wrap py-5 py-m-3 pb-0">
                        <div className="page-main-cnt pb-5 pb-m-2">
                            <div className="container">
                            <h4>Robust, User Centric & Scalable Mobile App Solutions</h4>
                            <p>Smartphone is one of the colossal launch or endowment of the innovation that people are using for their distinctive outline. Paul is among the top market leaders of Mobile App Development Companies, which provide mobility solutions for both the platforms including Native App Development (Android & iOS) and Hybrid App Development for a different spectrum of businesses who are wishing to double their ROI by having chartbuster mobile applications. We, backed by a pool of talented geeks, who constantly learn and update themselves from the latest trends of technology and tools in order to build a robust mobile-first experience.</p>
                            <p>Along with Native Application Development services, our team has vast experience in Hybrid App Development and Cross-Platform App Development. We have developed 120+ mobile apps for diversified industries spanning from Retail, Health & Fitness, E-Commerce, Social Networking etc. Understanding the different scenarios of Startup and Business Enterprises our engagement models are very flexible to accommodate both verticals.</p>
                            <p>Our Top Mobile App Development services allow businesses to not only keep connected with their customers on devices but also have a comprehensive insight of KPIs for making great decisions. With Paul, gain the business intelligence in real-time for better management of the workforce & augmented the user experience.</p>
                            <p>Being a renowned Mobile app Development Company in India & in several nations covering USA, Canada, Australia, UAE etc, we always focus on improving and enhancing our processes with a blend of the unique composition of highly skilled Mobile App Developers, Market Researchers and Business Analyst that put their efforts and brains to make your app idea stand tall in the market of billion of apps.</p>
                            </div>
                        </div>
                        <div className="startup-grid py-5 py-m-3 theme-bg">
                            <div className="container">
                                <div className="mx-1000">
                                <div className="sec-ttl has-text-centered">
                                    <h1 className="ttl-head">We Are In Top Mobile App Development Company For Reasons</h1>
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
                                <h1 className="ttl-head">Our Mobile App Development Services Includes</h1>
                                <p className="ttl-p mx-410">We provide user-centric mobile app development solution by which one can get seamless experience across devices.</p>
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

