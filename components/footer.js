import Link from 'next/link';
import '../styles/styles.scss';
import ReactSVG from 'react-svg';

const Footer = () => (      
    <div>
        <footer className="footer footer-cus">
          <div className="container p-0">
                <div className="columns is-multiline">
                  <div className="foo-col-01 foo-cmn-s column is-one-third-tablet is-3-desktop">
                      <img src="../static/images/logo-white.png" alt="img"/>
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
                            <li><Link href=""><a>App Development</a></Link></li>
                            <li><Link href=""><a>Mobile App Development</a></Link></li>
                            <li><Link href=""><a>Android App Development</a></Link></li>
                            <li><Link href=""><a>iPhone App Development</a></Link></li>
                            <li><Link href=""><a>Web Development</a></Link></li>
                            <li><Link href=""><a>UI / UX Design</a></Link></li>
                            <li><Link href=""><a>Web App Development</a></Link></li>
                            <li><Link href=""><a>Quality Assurance</a></Link></li>
                            <li><Link href=""><a>PHP Development</a></Link></li>
                            <li><Link href=""><a>Codeigniter</a></Link></li>
                          </ul>
                      </div>
                      <div className="foo-cmn-s foo-cmn-s-ss p-0 column is-6">
                      <h5>&nbsp;</h5>
                          <ul>
                            <li><Link href=""><a>Zend Development</a></Link></li>
                            <li><Link href=""><a>Laraval Development</a></Link></li>
                            <li><Link href=""><a>Angular JS Development</a></Link></li>
                            <li><Link href=""><a>Node JS Development</a></Link></li>
                            <li><Link href=""><a>HTML5 Web App Development</a></Link></li>
                            <li><Link href=""><a>Hybrid App Development</a></Link></li>
                            <li><Link href=""><a>Ionic App Development</a></Link></li>
                            <li><Link href=""><a>Phonegap App Development</a></Link></li>
                            <li><Link href=""><a>React Native App Development</a></Link></li>
                            <li><Link href=""><a>More...</a></Link></li>
                          </ul>
                      </div>
                    </div>
                    </div>
                    <div className="foo-cmn-s column is-full-tablet is-3-desktop">
                      <h5>Company</h5>
                        <ul>
                            <li><Link href=""><a>About us</a></Link></li>
                            <li><Link href=""><a>Portfolio</a></Link></li>
                            <li><Link href=""><a>Hire Us</a></Link></li>
                            <li><Link href=""><a>Blog</a></Link></li>
                            <li><Link href=""><a>Contact Us</a></Link></li>
                        </ul>
                          <div className="soc-links">
                               <h5>Follow us</h5>
                               <ul>
                                  <li><Link href=""><a><span className="soc-i"><ReactSVG src="../static/images/icons/soc-01.svg" /></span></a></Link></li>
                                  <li><Link href=""><a><span className="soc-i"><ReactSVG src="../static/images/icons/soc-02.svg" /></span></a></Link></li>
                                  <li><Link href=""><a><span className="soc-i"><ReactSVG src="../static/images/icons/soc-03.svg" /></span></a></Link></li>
                                  <li><Link href=""><a><span className="soc-i"><ReactSVG src="../static/images/icons/soc-04.svg" /></span></a></Link></li>
                                  <li><Link href=""><a><span className="soc-i"><ReactSVG src="../static/images/icons/soc-05.svg" /></span></a></Link></li>
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
      </footer>


    </div> 
    
)  



export default Footer;