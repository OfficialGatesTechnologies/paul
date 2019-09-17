import React, { Component } from 'react';
import '../styles/styles.scss';
import Link from 'next/link';
import { withRouter } from 'next/router';
import $ from 'jquery';
export default withRouter(class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    componentDidMount = () => {
        $(".navbar-burger").click(function() {
            $(".navbar-burger").toggleClass("is-active");
            $(".navbar-menu").toggleClass("is-active");
        });
    }
    
    render() {

        return (

            <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link href="index"><a className="logo navbar-item"><img src="../static/images/logo.png" alt="Logo"/></a></Link>

                <a role="button" className="navbar-burger burger m-icon" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>

            </div>
            <div className="navbar-end">
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="m-scroll navbar-start">

                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link href="#"><a className="navbar-link">Services</a></Link>
                        <div className="navbar-dropdown">
                                <div className="nested navbar-item dropdown p-0">
                                    <div className="dropdown-trigger w-100">
                                    <Link href="#"><a className="navbar-item"><span className="dd-m-link" aria-haspopup="true" aria-controls="dropdown-menu">App Development</span></a></Link>
                                    </div>
                                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                        <div className="nested dropdown dropdown-item">
                                            <Link href="mobile-app-development"><a className="navbar-item">Mobile App Development</a></Link>
                                            <Link href="android-app-development"><a className="navbar-item">Android App Development</a></Link>
                                            <Link href="#"><a className="navbar-item">iPhone  App Development</a></Link>
                                            <Link href="#"><a className="navbar-item">Web App Development</a></Link>   
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="nested navbar-item dropdown p-0">
                                <div className="dropdown-trigger w-100">
                                    <Link href="#"><a className="navbar-item"><span className="dd-m-link" aria-haspopup="true" aria-controls="dropdown-menu">Web Technologies</span></a></Link>
                                    </div>
                                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                        <div className="nested dropdown dropdown-item">
                                            <Link href=""><a className="navbar-item">PHP Development</a></Link>
                                            <Link href=""><a className="navbar-item">Codeigniter</a></Link>
                                            <Link href="#"><a className="navbar-item">Zend Development</a></Link>
                                            <Link href="#"><a className="navbar-item">Laraval Development</a></Link>  
                                            <Link href=""><a className="navbar-item">Angular Development</a></Link>
                                            <Link href="#"><a className="navbar-item">Node JS Development</a></Link>
                                            <Link href="#"><a className="navbar-item">HTML5 Web App Development</a></Link>   
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="nested navbar-item dropdown p-0">
                                <div className="dropdown-trigger w-100">
                                    <Link href="#"><a className="navbar-item"><span className="dd-m-link" aria-haspopup="true" aria-controls="dropdown-menu">Hybrid App Development</span></a></Link>
                                    </div>
                                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                        <div className="nested dropdown dropdown-item">
                                            <Link href=""><a className="navbar-item">Ionic App Development</a></Link>
                                            <Link href=""><a className="navbar-item">Phonegap App Development</a></Link>
                                            <Link href="#"><a className="navbar-item">React Native App Development</a></Link>
                                            <Link href="#"><a className="navbar-item">Flutter App Development</a></Link>   
                                            <Link href="#"><a className="navbar-item">Xamarin App Development</a></Link>
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
                                            <Link href=""><a className="navbar-item">Wearable Development</a></Link>
                                            <Link href="#"><a className="navbar-item">IOT App Development</a></Link>
                                            <Link href="#"><a className="navbar-item">Beacon App Development</a></Link>   
                                        </div>
                                    </div>
                                    </div>
                                </div>
                        <Link href="#"><a className="navbar-item dropdown-item">UI / UX Design</a></Link>
                        <Link href="#"><a className="navbar-item dropdown-item">Quality Assurance</a></Link>
                        </div>
                        
                    </div>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link href="#"><a className="navbar-link">Industries</a></Link>
                            <div className="navbar-dropdown">
                                <Link href="#"><a className="navbar-item">IOT Application</a></Link>
                                <Link href="#"><a className="navbar-item">Healthcare & Fitness</a></Link>
                                <Link href="#"><a className="navbar-item">Education</a></Link>
                                <Link href="#"><a className="navbar-item">Banking & Finance</a></Link>
                                <Link href="#"><a className="navbar-item">Ecommerece</a></Link>
                                <Link href="#"><a className="navbar-item">Gaming</a></Link>
                                <Link href="#"><a className="navbar-item">Food & Restaurant</a></Link>
                                <Link href="#"><a className="navbar-item">Taxi Booking</a></Link>
                                <Link href="#"><a className="navbar-item">Dating</a></Link>
                                <Link href="#"><a className="navbar-item">Travel & Transport</a></Link>
                                <Link href="#"><a className="navbar-item">Events & Tickets</a></Link>
                                <Link href="#"><a className="navbar-item">Social Networking</a></Link>
                            </div>
                    </div>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link href="#"><a className="navbar-link">Case Studies</a></Link>
                        <div className="navbar-dropdown">
                            <Link href="#"><a className="navbar-item">Game App</a></Link>
                            <Link href="#"><a className="navbar-item">Sports App</a></Link>
                            <Link href="#"><a className="navbar-item">Car Wash App</a></Link>
                            <Link href="#"><a className="navbar-item">Coupon & Deals App</a></Link>
                            <Link href="#"><a className="navbar-item">News & Media App</a></Link>
                            <Link href="#"><a className="navbar-item">Health & Fitness App</a></Link>
                            <Link href="#"><a className="navbar-item">Restaurant App</a></Link>
                        </div>
                    </div>
                    <Link href="#"><a className="navbar-item">Portfolio</a></Link>
                    <Link href="#"><a className="navbar-item">Hire Us</a></Link>
                    </div>
                    </div>
                    <span className="navbar-item gt-btn-menu">
                        <Link href="#"><a className="theme-color">Get Quote</a></Link>
                    </span>
                </div>
                </nav>
            </div>
        )
    }
})







