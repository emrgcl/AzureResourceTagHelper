import React, { Component } from 'react';
import sayhello from '../helpers/sayhello.js';
import withInteractiveBrowserCredential from '../helpers/authenticate.js';
//const {REACT_APP_CLIENT_ID} = process.env;
class Login extends Component {
    
    state = { 
        azcredential : withInteractiveBrowserCredential()
     } 
    render() { 
        return( 
        <React.Fragment>
        <p>{sayhello('hello World')}</p>
        <p>Clientid: {process.env.REACT_APP_CLIENT_ID}</p>
        <p>{withInteractiveBrowserCredential()}</p>
        </React.Fragment>
        )
    }
}
 
export default Login;