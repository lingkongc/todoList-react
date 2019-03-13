import {
    TODO_ADD,
    FILTER_SET,
    TODO_TOGGLE,
    NOTIFICATION_SHOW,
    NOTIFICATION_HIDE,
} from "./actionTypes";

// action creators

// 传入text id+1 添加todo项目
export const doAddTodo = (id, name) => ({
    type: TODO_ADD,
    todo: {id, name}
});

// 切换对应id的todo
export const doToggleTodo = id => ({
    type: TODO_TOGGLE,
    todo: {id}
});

export const doSetFilter = filterType => ({
    type: FILTER_SET,
    filterType
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

