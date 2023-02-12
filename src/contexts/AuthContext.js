/*
 * Global state goes into Context
 */

import React, { createContext } from 'react';

export const AuthContext = createContext();

//Here goes the shared data to supply to different components
class AuthContextProvider extends React.Component {
    state = {
        isLoggedIn: false
    };

    //define here to be usable by all components
    //and then pass it along with the state!
    changeAuthStatus = () => {
        this.setState({ isLoggedIn: !this.state.isLoggedIn });
    }

    render() {
        return ( 
            <AuthContext.Provider value={{ ...this.state, changeAuthStatus: this.changeAuthStatus }}>
                { this.props.children } 
            </AuthContext.Provider>
        );
    }
}

export default AuthContextProvider;