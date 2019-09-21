
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
                    <title>{site_name} | Web Development</title>
                    <meta name="distribution" content="Global" />
                    <meta name="revisit-after" content="1 days" />
                    <meta name="creator" content="officialgates (www.officialgates.com)" />
                    <meta name="publisher" content="officialgates (www.officialgates.com)" />
                </Head>

                 
                <div className="main-wrap">
                    <div className="inner-banner has-text-centered">
                    
                        <div className="inner-banner-cnt">
                        <div className="circle-ripple"><img src="../static/images/icons/web-dev.svg" alt="i"/> </div>
                            <h4>Full-fledged Web Development Services</h4>
                        </div>
                       
                    </div>
                    
                    <div className="page-cnt-wrap py-5 py-m-3 pb-0">
                        <div className="page-main-cnt pb-5 pb-m-2">
                            <div className="container">
                            <h4>Sense an Extensive Presence with Our Web Development Services</h4>
                            <p>Technology, creativity & reliability are threaded together to extract the best web development services from scratch for startups, enterprises & entrepreneurs with our customer-first approach.</p>
                            <p>In the world where everyone expect nothing less than perfection, Paul come up with the extensive web development services that marks a flawless web presence to build a brand image of enterprises and extract the best of business opportunism from online ecosystem.</p>
                            <p>Paul does the promise to their end users that no business will experience solitude in the internet-rife world. Using perfect blend of technologies including PHP, Web 2.0, HTML, Joomla, WordPress, Drupal, Magento & expertise of database languages such as MySQL, HTML, CSS, JavaScript, PHP Code, we develop the terrific & bespoke web apps. Our tech-geeks left no stone unturned in developing best out of best and their pervasive insight in web app development's technologies has earned us many success stories of web development projects with diverse needs & challenges.</p>
                            </div>
                        </div>
                        <div className="startup-grid py-5 py-m-3 theme-bg">
                            <div className="container">
                                <div className="mx-1000">
                                <div className="sec-ttl has-text-centered">
                                    <h1 className="ttl-head">We Are In Top Web App Development Company For Reasons</h1>
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
                                        <img src="../static/images/icons/png/php-dev.png" alt="i"/>
                                        </div>
                                        <div className="icon-grid-cnt">
                                            <h4>Custom PHP Development</h4>
                                            <p>Think Custom, Think PHP Web development- Every business' wish". Paul appreciate the platform inside out and provide uninterrupted custom PHP development services. Our troupe of well-versed PHP developers combines the best technological frameworks including LAMP stack (Linux, Apache, MySQL, PHP); Ajax, Web 2.0 & 3.0 to offer robust & cost-effective solutions to enterprises, startups & entrepreneurs. Feel customized with PHP only. Our tech-geeks bestows custom developed PHP web apps to business & startups via approaching proven technologies. To expand functionalities our developers render business-oriented solutions & creative web applications.</p>
                                        </div>
                                    </div>
                                    <div className="icon-grid-cnt-main">
                                        <div className="columns is-multiline">
                                            <div className="column is-6-tablet">
                                                <div className="icon-grid-cnt-wrap">
                                                <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/php-dev-01.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Zend</h5>
                                                    <p>Highly spotted Zend framework empowers developers to create corporate-friendly, error-free, simple PHP/MYSQL codes that are engineered to perform.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                                <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/php-dev-02.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Laravel</h5>
                                                    <p>Rich PHP framework Laravel empowers many modern websites, as it is capable of offering appropriate shortcuts, tools & components for web projects.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/php-dev-03.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Cake PHP</h5>
                                                    <p>Being a surpass web development framework, CakePHP develops & integrates websites & web apps swiftly with few sets of configuration.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/php-dev-04.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>CodeIgniter</h5>
                                                    <p>Unlock the power of Codeigniter development framework to take on web-based challenges of diverse scopes & complexities seamlessly & successfully.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/php-dev-05.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Yii</h5>
                                                    <p>YII framework is an open-source framework that leverages the power of PHP to write object-oriented web apps that will be ready to deliver true value to user.</p>
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
                                        <img src="../static/images/icons/png/cms-dev.png" alt="i"/>
                                        </div>
                                        <div className="icon-grid-cnt">
                                            <h4>CMS Development via PHP</h4>
                                            <p>CMS stands for content management system, which offers ease & flexibility in managing content on web. CMS developers at Paul excel in using essential elements for effective CMS designing & development. Our years of experience make us far better than other.</p>
                                        </div>
                                    </div>
                                    <div className="icon-grid-cnt-main">
                                        <div className="columns is-multiline">
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                                <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/cms-dev-01.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Magento</h5>
                                                    <p>Magento, a feature-rich Ecommerce open source platform and the leading provider of Omni channel innovation addresses bugs accurately and allows business to receive more with more sales and improved ROI.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/cms-dev-02.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                <h5>WordPress</h5>
                                                    <p>WordPress, is an open-source CMS platforms that streamlines everything right from content repositories to digital experience management with unmatched efficiency.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/cms-dev-03.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                <h5>Joomla</h5>
                                                    <p>Being a feature-packed CMS, Joomla re-imagines what all a developer can do with PHP & object-oriented programming paradigms.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/cms-dev-04.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                <h5>Drupal</h5>
                                                    <p>Drupal is a power-packed, enterprise-class open source Content Management System designed for brisk & agile deployment.</p>
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
                                        <img src="../static/images/icons/png/angular-dev.png" alt="i"/>
                                        </div>
                                        <div className="icon-grid-cnt">
                                            <h4>Angular JS Development</h4>
                                            <p>Google's born, Angular JS is open-source, front-end web app framework that tackles challenges encountered during developing solitary page apps as well as enables dynamic views in web apps. Our well-versed developers come up with the perfect blend of technicality & creativeness along with the deep knowledge of AngularJS and pave path to the web apps that can spread their perfection & scalability on the web.</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="por-count-wrap py-5 py-m-3">
                                <div className="container">
                                <div className="icon-grid-main-wrap">
                                        <div className="icon-grid-img">
                                        <img src="../static/images/icons/png/node-dev.png" alt="i"/>
                                        </div>
                                        <div className="icon-grid-cnt">
                                            <h4>NodeJS Development</h4>
                                            <p>Excel real time web APIs & server side application with the power of NodeJS. The power-packed technologies burgeons the real time data streaming apps. Node JS a runtime system, used to build a network or other event driven structures. Paul is the one place to avail the Node JS indulged services, because Paul is backed with the pool of talented & mind-inventors developers who possess the quality & creativity along their expertise.</p>
                                        </div>
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
                                            <h4>Our Web Development Route:</h4>
                                            <p>Whether you look for agile development of a single app or the entire suite of web app development project delivery, we, as one of the top web development companies, can ensure positive outcomes of our web development solutions & services that bring exceptional business results.</p>
                                        </div>
                                    </div>
                                    <div className="icon-grid-cnt-main">
                                        <div className="columns is-multiline">
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                                <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/o-web-dev-01.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                    <h5>Evaluation</h5>
                                                    <p>We, professionally analyze required working threads for business & startups, and then uncover all the loopholes that are needed to be covered with our pin-point assessment.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/o-web-dev-02.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                <h5>Design & Development</h5>
                                                    <p>After performing an in-depth evolution, our web developers & designers craft a blueprint for online business, and leave no rock unturned in optimizing the designing & development.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/o-web-dev-03.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                <h5>Front-End Development</h5>
                                                    <p>To make sure that the web app is working with a pace across diverse platforms; our web app developers employ the pioneering front-end coding level. The code, which we implement, supports diverse range of devices.</p>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="column is-6-tablet">
                                            <div className="icon-grid-cnt-wrap">
                                            <div className="icon-grid-cnt-img"><img src="../static/images/icons/png/o-web-dev-04.png" alt="i"/></div>
                                                <div className="icon-grid-cnt-in">
                                                <h5>Back- End CMS Development</h5>
                                                    <p>To make easy management & updating process, we deploy the effective CMS development & back-end coding process and build secure platforms that keep the data shared between user & business protected.</p>
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

