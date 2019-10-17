
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
                  
                    title:'Apple Watch',
                    image:'../static/images/icons/logo-apple-watch.svg',
                    tabContent:"From the first handheld mobile phone to the latest Apple Watch the world of communication has changed dramatically. We have a well-versed and expert development team for the wearable app development with watch OS",
                },
                {
                  
                    title:'Android Watch',
                    image:'../static/images/icons/logo-android-watch.svg',
                    tabContent:"Powered by Android, Android Watch has altered the medium of communication in a more fluent way. With the well-experienced & talented development team for Android Watch app development, we come up with tech-fit Android Watch Apps.",
                },
                {
                  
                    title:'Fitbit Devices',
                    image:'../static/images/icons/logo-fitness-watch.svg',
                    tabContent:"In order to track the number of steps walked, heart rate, quality of sleep, steps climbed, and other personal metrics involved in fitness, our dedicated Fitbit app developers deliver the best-in-class Fitbit app service with the best use of Fitbit API.",
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
                    <title>{site_name} | Wearable Development</title>
                    <meta name="distribution" content="Global" />
                    <meta name="revisit-after" content="1 days" />
                    <meta name="creator" content="officialgates (www.officialgates.com)" />
                    <meta name="publisher" content="officialgates (www.officialgates.com)" />
                </Head>

                 
                <div className="main-wrap">
                    <div className="inner-banner has-text-centered">
                    
                        <div className="inner-banner-cnt">
                        <div className="circle-ripple"><img src="../static/images/icons/smartwatch-dev.svg" alt="i"/> </div>
                        <ScrollAnimation animateIn="flipInY" initiallyVisible={false} animateOnce ="true">
                            
                            <h4>Wearable App Development Company</h4>
                        </ScrollAnimation>
                        </div>
                       
                    </div>
                    
                    <div className="page-cnt-wrap py-5 py-m-3 pb-0">
                        <div className="page-main-cnt pb-5 pb-m-2">
                        <ScrollAnimation animateIn="fadeInDown" initiallyVisible={false} animateOnce ="true">
                            <div className="container">
                            <h4>Constantly enhancing the digital experience on Wearables</h4>
                            <p>Number of associated Wearable devices around the globe would increases to 900 million+ in 2021. The presentation of Wearable devices has uplifted the way in which individuals convey and read messages, monitor their health, plan their everyday schedule, and life. Wearable devices makes the availability of interaction with apps and activities at very personal level.</p>

                            <p>Foreseen the paradigm shift in the number of users and technology, Paul is all set with their research labs to design and develop Top Wearable Apps that can connect individuals anytime anywhere on their respective wearable devices. Being a Market Leader it's our responsibility and moto to stay tuned with latest technological advancement in the field of Wearable Technology so that we can give an opportunity to our clients to extend their service platforms on wearables as well.</p>

                            <p>Our team of dedicated app developers are accomplished with Wear OS of Android and WatchKit OS of iOS and provided wearable app solution focused on sports, health and fitness, gaming and several others.</p>

                            <p>We are an experienced wearable app development company, we have know-how to offer best IoT app development solutions and wearable apps precisely suits your business needs. It runs efficiently and seamlessly on advanced wearable devices such as Apple iWatch, Android wear, Google glasses, etc. We proffer comprehensive wearable devices app development services for different industries.</p>


                            </div>
                            </ScrollAnimation>
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
                                <h1 className="ttl-head">Our Wearables App Development Services Includes</h1>
                                <p className="ttl-p mx-410">We drive innovations for future wearables technologies by developing smart, meaningful wearable apps for Android, iOS etc.</p>
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

