import React, { Component } from 'react';
import '../styles/styles.scss'
import Link from 'next/link';
import AliceCarousel from 'react-alice-carousel';
import { withRouter } from 'next/router';
 export default withRouter(class Header extends Component {
 
     
     
    constructor(props) {
        super(props);
        this.state = {
            ourWork : {
                0: { items: 1 },
              }
        }
    }
    componentDidMount = () => {

    }
 
    render() {
       
        return (

            <div>
 

<div className="banner-carousel work-carousel">
<div className="container">
    <AliceCarousel responsive={this.state.ourWork} mouseDragEnabled  buttonsDisabled ={true}>
    
        <div className="banner-items columns">
            <div className="banner-img column is-5"><img src="../static/images/others/work-01.png"/></div>
            <div className="banner-txt our-work-txt column is-7">
                <div className="o-wk-logo">
                    <div className="o-wk-logo-img">
                        <img src="../static/images/others/work-logo-01.png"/>
                    </div>
                    <div className="o-wk-cnt">
                        <h6>Rehmie</h6>
                        <p>Online Shopping, Mobile Recharge, Bill Payments</p>
                    </div>
                </div>
                <div className="work-carousel-txt">
                <p>Rehmie is No.1 Nigeria’s most widely accepted online shopping, mobile recharge, bill payments app!</p>
                <p>Rehmie also provide Online Hotel booking, Flight booking, Taxi booking, 
Car Rental, Furniture shopping, Visa service, Money Transfer, Phone Book 
service, Flight Delay Compensation, Event, and Party booking, Food, Movies, 
Real Estate, Bus booking.</p>
                    </div>
                <div className="avail-app">
                    <span className="avail-app-caps">Available APPS in</span>
                    <ul>
                        <li>
                            <span><img src="../static/images/icons/and-i.svg"/></span>
                        </li>
                        <li>
                        <span><img src="../static/images/icons/ios-i.svg"/></span>
                        </li>
                    </ul>
                </div>
                
            </div>
            </div>
            <div className="banner-items columns">
            <div className="banner-img column is-5"><img src="../static/images/others/work-01.png"/></div>
            <div className="banner-txt our-work-txt column is-7">
                <div className="o-wk-logo">
                    <div className="o-wk-logo-img">
                        <img src="../static/images/others/work-logo-01.png"/>
                    </div>
                    <div className="o-wk-cnt">
                        <h6>Rehmie</h6>
                        <p>Online Shopping, Mobile Recharge, Bill Payments</p>
                    </div>
                </div>
                <div className="work-carousel-txt">
                <p>Rehmie is No.1 Nigeria’s most widely accepted online shopping, mobile recharge, bill payments app!</p>
                <p>Rehmie also provide Online Hotel booking, Flight booking, Taxi booking, 
Car Rental, Furniture shopping, Visa service, Money Transfer, Phone Book 
service, Flight Delay Compensation, Event, and Party booking, Food, Movies, 
Real Estate, Bus booking.</p>
                    </div>
                <div className="avail-app">
                    <span className="avail-app-caps">Available APPS in</span>
                    <ul>
                        <li>
                            <span><img src="../static/images/icons/and-i.svg"/></span>
                        </li>
                        <li>
                        <span><img src="../static/images/icons/ios-i.svg"/></span>
                        </li>
                    </ul>
                </div>
                
            </div>
            </div>
            <div className="banner-items columns">
            <div className="banner-img column is-5"><img src="../static/images/others/work-01.png"/></div>
            <div className="banner-txt our-work-txt column is-7">
                <div className="o-wk-logo">
                    <div className="o-wk-logo-img">
                        <img src="../static/images/others/work-logo-01.png"/>
                    </div>
                    <div className="o-wk-cnt">
                        <h6>Rehmie</h6>
                        <p>Online Shopping, Mobile Recharge, Bill Payments</p>
                    </div>
                </div>
                <div className="work-carousel-txt">
                <p>Rehmie is No.1 Nigeria’s most widely accepted online shopping, mobile recharge, bill payments app!</p>
                <p>Rehmie also provide Online Hotel booking, Flight booking, Taxi booking, 
Car Rental, Furniture shopping, Visa service, Money Transfer, Phone Book 
service, Flight Delay Compensation, Event, and Party booking, Food, Movies, 
Real Estate, Bus booking.</p>
                    </div>
                <div className="avail-app">
                    <span className="avail-app-caps">Available APPS in</span>
                    <ul>
                        <li>
                            <span><img src="../static/images/icons/and-i.svg"/></span>
                        </li>
                        <li>
                        <span><img src="../static/images/icons/ios-i.svg"/></span>
                        </li>
                    </ul>
                </div>
                
            </div>
            </div>
    </AliceCarousel>
    
    </div>
    </div>

    </div>
        )
        
    }
})
 





