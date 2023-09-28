import { type ComponentPropsWithoutRef } from "react";

import classes from "./style.module.css";

type LinkProps = ComponentPropsWithoutRef<"a">;

export default function Link({ className, ...props }: LinkProps) {
    return <a {...props} className={`${classes.link} ${className}`} />;
}
