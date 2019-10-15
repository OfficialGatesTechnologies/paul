import React, { Component } from 'react';
import '../styles/styles.scss'
import Link from 'next/link';
import AliceCarousel from 'react-alice-carousel';
import { withRouter } from 'next/router';
import ScrollAnimation from 'react-animate-on-scroll';
 export default withRouter(class Header extends Component {
 
     
     
    constructor(props) {
        super(props);
        this.state = {
            mainBannerItems : {
                0: { items: 1 },
              }
        }
    }
    componentDidMount = () => {

    }
 
    render() {
       
        return (

            <div>
 

<div className="banner-carousel">
<div className="container">
    <AliceCarousel responsive={this.state.mainBannerItems} mouseDragEnabled  buttonsDisabled ={true}>
    <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
        <div className="banner-items columns">
            <div className="banner-img column has-text-centered-mobile is-full-mobile is-half-tablet is-three-fifths-desktop">
             
            <img src="../static/images/banner/banner-img-01.png"/>
             
            </div>
            <div className="banner-txt column has-text-centered-mobile">
            
                <h5>WEB</h5>
                <h1>DESIGN</h1>
                <p>At WebsitePilot our aim is to design and build you a fully-functional eye-catching website so
that you can start building your online prescence and generating leads as soon as your
website goes live.</p>
                <Link href="#"><a className="theme-color ban-theme-btn">Get started</a></Link>
            </div>
            </div>
            </ScrollAnimation>
            
            <div className="banner-items columns">
            <div className="banner-img column has-text-centered-mobile is-full-mobile is-half-tablet is-three-fifths-desktop"><img src="../static/images/banner/banner-img-03.png"/></div>
            <div className="banner-txt column has-text-centered-mobile">
                <h5>SEARCH ENGINE</h5>
                <h1>OPTIMISATION</h1>
                <p>WebsitePilot can help you to rank higher on Google and other search engines for your target
keywords by using Search Engine Optimisation (SEO) techniques.</p>
                <Link href="#"><a className="theme-color ban-theme-btn">Get started</a></Link>
            </div>
            </div>
            <div className="banner-items columns">
            <div className="banner-img column has-text-centered-mobile is-full-mobile is-half-tablet is-three-fifths-desktop"><img src="../static/images/banner/banner-img-02.png"/></div>
            <div className="banner-txt column has-text-centered-mobile">
                <h5>GOOGLE </h5>
                <h1>ADS</h1>
                <p>Looking for immediate website visitors as soon as your website goes live? Pay-per-Click
(PPC) allows you to pay to be at the top of Google for your target keywords. Our Google Ads
Certified professionals are here to help.</p>
                <Link href="ecommerce-app-development"><a className="theme-color ban-theme-btn">Get started</a></Link>
            </div>
            </div>
    </AliceCarousel>
    </div>
    </div>

    </div>
        )
        
    }
})
 





