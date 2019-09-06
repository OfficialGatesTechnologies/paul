import React, { Component } from 'react';
import '../styles/styles.scss'
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
                 <p>Header</p>
            </div>
        )
    }
})
 





