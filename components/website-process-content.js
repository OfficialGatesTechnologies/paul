import React from 'react';
import '../styles/styles.scss';
import ScrollAnimation from 'react-animate-on-scroll';
const WebSectionThree = () => (   
    <div>
                <section className="py-2 text-left">
                
                               
                <div className="container">
                <div className="mx-1000">
                <ScrollAnimation initiallyVisible={false} animateOnce ="true" animateIn="fadeInLeft">
                    <ol className="has-text-left website-ol">
                        <li><b>INITIAL DISCUSSION –</b> Discuss your brief.What do you want to achieve ? Any specific
                        requirements ? Existing branding, content, images etc</li>
                        <li><b>DRAFT DESIGNS –</b> We will provide you with a number of custom-built design
templates for you to provide feedback on</li>
                        <li><b>DESIGN CONFIRMATION -</b> We will create a final design template. You can request
any changes to design, layout, headings etc before confirming</li>
                        <li><b>WEBSITE BUILD -</b> We will hand-code and create your custom-built website based on
the agreed design templates</li>
                        <li><b>FINAL REVIEW -</b> Once the website has been delivered, you will be able to request
any final changes</li>
                        <li><b>WEBSITE LIVE –</b> Delivery of your website and setting live on your domain name</li>
                    </ol>
                    </ScrollAnimation>
                
                </div>
                </div>
                </section>

            </div>
    )  



export default WebSectionThree;

 