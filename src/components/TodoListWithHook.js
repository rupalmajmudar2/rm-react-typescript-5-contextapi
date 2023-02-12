import React, {useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const TodoListWithHook = () => {
    const { isDarkTheme, darkTheme, lightTheme, changeTheme } = useContext(ThemeContext); //thats it!
    const theme = isDarkTheme ? darkTheme : lightTheme;
    return (
        <div style= { { background: theme.background, color: theme.text, height: '140px', textAlign: 'center' } }>
            <p className='item'>Plan the family trip</p>
            <p className='item'>Go for shopping</p>
            <p className='item'>Take a walk</p>

            <button className='ui button primary' onClick= {changeTheme}>Change Theme [<b>TodoListWithHook</b>]</button>
        </div>
    );
}

export default TodoListWithHook;