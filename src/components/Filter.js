import React from 'react'

const Filter = ({ onSetFilter }) => (
  <div>
    Show
    <button
      className="button-filter"
      type="text"
      onClick={() => onSetFilter('SHOW_ALL')}
    >
      ALL
    </button>
    <button
      className="button-filter"
      type="text"
      onClick={() => onSetFilter('SHOW_COMPLETED')}
    >
      Completed
    </button>
    <button
      className="button-filter"
      type="text"
      onClick={() => onSetFilter('SHOW_INCOMPLETED')}
    >
      Incompleted
    </button>
  </div>
)

export default Filter
