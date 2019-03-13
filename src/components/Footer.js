import React from 'react';
import ConnectLink from '../containers/ConnectLink';
import {VisibilityFilters} from '../actions';

// 对todos进行过滤 然后渲染

const Footer = () => (
    <div>
        <span>Show: </span>
        <ConnectLink filter={VisibilityFilters.SHOW_ALL}>All</ConnectLink>
        <ConnectLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</ConnectLink>
        <ConnectLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</ConnectLink>
    </div>
)

export default Footer