import {connect} from 'react-redux';
import TodoItem from '../components/TodoItem';
import {doToggleTodo} from "../actions";

const mapDispatchToProps = dispatch => ({
    onToggleTodo: id => dispatch(doToggleTodo(id))
});

const ConnectedTodoItem = connect(null, mapDispatchToProps)(TodoItem);
export default ConnectedTodoItem;