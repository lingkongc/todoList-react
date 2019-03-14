import React from 'react';
import ConnectedTodoList from '../containers/ConnectedTodoList';
import ConnectedTodoCreate from '../containers/ConnectedTodoCreate';
import ConnectedFilter from '../containers/ConnectedFilter';
import ConnectedNotifications from '../containers/ConnectedNotifications'

const App = () => (
    <div>
        <ConnectedNotifications/>
        <ConnectedTodoCreate/>
        <ConnectedTodoList/>
        <ConnectedFilter/>
    </div>
);

export default App;