import { type ComponentPropsWithoutRef, type ReactNode } from "react";

import classes from "./style.module.css";

interface TextareaProps extends ComponentPropsWithoutRef<"textarea"> {
    startIcon?: ReactNode;
}

export default function Textarea({ startIcon, ...props }: TextareaProps) {
    // TODO: Textarea Auto Height
    // TODO: Textarea Clear
    return (
        <div className={classes.container}>
            {!!startIcon && startIcon}
            <textarea
                {...props}
                style={{ height: "30px" }}
                className={classes.textarea}
            />
            <button type="button">&times;</button>
        </div>
    );
}
