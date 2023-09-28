import { ReactNode, useRef } from "react";

import classes from "./style.module.css";
import useClickOutside from "../../../hooks/useClickOutside";

interface DropModalProps {
    children: ReactNode;
    openButton: ReactNode;
    isOpen: boolean;
    position: "bottom-right" | "bottom-left" | "top-right" | "top-left";
    onClose: () => void;
}

export default function DropDownModal({
    children,
    openButton,
    isOpen,
    position,
    onClose,
}: DropModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    useClickOutside(modalRef, onClose);

    return (
        <div className={classes.container} ref={modalRef}>
            {openButton}
            {isOpen && (
                <div className={`${classes.modal} ${classes[position]}`}>
                    <div className={classes.content}>{children}</div>
                </div>
            )}
        </div>
    );
}
