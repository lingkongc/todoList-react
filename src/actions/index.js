import {
    TODO_ADD,
    FILTER_SET,
    TODO_TOGGLE, NOTIFICATION_SHOW, NOTIFICATION_HIDE,
} from "./actionTypes";

// action创建函数 传参返回一个新的action

let nextTodoId = 0

// 传入text id+1 添加todo项目
export const doAddTodo = text => ({
    type: TODO_ADD,
    id: nextTodoId++,
    text
});

//
export const doSetFilter = filter => ({
    type: FILTER_SET,
    filter
});

// 切换对应id的todo
export const doToggleTodo = id => ({
    type: TODO_TOGGLE,
    id
});


export const doShowNotification = (text, id) => {
    return {
        type: NOTIFICATION_SHOW,
        text,
        id
    }
}

export const doHideNotification = id => {
    return {
        type: NOTIFICATION_HIDE,
        id
    }
}

// 其他常量
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

