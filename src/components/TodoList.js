import React from 'react';
import ConnectedTodoItem from '../containers/ConnectedTodoItem';

const TodoList = ({todos}) => (
    <div>
        {todos.map(todo =>
            <ConnectedTodoItem
                key={todo.id}
                todo={todo}
            />
        )}
    </div>
);


export default TodoList;