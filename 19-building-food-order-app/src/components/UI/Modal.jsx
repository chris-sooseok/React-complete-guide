import {createPortal} from "react-dom"
import {useEffect, useRef} from "react";

export default function Modal({children, open, onClose, className = ''}) {
    const dialog = useRef();

    useEffect(() => {
        const modal = dialog.current;
        if (open) {
            modal.showModal();
        }

        // when this useEffect about to run again, aka when open value changes, this line runs
        return () => modal.close();

    }, [open]);

    return createPortal(
        <dialog
            ref={dialog}
            className={`modal ${className}`}
            onClose={onClose}>
            {children}
        </dialog>,
        document.getElementById("modal")
    );
}