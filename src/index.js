import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import App from './components/App';
import uuid from 'uuid/v4';
import './index.css';

import {createLogger} from 'redux-logger';   // redux中间件
// import thunk from 'redux-thunk'; // redux中间件 处理异步


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//redux-logger 中间件
const logger = createLogger();

const initialState = {
    filterState: 'SHOW_ALL',
    todoState: [
        {id: uuid(), name: 'learn redux'},
        {id: uuid(), name: 'learn mobx'}
    ]
};

const store = createStore(
    rootReducer,
    initialState, // 默认的state
    composeEnhancers(
        applyMiddleware(logger)
    )
);

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
