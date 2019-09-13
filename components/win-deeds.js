import React, { Component } from 'react';
import '../styles/styles.scss';
import Link from 'next/link';
import { withRouter } from 'next/router';
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
                <section className="w-deed py-5">
                    <div className="sec-ttl has-text-centered">
                        <h1 className="ttl-head">Have A Look On Our Winning Deeds</h1>
                        <p className="ttl-p mx-610">Accomplished Team, Vast Experience in comprehensive Technical Insight, Targeted Result & Delighted
Customers work as a pillar in our Success.</p>
                    </div>
                    <div className="container">
                    <div className="w-deed-list has-text-centered">
                        <div className="columns is-multiline">
                            <div className="column is-3-desktop is-half-tablet">
                                <div className="w-deed-list-in">
                                    <span><img src="../static/images/icons/w-deed-01.svg" alt="i"/></span>
                                    <h3>120 <span>+</span></h3>
                                    <h5>Project Delivered</h5>
                                </div>
                            </div>
                            <div className="column is-3-desktop is-half-tablet">
                                <div className="w-deed-list-in">
                                    <span><img src="../static/images/icons/w-deed-02.svg" alt="i"/></span>
                                    <h3>60 <span>+</span></h3>
                                    <h5>Team Members</h5>
                                </div>
                            </div>
                            <div className="column is-3-desktop is-half-tablet">
                                <div className="w-deed-list-in">
                                    <span><img src="../static/images/icons/w-deed-03.svg" alt="i"/></span>
                                    <h3>14 <span>+</span></h3>
                                    <h5>Years of experience</h5>
                                </div>
                            </div>
                            <div className="column is-3-desktop is-half-tablet">
                                <div className="w-deed-list-in">
                                    <span><img src="../static/images/icons/w-deed-04.svg" alt="i"/></span>
                                    <h3>95 <span>+</span></h3>
                                    <h5>Satisfied clients</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        )
    }
})







