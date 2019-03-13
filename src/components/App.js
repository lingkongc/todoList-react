import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import ConnectTodoList from '../containers/ConnectTodoList';

const App = () => (
    <div>
        <AddTodo/>
        <ConnectTodoList/>
        <Footer/>
    </div>
);

export default App;