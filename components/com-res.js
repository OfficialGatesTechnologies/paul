import React, { Component } from 'react';
import '../styles/styles.scss'
import Menu from '../components/menu';
import { withRouter } from 'next/router';
import Link from 'next/link';
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
                <div className="columns is-multiline">
                    <div className="column is-full-mobile is-6-tablet is-4-desktop has-text-centered-mobile">
                        <h5>Flexible Engagement Models</h5>
                    </div>
                    <div className="column is-full-mobile is-6-tablet is-4-desktop has-text-centered-mobile">
                        <h5>7+ Years Industry Experience</h5>
                    </div>
                    <div className="column is-full-mobile is-6-tablet is-4-desktop has-text-centered-mobile">
                        <h5>120+ Mobile Apps Developed</h5>
                    </div>
                    <div className="column is-full-mobile is-6-tablet is-4-desktop has-text-centered-mobile">
                        <h5>60+ Skilled Team Members</h5>
                    </div>
                    <div className="column is-full-mobile is-6-tablet is-4-desktop has-text-centered-mobile">
                        <h5>Fanatic of Agile Process</h5>
                    </div>
                    <div className="column is-full-mobile is-6-tablet is-4-desktop has-text-centered-mobile">
                        <h5>Highly Transactional UI/UX</h5>
                    </div>
                    <div className="column is-full-mobile is-6-tablet is-4-desktop has-text-centered-mobile">
                        <h5>Dedicated Teams Structure</h5>
                    </div>
                    <div className="column is-full-mobile is-6-tablet is-4-desktop has-text-centered-mobile">
                        <h5>Firm Delivery Timelines</h5>
                    </div>
                    <div className="column is-full-mobile is-6-tablet is-4-desktop has-text-centered-mobile">
                        <h5>Data Security and Integrity</h5>
                    </div>
                </div>
            </div>
        )
    }
})
 





