import React, { Component } from 'react';
import '../styles/styles.scss';
import Tabs from 'react-responsive-tabs';
import { withRouter } from 'next/router';
import ReactSVG from 'react-svg';
import ScrollAnimation from 'react-animate-on-scroll';
import WebsiteProcessContent from './website-process-content';
import SeoContent from './seo-content';
import PpcContent from './ppc-content';
export default withRouter(class WebSectionThree extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabItems: [
                {
                  
                    title:'WEBSITE DESIGN PROCESS',
                    image:'../static/images/icons/webdesignprocess.svg',
                    tabContent: <WebsiteProcessContent/>,
                },
                {
                    title:'SEO PROCESS', 
                    image:'../static/images/icons/seoprocess.svg',
                    tabContent:<SeoContent/>,
                },
                {
                    title:'PPC PROCESS', 
                    image:'../static/images/icons/ppcprocess.svg',
                    tabContent:<PpcContent />,
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
            getContent: () => president.tabContent, 
            /* Optional parameters */
            key: index,
            tabClassName: 'tab',
            panelClassName: 'panel',
          }));
    }
    
    render() {

        return (

            <div>
                <section className="startup-sec pb-5 pt-2">
                
                               
                <div className="container">
                <div className="mx-1000">
                    <div className="pack-tab has-text-centered">
                    <ScrollAnimation initiallyVisible={false} animateOnce ="true" animateIn="flipInX">
                        <Tabs items={this.getTabs()} />
                        </ScrollAnimation>
                    </div>
                    </div>
                </div>
                </section>

            </div>
        )
    }
})