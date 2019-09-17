import React, { Component } from 'react';
import '../styles/styles.scss';
import Link from 'next/link';
import { render } from 'react-dom';
import Tabs from 'react-responsive-tabs';
 
import { withRouter } from 'next/router';
import ReactSVG from 'react-svg';
import renderHTML from 'react-render-html';
export default withRouter(class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabItems: [
                {
                  
                    title:'Mobile Apps',
                    image:'../static/images/icons/tab-i-01.svg',
                    tabContent:"In the age of Smartphones, mobile apps have taken an immortal place & RipenApps provides the best services that excel in delivering client-centric & highly engaging custom mobile solutions as our team believes in innovativeness, uniqueness & creativeness.",
                },
                {
                    title:'Wearable', 
                    image:'../static/images/icons/tab-i-02.svg',
                    tabContent:"Our continuous research and learning in the field of Wearable Technology bags us a tag of top notch wearable app development company with a target to extend the digital experience beyond Mobile Devices to Smart Watches & TV’s.",
                },
                {
                    title:'Web', 
                    image:'../static/images/icons/tab-i-03.svg',
                    tabContent:"With the team of most creative & innovative website designers as well as canny developers comes the vast experience of knowledge in the zone of website development that gives streamline business solutions to every sort of industry.",
                },
                {
                    title:'IOT', 
                    image:'../static/images/icons/tab-i-04.svg',
                    tabContent:"In today’s era of technology, IoT emerges as the market disrupter. Keeping an eye on the same our team of inquisitive innovators left no stone unturned to offer feature-rich IoT apps development services in light of bespoke needs of customers from various industry verticals.",
                },
                {
                    title:'Beacon', 
                    image:'../static/images/icons/tab-i-05.svg',
                    tabContent:"Moving one step ahead with traditional mobile app development approach, our team has extra edge of experience in new technologies like iBeacon and BLE which gives add-ons to send customers highly contextual, hyper-local, meaningful messages and ads on their Smartphones.",
                },
                {
                    title:'UI / UX', 
                    image:'../static/images/icons/tab-i-06.svg',
                    tabContent:"We, at RipenApps, have the knowledge about the market requirements and therefore we design everything in a manner that it stimulates growth for your business. Our creativity to engage user experience in mobile apps and websites makes us a great choice across different platforms.",
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
                <section className="startup-sec py-5">
                <div className="sec-ttl has-text-centered">
                    <h1 className="ttl-head">Package Of Services Which Accomplish Every Business Need</h1>
                    <p className="ttl-p mx-610">Work reflects the brand, the services which we equip comes from the brilliance of the 
team which turns our viewers into elated customers.</p>
                </div>
                <div className="container">
                <div className="mx-1000">
                    <div className="pack-tab has-text-centered">
                        <Tabs items={this.getTabs()} />
                    </div>
                    </div>
                </div>
                </section>

            </div>
        )
    }
})