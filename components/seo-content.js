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
                        <li><b>ON-PAGE OPTIMISATION –</b> We will optimise meta-titles, meta-descriptions, URL’s
and implement any other relevant measures such as adding structured data to your
website pages.</li>
                        <li><b>LOCAL SEO -</b> Submit your site to local business directories and indexes to build links
to your site</li>
                        <li><b>XML SITEMAP -</b> We will create an xml sitemap for your website so that it can be
efficiently crawled (indexed) by the search engines</li>
                        <li><b>GOOGLE ANALYTICS -</b> We will register your site with Google Analytics and Google
Search Console to monitor your website visibility and performance</li>
                       
                    </ol>
                    </ScrollAnimation>
                </div>
                </div>
                </section>

            </div>
    )  



export default WebSectionThree;

 