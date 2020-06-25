import React from 'react';

const nameSpace = 'firstnoodle-icon';

export function Icon(props) {
    return <span className={`text-base ${nameSpace} ${nameSpace}-${props.icon || 'check'} ${props.className}`}></span>;
}