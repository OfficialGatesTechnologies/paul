import React, { Component } from 'react';
import '../styles/styles.scss';
import Link from 'next/link';
import { withRouter } from 'next/router';
 
export default withRouter(class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeClass : false
        }
    }
    componentDidMount = () => {
  
    }
    toggleClass = () =>{
        const currentState = this.state.activeClass;
        this.setState({ activeClass: !currentState });

    }
    
    render() {

        return (

            <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link href="index"><a className="logo navbar-item" title="Paul"><img src="../static/images/logo.svg" alt="Logo"/></a></Link>
                <a role="button" className={this.state.activeClass ? 'navbar-burger burger m-icon is-active': 'navbar-burger burger m-icon'} onClick={this.toggleClass} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div className="navbar-end">
                <div id="navbarBasicExample" className={this.state.activeClass ? 'navbar-menu is-active': 'navbar-menu'}>
                    <div className="m-scroll navbar-start">
                    
                    <Link href="about"><a className="navbar-item">About</a></Link>
                   
                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link href="website-design"><a className="navbar-link">Website Design</a></Link>
                            <div className="navbar-dropdown">
                                <Link href="paid-search"><a className="navbar-item">Paid Search</a></Link>
                                <Link href="seo"><a className="navbar-item">Seo</a></Link>
                                <Link href="website-hosting"><a className="navbar-item">Website Hosting</a></Link>                             
                            </div>
                    </div>  
                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link href="services"><a className="navbar-link">Services</a></Link>
                        <div className="navbar-dropdown">
                                <div className="nested navbar-item dropdown p-0">
                                    <div className="dropdown-trigger w-100">
                                    <Link href="application-development"><a className="navbar-item"><span className="dd-m-link" aria-haspopup="true" aria-controls="dropdown-menu">App Development</span></a></Link>
                                    </div>
                                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                        <div className="nested dropdown dropdown-item">
                                            <Link href="mobile-app-development"><a className="navbar-item">Mobile App Development</a></Link>
                                            <Link href="android-app-development"><a className="navbar-item">Android App Development</a></Link>
                                            <Link href="iphone-app-development"><a className="navbar-item">iPhone  App Development</a></Link>
                                            <Link href="website-development"><a className="navbar-item">Web App Development</a></Link>   
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="nested navbar-item dropdown p-0">
                                <div className="dropdown-trigger w-100">
                                    <Link href="web-development"><a className="navbar-item"><span className="dd-m-link" aria-haspopup="true" aria-controls="dropdown-menu">Web Technologies</span></a></Link>
                                    </div>
                                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                        <div className="nested dropdown dropdown-item">
                                            <Link href="php-web-development"><a className="navbar-item">PHP Development</a></Link>
                                            <Link href="codeigniter-development-services"><a className="navbar-item">Codeigniter</a></Link>
                                            <Link href="zend-development"><a className="navbar-item">Zend Development</a></Link>
                                            <Link href="laravel-development"><a className="navbar-item">Laraval Development</a></Link>  
                                            <Link href="angular-js-development"><a className="navbar-item">Angular Development</a></Link>
                                            <Link href="node-js-development"><a className="navbar-item">Node JS Development</a></Link>
                                            <Link href="html5-web-app-development"><a className="navbar-item">HTML5 Web App Development</a></Link>   
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="nested navbar-item dropdown p-0">
                                <div className="dropdown-trigger w-100">
                                    <Link href="hybrid-app-development"><a className="navbar-item"><span className="dd-m-link" aria-haspopup="true" aria-controls="dropdown-menu">Hybrid App Development</span></a></Link>
                                    </div>
                                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                        <div className="nested dropdown dropdown-item">
                                            <Link href="ionic-app-development"><a className="navbar-item">Ionic App Development</a></Link>
                                            <Link href="phonegap-app-development"><a className="navbar-item">Phonegap App Development</a></Link>
                                            <Link href="react-native-development"><a className="navbar-item">React Native App Development</a></Link>
                                            <Link href="flutter-development"><a className="navbar-item">Flutter App Development</a></Link>   
                                            <Link href="xamarin-app-development"><a className="navbar-item">Xamarin App Development</a></Link>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="nested navbar-item dropdown p-0">
                                <div className="dropdown-trigger w-100">
                                    <Link href="#"><a className="navbar-item"><span className="dd-m-link" aria-haspopup="true" aria-controls="dropdown-menu">Latest Technologies</span></a></Link>
                                    </div>
                                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                        <div className="nested dropdown dropdown-item">
                                            <Link href="wearable-development"><a className="navbar-item">Wearable Development</a></Link>
                                            <Link href="iot-app-development"><a className="navbar-item">IOT App Development</a></Link>
                                            <Link href="beacon-app-development"><a className="navbar-item">Beacon App Development</a></Link>   
                                        </div>
                                    </div>
                                    </div>
                                </div>
                        <Link href="ui-ux-design"><a className="navbar-item dropdown-item">UI / UX Design</a></Link>
                        <Link href="quality-assurance"><a className="navbar-item dropdown-item">Quality Assurance</a></Link>
                        </div>
                        
                    </div>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link href="#"><a className="navbar-link">Industries</a></Link>
                            <div className="navbar-dropdown">
                                <Link href="iot-application"><a className="navbar-item">IOT Application</a></Link>
                                <Link href="healthcare-fitness-app-development"><a className="navbar-item">Healthcare & Fitness</a></Link>
                                <Link href="education-app-development"><a className="navbar-item">Education</a></Link>
                                <Link href="banking-finance-app-development"><a className="navbar-item">Banking & Finance</a></Link>
                                <Link href="ecommerce-app-development"><a className="navbar-item">Ecommerece</a></Link>
                                <Link href="gaming-app-development"><a className="navbar-item">Gaming</a></Link>
                                <Link href="food-restaurant-app-development"><a className="navbar-item">Food & Restaurant</a></Link>
                                <Link href="taxi-booking-app-development"><a className="navbar-item">Taxi Booking</a></Link>
                                <Link href="dating-app-development"><a className="navbar-item">Dating</a></Link>
                                <Link href="travel-transport-app-development"><a className="navbar-item">Travel & Transport</a></Link>
                                <Link href="events-tickets-app-development"><a className="navbar-item">Events & Tickets</a></Link>
                                <Link href="social-networking-app-development"><a className="navbar-item">Social Networking</a></Link>
                            </div>
                    </div>
                    {/* <div className="navbar-item has-dropdown is-hoverable">
                        <Link href="#"><a className="navbar-link">Case Studies</a></Link>
                        <div className="navbar-dropdown">
                            <Link href="case-study-game-app-development"><a className="navbar-item">Game App</a></Link>
                            <Link href="#"><a className="navbar-item">Sports App</a></Link>
                            <Link href="#"><a className="navbar-item">Car Wash App</a></Link>
                            <Link href="#"><a className="navbar-item">Coupon & Deals App</a></Link>
                            <Link href="#"><a className="navbar-item">News & Media App</a></Link>
                            <Link href="#"><a className="navbar-item">Health & Fitness App</a></Link>
                            <Link href="#"><a className="navbar-item">Restaurant App</a></Link>
                        </div>
                    </div> */}
                    
                    <Link href="portfolio"><a className="navbar-item">Portfolio</a></Link>
                    <Link href="case-studies"><a className="navbar-item">Case Studies </a></Link>
                    <Link href="prices"><a className="navbar-item">Prices</a></Link>
                    <Link href="hire-dedicated-app-developers"><a className="navbar-item">Hire Us</a></Link>
                    </div>
                    </div>
                    <span className="navbar-item gt-btn-menu">
                        <Link href="contact"><a className="theme-color">Get Quote</a></Link>
                    </span>
                </div>
                </nav>
            </div>
        )
    }
})







