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
                <Link href="#"><a className="logo navbar-item"><img src="../static/images/logo.png" alt="Logo"/></a></Link>

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
                        <Link href="#"><a className="navbar-item">Full Stack Development</a></Link>
                        <Link href="#"><a className="navbar-item">Mobile Apps Development</a></Link>
                        <Link href="#"><a className="navbar-item">Finance and Accounting</a></Link>
                        </div>
                    </div>
                    <Link href="#"><a className="navbar-item">Hire Resources</a></Link>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link href="#"><a className="navbar-link">Digital Marketing</a></Link>
                        <div className="navbar-dropdown">
                        <Link href="#"><a className="navbar-item">Ecommerce SEO Services</a></Link>
                        <Link href="#"><a className="navbar-item">Facebook Marketing</a></Link>
                        <Link href="#"><a className="navbar-item">PPC ad</a></Link>
                        <Link href="#"><a className="navbar-item">SEO</a></Link>
                        <Link href="#"><a className="navbar-item">Social Media Marketing</a></Link>
                        <Link href="#"><a className="navbar-item">Youtube Marketing</a></Link>
                        </div>
                    </div>
                    <Link href="#"><a className="navbar-item">IOT</a></Link>
                    <Link href="#"><a className="navbar-item">Products</a></Link>
                    <Link href="#"><a className="navbar-item"> Contact Us</a></Link>
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







