import {
    TODO_ADD,
    SET_VISIBILITY_FILTER,
    TODO_TOGGLE,
} from "./actionTypes";

// action创建函数 传参返回一个新的action

let nextTodoId = 0

// 传入text id+1 添加todo项目
export const addTodo = text => ({
    type: TODO_ADD,
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
    type: TODO_TOGGLE,
    id
});

// 其他常量
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

