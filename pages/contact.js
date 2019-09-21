
import React, { Component } from 'react';
import Head from 'next/head';
import Banner from '../components/banner';
import Com_res from '../components/com-res';
import Win_deeds from '../components/win-deeds';
import Our_rec from '../components/our-rec';
import Key_indus from '../components/key-indus';
import { site_name } from '../utils/Common';
import { withRouter } from 'next/router';
import Link from 'next/link'
import ReactSVG from 'react-svg';


export default withRouter(class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    componentDidMount = () => {
    }

    render() {
        return (
            <div>
                <Head>
                    <meta charSet="utf-8" />
                    <title>{site_name} | Contact</title>
                    <meta name="distribution" content="Global" />
                    <meta name="revisit-after" content="1 days" />
                    <meta name="creator" content="officialgates (www.officialgates.com)" />
                    <meta name="publisher" content="officialgates (www.officialgates.com)" />
                </Head>

                 
                <div className="main-wrap">
                    {/* <div className="inner-banner has-text-centered">
                    
                        <div className="inner-banner-cnt">
                        <div className="circle-ripple"><img src="../static/images/icons/about.svg" alt="i"/> </div>
                            <h4>About</h4>
                        </div>
                       
                    </div> */}
                    
                    <div className="page-cnt-wrap py-5 py-m-3 pb-0">
                        <div className="page-main-cnt pb-5 pb-m-2">
                            
                                <div className="contact-cnt">
                                    <div className="container">
                                    <div className="columns is-multiline is-vcentered">
                                    <div className="column is-full-tablet  is-8-desktop">
                                        <div className="contact-form-sec">
                                            <h1 className="has-text-centered">Let's get In Touch</h1>
                                            
                                            <p className="mx-610 has-text-centered">We are always excited to discuss innovation and contribute our experience to add value. A right approach and a well framed strategy ensures a major part done and we help you with the same.</p>
                                            <h5 className="has-text-centered">We guarantee a much quicker and worth response.</h5>
                                            <div className="con-form mx-720">
                                                <div className="columns">
                                                    <div className="column">
                                                        <div className="field">
                                                            <div className="control cmn-input has-icons-left">
                                                                <input className="input" type="email" placeholder="Your name"/>
                                                                <span className="frm-icon"><img src="../static/images/icons/frm-user.svg" alt="i"/></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="column">
                                                        <div className="field">
                                                            <div className="control cmn-input has-icons-left">
                                                                <input className="input" type="email" placeholder="Mobile number"/>
                                                                <span className="frm-icon"><img src="../static/images/icons/frm-mobile.svg" alt="i"/></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="columns">
                                                    <div className="column">
                                                        <div className="field">
                                                            <div className="control cmn-input has-icons-left">
                                                                <input className="input" type="email" placeholder="Email id"/>
                                                                <span className="frm-icon"><img src="../static/images/icons/frm-mail.svg" alt="i"/></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="column">
                                                        <div className="field">
                                                            <div className="control cmn-input has-icons-left">
                                                                <input className="input" type="email" placeholder="Skype"/>
                                                                <span className="frm-icon"><img src="../static/images/icons/frm-skype.svg" alt="i"/></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="columns">
                                                    <div className="column">
                                                        <div className="field">
                                                            <div className="control cmn-txt-area">
                                                                <textarea className="textarea" placeholder="Project description"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="con-frm-btn has-text-centered">
                                                    <Link href=""><a className="theme-color ban-theme-btn">Submit Request</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="column is-full-tablet  is-4-desktop">
                                        <div className="abt-grid-sec con-grid-sec">
                                        <div className="columns is-multiline">
                                            <div className="column is-4-tablet is-full-desktop">
                                                <div className="abt-grid-wrap">
                                                    <div className="abt-grid-img abt-grid-img-phone">
                                                        <span><ReactSVG src="../static/images/icons/frm-mobile.svg" /></span>
                                                    </div>
                                                    <div className="abt-grid-cnt con-grid-cnt">
                                                        <h3>Phone</h3>
                                                        <p><Link href=""><a>+44 7911 123456</a></Link></p>
                                                        <p><Link href=""><a>+44 7911 123456</a></Link></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="column is-4-tablet is-full-desktop">
                                                <div className="abt-grid-wrap">
                                                    <div className="abt-grid-img abt-grid-img-phone">
                                                        <span><ReactSVG src="../static/images/icons/frm-mail.svg" /></span>
                                                    </div>
                                                    <div className="abt-grid-cnt con-grid-cnt">
                                                        <h3>Email</h3>
                                                        <p><Link href=""><a>support@paultech.com</a></Link></p>
                                                        <p><Link href=""><a>info@paultech.com</a></Link></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="column is-4-tablet is-full-desktop">
                                                <div className="abt-grid-wrap">
                                                    <div className="abt-grid-img abt-grid-img-phone">
                                                        <span><ReactSVG src="../static/images/icons/frm-skype.svg" /></span>
                                                    </div>
                                                    <div className="abt-grid-cnt con-grid-cnt">
                                                        <h3>Skype</h3>
                                                        <p><Link href=""><a>live:paul | tech</a></Link></p>
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
        )
    }
})

