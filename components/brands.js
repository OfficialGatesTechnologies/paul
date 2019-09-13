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
            brandsItems : {
                575: { items: 3 },
                768: { items: 4 },
              }
        }
    }
    componentDidMount = () => {
        
    }
    
    render() {

        return (

            <div>
                <section className="startup-sec brands py-5">
                    <div className="sec-ttl has-text-centered">
                        <h1 className="ttl-head">More Than Top 20 Brands Have Trusted Our Services.</h1>
                        <p className="ttl-p mx-610">Our dedication & commitment towards our target makes us shinier in the world of 
technology and has led us to establish success stories consecutively.</p>
                    </div>
                    <div className="container">

                        <div className="brands-carousel mx-800">
                            <AliceCarousel responsive={this.state.brandsItems} mouseDragEnabled  buttonsDisabled ={true}>
                                <div className="brand-img-wrap"><img src="../static/images/others/brand-01.png"/></div>
                                <div className="brand-img-wrap"><img src="../static/images/others/brand-02.png"/></div>
                                <div className="brand-img-wrap"><img src="../static/images/others/brand-03.png"/></div>
                                <div className="brand-img-wrap"><img src="../static/images/others/brand-04.png"/></div>
                                <div className="brand-img-wrap"><img src="../static/images/others/brand-03.png"/></div>
                                <div className="brand-img-wrap"><img src="../static/images/others/brand-01.png"/></div>
                                <div className="brand-img-wrap"><img src="../static/images/others/brand-04.png"/></div>
                                <div className="brand-img-wrap"><img src="../static/images/others/brand-02.png"/></div>
                                <div className="brand-img-wrap"><img src="../static/images/others/brand-01.png"/></div>
                                <div className="brand-img-wrap"><img src="../static/images/others/brand-02.png"/></div>
                                <div className="brand-img-wrap"><img src="../static/images/others/brand-03.png"/></div>
                                <div className="brand-img-wrap"><img src="../static/images/others/brand-04.png"/></div>
                            </AliceCarousel>
                        </div>

                    </div>
                </section>
            </div>
        )
    }
})







