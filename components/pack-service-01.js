import React, { Component } from 'react';
import '../styles/styles.scss';
import Link from 'next/link';

import { render } from 'react-dom';
import Tabs from 'react-responsive-tabs';

import { withRouter } from 'next/router';
import ReactSVG from 'react-svg';

const presidents = [{ name: 'George Washington', biography: '123' }, { name: 'Theodore Roosevelt', biography: '456' }];
 
function getTabs() {
  return presidents.map((president, index) => ({
    title: president.name,
    getContent: () => president.biography,
    /* Optional parameters */
    key: index,
    tabClassName: 'tab',
    panelClassName: 'panel',
  }));
}
const App = () => <Tabs items={getTabs()} />;

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
                <div className="container">
                <App/>
                </div>
            </div>
        )
    }
})







