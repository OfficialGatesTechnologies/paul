import React, { Component } from 'react';
import '../styles/styles.scss';
import Link from 'next/link';
import { withRouter } from 'next/router';
import AliceCarousel from 'react-alice-carousel';
import $ from 'jquery';
export default withRouter(class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            testimonialItems : {
                0: { items: 1 },
              }
        }
    }
    componentDidMount = () => {
        
    }
    
    render() {

        return (

            <div>
                <section className="startup-sec testimonials py-5">
                    <div className="sec-ttl testimonial-ttl has-text-centered">
                        <h1 className="ttl-head">Happy Face of Our Client’s</h1>
                    </div>
                    <div className="container">

                        <div className="testimonial-carousel mx-900">
                            <AliceCarousel responsive={this.state.testimonialItems} mouseDragEnabled  buttonsDisabled ={true}>
                                <div className="testimonial-cnt-wrap">
                                    <div className="testimonial-avatar"><img src="../static/images/others/test-avatar.png"/></div>
                                    <div className="testimonial-caps">
                                        <h5>Brilliancy Comes With PaulTech</h5>
                                        <p>Professionalism, excellence, client attention, precise and great communication are only a few aspect of the way PaulTech works. 
Since the first approach, to their proposal with sketches and to the final delivery is a great process of professional work. There is a 
constant communication in order to have your idea being put into a concrete working app</p>
                                        <span className="testimonial-name">Gianluca</span>
                                    </div>
                                </div>
                                <div className="testimonial-cnt-wrap">
                                    <div className="testimonial-avatar"><img src="../static/images/others/test-avatar.png"/></div>
                                    <div className="testimonial-caps">
                                        <h5>Brilliancy Comes With PaulTech</h5>
                                        <p>Professionalism, excellence, client attention, precise and great communication are only a few aspect of the way PaulTech works. 
Since the first approach, to their proposal with sketches and to the final delivery is a great process of professional work. There is a 
constant communication in order to have your idea being put into a concrete working app</p>
                                        <span className="testimonial-name">Gianluca</span>
                                    </div>
                                </div>
                                <div className="testimonial-cnt-wrap">
                                    <div className="testimonial-avatar"><img src="../static/images/others/test-avatar.png"/></div>
                                    <div className="testimonial-caps">
                                        <h5>Brilliancy Comes With PaulTech</h5>
                                        <p>Professionalism, excellence, client attention, precise and great communication are only a few aspect of the way PaulTech works. 
Since the first approach, to their proposal with sketches and to the final delivery is a great process of professional work. There is a 
constant communication in order to have your idea being put into a concrete working app</p>
                                        <span className="testimonial-name">Gianluca</span>
                                    </div>
                                </div>
                            </AliceCarousel>
                        </div>

                    </div>
                </section>
            </div>
        )
    }
})







