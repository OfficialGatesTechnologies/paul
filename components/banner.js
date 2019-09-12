import React, { Component } from 'react';
import '../styles/styles.scss'
import Link from 'next/link';
import AliceCarousel from 'react-alice-carousel';
import { withRouter } from 'next/router';
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
    
        <div className="banner-items columns">
            <div className="banner-img column is-7"><img src="../static/images/banner/banner-img-01.png"/></div>
            <div className="banner-txt column is-5">
                <h5>DIGITAL</h5>
                <h1>MARKETING</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some look even slightly believable.</p>
                <Link href="#"><a className="theme-color ban-theme-btn">Get started</a></Link>
            </div>
            </div>
            <div className="banner-items columns">
            <div className="banner-img column is-7"><img src="../static/images/banner/banner-img-01.png"/></div>
            <div className="banner-txt column is-5">
                <h5>DIGITAL</h5>
                <h1>MARKETING</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some look even slightly believable.</p>
                <Link href="#"><a className="theme-color ban-theme-btn">Get started</a></Link>
            </div>
            </div>
            <div className="banner-items columns">
            <div className="banner-img column is-7"><img src="../static/images/banner/banner-img-01.png"/></div>
            <div className="banner-txt column is-5">
                <h5>DIGITAL</h5>
                <h1>MARKETING</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some look even slightly believable.</p>
                <Link href="#"><a className="theme-color ban-theme-btn">Get started</a></Link>
            </div>
            </div>
    </AliceCarousel>
    </div>
    </div>

    </div>
        )
        
    }
})
 





