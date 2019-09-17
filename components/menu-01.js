import React, { Component } from 'react';
import '../styles/styles.scss';
import Link from 'next/link';

import { withRouter } from 'next/router';




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

            <div>
              <nav className="navbar" role="navigation" aria-label="main navigation">
          

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">


      <div className="navbar-item has-dropdown is-hoverable">

        <a className="navbar-link"> More</a>

        <div className="navbar-dropdown">
          <div className="nested navbar-item dropdown">

            <div className="dropdown-trigger">
              <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                <span>Dropdown button</span>
                <span className="icon is-small">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
            </button>
            </div>

            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              
              <div className="dropdown-content">
                <a href="#" className="dropdown-item">Dropdown item</a>
                <a className="dropdown-item">Other dropdown item</a>
                <a href="#" className="dropdown-item is-active">Active dropdown item</a>
                <a href="#" className="dropdown-item"> Other dropdown item</a>
                <hr className="dropdown-divider"/>


                <div className="nested dropdown dropdown-item">
                    <div className="dropdown-trigger">
                      <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>Dropdown button</span>
                        <span className="icon is-small">
                          <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                      </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                      <div className="dropdown-content">
                        <a href="#" className="dropdown-item">Dropdown item</a>
                        <a className="dropdown-item">Other dropdown item</a>
                        <a href="#" className="dropdown-item is-active">Active dropdown item</a>
                        <a href="#" className="dropdown-item">Other dropdown item</a>
                        <hr className="dropdown-divider"/>
                        <a href="#" className="dropdown-item">With a divider</a>
                      </div>
                    </div>
                  </div>
              </div>

            </div>
          </div>
          <a className="navbar-item">
            Jobs
          </a>
          <a className="navbar-item">
            Contact
          </a>
          <hr className="navbar-divider"/>>
          <a className="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

  </div>
</nav>
            </div>
        )
    }
})







