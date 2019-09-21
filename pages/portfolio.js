
import React, { Component } from 'react';
import Head from 'next/head';
import { site_name } from '../utils/Common';
import { withRouter } from 'next/router';
import Link from 'next/link'
import ReactSVG from 'react-svg';
import renderHTML from 'react-render-html';


export default withRouter(class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
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
              <title>{site_name} | Portfolio</title>
              <meta name="distribution" content="Global" />
              <meta name="revisit-after" content="1 days" />
              <meta
                name="creator"
                content="officialgates (www.officialgates.com)"
              />
              <meta
                name="publisher"
                content="officialgates (www.officialgates.com)"
              />
            </Head>

            <div className="main-wrap">
              {/* <div className="inner-banner has-text-centered">
                <div className="inner-banner-cnt">
                  <div className="circle-ripple">
                    <img
                      src="../static/images/icons/iot-icon-inner-top.svg"
                      alt="i"
                    />{" "}
                  </div>
                  <h4>Internet of Things App Development</h4>
                </div>
              </div> */}
<div className="left-blogs-sec">

  <div className="as-text-centered">
  <div className="columns is-multiline">
    <div className="column is-8-desktop margin-auto">
    <div className="our-post py-2 pt-0">
                    
                    <div className="container">
                    <div className="as-text-centered py-5 py-m-3">
                        <div className="columns is-multiline">
                            <div className="column is-6-desktop is-half-tablet">
                              <div className="ex-content lg-tilte">
                                <h4 className="mg-t-10 mg-b-20">EXPLORE RECENT WORKS</h4>
                                <p className="light-gray-cus">We’re constantly refining our product. Adding new features. Working to help your section business grow.</p>
                              </div>
                            <div className="card blog-box port-box-con">
                                <div className="card-image">
                                <figure className="image is-4by3" style={{backgroundImage: 'url("../static/images/others/works01.png"'}}>
                                {/* <img src="../static/images/others/works01.png" alt="Image" /> */}
                                </figure>
                                </div>
                                <div className="card-content">
                                <div className="portsec">
                                  <h1 className="port-head">DrugRep</h1>
                                  <small>PHP — eCommerce</small>
                                </div>
                                
                                </div>
                                </div>
                                <div className="card blog-box port-box-con">
                                <div className="card-image">
                                <figure className="image is-4by3" style={{backgroundImage: 'url("../static/images/others/works02.png"'}}>
                                {/* <img src="../static/images/others/blog1.jpg" alt="Image" /> */}
                                </figure>
                                </div>
                                <div className="card-content">
                                <div className="portsec">
                                  <h1 className="port-head">Nigeria PhoneBook</h1>
                                  <small>PHP — Phone Number</small>
                                </div>
                                
                                </div>
                                </div>
                                <div className="card blog-box port-box-con">
                                <div className="card-image">
                                <figure className="image is-4by3" style={{backgroundImage: 'url("../static/images/others/works06.png"'}}>
                                {/* <img src="../static/images/others/blog1.jpg" alt="Image" /> */}
                                </figure>
                                </div>
                                <div className="card-content">
                                <div className="portsec">
                                  <h1 className="port-head">Go Dropping</h1>
                                  <small>PHP — Online Taxi Booking</small>
                                </div>
                                
                                </div>
                                </div>
                            </div>
                            <div className="column is-6-desktop is-half-tablet">
                            <div className="card blog-box port-box-con">
                                <div className="card-image">
                                <figure className="image is-4by3" style={{backgroundImage: 'url("../static/images/others/works04.png"'}}>
                                {/* <img src="../static/images/others/blog1.jpg" alt="Image" /> */}
                                </figure>
                                </div>
                                <div className="card-content">
                                <div className="portsec">
                                  <h1 className="port-head">Rehmie Pay</h1>
                                  <small>PHP — Payments</small>
                                </div>
                                
                                </div>
                                </div>
                            <div className="card blog-box port-box-con">
                                <div className="card-image">
                                <figure className="image is-4by3" style={{backgroundImage: 'url("../static/images/others/works03.png"'}}>
                                {/* <img src="../static/images/others/blog1.jpg" alt="Image" /> */}
                                </figure>
                                </div>
                                <div className="card-content">
                                <div className="portsec">
                                  <h1 className="port-head">Rehmie</h1>
                                  <small>PHP — eCommerce and Online Recharge</small>
                                </div>
                                
                                </div>
                                </div>
                                
                                <div className="card blog-box port-box-con">
                                <div className="card-image">
                                <figure className="image is-4by3" style={{backgroundImage: 'url("../static/images/others/works05.png"'}}>
                                {/* <img src="../static/images/others/blog1.jpg" alt="Image" /> */}
                                </figure>
                                </div>
                                <div className="card-content">
                                <div className="portsec">
                                  <h1 className="port-head">Fuudies</h1>
                                  <small>PHP — Foods and Restaurant</small>
                                </div>
                                
                                </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    </div>
                </div>
    </div>
   
  </div>
  </div>
</div>
              
            </div>
          </div>
        );
    }
})

