import * as React from 'react';
import css from "styles/input.module.css";
export interface IInputProps {
    styles?: React.CSSProperties;
    text: string;
    setText: (text: string) => void;
}



export default React.forwardRef((props: IInputProps, ref: React.Ref<HTMLInputElement>) => {
    const [isFocused, setIsFocused] = React.useState(false);
    return (
        <div className={isFocused ? css.focusedContainer : css.unfocusedContainer}>

            <input ref={ref} className={css.input} value={props.text} onChange={(event) => props.setText(event.target.value)} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} style={props.styles} />
        </div>
    );
})