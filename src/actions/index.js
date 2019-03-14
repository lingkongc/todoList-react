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


export const doShowNotification = (text, id) => ({
    type: NOTIFICATION_SHOW,
    text,
    id
});

// 高阶函数 返回一个新的函数，进行派发
export const doAddTodoWithNotification = (id, name) => dispatch => {
    // 执行action添加todo
    dispatch(doAddTodo(id, name));

    // 1s后指定action隐藏通知
    setTimeout(function () {
        dispatch(doHideNotification(id));
    }, 1000);
};

export const doHideNotification = id => ({
    type: NOTIFICATION_HIDE,
    id
});