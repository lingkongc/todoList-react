import {
    ADD_TODO,
    SET_VISIBILITY_FILTER,
    TOGGLE_TODO,
} from "./actionTypes";

// action创建函数 传参返回一个新的action

let nextTodoId = 0

// 传入text id+1 添加todo项目
export const addTodo = text => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text
});

//
export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
});

// 切换对应id的todo
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});

// 其他常量
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

