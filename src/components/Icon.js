import React from 'react';

const nameSpace = 'firstnoodle-icon';

/**
 * 
 * @param {*} props 
 */
export const Icon = props => {
    return <span className={`text-base ${nameSpace} ${nameSpace}-${props.icon || 'check'} ${props.className}`}></span>;
}