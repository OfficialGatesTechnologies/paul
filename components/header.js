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
            <div className="container">
                 <div className="columns">
                    <div className="logo column">
                        <Link href="#">
                        <a title="Logo">
                        <img src="../static/images/logo.png" alt="Logo"/>
                        </a>
                        </Link>
                    </div>
                    <div className="column is-10">
                        <Menu/>
                    </div>
                 </div>
                 </div>
            </div>
        )
    }
})
 





