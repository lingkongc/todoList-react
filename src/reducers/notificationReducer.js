import {NOTIFICATION_HIDE, TODO_ADD} from "../actions/actionTypes";

const notificationReducer = (state = {}, action) => {
    switch (action.type) {
        case TODO_ADD: {
            return applySetNotifiAboutAddTodo(state, action);
        }
        case NOTIFICATION_HIDE: {
            return applyRemoveNotification(state, action);
        }
        default:
            return state;
    }
}

// 结构为 id:string
function applySetNotifiAboutAddTodo(state, action) {
    const {name, id} = action.todo;
    return {...state, [id]: 'Todo Created:' + name}
}


function applyRemoveNotification(state, action) {
    const {
        [action.id]: notificationToRemove,
        ...restNotifications
    } = state;
    return restNotifications;
}

export default notificationReducer;