import {
    TODO_ADD,
    TODO_TOGGLE
} from "../actions/actionTypes";


// 这里传入的是state.todos
const todoReducer = (state = [], action) => {
    switch (action.type) {
        case TODO_ADD:
            return applyAddTodo(state, action);
        case TODO_TOGGLE:
            return applyToggleTodo(state, action);
        default:
            return state
    }
}

function applyAddTodo(state, action) {
    const todo = {...action.todo, completed: false};
    return [...state, todo];
}

function applyToggleTodo(state, action) {
    return state.map(todo =>
        todo.id === action.todo.id
            ? {...todo, completed: !todo.completed}
            : todo
    );
}

export default todoReducer;