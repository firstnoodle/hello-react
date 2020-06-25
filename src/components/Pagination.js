import React from 'react';
import { Icon } from './Icon';

const classBase = 'relative inline-flex items-center px-2 py-1 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-blue-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-blue-500 transition ease-in-out duration-150';

const classPrev = classBase + ' rounded-l-md';
const classNext = classBase + ' -ml-px rounded-r-md';

export const Pagination = props => {
    return <nav className="relative z-0 inline-flex shadow-sm">
        <a
            href="#"
            rel="prev"
            aria-label="previous"
            className={classPrev}
        >
            <Icon icon="angle-left" />
        </a>

        <span
            className="-ml-px relative inline-flex items-center px-3 py-1 border border-gray-300 bg-white text-sm leading-5 font-light text-gray-700">
            {'1'} / <a href="#" className="ml-1 hover:text-blue-500">{'23'}</a>
        </span>

        <a
            href="#"
            rel="next"
            aria-label="next"
            className={classNext}
        >
            <Icon icon="angle-right" />
        </a>
    </nav>;
}