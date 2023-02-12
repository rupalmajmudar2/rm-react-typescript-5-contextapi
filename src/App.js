import React from 'react';
import Navbar from './components/Navbar';
import NavbarWithHook from './components/NavbarWithHook';
import TodoList from './components/TodoList';
import TodoListWithHook from './components/TodoListWithHook';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <div className='ui raised very padded text container segment'>
        <AuthContextProvider>
          <ThemeContextProvider>
            <Navbar />
            <NavbarWithHook />
            <TodoList />
            <TodoListWithHook />
          </ThemeContextProvider>
        </AuthContextProvider>
      </div>
    </div>
  );
}

export default App;
