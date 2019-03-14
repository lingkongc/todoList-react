import {connect} from 'react-redux';
import TodoCreate from '../components/TodoCreate';
import {doAddTodoWithNotification} from '../actions';
import uuid from 'uuid/v4';

const mapDispatchToProps = (dispatch) => ({
    onAddTodo: name => dispatch(doAddTodoWithNotification(uuid(), name))
})

const ConnectedTodoCreate = connect(null, mapDispatchToProps)(TodoCreate);

export default ConnectedTodoCreate;