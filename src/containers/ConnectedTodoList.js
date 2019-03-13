import {connect} from 'react-redux'
import TodoList from '../components/TodoList'

const VISIBILITY_FILTERS = {
    SHOW_COMPLETED: item => item.completed,
    SHOW_INCOMPLETED: item => !item.completed,
    SHOW_ALL: item => true
}

function getTodos(state) {
    return state.todoState.filter(VISIBILITY_FILTERS[state.filterState])
}

// 将state映射到props中，这里传入的是todos
const mapStateToProps = state => ({
    todos: getTodos(state)
});

const ConnectedTodoList = connect(mapStateToProps)(TodoList);

export default ConnectedTodoList;