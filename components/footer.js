import Link from 'next/link';
import '../styles/styles.scss';
import ReactSVG from 'react-svg';

const Footer = () => (      
    <div>
        <footer className="footer footer-cus">
          <div className="container">
                <div className="columns">
                  <div className="foo-col-01 foo-cmn-s column is-3">
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
                  <div className="column is-6">
                  <div className="columns">
                    <div className="foo-cmn-s column is-6">
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
                      <div className="foo-cmn-s column is-6">
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
                    <div className="column is-3">
                    
                    </div>
                </div>
          </div>
      </footer>


    </div> 
    
)  



export default Footer;