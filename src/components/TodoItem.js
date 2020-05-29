import React from 'react'

const TodoItem = ({ todo, onToggleTodo }) => {
  const { name, id, completed } = todo

  return (
    <div className="todo-item">
      <span style={completed ? { color: 'teal' } : { color: 'red' }}>
        {name}{' '}
      </span>
      <button type="button" onClick={() => onToggleTodo(id)}>
        {completed ? '已完成' : '未完成'}
      </button>
    </div>
  )
}

export default TodoItem


// TodoItem
// 吓死宝宝了