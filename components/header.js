import React, { Component } from 'react';
import '../styles/styles.scss'
import Menu from '../components/menu';

import { withRouter } from 'next/router';
import Link from 'next/link';
export default withRouter(class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    componentDidMount = () => {
     
    }
    
    render() {

        return (
            
            <div className="header-wrap py-3">
            <div className="container p-0">
                 <div className="columns">
                    <div className="column is-12">
                        <Menu/>
                    </div>
                 </div>
                 </div>
            </div>
        )
    }
})
 





