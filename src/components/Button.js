import React, { useState } from 'react';
import PropTypes from 'prop-types';

const baseStyle = 'inline-flex items-center justify-center shadow-sm border focus:outline-none transition ease-in-out duration-150';

const sizes = {
    xs: ' text-xs leading-none px-2 py-2 rounded-md',
    sm: ' text-sm leading-tight px-3 py-2 rounded-md',
    md: ' text-md leading-snug px-4 py-2 rounded-lg',
    lg: ' text-lg leading-normal px-6 py-3 rounded-lg',
    xl: ' text-xl leading-relaxed px-8 py-4 rounded-lg'
};

const styles = {
    plain: ' border-gray-300 bg-white text-gray-700 shadow-sm hover:text-blue-500 hover:bg-gray-50 focus:outline-none focus:text-blue-500 focus:border-blue-300 focus:shadow-outline-blue',
    primary: ' bg-blue-500 border-transparent text-white hover:bg-blue-600 focus:border-blue-700 focus:shadow-outline-blue'
}

// TODO: consider types (default, text, icon, etc) and rounded
export const Button = props => {

    const [tag, setTag] = useState(props.href ? 'a' : 'button');
    const [options, setOptions] = useState({
        className: baseStyle + sizes[props.size || 'sm'] + styles[props.style || 'plain']
    });

    if (props.href) {
        options.href = props.href;
        options.target = props.target || '_blank';
    } else if (props.onClick) {
        options.onClick = props.onClick;
    }

    return React.createElement(tag, options, props.children);
}

Button.propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    onClick: PropTypes.func,
}