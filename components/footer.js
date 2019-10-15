import Link from 'next/link';
import '../styles/styles.scss';
import ReactSVG from 'react-svg';
import ScrollAnimation from 'react-animate-on-scroll';
const Footer = () => (      
    <div>
        <footer className="footer footer-cus">
        <ScrollAnimation animateIn="fadeInDown" initiallyVisible={false} animateOnce ="true">
          <div className="container p-0">
                <div className="columns is-multiline">
                  <div className="foo-col-01 foo-cmn-s column is-one-third-tablet is-3-desktop">
                      <img src="../static/images/logo-white.svg" alt="img"/>
                        <p>It is a long established fact that a reader 
                            will be distracted by the readable content
                            of a page when looking at its layout.</p>
                        <ul>
                          <li><span><img src="../static/images/icons/frm-skype.svg" alt="img"/></span> <Link href=""><a>live:paul | tech</a></Link></li>
                          <li><span><img src="../static/images/icons/frm-mail.svg" alt="img"/></span> <Link href=""><a>support@paultech.com</a></Link></li>
                          <li><span><img src="../static/images/icons/frm-mobile.svg" alt="img"/></span> <Link href=""><a>+44 7911 123456</a></Link></li>
                        </ul>
                        <p><img src="../static/images/others/flag.png" alt="img"/></p>
                  </div>
                  <div className="column is-two-thirds-tablet is-6-desktop">
                  <div className="columns">
                    <div className="foo-cmn-s p-0 column is-6">
                          <h5>Services</h5>
                          <ul>
                            <li><Link href="application-development"><a>App Development</a></Link></li>
                            <li><Link href="mobile-app-development"><a>Mobile App Development</a></Link></li>
                            <li><Link href="android-app-development"><a>Android App Development</a></Link></li>
                            <li><Link href="iphone-app-development"><a>iPhone App Development</a></Link></li>
                            <li><Link href="website-development"><a>Web Development</a></Link></li>
                            <li><Link href="ui-ux-design"><a>UI / UX Design</a></Link></li>
                            <li><Link href="web-development"><a>Web App Development</a></Link></li>
                            <li><Link href="quality-assurance"><a>Quality Assurance</a></Link></li>
                            <li><Link href="php-web-development"><a>PHP Development</a></Link></li>
                            <li><Link href="codeigniter-development-services"><a>Codeigniter</a></Link></li>
                          </ul>
                      </div>
                      <div className="foo-cmn-s foo-cmn-s-ss p-0 column is-6">
                      <h5>&nbsp;</h5>
                          <ul>
                            <li><Link href="zend-development"><a>Zend Development</a></Link></li>
                            <li><Link href="laravel-development"><a>Laraval Development</a></Link></li>
                            <li><Link href="angular-js-development"><a>Angular JS Development</a></Link></li>
                            <li><Link href="node-js-development"><a>Node JS Development</a></Link></li>
                            <li><Link href="html5-web-app-development"><a>HTML5 Web App Development</a></Link></li>
                            <li><Link href="hybrid-app-development"><a>Hybrid App Development</a></Link></li>
                            <li><Link href="ionic-app-development"><a>Ionic App Development</a></Link></li>
                            <li><Link href="phonegap-app-development"><a>Phonegap App Development</a></Link></li>
                            <li><Link href="react-native-development"><a>React Native App Development</a></Link></li>
                            <li><Link href="flutter-development"><a>Flutter App Development</a></Link></li>
                          </ul>
                      </div>
                    </div>
                    </div>
                    <div className="foo-cmn-s column is-full-tablet is-3-desktop">
                      <h5>Company</h5>
                        <ul>
                            <li><Link href="about"><a>About us</a></Link></li>
                            <li><Link href="portfolio"><a>Portfolio</a></Link></li>
                            <li><Link href="hire-dedicated-app-developers"><a>Hire Us</a></Link></li>
                            <li><Link href="contact"><a>Contact Us</a></Link></li>
                        </ul>
                          <div className="soc-links">
                               <h5>Follow us</h5>
                               <ul>
                                  <li><Link href=""><a title="facebook"><span className="soc-i"><ReactSVG src="../static/images/icons/soc-01.svg" /></span></a></Link></li>
                                  <li><Link href=""><a title="twitter"><span className="soc-i"><ReactSVG src="../static/images/icons/soc-02.svg" /></span></a></Link></li>
                                  <li><Link href=""><a title="linkedin"><span className="soc-i"><ReactSVG src="../static/images/icons/soc-03.svg" /></span></a></Link></li>
                                  <li><Link href=""><a title="instagram"><span className="soc-i"><ReactSVG src="../static/images/icons/soc-04.svg" /></span></a></Link></li>
                                  <li><Link href=""><a title="pinterest"><span className="soc-i"><ReactSVG src="../static/images/icons/soc-05.svg" /></span></a></Link></li>
                               </ul>
                          </div>
                    </div>
                </div>
          </div>
          <div className="footer-bot">
              <div className="container has-text-centered">
                  <p>&copy; 2019 Paul. All Rights Reserved.</p>
              </div>
          </div>
          </ScrollAnimation>
      </footer>


    </div> 
    
)  



export default Footer;