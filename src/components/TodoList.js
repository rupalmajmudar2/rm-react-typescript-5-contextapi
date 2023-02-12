import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

//changeTheme was passed in as a function in the value!
class TodoList extends React.Component {
    static contextType = ThemeContext; //contextType: only for clsas components
    //React will look "up" the component tree
    //And will find at App.js the ThemeCongtextProvider!
    //From where it'll get the data provided (this.state)
    
    render() {
        const { isDarkTheme, darkTheme, lightTheme, changeTheme } = this.context;
        const theme = isDarkTheme ? darkTheme : lightTheme;

        return (
            <div style= { { background: theme.background, color: theme.text, height: '140px', textAlign: 'center' } }>
                <p className='item'>Plan the family trip</p>
                <p className='item'>Go for shopping</p>
                <p className='item'>Take a walk</p>

                <button className='ui button primary' onClick= {changeTheme}>Change Theme</button>
            </div>
        )
    }
}

export default TodoList;

/*
Didn't quite work: Consumer works for class as well as functional components, hence preferable!
<ThemeContext.Consumer> { (context) => {
                const { isDarkTheme, darkTheme, lightTheme } = context;
                const theme = isDarkTheme ? darkTheme : lightTheme;

                return (
                    <div style= { { background: theme.background, color: theme.text, height: '140px' } }>
                        <p className='item'>Plan the family trip</p>
                        <p className='item'>Go for shopping</p>
                        <p className='item'>Take a walk</p>
                    </div>
                )
            }}
            </ThemeContext.Consumer>
            */