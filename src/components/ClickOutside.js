import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useClickOutside(ref, handler) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                handler();
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
function ClickOutside(props) {
    const wrapperRef = useRef(null);
    useClickOutside(wrapperRef, props.handler);

    return <div ref={wrapperRef}>{props.children}</div>;
}

ClickOutside.propTypes = {
    children: PropTypes.element.isRequired,
    handler: PropTypes.func.isRequired
};

export default ClickOutside;
