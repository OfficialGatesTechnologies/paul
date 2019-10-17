
import React, { Component } from 'react';
import Head from 'next/head';
import Win_deeds from '../components/win-deeds';
import Our_rec from '../components/our-rec';
import Key_indus from '../components/key-indus';
import { site_name } from '../utils/Common';
import { withRouter } from 'next/router';
import Tabs from 'react-responsive-tabs';
import ReactSVG from 'react-svg';
import renderHTML from 'react-render-html';
import ScrollAnimation from 'react-animate-on-scroll';

export default withRouter(class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
          tabItems: [
            {
              
                title:'IOS',
                image:'../static/images/icons/logo-apple.svg',
                tabContent:"From the commencement of the concept of iOS application to the actual app development, our iOS specialists use a systematic & organized approach to develop a robust and cherishable iOS App Solution.",
            },
            {
                title:'Android', 
                image:'../static/images/icons/logo-android.svg',
                tabContent:"With an eye on the continuous growth of Android, our well-marshaled team is highly focused on developing highly innovative & scalable Android Apps to delight customer experience & building brand value.",
            },
            {
                title:'Reactive Native', 
                image:'../static/images/icons/logo-react.svg',
                tabContent:"Successfully backed by Facebook, React Native puts a stop to the age-old decision in app development technology and our technical giants leverage the react-native advantages to develop the stunning apps.",
            },
            {
                title:'Flutter', 
                image:'../static/images/icons/logo-flutter.svg',
                tabContent:"Flutter is Google’s offering to the world of cross-platform App Development. We come up with the talented & marshaled team of developers who have expertise in Flutter app development.",
            },
            {
                title:'Ionic', 
                image:'../static/images/icons/logo-Ionic.svg',
                tabContent:"Ionic mobile app development offers seamless performance in different platforms like iOS and Android. Our team incorporates with extensive domain expertise and profound technical knowledge to provide robust and cost-effective apps.",
            }
    ]
        }
    }

    componentDidMount = () => {
    }
    GenerateSVG = (image,title) => {
      return <> <div className="tab-top"> <span className="tab-icon"><ReactSVG src={image} /></span> <p>{title}</p> </div></>;
  }
    getTabs = () => {
      return this.state.tabItems.map((president, index) => ({
          title: this.GenerateSVG(president.image,president.title),
          getContent: () => renderHTML(president.tabContent), 
          /* Optional parameters */
          key: index,
          tabClassName: 'tab',
          panelClassName: 'panel',
        }));
  }
    render() {
        return (
          <div>
            <Head>
              <meta charSet="utf-8" />
              <title>{site_name} | Hire Dedicated App Developers</title>
              <meta name="distribution" content="Global" />
              <meta name="revisit-after" content="1 days" />
              <meta
                name="creator"
                content="officialgates (www.officialgates.com)"
              />
              <meta
                name="publisher"
                content="officialgates (www.officialgates.com)"
              />
            </Head>

            <div className="main-wrap">
              <div className="inner-banner has-text-centered">
                <div className="inner-banner-cnt">
                  <div className="circle-ripple">
                    <img
                      src="../static/images/icons/hire-inner-top.svg"
                      alt="i"
                    />{" "}
                  </div>
                  <ScrollAnimation animateIn="flipInY" initiallyVisible={false} animateOnce ="true">
                    <h4>Hire Dedicated App Developers</h4>  
                  </ScrollAnimation>
                  
                </div>
              </div>

              <div className="page-cnt-wrap py-5 py-m-3 pb-0">
                <div className="page-main-cnt pb-5 pb-m-2">
                
                  <div className="container">
                  <ScrollAnimation animateIn="fadeInDown" initiallyVisible={false} animateOnce ="true">
                    <h4>
                    We Will Drive Your Success Meter Up. Hire Our Dedicated App Developers
                    </h4>
                    <p>
                    Adorned with the skills of aptness, allegiance, & aliveness, Paul helps to scale-up companies ranging from startups, mid-size business to large enterprises enact their intact business goals by providing highly talented tech ninjas- including mobile app developers, UI/UX designers, quality analysts as a dedicated resources. We heed the route, which lends our customer a lined up array of variety; hence, whether you are looking to hire a dedicated app developer on hourly, monthly or weekly basis, we provide geeks to fit your specific project needs.

                    </p>
                    <p>
                    Our competent mobile app development team offers extensive, cost-effective & win-win mobility solutions with the blend of industries best practices & technological excellence for the core business. Let your mobile app portray your brand picture via joining hands with the leading mobile app development company, Paul.
                    </p>
                    <p>
                    Our designated cost-effective & flexible hiring model gives our customer a competency that they can directly communicate with the dedicated app developers, can oversee the entire process & progress and can assign work directly to them.
                    </p>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInDown" initiallyVisible={false} animateOnce ="true">
                    <div className="hire-cont">
                      <h4>
                      Hire Dedicated Mobile App Developers to Boost Up your Mobile App Development Process
                      </h4>
                      <h5 className="sub-title">Hire Android App Developers</h5>
                      <p>Paul powers the capabilities to make an app a hot seller app on Google Play Store. We offer expert Android app developers to extend your venture's potential on high. Whether it is developing a new Android app or migrate legacy apps to the Android ecosystem, we provide access to a pool of talent Android developers, when & where required. Our extensive android app development services include updated, integrated & flawless apps that are highly functional & feature-packed to suit your venture need.</p>
                      <b>Our Android App Development Services included:</b>
                      <div className="com-res mg-t-20 mb-b-20">
                      <div className="columns is-multiline">
                      <div className="column is-full-mobile is-6-tablet is-6-desktop">
                      <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                        <h5>Android App Development in Java</h5>
                      </ScrollAnimation>
                        </div>
                      <div className="column is-full-mobile is-6-tablet is-6-desktop">
                      <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                        <h5>Android App Development in Kotlin</h5>
                      </ScrollAnimation>
                        </div>
                      <div className="column is-full-mobile is-6-tablet is-6-desktop">
                      <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                        <h5>Android SmartWatch App Development</h5>
                      </ScrollAnimation>
                        </div>
                      <div className="column is-full-mobile is-6-tablet is-6-desktop">
                      <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                        <h5>Android App Support & Maintenance</h5>
                      </ScrollAnimation>
                        </div>
                      </div>
                      
                      </div>
                     
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInDown" initiallyVisible={false} animateOnce ="true">
                    <div className="hire-cont">
                      
                      <h5 className="sub-title">Hire iPhone App Developers</h5>
                      <p>Leverage the power of iOS & make your app, App Store's most demanding app with Paul only. To give the wings to your app idea, our hire iPhone app developers is the best suitable model as it gives the best value for money. Our iPhone app developers are proficient in Swift & objective C so that our end customer can pick out of multiple choices in technology with respect to their product need.</p>
                      <b>Our iPhone App Development Services lined-up with:</b>
                      <div className="com-res mg-t-20 mb-b-20">
                      <div className="columns is-multiline">
                      <div className="column is-full-mobile is-6-tablet is-6-desktop">
                      <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                        <h5>iPhone App Development in Swift</h5>
                      </ScrollAnimation>
                        </div>
                      <div className="column is-full-mobile is-6-tablet is-6-desktop">
                      <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                        <h5>iPhone App Development in Objective C</h5>
                      </ScrollAnimation>
                        </div>
                      <div className="column is-full-mobile is-6-tablet is-6-desktop">
                      <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                        <h5>iWatch App Development</h5>
                      </ScrollAnimation>
                        </div>
                      <div className="column is-full-mobile is-6-tablet is-6-desktop">
                      <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                        <h5>iPhone App Maintenance & Support</h5>
                      </ScrollAnimation>
                        </div>
                      </div>
                      
                      </div>
                     
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInDown" initiallyVisible={false} animateOnce ="true">
                    <div className="hire-cont">
                      
                      <h5 className="sub-title">Hire Web Developers</h5>
                      <p>To make your web app a building fire app in this internet pervasive era, Paul opens the door for multi-level business to hire web app developers. Our web developers use the perfect blend of technologies including PHP, Web 2.0, HTML, Joomla, WordPress, Drupal, Magento & expertise of database languages such as MySQL, HTML, CSS, JavaScript, PHP Code, & develop the terrific & bespoke web apps.</p>
                      <b>Our wide range of Web Development Services included:</b>
                      <div className="com-res mg-t-20 mb-b-20">
                      <div className="columns is-multiline">
                      <div className="column is-full-mobile is-6-tablet is-6-desktop">
                      <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                        <h5>PHP Web Development</h5>
                      </ScrollAnimation>
                        </div>
                      <div className="column is-full-mobile is-6-tablet is-6-desktop">
                      <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                        <h5>CMS Development</h5>
                      </ScrollAnimation>
                        </div>
                      <div className="column is-full-mobile is-6-tablet is-6-desktop">
                      <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                        <h5>NodeJS Web Development</h5>
                      </ScrollAnimation>
                        </div>
                      <div className="column is-full-mobile is-6-tablet is-6-desktop">
                      <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                        <h5>AngularJS Web Development</h5>
                        </ScrollAnimation>
                        </div>
                      </div>
                      
                      </div>
                     
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInDown" initiallyVisible={false} animateOnce ="true">
                    <div className="hire-cont">
                      
                      <h5 className="sub-title">Hire UI/UX Designers</h5>
                      <p>UI & UX designing is the key covering shell that gives a presentable outfit to developed solution & creativity comes with a passion that our UI UX designers prove at every single touch. Hire our passionate & creative UI/UX Designers to develop innovative user interface designs to the hype user experience. We at Paul offer requisites solutions to our valuable customers and ensure that at every level of app development the end-user remains at the core consideration. Receive sophisticated graphics, logo designs that bring ahead the prominent user interfaces & enrich the user experience.</p>
                      <b>Our bags full of creativity allinged up with:</b>
                      <div className="com-res mg-t-20 mb-b-20">
                      <div className="columns is-multiline">
                      <div className="column is-full-mobile is-6-tablet is-6-desktop">
                      <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                        <h5>Conceptualization & Branding</h5>
                      </ScrollAnimation>
                        </div>
                      <div className="column is-full-mobile is-6-tablet is-6-desktop">
                      <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                        <h5>Prototyping</h5>
                      </ScrollAnimation>
                        </div>
                      <div className="column is-full-mobile is-6-tablet is-6-desktop">
                      <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                        <h5>High-Fidelity Wireframes</h5>
                      </ScrollAnimation>
                        </div>
                      <div className="column is-full-mobile is-6-tablet is-6-desktop">
                      <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                        <h5>UI/UX Designing</h5>
                      </ScrollAnimation>
                        </div>
                      </div>
                      
                      </div>
                     
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInDown" initiallyVisible={false} animateOnce ="true">
                    <div className="hire-cont">
                      
                      <h5 className="sub-title">We Are In Top Mobile App Development Company For Reasons</h5>
                      <p>Being an early adopter of latest technology, processes and tools, Our geeks are well versed in Programming Languages and Frameworks</p>
                      <b>Our bags full of creativity allinged up with:</b>
                      <div className="com-res mg-t-20 mb-b-20">
                      <div className="columns is-multiline">
                      <div className="column is-full-mobile is-6-tablet is-6-desktop">
                      <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                        <h5>Flexible Engagement Models</h5>
                      </ScrollAnimation>
                        </div>
                      <div className="column is-full-mobile is-6-tablet is-6-desktop">
                      <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                        <h5>7+ Years Industry Experience</h5>
                      </ScrollAnimation>
                        </div>
                      <div className="column is-full-mobile is-6-tablet is-6-desktop">
                      <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                        <h5>120+ Mobile Apps Developed</h5>
                      </ScrollAnimation>
                        </div>
                      <div className="column is-full-mobile is-6-tablet is-6-desktop">
                      <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                        <h5>60+ Skilled Team Members</h5>
                      </ScrollAnimation>
                        </div>
                      <div className="column is-full-mobile is-6-tablet is-6-desktop">
                      <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                        <h5>Fanatic of Agile Process</h5>
                      </ScrollAnimation>
                        </div>
                      <div className="column is-full-mobile is-6-tablet is-6-desktop">
                      <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                        <h5>Highly Transactional UI/UX</h5>
                      </ScrollAnimation>
                        </div>
                      <div className="column is-full-mobile is-6-tablet is-6-desktop">
                      <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                        <h5>Dedicated Teams Structure</h5>
                      </ScrollAnimation>
                        </div>
                      <div className="column is-full-mobile is-6-tablet is-6-desktop">
                      <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                        <h5>Firm Delivery Timelines</h5>
                      </ScrollAnimation>
                        </div>
                      <div className="column is-full-mobile is-6-tablet is-6-desktop">
                      <ScrollAnimation animateIn="flipInX" initiallyVisible={false} animateOnce ="true">
                        <h5>Data Security and Integrity</h5>
                      </ScrollAnimation>
                        </div>
                      </div>
                      
                      </div>
                     
                    </div>
                    </ScrollAnimation>
                  </div>
                 
                </div>
                {/* Work Case study section */}
                
                {/* End Work Case study section */}
                <div className="page-cnt-tab">
                            <section className="startup-sec py-5">
                            <div className="container">
                            <div className="sec-ttl has-text-centered">
                                <h1 className="ttl-head">Our Mobile App Development Services Includes</h1>
                                <p className="ttl-p mx-410">We provide user-centric mobile app development solution by which one can get seamless experience across devices.</p>
                            </div>
                            
                            <div className="mx-1000">
                                <div className="pack-tab has-text-centered">
                                <ScrollAnimation animateIn="bounceIn" initiallyVisible={false} animateOnce ="true">
                                  <Tabs items={this.getTabs()} />
                                </ScrollAnimation>
                                  
                                </div>
                                </div>
                            </div>
                            </section>
                        </div>

                <Win_deeds />
                <Our_rec />
                <Key_indus />
              </div>
            </div>
          </div>
        );
    }
})

