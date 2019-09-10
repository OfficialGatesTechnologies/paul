
import React, { Component } from 'react';
import Head from 'next/head';
import Banner from '../components/banner';
import Win_deeds from '../components/win-deeds';
import Startup_sec from '../components/start-up-sec';
import Pack_service from '../components/pack-service';
import Attain from '../components/attain';
import { site_name } from '../utils/Common';
import { withRouter } from 'next/router';
import Link from 'next/link'
export default withRouter(class Index extends Component {
    componentDidMount = () => {
    }
    render() {
        return (
            <div>
                <Head>
                    <meta charSet="utf-8" />
                    <title>{site_name} | Home</title>
                    <meta name='subject' content='www.couponarbitrage.com' />
                    <meta name="distribution" content="Global" />
                    <meta name="revisit-after" content="1 days" />
                    <meta name="creator" content="officialgates (www.officialgates.com)" />
                    <meta name="publisher" content="officialgates (www.officialgates.com)" />
                </Head>

                <div className="main-wrap">
                    <Banner/>
                    <Win_deeds/>
                    <Startup_sec/>
                    <Pack_service/>
                    <Attain/>
                </div>
            </div>
        )
    }
})

