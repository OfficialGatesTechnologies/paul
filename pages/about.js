
import React, { Component } from 'react';
import Head from 'next/head';
import Banner from '../components/banner';
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

                 
                 
                    <div className="container">
  <div className="notification">
    This About us is <strong>centered</strong> on desktop.
  </div>
</div>
            </div>
        )
    }
})
