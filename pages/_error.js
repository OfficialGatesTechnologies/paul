import React, { Component } from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';

export default withRouter(class Error extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    componentDidMount = () => {
    }

    render() {
        return (
          
          <div>
                <Head>
                    <meta charSet="utf-8" />
                    <title>Page not found</title>
                    <meta name="distribution" content="Global" />
                    <meta name="revisit-after" content="1 days" />
                    <meta name="creator" content="officialgates (www.officialgates.com)" />
                    <meta name="publisher" content="officialgates (www.officialgates.com)" />
                </Head>
</div>
            )
    }
})
 
