
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
                  
                    title:'XMPP',
                    image:'../static/images/icons/logo-xmpp.svg',
                    tabContent:"XMPP is an application profile of the Extensible Markup Language (XML) that empowers the near-real-time exchange of structured yet extensible data between any two or more network entities. Our tailored team has vast knowledge about XMPP.",
                },
                {
                  
                    title:'MQTT',
                    image:'../static/images/icons/logo-mqtt-new.svg',
                    tabContent:"In order to make ideal mobile application, MQTT is perfect because of its small size, low power usage, minimized data packets, and efficient distribution of information to one or many receivers. Our team of IoT app developers has proper vast knowledge inside out.",
                },
                
                {
                  
                    title:'Wireless',
                    image:'../static/images/icons/logo-wireless.svg',
                    tabContent:"In the era of the technology, IT sector is continually boosting in every aspects and to keep everyone engage, With the immense learning of our development team, We are able to develop IoT applications that are Wireless based and it licenses services, for example, long-range communications, that are impossible or impractical to implement with the use of wires.",
                },
                {
                  
                    title:'Raspberry PI',
                    image:'../static/images/icons/logo-raspberry.svg',
                    tabContent:"In order to connect two IoT with each other efficiently and provide extra-ordinary communication without any baffles & hurdles, we help you with our in-house expertise to design great feature-rich and responsive mobile solutions based around the Raspberry Pi.",
                },
                {
                  
                    title:'Photon',
                    image:'../static/images/icons/logo-photon.svg',
                    tabContent:"Being a champion in the world of technology, we come up with the team of extra talented and canny developers as well as designers who are blessed with the knowledge of the smart tools like the photon, to make user-engaging & user-centric devices for better and interactive connectivity",
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
                    <title>{site_name} | IOT App Development</title>
                    <meta name="distribution" content="Global" />
                    <meta name="revisit-after" content="1 days" />
                    <meta name="creator" content="officialgates (www.officialgates.com)" />
                    <meta name="publisher" content="officialgates (www.officialgates.com)" />
                </Head>

                 
                <div className="main-wrap">
                    <div className="inner-banner has-text-centered">
                    
                        <div className="inner-banner-cnt">
                        <div className="circle-ripple"><img src="../static/images/icons/iot-dev.svg" alt="i"/> </div>
                            <h4>IoT App Development Company</h4>
                        </div>
                       
                    </div>
                    
                    <div className="page-cnt-wrap py-5 py-m-3 pb-0">
                        <div className="page-main-cnt pb-5 pb-m-2">
                            <div className="container">
                            <h4>Our inquisitive innovative team offers feature-rich IoT apps</h4>
                            <p>Internet Of Things is the hot cake in the technology fraternity now a days. Whether we talk about Home Automation, Connected Devices, Security Systems or Controlling Systems IoT has not spare any field where it has not make an impact on operations by lowering down the operative cost and increasing the decision making and intelligence.</p>

                            <p>When it comes to IoT app development services, Paul emerges as a Top IoT app development services in implementing a solution from scratch or maintaining an existing IoT application. We have worked for different industries including Health & Fitness, Hospitality, Home Automation and Security to provide world class IoT solutions.</p>

                            <p>Our expertise in IoT span from Raspberry Pi, Python devices, Bluetooth devices, ESP8266 and many more. Our team is very well versed in working parallely with off-shore hardware teams to maintain a sync between the hardware and the software, as we believed that a great IoT application will be a result of seamless synchronisation between Hardware and Software team.</p>
                            </div>
                        </div>
                        <div className="startup-grid py-5 py-m-3 theme-bg">
                            <div className="container">
                                <div className="mx-1000">
                                <div className="sec-ttl has-text-centered">
                                    <h1 className="ttl-head">We Are In Top IoT App Development Company For Reasons</h1>
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
                                <h1 className="ttl-head">Our IoT App Development Services Includes</h1>
                                <p className="ttl-p mx-410">Let's make "connected" future together with the smart & keen apps for the IoT devices and let your Smartphone talk to your Smart home.</p>
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

