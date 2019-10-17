
import React, { Component } from 'react';
import Head from 'next/head';
import { site_name } from '../utils/Common';

import Link from 'next/link'
import ReactSVG from 'react-svg';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import ScrollAnimation from 'react-animate-on-scroll';

var curlocation = "18 Vaudrey Drive, Hazel Grove ,Stockport, SK7 5PB, UK";
export class MapContainer extends Component  {

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      };
     
      onMarkerClick = (props, marker, e) =>
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });
     
      onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
      };
     
    
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
                                        <ScrollAnimation animateIn="slideInLeft" initiallyVisible={false} animateOnce ="true">
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
                                                    
                                                </div>
                                                <div className="columns">
                                                    <div className="column">
                                                        <div className="field">
                                                            <div className="control cmn-txt-area">
                                                                <textarea className="textarea" placeholder="Message"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="con-frm-btn has-text-centered">
                                                    <Link href=""><a className="theme-color ban-theme-btn">Submit Request</a></Link>
                                                </div>
                                            </div>
                                            </ScrollAnimation>
                                        </div>
                                        </div>
                                        <div className="column is-full-tablet  is-4-desktop">
                                        <div className="abt-grid-sec con-grid-sec">
                                        <div className="columns is-multiline">
                                        <ScrollAnimation animateIn="slideInDown" initiallyVisible={false} animateOnce ="true">
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
                                            </ScrollAnimation>
                                            <ScrollAnimation animateIn="slideInDown" initiallyVisible={false} animateOnce ="true">
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
                                            </ScrollAnimation>
                                            <ScrollAnimation animateIn="slideInDown" initiallyVisible={false} animateOnce ="true">
                                            <div className="column is-4-tablet is-full-desktop">
                                                <div className="abt-grid-wrap">
                                                    <div className="abt-grid-img abt-grid-img-phone">
                                                        <span><ReactSVG src="../static/images/icons/frm-whatsapp.svg" /></span>
                                                    </div>
                                                    <div className="abt-grid-cnt con-grid-cnt">
                                                        <h3>Whatsapp</h3>
                                                        <p><Link href=""><a>+44 7911 123456</a></Link></p>
                                                    </div>
                                                </div>
                                            </div>
                                            </ScrollAnimation>
                                        </div>
                                        
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                <ScrollAnimation animateIn="fadeInDown" initiallyVisible={false} animateOnce ="true">   
                                <div className="map-sec py-5">
                              
                                <Map google={this.props.google} initialCenter={{lat: 53.376538, lng: -2.117912 }}
                                        onClick={this.onMapClicked}>
                                        <Marker onClick={this.onMarkerClick}
                                                name={curlocation} />
                                
                                        <InfoWindow
                                        marker={this.state.activeMarker}
                                        visible={this.state.showingInfoWindow}>
                                            <div>
                                            <h1>{this.state.selectedPlace.name}</h1>
                                            </div>
                                        </InfoWindow>
                                        
                                </Map>
                                  
                                </div>
                                </ScrollAnimation>
                            
                        </div>
                    </div>
                    </div>
                    
            </div>
            
        );
    }
}

export default GoogleApiWrapper({
apiKey: ("AIzaSyCXoBRqd7cvnN9al7wA_3NYn54AIzaquc0")
})(MapContainer)