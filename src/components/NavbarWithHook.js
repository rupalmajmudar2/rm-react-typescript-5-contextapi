import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

const NavbarWithHook = () => {
    const { isDarkTheme, darkTheme, lightTheme } = useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;
    const { isLoggedIn, changeAuthStatus } = useContext(AuthContext);

    return (
        <nav style= { { background: theme.background, color: theme.text, height: '120px' } }>
        <h2 style = {{ textAlign: 'center'}}>
            Oak Academy With Hook
        </h2>
        <p 
            onClick={changeAuthStatus}
            style={{ textAlign: 'center'}}
        >
        { isLoggedIn ? 'Logged In' : 'Logged Out'}</p>
        
        <div className='ui three buttons'>
            <button className='ui button'>Overview</button>
            <button className='ui button'>Contact</button>
            <button className='ui button'>Support</button>
        </div>
    </nav>
    )
}

export default NavbarWithHook;