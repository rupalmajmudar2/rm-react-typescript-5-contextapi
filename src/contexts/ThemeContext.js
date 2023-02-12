/*
 * Global state goes into Context
 */

import React, { createContext } from 'react';

export const ThemeContext = createContext();

//Here goes the shared data to supply to different components
class ThemeContextProvider extends React.Component {
    state = {
        isDarkTheme: true,
        lightTheme: {
            text: '#222',
            background: '#d8ddf1'
        },
        darkTheme : {
            text: '#fff',
            background: '#5c5c5c'
        }
    };

    //define here to be usable by all components
    //and then pass it along with the state!
    changeTheme = () => {
        this.setState({ isDarkTheme: !this.state.isDarkTheme });
    }

    render() {
        return ( //This is what will wrap our components, so that the above data can be used in there.
                //the #children are the components that this Provider wraps. As in App.js!
                //Thus are the "value" props are available to the children!
            <ThemeContext.Provider value={{ ...this.state, changeTheme: this.changeTheme }}>
                { this.props.children } 
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;