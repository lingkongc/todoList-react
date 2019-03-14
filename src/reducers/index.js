import {combineReducers} from 'redux'
import todoReducer from './todoReducer'
import filterReducer from './filterReducer'
import notificationReducer from "./notificationReducer";

const rootReducer = combineReducers({
    todoState: todoReducer,
    filterState: filterReducer,
    notificationState: notificationReducer
});

export default rootReducer;