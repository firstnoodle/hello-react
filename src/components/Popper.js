import React, { useState } from 'react';
import { usePopper } from 'react-popper';
import ClickOutside from './ClickOutside';

export const Popper = props => {
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const [popperVisible, setPopperVisible] = useState(false);

    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
    });

    const onReferenceClick = () => {
        if (!popperVisible) setPopperVisible(true);
    }

    const popper = popperVisible ? (
        <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
            Popper element
            <div ref={setArrowElement} style={styles.arrow} />
        </div>
    ) : null;

    return (
        <>
            <ClickOutside handler={() => { setPopperVisible(false) }}>
                <>
                    <button type="button" ref={setReferenceElement} onClick={onReferenceClick}>
                        Reference element
                    </button>
                    {popper}
                </>
            </ClickOutside>
        </>
    );
};