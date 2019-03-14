import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import {createLogger} from 'redux-logger';   // redux中间件
import thunk from 'redux-thunk';
import uuid from "uuid/v4"; // redux中间件 处理异步

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//redux-logger 中间件
const logger = createLogger();

const initialState = {
    notificationState: {},
    filterState: 'SHOW_ALL',
    todoState: [
        {id: uuid(), name: 'Hands On: Snake with Local State'},
        {id: uuid(), name: 'Challenge: Snake with Higher Order Components'},
        {id: uuid(), name: 'Hands On: Redux Standalone with advanced Actions'},
        {id: uuid(), name: 'Hands On: Redux Standalone with advanced Reducers'},
        {id: uuid(), name: 'Hands On: Bootstrap App with Redux'},
        {id: uuid(), name: 'Hands On: Naive Todo with React and Redux'},
    ]
};

const store = createStore(
    rootReducer,
    initialState, // 默认的state
    composeEnhancers(
        applyMiddleware(thunk, logger)
    )
);

export default store;