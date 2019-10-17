
import React, { Component } from 'react';
import Head from 'next/head';
import Com_res from '../components/com-res';
import Win_deeds from '../components/win-deeds';
import Our_rec from '../components/our-rec';
import Key_indus from '../components/key-indus';
import { site_name } from '../utils/Common';
import { withRouter } from 'next/router';
import Tabs from 'react-responsive-tabs';
import ReactSVG from 'react-svg';
import renderHTML from 'react-render-html';
import ScrollAnimation from 'react-animate-on-scroll';

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
                    <title>{site_name} | Quality Assurance</title>
                    <meta name="distribution" content="Global" />
                    <meta name="revisit-after" content="1 days" />
                    <meta name="creator" content="officialgates (www.officialgates.com)" />
                    <meta name="publisher" content="officialgates (www.officialgates.com)" />
                </Head>

                 
                <div className="main-wrap">
                    <div className="inner-banner has-text-centered">
                    
                        <div className="inner-banner-cnt">
                        <div className="circle-ripple"><img src="../static/images/icons/mob-dev-01.svg" alt="i"/> </div>
                        <ScrollAnimation animateIn="flipInY" initiallyVisible={false} animateOnce ="true">
                            <h4>Quality Assurance & Testing</h4>
                        </ScrollAnimation>
                        </div>
                       
                    </div>
                    
                    <div className="page-cnt-wrap py-5 py-m-3 pb-0">
                        <div className="page-main-cnt pb-5 pb-m-2">
                        <ScrollAnimation animateIn="fadeInDown" initiallyVisible={false} animateOnce ="true">
                            <div className="container">
                            <h4>We Practice Zero-Bug Release Policy that Allows us to Surpass a Myriad of Competitors.</h4>
                            <p>Quality Assurance & testing of the web & mobile apps is an indispensable part of our development process. To match the high standard & brand image, we deliver high-end quality products.</p>

                            <p>To assure the enterprises & startups in a way to be successful in apps engulf marketplace, quality & reliability of services offered by web & mobile apps is obligatory gear. Paul quality assurance engineers execute draconian quality assurance & testing including business cycle tests, database integrity, and usability, security, performance, verification and acceptance tests throughout app development process to identify bugs & baffles & enact highest quality deliveries.</p>

                            <p>We come up with a bag full of testing services, whether you require testing on mobile, web or personalized solutions, you can pick by your choice. Our highly competitive mobile app development engineers & quality analysts with best matching savvies for real time collaboration to work in complete synchronization with project needs, bearing you well-tested web & mobile apps.</p>


                            </div>
                            </ScrollAnimation>
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
                                    <div className="icon-grid-main-wrap q-ass-main-wrap">
                                        <div className="icon-grid-cnt has-text-centered">
                                            <h4>Sort of Quality assurance & testing we perform to equip the terrific out of best are.</h4>
                                        </div>
                                    </div>
                                    <div className="icon-grid-cnt-main">
                                        <div className="columns is-multiline">
                                            <div className="column is-6-tablet">
                                            <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                                                <div className="icon-grid-cnt-wrap">
                                                <div className="icon-grid-cnt-in q-ass-cnt-in">
                                                    <h5>Functional Testing</h5>
                                                    <p>With the year of experience & competence in functional testing, Paul ensures that all parts of the product are working accurately after changes without functionality misfortune.</p> 
                                                </div>
                                                </div>
                                            </ScrollAnimation>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-in q-ass-cnt-in">
                                                    <h5>GUI & Usability Testing</h5>
                                                    <p>Usability is the crucial factor of any web & mobile app that no app development company can dare to ignore, hence to bid the users high-level usability demands, Paul propose testing plan details, in which impression of app use and individuals' feelings activated by the product.</p> 
                                                </div>
                                                </div>
                                                </ScrollAnimation>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-in q-ass-cnt-in">
                                                    <h5>Accessibility Testing</h5>
                                                    <p>Accessibility should be adequately implemented in the app development algorithm & Paul guaranteeing that the developed web or mobile app is usable by burdened individuals having incapacities like hearing, visual impairment.</p> 
                                                </div>
                                                </div>
                                                </ScrollAnimation>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-in q-ass-cnt-in">
                                                    <h5>Performance Testing</h5>
                                                    <p>For any mobile app or web app, performance is very pivotal. The performance of the app decides the sojourn time of users on the app. Paul performs exact specialized examination of speed and adaptability, and approving execution attributes.</p> 
                                                </div>
                                                </div>
                                            </ScrollAnimation>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-in q-ass-cnt-in">
                                                    <h5>Installation & Configuration Testing</h5>
                                                    <p>Paul appreciate that installation & configuration testing is a special variant of App testing to test the performance of a web & mobile app on a machine with different devices, operating systems, supported drivers etc, hence we better look that the app is configured successfully and performing as expected after the installation.</p> 
                                                </div>
                                                </div>
                                            </ScrollAnimation>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-in q-ass-cnt-in">
                                                    <h5>System & Integration Testing</h5>
                                                    <p>Paul conducts potent system & integration testing on a complete, integrated system & effectively evaluate the system's compliance with the specific requirement and perform consolidation & testing of each smallest testable unit of mobile app in numerous courses.</p> 
                                                </div>
                                                </div>
                                            </ScrollAnimation>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-in q-ass-cnt-in">
                                                    <h5>Application Security Assurance Testing</h5>
                                                    <p>Paul inserts security in web & mobile app development cycle to wipe out the design defects, oversight, bugs and overseeing related risks and always ensures to eliminate all loopholes in the app that may causes data loss.</p> 
                                                </div>
                                                </div>
                                            </ScrollAnimation>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-in q-ass-cnt-in">
                                                    <h5>Localization Testing</h5>
                                                    <p>Paul knows that the mobile app localization has to be linguistic, artistic and technical, thus we always adhere the path of customizing localized version of the product for the target culture and language of explicit location</p> 
                                                </div>
                                                </div>
                                            </ScrollAnimation>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-in q-ass-cnt-in">
                                                    <h5>User Acceptance Testing</h5>
                                                    <p>Paul performs the user acceptance testing via specially developed tools to make mobile app is tested through multiple testing cycles, on multiple platforms, and gratify users stringent deadlines.</p> 
                                                </div>
                                                </div>
                                            </ScrollAnimation>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="por-count-wrap py-5 py-m-3">
                                <div className="container">
                                    <div className="icon-grid-main-wrap q-ass-main-wrap">
                                        <div className="icon-grid-cnt has-text-centered">
                                            <h3>Our Agile Approach:</h3>
                                            <h4>Delivery of quality globally is an excellence & we hold the masters in.</h4>
                                            <p className="has-text-centered">Right from the initiation of a mobile app development project to its quality testing, deployment, & product quality metrics, each phase of our quality testing & assurance process is well defined. Our QA & development troupe work together agility for each iterations, permitting us to act swiftly to changes.</p>
                                        </div>
                                    </div>
                                    <div className="icon-grid-cnt-main">
                                        <div className="columns is-multiline">
                                            <div className="column is-6-tablet">
                                            <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                                                <div className="icon-grid-cnt-wrap">
                                                <div className="icon-grid-cnt-in q-ass-cnt-in">
                                                    <h5>Test-Driven Approach</h5>
                                                    <p>We adheres the path of testing which proves that there is no room left for any ambiguity in mobile app performance.</p> 
                                                </div>
                                                </div>
                                                </ScrollAnimation>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-in q-ass-cnt-in">
                                            <h5>Genuine Tools</h5>
                                                    <p>We equip with the genuine app testing tools that accelerates us on the path of achieving bug-free mobile apps.</p> 
                                                </div>
                                                </div>
                                                </ScrollAnimation>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true"> 
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-in q-ass-cnt-in">
                                            <h5>Localization</h5>
                                                    <p>We test the app in multiple languages that provides mobile app localization.</p> 
                                                </div>
                                                </div>
                                                </ScrollAnimation>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-in q-ass-cnt-in">
                                            <h5>Ubiquitous Testing</h5>
                                                    <p>We perform ubiquitous testing including fault tolerance, interoperability & battery consumptions</p> 
                                                </div>
                                                </div>
                                                </ScrollAnimation>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-in q-ass-cnt-in">
                                            <h5>Security Assurance:</h5>
                                                    <p>Our user's security is our top priority & we keep app & user data security on our foremost priority.</p>  
                                                </div>
                                                </div>
                                                </ScrollAnimation>
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
                                <h1 className="ttl-head">Our Mobile App Development Services Includes</h1>
                                <p className="ttl-p mx-410">We provide user-centric mobile app development solution by which one can get seamless experience across devices.</p>
                            </div>
                            
                            <div className="mx-1000">
                                <div className="pack-tab has-text-centered">
                                <ScrollAnimation animateIn="bounceIn" initiallyVisible={false} animateOnce ="true">
                                    <Tabs items={this.getTabs()} />
                                </ScrollAnimation>
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

