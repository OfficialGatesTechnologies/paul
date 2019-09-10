import React, {Component} from 'react';
import Header from './header';

import '../styles/styles.scss';
import Router from 'next/router';


export default class Layout extends Component {
    state = { 
        loading: false 
    };

    componentDidMount() {
         
    }


    render () {
        return (
            <div>
                <Loader loading={this.state.loading} />
                
                   <Header/>
                
                    {this.props.children}
            </div>
        )
    }
}
    
const Loader = ({ loading }) => <div className={loading ? 'loading-show' : ''} id="loader-bar" />;
