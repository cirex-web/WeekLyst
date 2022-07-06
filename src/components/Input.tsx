import * as React from "react";
import css from "styles/input.module.css";
export interface IInputProps {
    text: string;
    setText: (text: string) => void;
    type?: "email" | "number" | "date" | "text" | "password" | "time";
    onBlur?: () => void;
    onFocus?: () => void;
    width?: number;
    flexGrow?: number;
}

export default React.forwardRef(
    (props: IInputProps, ref: React.Ref<HTMLInputElement>) => {
        const [isFocused, setIsFocused] = React.useState(false);
        const onFocus = () => {
            setIsFocused(true);
            if (props.onFocus) props.onFocus();
        };
        const onBlur = () => {
            setIsFocused(false);
            if (props.onBlur) props.onBlur();
        };
        return (
            <div
                className={
                    isFocused ? css.focusedContainer : css.unfocusedContainer
                }
                style={{ width: props.width, flexGrow: props.flexGrow }}
            >
                <input
                    type={props.type}
                    ref={ref}
                    className={css.input}
                    value={props.text}
                    onChange={(event) => props.setText(event.target.value)}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            </div>
        );
    }
);
