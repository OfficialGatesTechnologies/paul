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
                    tabContent:"It is a long established fact that a reader will be distracted by the readable con",
                    
                },
                {
                    title:'Wearable', 
                    image:'../static/images/icons/tab-i-02.svg',
                    tabContent:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'",

                },
                {
                    title:'Web', 
                    image:'../static/images/icons/tab-i-03.svg',
                    tabContent:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'",

                },
                {
                    title:'IOT', 
                    image:'../static/images/icons/tab-i-04.svg',
                    tabContent:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'",

                }
        ]
        }
    }

    
    componentDidMount = () => {
    
    }
    GenerateSVG = (image,title) => {
        return <><ReactSVG src={image} /><b>{title}</b></>;
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
                <div className="container">
                <Tabs items={this.getTabs()} />
                </div>
            </div>
        )
    }
})







