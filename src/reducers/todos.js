// 这里传入的是state.todos
const todos = (state = [], action) => {
    switch (action.type) {
        case 'TODO_ADD':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TODO_TOGGLE':
            return state.map(todo =>
                todo.id === action.id
                    ? {...todo, completed: !todo.completed}
                    : todo
            )
        default:
            return state
    }
}

export default todos