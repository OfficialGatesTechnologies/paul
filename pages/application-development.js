
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
                    <title>{site_name} | Application Development</title>
                    <meta name="distribution" content="Global" />
                    <meta name="revisit-after" content="1 days" />
                    <meta name="creator" content="officialgates (www.officialgates.com)" />
                    <meta name="publisher" content="officialgates (www.officialgates.com)" />
                </Head>

                 
                <div className="main-wrap">
                    <div className="inner-banner has-text-centered">
                    
                        <div className="inner-banner-cnt">
                        <div className="circle-ripple"><img src="../static/images/icons/mob-dev-01.svg" alt="i"/> </div>
                            <h4>Experience The App Development Like Pro</h4>
                        </div>
                       
                    </div>
                    
                    <div className="page-cnt-wrap py-5 py-m-3 pb-0">
                        <div className="page-main-cnt pb-5 pb-m-2">
                            <div className="container">
                            <h4>All App Development Services Under One Roof</h4>
                            <p>Paul marshaled their app development services to fuel the growth of the entrepreneurs and enterprises by availing a strategic result-driven approach to ensure robust development of an app idea into an immortal mobile app.</p>
                            <p>We offer cost-effective, state of the art Web & Mobile App Development Services using the latest technologies for a wide range of industries to suit every enterprise need.</p>
                            <p>With a highly skilled team that never settle for less and experiments lots to deliver the best, Paul always kept eye on the client requirements and goals with each application it gets engaged. Our team harnessed every possible way in technology and analysis to shape the idea of an app into a hot seller of App Store.</p>
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
                                        <img src="../static/images/icons/png/i-phone.png" alt="i"/>
                                        </div>
                                        <div className="icon-grid-cnt">
                                            <h4>iPhone App Development</h4>
                                            <p>The class of iPhone is unmatched so does its application, Understanding the necessity of perfection and user experience our team of iPhone developers gets applauded by their work by many of our clients. Our Coding Ninjas craft the brilliance in Swift or Objective C with a blend of great user experience across multiple screen size. Paul iPhone App Development process start from ideation to post-launch support and maintenance for a wide variety of iOS platforms – iPhone,iPad, WatchOS and Apple TV</p>
                                        </div>
                                    </div>
                                    <div className="icon-grid-cnt-main">
                                        <div className="columns is-multiline">
                                            <div className="column is-6-tablet">
                                                <div className="icon-grid-cnt-wrap">
                                                <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/ios-dev-01.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Customized iPhone Apps</h5>
                                                    <p>We provide customize app development for every app we develop, considering the uniqueness of every idea different strategy, research and code would be executed & implemented to achieve the level of perfection.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                                <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/ios-dev-02.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Design in Accordance to Apple Guidelines</h5>
                                                    <p>App success is hidden behind the fluent User Experience and attractive Designs, We craft even minute point of interaction in the app that should yield higher conversion in transactions and high engagement time for the app.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/ios-dev-03.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Preserving Security & Confidentiality</h5>
                                                    <p>Data integrity and privacy are our prime concerns while preparing architecture, we ensure even minute details of the user remain intact in the system without any data loss or data theft. We deploy high-level measures to ensure the security and confidentiality of data.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/ios-dev-04.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Zero Bug Releases</h5>
                                                    <p>We ensure and practice zero-bug policy in our development and releases, Our multi-level release process ensures that app should be error-free and highly intact to quality check process. We believe bug-free app launch is the first step to the success of any mobile app.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/ios-dev-05.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Flexible Engagement Model</h5>
                                                    <p>App development would be in reach of each idea hamsters, Paul comes up with cost-effective and flexible engagement models. That would be able to satisfy the need of every segment as Startups, Entrepreneurs and Enterprises.</p>
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
                                        <img src="../static/images/icons/png/android-dev.png" alt="i"/>
                                        </div>
                                        <div className="icon-grid-cnt">
                                            <h4>Android App Development</h4>
                                            <p>Android is ruling over the board of tech-market with its wider presence, so why not develop the apps that rule over the million apps' Google Play Store? With the hands full of excellence, Paul is the one shop for all prerequisite. Backed with the technically luminous android app developers who possess brilliancy of Java, Kotlin, XML & Android's technologies, our team is agility able to consistently produce intuitive and polished apps that offer an exceptional user experience time after time and encompasses the wide range of Android devices including smartphones, tablets, and Android TV.</p>
                                        </div>
                                    </div>
                                    <div className="icon-grid-cnt-main">
                                        <div className="columns is-multiline">
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                                <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/android-dev-01.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Bag Full of Reliable Services</h5>
                                                    <p>A reliable service line attracts millions. We deliver a full spectrum of services - from app ideation to development maintenance and support systems to businesses to meet their current and emerging needs.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/android-dev-02.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Winning Zeal</h5>
                                                    <p>To win the race is in our zeal. We design and develop mobile apps with the goal of hitting the fish's eye, that get featured in the Google play store and win in the marketplace.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/android-dev-03.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Agile Development Approach</h5>
                                                    <p>To eliminate the fear of failure, Paul adheres agile approach to complete all development process and ensures to deploy risk-free pace full and precise outcome.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/android-dev-04.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Mild & Flaunt-free Release</h5>
                                                    <p>To meet the specified goal, we adept with the capabilities and ensures our end-users to avail the outcome which passed many of reliable quality assurance & testing phases.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/android-dev-05.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Paul: Smart Choice</h5>
                                                    <p>A smart product includes fixed cost, time/material, and dedicated team & Paul equip android app development services that meet diverse quality needs for cost-effective solutions.</p>
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
                                        <img src="../static/images/icons/png/hybird-dev.png" alt="i"/>
                                        </div>
                                        <div className="icon-grid-cnt">
                                            <h4>Hybrid App Development</h4>
                                            <p>Hybrid app development allows apps to work on multiple platforms like iOS, Android, and window. For developing an app, which provides the similar level of utility and functionality on different platforms required strong technical knowledge and specialization and, At Paul; our tech-savvies deploys hybrid apps with pixel-perfect, crisp & clean functional designs by leveraging the power of PhoneGap, Cordova & Xamarin frameworks. We understand our customer's requirements, always exceed expectations, and exponentially increase brand awareness.</p>
                                        </div>
                                    </div>
                                    <div className="icon-grid-cnt-main">
                                        <div className="columns is-multiline">
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                                <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/hybird-dev-01.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Seamless Integration</h5>
                                                    <p>Our hybrid app developers remain abreast with the latest trends & technologies and use the codes of the specific mobile device to keep it in sync with various other mobile apps.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/hybird-dev-02.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Robust Compatibility</h5>
                                                    <p>With our hybrid app development service, we create a perfect blend of native app’s usability and web app’s versatility.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/hybird-dev-03.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Quality Assurance meets Excellence</h5>
                                                    <p>Paul is a place where quality meets Excellency. We provide rigorous quality assurance testing to ensure top-notch applications that work well on all the popular platforms.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/hybird-dev-04.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Pace, with Quality</h5>
                                                    <p>Fueling quality along with speed is the sign of brilliance. At Paul, Our tech-savvies cope up with the expertise to maintain the level of excellent development.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/hybird-dev-05.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>No-gaffe Results</h5>
                                                    <p>The desire of availing crystal is the choice of everyone. Paul always appreciate the values and provide the full range of services having a no-fault guarantee.</p>
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

