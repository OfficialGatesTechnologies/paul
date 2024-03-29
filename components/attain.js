import React, { Component } from 'react';
import '../styles/styles.scss';
import { withRouter } from 'next/router';
import ScrollAnimation from 'react-animate-on-scroll';
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
                <section className="startup-sec attain py-5">
               
                    <div className="sec-ttl has-text-centered">
                        <h1 className="ttl-head">Strategy We Attain</h1>
                        <p className="ttl-p mx-610">We approach each & every phase of the product development process that adds value and transform 
every spectrum of your business idea & tends you to excel towards your ambitions.</p>
                    </div>
                    
                    <div className="container">
                    <ScrollAnimation animateIn="bounceIn" initiallyVisible={false} animateOnce ="true">
                        <div className="dia attain-dia has-text-centered">
                         <img src="../static/images/dia-02.png" alt="image"/>
                        </div>
                        </ScrollAnimation>
                    </div>
                </section>
            </div>
        )
    }
})







