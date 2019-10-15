
import React, { Component } from 'react';
import Head from 'next/head';
import Banner from '../components/banner';
import Win_deeds from '../components/win-deeds';
import Startup_sec from '../components/start-up-sec';
import Pack_service from '../components/pack-service';
import Attain from '../components/attain';
import Our_rec from '../components/our-rec';
import Our_work from '../components/our-work';
import Brands from '../components/brands';
import Testimonials from '../components/testimonials';
import Con_form from '../components/con-form';
import { site_name } from '../utils/Common';
import { withRouter } from 'next/router';

export default withRouter(class Index extends Component {
    componentDidMount = () => {
    }
    render() {
        return (
            <div>
                <Head>
                    <meta charSet="utf-8" />
                    <title>{site_name} | Home</title>
                    <meta name="distribution" content="Global" />
                    <meta name="revisit-after" content="1 days" />
                    <meta name="creator" content="officialgates (www.officialgates.com)" />
                    <meta name="publisher" content="officialgates (www.officialgates.com)" />
                </Head>
 
                <div className="main-wrap">
                    <Banner/>
                   
                    <Win_deeds/>
                    
                    <Startup_sec/>
                    
                    <Our_rec/>
                    <Our_work/>
                    <Pack_service/>
                    <Attain/>
                    <Brands/>
                    <Testimonials/>
                    <Con_form/>
                </div>
 
            </div>
        )
    }
})

