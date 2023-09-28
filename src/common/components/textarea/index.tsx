import {
    type ComponentPropsWithoutRef,
    type ReactNode,
    useRef,
    useCallback,
    useEffect,
    useLayoutEffect,
} from "react";

import { X as CloseIcon } from "lucide-react";

import classes from "./style.module.css";

interface TextareaProps extends ComponentPropsWithoutRef<"textarea"> {
    startIcon?: ReactNode;
    onClear?: () => void;
}

function updateHeight(textArea?: HTMLTextAreaElement) {
    if (textArea == null) return;

    textArea.style.height = "0";
    textArea.style.height = `${textArea.scrollHeight}px`;
}

export default function Textarea({
    startIcon,
    onClear,
    value,
    ...props
}: TextareaProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const textAreaRef = useRef<HTMLTextAreaElement>();
    const inputRef = useCallback((textArea: HTMLTextAreaElement) => {
        updateHeight(textArea);
        textAreaRef.current = textArea;
    }, []);

    useEffect(() => {
        textAreaRef.current?.focus();
    }, []);

    useLayoutEffect(() => {
        updateHeight(textAreaRef.current);
    }, [value]);

    return (
        <div
            className={classes.container}
            ref={containerRef}
            onClick={() => textAreaRef.current?.focus()}
        >
            {!!startIcon && startIcon}
            <textarea
                {...props}
                className={classes.textarea}
                ref={inputRef}
                value={value}
            />
            {onClear && value && (value as string).length > 0 && (
                <button
                    className={classes.clear}
                    type="button"
                    onClick={onClear}
                    title="Clear"
                >
                    <CloseIcon size={"5em"} />
                </button>
            )}
        </div>
    );
}
