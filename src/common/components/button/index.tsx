import { type ComponentPropsWithoutRef } from "react";

import classes from "./style.module.css";

type ButtonProps = ComponentPropsWithoutRef<"button">;

export default function Button(props: ButtonProps) {
    return <button {...props} className={classes.button} />;
}
