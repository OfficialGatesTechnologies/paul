import React, { Component } from 'react';
import '../styles/styles.scss';
 
import Link from 'next/link';
import { withRouter } from 'next/router';
import ReactSVG from 'react-svg';
 
export default withRouter(class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {

            tabItems: [
                {
                    key:0,
                    title:'Mobile Apps',
                    image:'../static/images/icons/tab-i-01.svg',
                    tabContent:"It is a long established fact that a reader will be distracted by the readable con",
                    activeClass:'',
                },
                {
                    key:1,
                    title:'Wearable', 
                    image:'../static/images/icons/tab-i-02.svg',
                    tabContent:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'",

                }
        ]
            
        }
    }
    
    componentDidMount = () => {

         

    
    }
    changeTab = (e, items) => {
       
    }
    
    render() {
        var callback = function(key){
 
        }
        return (

            <div>
                <section className="startup-sec py-5">
                    <div className="sec-ttl has-text-centered">
                        <h1 className="ttl-head">Package Of Services Which Accomplish Every Business Need</h1>
                        <p className="ttl-p mx-610">Work reflects the brand, the services which we equip comes from the brilliance of the 
team which turns our viewers into elated customers.</p>
                    </div>
                    <div className="container">
                        <div className="has-text-centered">
                        <div id="pack-tab">
                            <div className="tabs pack-tabs is-centered">

          


                                <ul>

                                    {
                                        this.state.tabItems.map(item => 
                                         <li key={item.key}>
                                            <a>
                                              <span className="pack-tab-img">
                                                <ReactSVG src={item.image} />
                                              </span> 
                                              <span className="pack-tab-caps">{item.title}</span>
                                            </a>
                                        </li>)
                                    }
                               
                                <li>
                                    <a>
                                        <span className="pack-tab-img">
                                        <ReactSVG src="../static/images/icons/tab-i-02.svg" />
                                      </span> 
                                        <span className="pack-tab-caps">Wearable</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span className="pack-tab-img">
                                        <ReactSVG src="../static/images/icons/tab-i-03.svg" />
                                     
                                            </span> 
                                        <span className="pack-tab-caps">Web</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span className="pack-tab-img"><img className="svg" src="../static/images/icons/tab-i-04.svg" alt="i"/></span> 
                                        <span className="pack-tab-caps">IOT</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span className="pack-tab-img"><img className="svg" src="../static/images/icons/tab-i-05.svg" alt="i"/></span> 
                                        <span className="pack-tab-caps">Beacon</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span className="pack-tab-img"><img className="svg" src="../static/images/icons/tab-i-06.svg" alt="i"/></span> 
                                        <span className="pack-tab-caps">UI / UX</span>
                                    </a>
                                </li>
                                </ul>
                            </div>
                            <div>
                                <section className="pack-tab-content">
                                <div className="pack-tab-content-in mx-640">
                                        <p>With the team of most creative & innovative website designers as well as canny developers comes the vast experience of knowledge in the zone of website development that gives streamline business solutions to every sort of industry.</p>
                                        <Link href="#"><a>VIEW MORE</a></Link>
                                    </div>
                                </section>
                                <section className="pack-tab-content">
                                <div className="pack-tab-content-in mx-640">
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.</p>
                                        <Link href="#"><a>VIEW MORE</a></Link>
                                    </div>
                                </section>
                                <section className="pack-tab-content">
                                <div className="pack-tab-content-in mx-640">
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>
                                        <Link href="#"><a>VIEW MORE</a></Link>
                                    </div>
                                </section>
                                <section className="pack-tab-content">
                                <div className="pack-tab-content-in mx-640">
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                        <Link href="#"><a>VIEW MORE</a></Link>
                                    </div>
                                </section>
                                <section className="pack-tab-content">
                                <div className="pack-tab-content-in mx-640">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <Link href="#"><a>VIEW MORE</a></Link>
                                    </div>
                                </section>
                                <section className="pack-tab-content">
                                <div className="pack-tab-content-in mx-640">
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                        <Link href="#"><a>VIEW MORE</a></Link>
                                    </div>
                                </section>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
})







