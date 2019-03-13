import React from 'react';

const Filter = ({onSetFilter}) =>
    <div>
        Show
        <button
            type="text"
            onClick={() => onSetFilter('SHOW_ALL')}>
            ALL</button>
        <button
            type="text"
            onClick={() => onSetFilter('SHOW_COMPLETED')}>
            Completed
        </button>
        <button
            type="text"
            onClick={() => onSetFilter('SHOW_INCOMPLETED')}>
            Incompleted
        </button>
    </div>

export default Filter;