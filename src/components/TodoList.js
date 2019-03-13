import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import ConnectTodoItem from "../containers/ConnectTodoItem";

// 用户显示 todos 列表
// todos 数组  {text,completed}

const TodoList = ({todos}) => (
    <ul>
        {todos.map(todo =>
            <ConnectTodoItem key={todo.id} todo={todo}/>
        )}
    </ul>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
}

export default TodoList