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
        
    }
    
    render() {

        return (

            <div>
                <section className="startup-sec py-5">
                <div className="container">
                    <div className="g-ad has-text-centered">
                         <img src="../static/images/ad-02.png" alt="image"/>
                        </div>
                    </div>
                    <div className="sec-ttl has-text-centered">
                        <h1 className="ttl-head">We would love to talk</h1>
                        <p className="ttl-p mx-610">Our dedication & commitment towards our target makes us shinier in the world of 
technology and has led us to establish success stories consecutively.</p>
                    </div>

                    <div className="container">
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
                            <div className="has-text-centered">
                                <Link href=""><a className="theme-color ban-theme-btn">Submit Request</a></Link>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        )
    }
})







