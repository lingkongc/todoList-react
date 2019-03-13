import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import App from './components/App';
import './index.css';

import {createLogger} from 'redux-logger';   // redux中间件


const initialState = {
    filter: 'SHOW_ALL',
    todos: [],
}

//redux-logger 中间件
const logger = createLogger();

const store = createStore(
    rootReducer,
    initialState, // 默认的state
    applyMiddleware(logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // redux开发工具配置

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
