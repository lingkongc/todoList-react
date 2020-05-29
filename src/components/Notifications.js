import React from 'react'

// 通知组件

const Notifications = ({ notifications }) => (
  <div>
    {notifications.map((note) => (
      <div className="message" key={note}>
        {note}
      </div>
    ))}
  </div>
)

export default Notifications
