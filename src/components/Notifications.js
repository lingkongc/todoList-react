import React from 'react';

const Notifications = ({notifications}) =>
    <div>
        {notifications.map(note =>
            <div key={note}>{note}</div>
        )}
    </div>

export default Notifications;