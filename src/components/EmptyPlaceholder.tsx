import * as React from 'react';
import css from "styles/placeholder.module.css";
import { Paragraph } from './Text';
export interface IEmptyPlaceholderProps {
    text: string;
    height: string
}

export default function EmptyPlaceholder({ text, height }: IEmptyPlaceholderProps) {
    return (
        <div className={css.container} style={{ height: height }}>
            <Paragraph>{text}</Paragraph>
        </div>
    );
}
