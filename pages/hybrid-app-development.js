
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
                  
                    title:'PhoneGap',
                    image:'../static/images/icons/logo-phonegap.svg',
                    tabContent:"PhoneGap framework works over entire mobile platforms with just one-time code development. Our expert team leverages its HTML & JavaScript skills to develop user-friendly, fast & innovative PhoneGap app.",
                },
                {
                    title:'Sencha Touch', 
                    image:'../static/images/icons/logo-sencha.svg',
                    tabContent:"In order to make effective hybrid apps, Sencha Touch is the highly demanding platform. To provide maximum value and satisfaction, we have a tailored team of developers who always strived to connect our customers with the latest technology.",
                },
                {
                    title:'jQuery Mobile', 
                    image:'../static/images/icons/logo-jquery.svg',
                    tabContent:"HTML based jQuery is the most powerful framework, jQuery Mobile is used to develop responsive website & cross-platform apps. With the mantra of 'write less, do more' our tech-giants design & develop unrivaled mobile apps with the power of jQurey.",
                },
                {
                    title:'Kendo UI', 
                    image:'../static/images/icons/logo-kendo.svg',
                    tabContent:"Kendo UI is a complete JavaScript UI component library that allows you to quickly build eye-catching, high-quality, & high-performance responsive web apps. Under the supervision of our tailored team, attain robust & scalable apps with the power of Kendo UI.",
                },
                {
                    title:'RubyMotion', 
                    image:'../static/images/icons/logo-ruby.svg',
                    tabContent:"Powered by HipByte, RubyMotion allows writing cross-platform apps for iOS, Android, and OS X. Our developers let you quickly develop mobile apps with your favorite editor and the awesome Ruby language you know & love.",
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
                    <title>{site_name} | Hybrid App Development</title>
                    <meta name="distribution" content="Global" />
                    <meta name="revisit-after" content="1 days" />
                    <meta name="creator" content="officialgates (www.officialgates.com)" />
                    <meta name="publisher" content="officialgates (www.officialgates.com)" />
                </Head>

                 
                <div className="main-wrap">
                    <div className="inner-banner has-text-centered">
                    
                        <div className="inner-banner-cnt">
                        <div className="circle-ripple"><img src="../static/images/icons/html-dev.svg" alt="i"/> </div>
                            <h4>Hybrid App Development Company</h4>
                        </div>
                       
                    </div>
                    
                    <div className="page-cnt-wrap py-5 py-m-3 pb-0">
                        <div className="page-main-cnt pb-5 pb-m-2">
                            <div className="container">
                            <h4>Invade the Mobile World with Top-Notch Hybrid App Development.</h4>
                            
                            <p>We have seen a paradigm shift in the demand for launching a mobile-first approach after the introduction of Hybrid Technology in Mobile App Development. The hybrid technology leverages the developers to write a single piece of code and execute it on a different operating system like Android, iOS & Windows etc.</p>

                            <p>Paul always stay tuned with the latest technology in the market and our labs with R&D team includes every new approach in the development practice. Being a renowned Cross-Platform App Development Company in the global indexes, we always deliver the Best Hybrid Mobile App Development solutions with the utmost quality and durability. When it comes to choosing the best hybrid Technology, our Mobile App Developers can easily identify from a pool of React Native, Xamarin, Cordova, Flutter, PhoneGap to best suits your requirements.</p>

                            <p>Evolution of Hybrid Technology enables the Startup Entrepreneurs and SME’s to launch their beta product with a cost-effective way to test the feasibility of their idea and approach. We have helped 72+ Business and Startup to go with the beta launch by leveraging the essence on Hybrid Technology.</p>

                            <p>Our team of Hybrid App Developers is way ahead of the traditional App Developers in the market; they focus on delivering a seamless experience to application user on different Operating Systems and device sizes.</p>

                            <p>As Paul holds the tag of Best Hybrid Mobile App Development Company in India and many different zones in the world including UAE, USA, Canada, and Australia, strive to build & implement feature-rich Hybrid Mobile App Development services that take your business ahead of your competition.</p>


                            </div>
                        </div>
                        <div className="startup-grid py-5 py-m-3 theme-bg">
                            <div className="container">
                                <div className="mx-1000">
                                <div className="sec-ttl has-text-centered">
                                    <h1 className="ttl-head">We Are In Top Hybrid App Development Company For Reasons</h1>
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
                                        <img src="../static/images/icons/png/hybird-lvl1-dev.png" alt="i"/>
                                        </div>
                                        <div className="icon-grid-cnt">
                                            <h4>Let Our Hybrid App Development Services Smoothen Your Path</h4>
                                            <p className="mb-0">With the exponential growth of the Smartphones industry, businesses are in need of technologies that offer "single-code-fits-in-all" flair. Cross-platform mobile app development is often a good way to fulfill this requirement. At Paul, we deliver mobile apps that run smoothly on various mobile platforms including iOS, Android and save your time and cost as well.</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            <div className="por-count-wrap py-5 py-m-3">
                                <div className="container">
                                    <div className="icon-grid-main-wrap">
                                        <div className="icon-grid-img">
                                        <img src="../static/images/icons/png/hybird-lvl2-dev.png" alt="i"/>
                                        </div>
                                        <div className="icon-grid-cnt">
                                            <h4>Clout the Perks of Hybrid App Development Services</h4>
                                            <p>When it comes to mobile app development, there is not any one-size fits all approach that should be followed. One either can develop a native app, a web-based mobile app, or can perform cross-platform app development. Out of these options, hybrid mobile apps development is the most preferred one. That is because hybrid mobile app development is associated with a variety of benefits and Paul holds masters in each.</p>
                                        </div>
                                    </div>
                                    <div className="icon-grid-cnt-main">
                                        <div className="columns is-multiline">
                                            <div className="column is-6-tablet">
                                                <div className="icon-grid-cnt-wrap">
                                                <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/hybird-dev-01.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Seamless Integration</h5>
                                                    <p>Our hybrid app developers remain aligned with the latest trends & technologies and always deliver an outstanding blend of technicality & Excellency. This seamless integration powers apps to work flawlessly with distinct devices like iOS, Android, Desktop, Laptop & others to provide the great user experience.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                                <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/hybird-lvl2-dev-02.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Maximum Code-Reusability</h5>
                                                    <p>We perform cross-platform app development process using a single code base with maximum code reuse between supported platforms.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/hybird-lvl2-dev-03.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Platform-specific Features</h5>
                                                    <p>Paul performs Cross-platform app development in an efficient way so that the developed apps leverage touch, gesture and native look and feel that takes advantage of platform-specific features.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/hybird-lvl2-dev-04.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Easy Maintainable</h5>
                                                    <p>As cross-platform, apps are easy to maintain & deploy changes when an application is running across the platforms; Paul is the only place to ensure that apps perform brilliantly daily.</p>
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
                                        <img src="../static/images/icons/png/hybird-lvl3-dev.png" alt="i"/>
                                        </div>
                                        <div className="icon-grid-cnt">
                                            <h4>Our Agile Hybrid App Development Route Yield Chronic Effect</h4>
                                            <p>Every step of the hybrid mobile app development process is strategized and stepped out with the aim to give maximum value to the client, thus we start by breaking the app development sequence into different tasks and these tasks are then again divided into subtasks, each of which is performed simultaneously after being assigned to our team.</p>
                                        </div>
                                    </div>
                                    <div className="icon-grid-cnt-main">
                                        <div className="columns is-multiline">
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                                <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/android-dev-03.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Agile Development</h5>
                                                    <p>At Paul, we follow Agile development approach while bifurcating the projects into sprints & to ensure that everything is aligned with the project expectations, & our continuous developer-customer interaction and inter-team interactions lead to good collaborations and better results.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/hybird-lvl3-dev-02.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                <h5>Higher Productivity</h5>
                                                    <p>To unlock the higher productivity rate, our team of hybrid app developers adhere agile roadmap and build apps into sprints with the competency to deliver apps with minimum features & functionality. We continually keep adding into the features so that users can access new features on regular basis.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/hybird-lvl3-dev-04.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                <h5>Quick to Market</h5>
                                                    <p>Our Agile process expedites the cross-platform app development process and speedup the timeframe to deploy services in the market. With the power to handle uncertainty more efficiently, Paul is the best one to go with.</p>
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
                                        <img src="../static/images/icons/png/hybird-lvl4-dev.png" alt="i"/>
                                        </div>
                                        <div className="icon-grid-cnt">
                                            <h4>Hire Our Dedicated Team of Hybrid App Developers</h4>
                                            <p>Our team surpasses in cross-platform mobile app development that is known to result in Hybrid apps that are famous for their robust code, spectacular designs, responsiveness, scalability, and error-free functioning. Every app that leaves our factory is rigorously prepared and thoroughly tested to ensure that it works under all network conditions, gives a pleasant user experience, and occupies a very less corner of the device memory space.</p>
                                        </div>
                                    </div>
                                    <div className="icon-grid-cnt-main">
                                        <div className="columns is-multiline">
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                                <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/hybird-lvl4-dev-01.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Customer Centric model</h5>
                                                    <p>We possess client-centric model and avail a smooth, Interactive & hassle free communication process in our cross-platform mobile app development process so that our all deals with global clients can go as a cakewalk. The client shares their idea and has meetings with the required intellectuals frequently.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/hybird-lvl4-dev-02.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>End-to-End Solution</h5>
                                                    <p>State-of-the-art infrastructure puts Paul ahead from many rivals. Being a best hybrid mobile app development company, we are adorned with a technically rich in-house team that keep a focused eye on every phase of hybrid app development including- Research & Development, design, coding, testing & marketing.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/hybird-lvl4-dev-03.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Experienced Professional</h5>
                                                    <p>Backed with the hands full of talented geeks, we left no stone unturned in making our client an elated client. Our skilled & qualified hybrid app developers work on challenging projects of clients and always deliver beyond the expectations with highly interactive & impressive UI/UX.</p> 
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
                                <h1 className="ttl-head">Our Hybrid App Development Services Includes</h1>
                                <p className="ttl-p mx-610">Our Hybrid App Development solutions are robust, high-performing, feature-packed and built to be both scalable and secure, able to handle any business and IT needs.</p>
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

