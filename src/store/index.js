import { createStore } from 'redux';
import reducer from './reducer'

const store = createStore(
    reducer,
    // redux开发者工具配置文件
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;