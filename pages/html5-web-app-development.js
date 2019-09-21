
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
                  
                    title:'CSS3',
                    image:'../static/images/icons/logo-css.svg',
                    tabContent:"Leveraging on latest technology and advancements, Paul Technologies offers innovative CSS3-powered solutions to manage the way content is presented on web pages.",
                },
                {
                  
                    title:'JavaScript',
                    image:'../static/images/icons/logo-js.svg',
                    tabContent:"JavaScript popularly known as JS is a high-level Scalable and reliable language. With the expert & canny developers on board, we provide all JavaScript development services to match your business requirement.",
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
                    <title>{site_name} | HTML5 Web App Development</title>
                    <meta name="distribution" content="Global" />
                    <meta name="revisit-after" content="1 days" />
                    <meta name="creator" content="officialgates (www.officialgates.com)" />
                    <meta name="publisher" content="officialgates (www.officialgates.com)" />
                </Head>

                 
                <div className="main-wrap">
                    <div className="inner-banner has-text-centered">
                    
                        <div className="inner-banner-cnt">
                        <div className="circle-ripple"><img src="../static/images/icons/html-dev.svg" alt="i"/> </div>
                            <h4>HTML5 App Development Company</h4>
                        </div>
                       
                    </div>
                    
                    <div className="page-cnt-wrap py-5 py-m-3 pb-0">
                        <div className="page-main-cnt pb-5 pb-m-2">
                            <div className="container">
                            <h4>Appealing Mobile Solutions with Feature- Ready HTML5 Web App Development</h4>
                            <p>For enhancing online presence in an increasingly mobile device-based world, HTML5 is as a latest, most advanced, & in-demand web app development platform. HTML5 not only improves the user experience & interface but also significantly improves the experience, from a development standpoint, of creating mobile web pages.</p>
                            <p>Paul is the leading HTML5 Web App Development Company, headquartered in India, specializes in rendering innovative and out-of-the-box apps that harness the potential of cutting-edge HTML5 technology. The company has been backed by a dedicated workforce of experts offering high-performance HTML5 Web App Development Services to help you to surge ahead of the competition.</p>
                            <p>We have a team of tech-savvy, possessing expertise and industry experience in various HTML5 specific tools including CSS3, JSON, XML, and JavaScript etc. to develop business-centric apps that are feature-packed, user-friendly, scalable, reliable and cost-effective.</p>
                            <p>Since our inception, we have been successfully developing applications & providing exceptional HTML5 services not only in India but also in many zones of the world including USA, UAE, Germany, and Canada.</p></div>
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
                        <div className="page-cnt-tab">
                            <section className="startup-sec py-5">
                            <div className="container">
                            <div className="sec-ttl has-text-centered">
                                <h1 className="ttl-head">Our HTML5 Services Includes</h1>
                                <p className="ttl-p mx-410">Being a leader of the web, we deliver a perfect blend of innovative web-based development services.</p>
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

