import {connect} from 'react-redux'
import {doToggleTodo} from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        case 'SHOW_ALL':
        default:
            return todos
    }
};

// 将state映射到props中，这里传入的是todos
const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.filter)
});


const ConnectTodoList = connect(mapStateToProps)(TodoList);

export default ConnectTodoList;