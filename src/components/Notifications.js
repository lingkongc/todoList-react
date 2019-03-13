import React, {Component} from 'react';

const Notifications = ({notification}) =>
    <div>
        {notification.map(note =>
            <div key={note}>{note}</div>
        )}
    </div>

export default Notifications;