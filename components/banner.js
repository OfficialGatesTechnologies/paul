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
            <div className="banner-img column has-text-centered-mobile is-full-mobile is-half-tablet is-three-fifths-desktop"><img src="../static/images/banner/banner-img-01.png"/></div>
            <div className="banner-txt column has-text-centered-mobile">
                <h5>DIGITAL</h5>
                <h1>MARKETING</h1>
                <p>We, at Paul, strive relentlessly to keep up with customer expectations and satisfaction in the fields of marketing and advertisement.</p>
                <Link href="#"><a className="theme-color ban-theme-btn">Get started</a></Link>
            </div>
            </div>
            <div className="banner-items columns">
            <div className="banner-img column has-text-centered-mobile is-full-mobile is-half-tablet is-three-fifths-desktop"><img src="../static/images/banner/banner-img-03.png"/></div>
            <div className="banner-txt column has-text-centered-mobile">
                <h5>MOBILE APPS</h5>
                <h1>DEVELOPMENT SERVICE</h1>
                <p>Smartphone is one of the colossal launch or endowment of the innovation that people are using for their distinctive outline.</p>
                <Link href="mobile-app-development"><a className="theme-color ban-theme-btn">Get started</a></Link>
            </div>
            </div>
            <div className="banner-items columns">
            <div className="banner-img column has-text-centered-mobile is-full-mobile is-half-tablet is-three-fifths-desktop"><img src="../static/images/banner/banner-img-02.png"/></div>
            <div className="banner-txt column has-text-centered-mobile">
                <h5>ECOMMERCE</h5>
                <h1>SEO SERVICES</h1>
                <p>Our eCommerce SEO professionals are highly passionate and create effective custom on-page and off-page strategies in order to optimize each of your product, the categories and the major brand pages.</p>
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
 





