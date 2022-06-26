import * as React from 'react';
import css from "styles/text.module.css"
export interface ITextProps {
    children: string;
}

export function Heading({ children }: ITextProps) {
    return (
        <div className={css.heading}>
            {children}
        </div>
    );
}
export function Label({ children }: ITextProps) {
    return (
        <div className={css.label}>
            {children}
        </div>
    );
}
export function Paragraph({ children }: ITextProps) {
    return (
        <div className={css.paragraph}>
            {children}
        </div>
    );
}