import React from 'react'
import PropTypes from 'prop-types'

// 单个todo项
// 传入三个props

const TodoItem = ({todo, onToggleTodo}) => {
    const {text, id, completed} = todo;

    return (
        <div>
            {text}
            <button
                type="button"
                onClick={() => onToggleTodo(id)}>
                {completed ? 'Incomplete' : 'Complete'}
            </button>
        </div>
    )
}

TodoItem.propTypes = {
    onToggleTodo: PropTypes.func.isRequired,
}

export default TodoItem;