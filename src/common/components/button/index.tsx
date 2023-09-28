import { type ComponentPropsWithoutRef } from "react";

import classes from "./style.module.css";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    variant?: "standard" | "ghost";
}

export default function Button({ variant, className, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className={`${classes.button} ${variant} ${className}`}
        />
    );
}
