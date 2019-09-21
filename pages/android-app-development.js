
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
                  
                    title:'Java',
                    image:'../static/images/icons/logo-java.svg',
                    tabContent:"From the release, java is used to develop scalable & secure mobile apps. Our team of canny developers uses this framework's flexibility to build the most innovative apps by leveraging the right java expertise in everything from architecture to implementation.",
                },
                {
                    title:'Kotlin', 
                    image:'../static/images/icons/logo-kotlin.svg',
                    tabContent:"In order to develop latest, expressive and safe android apps, Kotlin is the popular programming language specially designed for android app development. Our veteran team of developers holds extensive knowledge in kotlin to develop safe & secure code.",
                },
                {
                    title:'Android Mobile', 
                    image:'../static/images/icons/logo-android-01.svg',
                    tabContent:"With the immense inclination of people towards the Android world, Android Smartphone becomes the most selling device. In order to serve in this field, we come up with the talented and keen developers to build secure & reliable apps for Android Smartphone.",
                },
                {
                    title:'Android Tablet', 
                    image:'../static/images/icons/logo-tablet.svg',
                    tabContent:"Due to the high resolution & widescreen, tablets are in demand. In order to make reliable & secure apps for android tablets, our team gained expertise in related app development technology & develop robust apps for our customers which help them to make their business productive.",
                },
                {
                    title:'Android TV', 
                    image:'../static/images/icons/logo-android-tv.svg',
                    tabContent:"As Android's growth of TV has changed the picture of entertainment and has given TV Apps an all new edge. We have a well-experienced team of Android TV app developers, who lets you enjoy the new definition of TV through engaging & stunning apps.",
                },
                {
                    title:'Fire Base', 
                    image:'../static/images/icons/logo-firebase.svg',
                    tabContent:"Developed by Google to support web-based back-ends, firebase speeds up the storing & retrieving procedure of data through outsider services and fabricates its own API. Our well-experienced team of developers develops scalable & effective Firebase apps.",
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
                    <title>{site_name} | Android App Development</title>
                    <meta name="distribution" content="Global" />
                    <meta name="revisit-after" content="1 days" />
                    <meta name="creator" content="officialgates (www.officialgates.com)" />
                    <meta name="publisher" content="officialgates (www.officialgates.com)" />
                </Head>

                 
                <div className="main-wrap">
                    <div className="inner-banner has-text-centered">
                    
                        <div className="inner-banner-cnt">
                        <div className="circle-ripple"><img src="../static/images/icons/android-app-dev.svg" alt="i"/> </div>
                            <h4>Certified Android App Development Company</h4>
                        </div>
                       
                    </div>
                    
                    <div className="page-cnt-wrap py-5 py-m-3 pb-0">
                        <div className="page-main-cnt pb-5 pb-m-2">
                            <div className="container">
                            <h4>Assisted 100+ brands and startups to digitalize the business</h4>
                            <p>Android is the most widely used OS in Smartphones, It almost covered 70% of the market, the reason of being getting a market leader in the Operating System because it is open source and backed by Google. Since it captures the large market of Mobile Devices, Android has become the first choice for Entrepreneurs and Business to launch their Android Applications.</p>
                            <p>Paul is a Top Android Development Company backed by a pool of Certified Android App Developers offering cost-effective and award-winning Android App Development. We create apps that are featured on PlayStore and loved by millions of users. Our Analyst and Market research team stays no stone unturned in delivering world-class Android App Development Services.</p>
                            <p> We have almost touched each segment of industry be it HealthCare, Social Media, Events Management, Dating, E-commerce, Food, and Banking & Finance. Our team has conceptualized more than 120+ applications in these domains. Right from Gingerbread to Oreo, Diversified screen sizes of Android devices we provide flawless Android Apps that are highly user engaged and generating great ROI’s.</p>
                            <p>Our Certified Android App Development team with canny Android App Developers, business analysts, market researchers is always stayed up to date with latest technological advancement in the field of Android so that their applications have an edge of latest frameworks and technology. We are addicted to Java, Kotlin, XML, Android Software Development Kit APIs, Android Native Development Kit.</p>
                            <p>Being a renowned Android App Development Company in India, with Paul create a robust & reliable Android app experience in today's mobile-first world. Our developed android app leverages the platform's high flexibility and its inter-application capabilities to outperform the competition.</p>
                            </div>
                        </div>
                        <div className="startup-grid py-5 py-m-3 theme-bg">
                            <div className="container">
                                <div className="mx-1000">
                                <div className="sec-ttl has-text-centered">
                                    <h1 className="ttl-head">We Are In Top Android App Development Company For Reasons</h1>
                                    <p className="ttl-p mx-610">Being an early adopter of latest technology, processes and tools, Our geeks are well versed in Programming Languages and Frameworks.</p>
                                </div>
                                <div className="com-res py-5 py-m-3 pb-0">
                                    <Com_res/>
                                </div>
                                </div>
                            </div>
                        </div>


                        <div className="dev-icon-grid">
                            <div className="por-count-wrap py-5 py-m-3">
                                <div className="container">
                                    <div className="icon-grid-main-wrap">
                                        <div className="icon-grid-img">
                                        <img src="../static/images/icons/png/an-app-dev.png" alt="i"/>
                                        </div>
                                        <div className="icon-grid-cnt">
                                            <h4>Experience Apex Android App Development Services at Paul</h4>
                                            <p>In the world where mobile apps are playing a vital role in everyone's device, and converting long-time operative task done on few clicks, Our team excels in android mobile app development that are known to result in Android apps which are extensively famous for their bags full of productive features- vigorous code, spectacular UI/UX, Responsiveness, Scalability, and zero-bug functionality. Each app that leaves our production line is thoroughly prepared and completely tested to guarantee that it works under all system conditions, gives a wonderful user experience and involves a less corner of the Android device memory space. The experience of our Android Mobile App Development Team is what helps us achieve excellence for our clients and accelerates us to achieve more stars on our shoulders. We cherish to build...</p>
                                        </div>
                                    </div>
                                    <div className="icon-grid-cnt-main">
                                        <div className="columns is-multiline">
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/an-app-dev-01.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Apps, Users love</h5>
                                                    <p>There are over 2 million Android devices & 2.6 million Android Apps out there. Ours stand out from the crowd. We build the kind of apps that people move to their home screen. We know what users want and we know how to build apps that matter to them.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/an-app-dev-02.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Generating Revenue</h5>
                                                    <p>We build businesses. We build Android apps that make money. It is no happenstance the apps we have built have generated high revenue for our clients. We have assisted 100+ brands and startups to digitalize their business with the help of our Android apps.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/an-app-dev-03.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Topping the Chart</h5>
                                                    <p>We do not believe to stand with best but we believe in busting the chart with our top-class android apps. We keep this mantra as our motto and put our inner-core to make Android application development as efficient as it turns in chartbuster apps.</p>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="por-count-wrap py-5 py-m-3">
                                <div className="container">
                                    <div className="icon-grid-main-wrap">
                                        <div className="icon-grid-img">
                                        <img src="../static/images/icons/png/an-app-suc.png" alt="i"/>
                                        </div>
                                        <div className="icon-grid-cnt">
                                            <h4>Our Android App Development Approach Takes Business to Success's Peak</h4>
                                            <p>Paul is a globally recognized Android App Development Company that renders customized scalable, market-ready, and intuitive Android apps. Our highly skilled Android App Developers follow the agile route to perform app development for a variety of industries such as e-commerce, health, travel, finance, business and many more.</p>
                                        </div>
                                    </div>
                                    <div className="icon-grid-cnt-main">
                                        <div className="columns is-multiline">
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/an-app-suc-01.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Productive Development Approach</h5>
                                                    <p>Adorned with the title of top Android app Development Company, we always endorse the agile process that minimizes risk, maximizes velocity, and promotes transparency to complete all the android application development process</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/an-app-suc-02.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>End-to-End Services</h5>
                                                    <p>Paul left no stone unturned in achieving gems & our services speak our domino effect. Our Android development services include consulting and product strategy, UX/UI design, development, testing, and technical delivery.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/an-app-suc-03.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Google Play Deployment</h5>
                                                    <p>In order to left no corner for bugs, we practice no-bug policy in our Android app development process and handle the app submission to the Google Play Store according to their guidelines.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/an-app-suc-04.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Maintenance & Support</h5>
                                                    <p>With the assurance that our developed android apps will work brilliantly daily, we offer cost-effective maintenance & support services on top of our Android app development services that help our client to be on top at all updates.</p>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="por-count-wrap py-5 py-m-3">
                                <div className="container">
                                    <div className="icon-grid-main-wrap">
                                        <div className="icon-grid-img">
                                        <img src="../static/images/icons/png/an-app-bus.png" alt="i"/>
                                        </div>
                                        <div className="icon-grid-cnt">
                                            <h4>Benefits of Android App Development on Business</h4>
                                            <p>Businesses are looking for enterprise android apps can reap many business benefits due to the increasing number of Android users. Entitled with best android app Development Company, Paul holds masters in catering the robust & reliable android application development services that comes with the excellence of our hard-core skilled app development team. Our offered app development services leverage Android's benefits and cater out-of-the-box experience.</p>
                                        </div>
                                    </div>
                                    <div className="icon-grid-cnt-main">
                                        <div className="columns is-multiline">
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/an-app-bus-01.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Low Investment</h5>
                                                    <p>Android App developers have free access to Android app development software kit as Android is open-source. We are expert in utilizing the competency of Android's and perform our development process that provides Perks to startups & SMEs.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/an-app-bus-02.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Easy Customization</h5>
                                                    <p>As Android is effective yet flexible and offers varied customization alternatives, our Android app developers come up with the in-built expertise to harnessing the competency of the platform and build Android apps with different functionalities.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/an-app-bus-03.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Security & Distribution</h5>
                                                    <p>Android platform is greatly characterized with the security & Distributive features & we keep our client's safety & security on priority and develop apps that can be distributed among various segments with a no-bug guarantee.</p>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>










                        <div className="page-cnt-tab">
                            <section className="startup-sec py-5">
                            <div className="container">
                            <div className="sec-ttl has-text-centered">
                                <h1 className="ttl-head">Our Android App Development Services Includes</h1>
                                <p className="ttl-p mx-410">Get the Exposure of Android Apps with the top-notch Android App Development services.</p>
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

