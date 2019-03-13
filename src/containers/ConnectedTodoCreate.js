import {connect} from 'react-redux';
import TodoCreate from '../components/TodoCreate';
import {doAddTodo} from '../actions';
import uuid from 'uuid/v4';

const mapDispatchToProps = (dispatch) => ({
    onAddTodo: name => dispatch(doAddTodo(uuid(), name))
})

const ConnectedTodoCreate = connect(null, mapDispatchToProps)(TodoCreate);

export default ConnectedTodoCreate;