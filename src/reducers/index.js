import {combineReducers} from 'redux'
import todoReducer from './todoReducer'
import filterReducer from './filterReducer'

// 这里可能会有些问题
export default combineReducers({
    todos: todoReducer,
    filter: filterReducer
})