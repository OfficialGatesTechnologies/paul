
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
                    <title>{site_name} | Services</title>
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
                            <h4>Mobile and Web App Development Services</h4>
                        </div>
                       
                    </div>
                    
                    <div className="page-cnt-wrap py-5 py-m-3 pb-0">
                        <div className="page-main-cnt pb-5 pb-m-2">
                            <div className="container">
                            <h4>Leverage Bespoke App Development Services for Noteworthy Business Obligation</h4>
                            <p>Marshaled in developing ace mobile and web application, that accelerates productivity & adaptability of an app idea to the next dimension.</p>
                            <p>Paul conveys an entire lifecycle of inventive mobile app & web development services, bridling innovative ability to tap the maximum capacity of mobile devices for Enterprises and Startups.</p>
                            <p>We practice the agile approach in providing the diverse level of app development services including Designing & Discovery, Native iOS app development, Native Android app development, Mobile consulting services, UI UX designs, Product planning & strategy building, so that our end customers could leverage full-fledged app development from tip to toe.</p>
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


                        <div className="dev-icon-grid">
                            <div className="por-count-wrap py-5 py-m-3">
                                <div className="container">
                                    <div className="icon-grid-main-wrap">
                                        <div className="icon-grid-img">
                                        <img src="../static/images/icons/png/an-app-dev.png" alt="i"/>
                                        </div>
                                        <div className="icon-grid-cnt">
                                            <h4>App Development</h4>
                                            <p>Paul provide a complete spectrum of app development services that includes development, designing, maintenance & support services. Our tech-ninjas provide innovative & result-oriented mobile app solutions with their cross-functional expertise & in-depth industry specific skills & insights, which meet the prime needs & emerging challenges of diverse enterprise's verticals.</p>
                                        </div>
                                    </div>
                                    <div className="icon-grid-cnt-main">
                                        <div className="columns is-multiline">
                                            <div className="column is-6-tablet">
                                                <div className="icon-grid-cnt-wrap">
                                                <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/app-dev-ser-01.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Feasible Analysis</h5>
                                                    <p>By availing into account requirements of various stakeholders and user experiences, we determine the catalyst factor of a project's success.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                                <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/app-dev-ser-02.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                <h5>Prototyping</h5>
                                                    <p>Avail intuitive working model of an app idea to give a real feeling of interactions with professional touch.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/android-dev-01.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                <h5>App Development</h5>
                                                    <p>Building mobile app with blend of latest technologies and agility in the development process makes us dent the stores with every new app release.</p> 
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/hybird-dev-05.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                <h5>Maintenance & Support</h5>
                                                    <p>App launch is not a single shot game, it required continuous improvement and enhancement to retain the floor of success we are pioneer in the same.</p> 
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/ios-dev-05.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                <h5>QA & Testing</h5>
                                                    <p>Eradicate bugs & baffles from your business apps swiftly & efficiently with our proven quality assurance & testing services.</p>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ser-btn">
                                        <Link href="application-development"><a className="theme-color ban-theme-btn">Read More</a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="por-count-wrap py-5 py-m-3">
                                <div className="container">
                                    <div className="icon-grid-main-wrap">
                                        <div className="icon-grid-img">
                                        <img src="../static/images/icons/png/o-web-dev.png" alt="i"/>
                                        </div>
                                        <div className="icon-grid-cnt">
                                            <h4>Web Development</h4>
                                            <p>Developing the most immersive & finest web experiences to complete web app development process has set us apart from the rest. As a reliable web app development company, we are dedicated to enabling enterprises & startups to reach new heights of excellence everyday by deploying dazzling, & astounding web experience. Paul has a massive expertise of working in varied business environment via harnessing the power of trending tools & technologies.</p>
                                        </div>
                                    </div>
                                    <div className="icon-grid-cnt-main">
                                        <div className="columns is-multiline">
                                            <div className="column is-6-tablet">
                                                <div className="icon-grid-cnt-wrap">
                                                <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/web-dev-ser-01.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Technology Consulting</h5>
                                                    <p>With the hand of our consulting expertise, transform web app development technology into an enterprise issue-resolver for transforming business challenges into opportunities.</p> 
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                                <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/react-dev2-02.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                <h5>Architecture Designing</h5>
                                                    <p>Conveying the most advanced architecture design to re-imagination & revolutionize the way a web app may associate with users.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/o-web-dev-03.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                <h5>Web App Development</h5>
                                                    <p>Designing a seamless web app so that the total time to place web apps in motion is brought down to a minimum.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/react-dev3.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                <h5>Web Revamping</h5>
                                                    <p>We transform the older experience into the novel one by providing staggering idea & innovations in a specific manner to create a new picture.</p> 
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/hybird-dev-05.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                <h5>Support & Maintenance</h5>
                                                    <p>Along with innovative web app development, we even have the right processes in place to ensure that every web app performs brilliantly daily.</p> 
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ser-btn">
                                        <Link href="website-development"><a className="theme-color ban-theme-btn">Read More</a></Link>
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
                                            <h4>Hybrid App Development</h4>
                                            <p>In order to target users by enhancing the business reach to a broader extent, we develop mobile apps, which provide the similar level of utility & functionality on different platforms by adhering strong technical expertise & specialization. At Paul, our app developers comprehend customer's prerequisites & develop robust & scalable apps by using powerful tools PhoneGap, Cordova & Xamarin frameworks.</p>
                                        </div>
                                    </div>
                                    <div className="icon-grid-cnt-main">
                                        <div className="columns is-multiline">
                                            <div className="column is-6-tablet">
                                                <div className="icon-grid-cnt-wrap">
                                                <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/o-web-dev-02.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Design & Development</h5>
                                                    <p>Experience the Robust technology & artistic design for the extra-ordinary performance of the mobile apps.</p> 
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                                <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/hy-dev-ser-02.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                <h5>Porting</h5>
                                                    <p>Having expertise in the field of porting & enable to port apps on different operating systems, platforms & environment</p> 
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/an-app-suc.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                <h5>App Testing</h5>
                                                    <p>We adheres strategy driven approach to check the computability with the different devices.</p> 
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/hybird-dev-05.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                <h5>Support & Maintenance</h5>
                                                    <p>Eager to support & always ready to deal with any type of maintenance & support challenges.</p> 
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ser-btn">
                                        <Link href="hybrid-app-development"><a className="theme-color ban-theme-btn">Read More</a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="por-count-wrap py-5 py-m-3">
                                <div className="container">
                                    <div className="icon-grid-main-wrap">
                                        <div className="icon-grid-img">
                                        <img src="../static/images/icons/png/iot.png" alt="i"/>
                                        </div>
                                        <div className="icon-grid-cnt">
                                            <h4>IoT</h4>
                                            <p>At Paul we, identify opportunities to make your enterprise more agile and adaptable. From there, our extensive capabilities mean we can deploy innovative IoT app development services alongside your legacy systems. With enterprise integration, we allow the businesses to map the data from the platform to enterprise applications in real time the enterprise receives maximum ROI out of its software investments.</p>
                                        </div>
                                    </div>
                                    <div className="icon-grid-cnt-main">
                                        <div className="columns is-multiline">
                                            <div className="column is-6-tablet">
                                                <div className="icon-grid-cnt-wrap">
                                                <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/web-dev-ser-01.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Consultation</h5>
                                                    <p>Endow with consulting services & create IoT path that helps in executing successful strategy for IoT.</p> 
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                                <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/hybird-lvl2-dev-04.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                <h5>Implementation</h5>
                                                    <p>Survey the diverse components of IoT like standards, network, sensors to discard any kind of hurdles comes in the way of its Implementation.</p> 
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ser-btn">
                                        <Link href="iot-app-development"><a className="theme-color ban-theme-btn">Read More</a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="por-count-wrap py-5 py-m-3">
                                <div className="container">
                                    <div className="icon-grid-main-wrap">
                                        <div className="icon-grid-img">
                                        <img src="../static/images/icons/png/q-ass.png" alt="i"/>
                                        </div>
                                        <div className="icon-grid-cnt">
                                            <h4>Quality Assurance and Testing</h4>
                                            <p>Right from the inception of a project to its functional testing, deployment, and product's quality assurance services, every phase of our quality testing and assurance lifecycle is well defined. Our QA and development teams work together on agile processes for each iteration, allowing us to respond quickly to changes.</p> 
                                        </div>
                                    </div>
                                    <div className="icon-grid-cnt-main">
                                        <div className="columns is-multiline">
                                            <div className="column is-6-tablet">
                                                <div className="icon-grid-cnt-wrap">
                                                <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/q-ass-ser-01.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>QA Strategy</h5>
                                                    <p>Provide mobile app strategy reference document that describes the scope, approach, resources, and schedule of an intended test activity</p> 
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                                <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/q-ass-ser-02.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                <h5>QA Assurance</h5>
                                                    <p>We evaluate mobile apps based on certain attributes to check its usability in operational mode, aligned to user's prerequisite.</p> 
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/q-ass-ser-03.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                <h5>QA Control</h5>
                                                    <p>Endeavoring a set of procedure to deploy apps that match quality business goals at the best value to our valued customer.</p> 
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ser-btn">
                                        <Link href="quality-assurance"><a className="theme-color ban-theme-btn">Read More</a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="por-count-wrap py-5 py-m-3">
                                <div className="container">
                                    <div className="icon-grid-main-wrap">
                                        <div className="icon-grid-img">
                                        <img src="../static/images/icons/png/o-web-dev-02.png" alt="i"/>
                                        </div>
                                        <div className="icon-grid-cnt">
                                            <h4>UI & UX</h4>
                                            <p>Designs that sell and drive business ROIs easily are what we specialize in delivering to enterprises of all sizes. We build flexible UX UI designs that reach a business's target audience through web portals and mobile applications seamlessly.</p>
                                        </div>
                                    </div>
                                    <div className="icon-grid-cnt-main">
                                        <div className="columns is-multiline">
                                            <div className="column is-6-tablet">
                                                <div className="icon-grid-cnt-wrap">
                                                <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/ui-ser-01.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Rigorous Research</h5>
                                                    <p>We place ideas through a precise research phase to explore their feasibility to derive out an overwhelming picture.</p> 
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                                <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/ui-ser-02.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                <h5>Interactive Wire-framing</h5>
                                                    <p>We ponder the interactive approach to build interactive wireframes- review the idea, transform design concepts by availing expertise of in-house design specialists.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/ui-ser-03.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Visual Designing</h5>
                                                    <p>Our designing team pushes their excellence & their creativity limits to create visual designs that deliver results.</p>
                                                <h5></h5>
                                                    <p></p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/ui-ser-04.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                <h5>User Testing</h5>
                                                    <p>We build the most innovative user interface & experience that comes after testing & optimizing designs.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/hybird-lvl4-dev-02.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                <h5>Integration Assistance</h5>
                                                    <p>Integration Assistance We integrate apps & web services under optimized, enhanced mobile-first interfaces.</p>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ser-btn">
                                        <Link href="ui-ux-design"><a className="theme-color ban-theme-btn">Read More</a></Link>
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

