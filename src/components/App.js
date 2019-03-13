import React from 'react';
import ConnectedTodoList from '../containers/ConnectedTodoList';
import ConnectedTodoCreate from '../containers/ConnectedTodoCreate';
import ConnectedFilter from '../containers/ConnectedFilter';

const App = () => (
    <div>
        <ConnectedTodoCreate/>
        <ConnectedTodoList/>
        <ConnectedFilter/>
    </div>
);

export default App;