
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
                    <title>{site_name} | React Native Development</title>
                    <meta name='subject' content='www.couponarbitrage.com' />
                    <meta name="distribution" content="Global" />
                    <meta name="revisit-after" content="1 days" />
                    <meta name="creator" content="officialgates (www.officialgates.com)" />
                    <meta name="publisher" content="officialgates (www.officialgates.com)" />
                </Head>

                 
                <div className="main-wrap">
                    <div className="inner-banner has-text-centered">
                    
                        <div className="inner-banner-cnt">
                        <div className="circle-ripple"><img src="../static/images/icons/react-dev.svg" alt="i"/> </div>
                            <h4>React Native App Development Company</h4>
                        </div>
                       
                    </div>
                    
                    <div className="page-cnt-wrap py-5 py-m-3 pb-0">
                        <div className="page-main-cnt pb-5 pb-m-2">
                            <div className="container">
                            <h4>Experience a Smoother App Development with the Power of React Native.</h4>
                            <p>A brand new technology powered by Facebook, React Native is the native mobile app development solution that helps the hybrid app developers to develop native apps using the same building blocks which are used by Android & iOS. With the initiation of this advanced technology, the massive mobile app development industry is altering & providing ultimate speed & reliability to their services at least costs.</p>

                            <p>Paul is a prominent react native development company, based in India, having expertise with brand new web & mobile app technology, providing you better ways to commit hybrid application development acquiring great ability to access purposeful ideas & handy resources, with flawlessly dependable react native services.</p>

                            <p>Our team of react native app development professionals and developers dedicatedly offer cutting-edge mobile app development services with a progressive level of programming.</p>

                            <p>At, Paul, we provide a complete package of react native development services for different industry verticals including Healthcare, Education, Travel & Transport, Social Networking etc. not only in India but also in USA, UAE, Germany, and Toronto Canada.</p>
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


                        <div className="dev-icon-grid">
                        <div className="por-count-wrap py-5 py-m-3">
                                <div className="container">
                                <div className="icon-grid-main-wrap">
                                        <div className="icon-grid-img">
                                        <img src="../static/images/icons/png/react-dev1.png" alt="i"/>
                                        </div>
                                        <div className="icon-grid-cnt">
                                            <h4>React Native App Development Services</h4>
                                            <p className="mb-0">Paul let your business a better ways to commit hybrid app development acquiring great ability to access resolute ideas and handy resources, with reliable React native app development services that covers the entire development cycle, from conceptualization to distribution by leveraging a proven agile methodology and in-house talent. At Paul, we deliver end-to-end react native mobile app development services that encompass the complete range of iOS devices, Android device and many more. We are the React native app development partner of choice for of the world's leading brands.</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            <div className="por-count-wrap py-5 py-m-3">
                                <div className="container">
                                    <div className="icon-grid-main-wrap">
                                        <div className="icon-grid-img">
                                        <img src="../static/images/icons/png/react-dev2.png" alt="i"/>
                                        </div>
                                        <div className="icon-grid-cnt">
                                            <h4>Leverage the pros of React Native App Development with us</h4>
                                            <p>At Paul, avail the seamless cross-platform app development services by harnessing the power of React Native along with the creative UI/UX designing and experience far better apps that surpasses offerings of Native apps.</p>
                                        </div>
                                    </div>
                                    <div className="icon-grid-cnt-main">
                                        <div className="columns is-multiline">
                                            <div className="column is-6-tablet">
                                                <div className="icon-grid-cnt-wrap">
                                                <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/react-dev2-01.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Cross-Platform Adaptability</h5>
                                                    <p>React Native handles multiple platforms with grace. Vast majority of React Native APIs are cross-platform, meaning we write one React component and it works seamlessly on both Android and iOS.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                                <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/react-dev2-02.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Shorter Time Development</h5>
                                                    <p>React Native makes developing applications for iOS and Android much faster as much as by 30%. This has been made possible due to a vast library of React components available under open source.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/react-dev2-03.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Live Updates</h5>
                                                    <p>No more waiting for approvals from the app store for your app updates. Push your next release without the user having to update his app.</p>
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
                                        <img src="../static/images/icons/png/react-dev3.png" alt="i"/>
                                        </div>
                                        <div className="icon-grid-cnt">
                                            <h4>We Take the Flight Of Triumph By Following Mildest Route in React Native app Development</h4>
                                            <p>Right from the App conceptualization to its launch and then maintenance, our react native app development process is based on creating quality & time validated results that are focused on our client along with their client.</p>
                                        </div>
                                    </div>
                                    <div className="icon-grid-cnt-main">
                                        <div className="columns is-multiline">
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                                <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/react-dev3-01.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Perpetual Development Solution</h5>
                                                    <p>Right from app ideation to app release, we develop apps that work impeccably on diverse platforms via leveraging the power of React Native to its potential. Along with the agile development, our react native development services include intact post launch activities too.</p> 
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/ios-dev-04.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                <h5>Bug-free Releases</h5>
                                                    <p>With the strong believe that no-bug means success, we practice bug-free terminology in our React native app development process and app releases and ensures our end user that app should be faultless and intact to quality check process. We believe bug-free app launch is the first step to the success of any mobile app.</p> 
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/an-app-suc-04.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                <h5>Maintenance & Support</h5>
                                                    <p>Walking on cross-platforms could be massive too and we understand this. We are here with the position of top react native app Development Company because of our team of quality analyst, who give assurance that the app is perfectly prepared for both the iOS & Android platform along with the promise of keeping regular updates according to mobile users.</p> 
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
                                        <img src="../static/images/icons/png/react-dev4.png" alt="i"/>
                                        </div>
                                        <div className="icon-grid-cnt">
                                            <h4>Hire React Native App Development Team</h4>
                                            <p>To get the suit of react native app development services contain array full of assistant, hire our react native app development team with troupe of talented geeks and achieve flexible yet effective app development services.</p>
                                        </div>
                                    </div>
                                    <div className="icon-grid-cnt-main">
                                        <div className="columns is-multiline">
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                                <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/react-dev1.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Best React Native Development services</h5>
                                                    <p>Our team is one of the earliest adopters of React and React Native. Our timeline estimations are accurate and we strive to stick by them. This helps you plan and forecast your business activities better.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/react-dev4-01.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                <h5>Proficient in Managing & Sharing React Native's Potential</h5>
                                                    <p>We have a diverse team of developers, designers and project managers - each an expert in their field. This means we can handle the complete development of your app - UI/UX, Backend Development - everything!</p> 
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/react-dev4-02.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                <h5>Estimated Development Costs</h5>
                                                    <p>We estimate a project cost depending on the requirements, and we abide by it. Since the development cost of your React Native app gets fixed, you can plan your budget way more efficiently.</p> 
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/react-dev4-03.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                <h5>Future Proof Product</h5>
                                                    <p>We invest in keeping abreast of new technologies, React Native being one of them. Our React Native developers can consult you on the best language, library and frameworks for your product.</p> 
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
                                <h1 className="ttl-head">Our Web-Based Services Includes</h1>
                                <p className="ttl-p mx-610">Being a leader of the web, we deliver a perfect blend of innovative web-based development services.</p>
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

