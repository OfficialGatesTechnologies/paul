
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
                  
                    title:'Interaction Design',
                    image:'../static/images/icons/logo-int-design.svg',
                    tabContent:"Keeping a focus on assets like animations, the flow of applications, proper navigation, and easy arrangements of functions, we convert end-user's need into the flawless interactive design, which provides users an ease to interact with each and specific elements of the application.",
                },
                {
                  
                    title:'Prototyping',
                    image:'../static/images/icons/logo-prototype.svg',
                    tabContent:"In order to provide a complete description & visualization of the final application, our big part of the design process is defining user-interactive wireframes & prototype of the project which enables users to visualize their project step-by-step. We do extra than just 'see' your app with static wireframes and screens - we 'feel' it with rapid visual prototyping",
                },
                {
                  
                    title:'Brand Conceptualization',
                    image:'../static/images/icons/logo-concept.svg',
                    tabContent:"In the highly visualized world, we conceptualize every aspect before building an app right from its brand Identification, to the selection of suitable colors, to interactive designing of Logo, to flawless steps of functionalities. So that user can attain a fluent path right from login to the required services.",
                },
                {
                  
                    title:'Website Design',
                    image:'../static/images/icons/logo-website.svg',
                    tabContent:"In the world full of electronic devices, we make sure that the website which we deliver be highly responsive that makes web pages render well on a variety of devices and window or screen resolutions.",
                },
                {
                  
                    title:'Mobile App Design',
                    image:'../static/images/icons/logo-mob-design.svg',
                    tabContent:"We follow 'design first, develop-second' model. We provide appealing designs & unmistakable UIs, in order to attract customers towards our developed mobile application. The design process which we attain is collaborative, interactive, fun & energetic.",
                },
                {
                  
                    title:'User Experience',
                    image:'../static/images/icons/logo-u-ex.svg',
                    tabContent:"In order to provide an engaging experience to our users, we focus on things like colors, spacing, font styles and hierarchy, button styles, and other aspects of the design and ensure to convey the flexible UI based apps.",
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
                    <title>{site_name} | UI / UX Design</title>
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
                            <h4>UI/UX Design Company</h4>
                        </div>
                       
                    </div>
                    
                    <div className="page-cnt-wrap py-5 py-m-3 pb-0">
                        <div className="page-main-cnt pb-5 pb-m-2">
                            <div className="container">
                            <h4>Craft an awesome,user centric & flawless user experience</h4>
                            <p>We are living in an era of digital world where mobile apps touched each individuals lives directly or indirectly, Considering the fact everyone is trying their fate to dominant the space by launching a mobile application to cater every day to day activity of a individual. Stand tall among million of apps, Mobile App Design is the vital characteristic that help entrepreneurs to drive more crowd.</p>

                            <p>Paul as a Top Mobile App Design Company, design an App interface that makes an enthusiastic association of users to Mobile Application. Our Design blended with your thoughts, influence the user to go gaga for each click, tap, swipe, and squeeze. Our team of developers recognizes what components clients require on their devices and how to spread them out for them to act normally and on prompt.</p>

                            <p>We have a pool of experienced and devoted UI/UX masters, who are capable in designing extraordinary mobile apps. Our top to bottom comprehension of Android and iOS design guidelines, empowers us to designs easy to understand and highly engaged interfaces. By incorporating with the most recent technologies and innovative devices, we make inventive and extraordinary results in UI/UX design.</p>

                            <p>Being an experienced Mobile App Design Company headquartered India and furthermore shrouded numerous parts in various countries including USA, UAE, Germany and so forth, we make outstanding and profoundly captivating B2B and B2C applications while improving their perceivability and ease of use. We plan mobile applications thinking about client particular business prerequisites, which thusly, bring about intelligent UIs that are immaculate, instinctive, and easy to understand.</p>


                            </div>
                        </div>
                        <div className="startup-grid py-5 py-m-3 theme-bg">
                            <div className="container">
                                <div className="mx-1000">
                                <div className="sec-ttl has-text-centered">
                                    <h1 className="ttl-head">We Are In Top UI/UX App Development Company For Reasons</h1>
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
                                <h1 className="ttl-head">Our UI & UX Development Services Includes</h1>
                                <p className="ttl-p mx-610">Draw the world with the intense knowledge of UX & UI designing & get the web & mobile design which simply hard to ignore.</p>
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

