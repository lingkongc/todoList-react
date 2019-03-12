import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';  // react绑定库 react-redux
import {createStore} from 'redux';
import rootReducer from './reducers';
import App from './components/App';


const defaultState = {
    visibilityFilter: 'SHOW_ALL',
    todos: []
}

const store = createStore(
    rootReducer,
    defaultState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // redux开发工具配置

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
