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
                        <li><b>KEYWORD RESEARCH –</b> We will research your industry, competitors and target
markets to produce a list of keywords potential clients most often use when
searching for a buinsess such as yours</li>
                        <li><b>CAMPAIGNS / ADGROUPS –</b> We will segment your keywords into different Adgroups.
Adgroups contain specific keywords and adverts to ensure your adverts are as
targeted as possible</li>
                        <li><b>AD COPY -</b> Creating your text adverts to be shown at the top of google when users
search for particular keywords</li>
                        <li><b>ADVERTS LIVE -</b> Prepare to start receiving calls and enquiries as your adverts go live</li>
                       
                    </ol>
                    </ScrollAnimation>
                </div>
                </div>
                </section>

            </div>
    )  



export default WebSectionThree;

 