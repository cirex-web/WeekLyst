import * as React from "react";
import css from "styles/buttons.module.scss";

type IButtonProps = {
    [key in keyof React.CSSProperties]: React.CSSProperties[key];
} & {
    children: React.ReactNode;
    circle?: boolean;
    onClick?: () => void;
    bouncy?: boolean;
    centered?: boolean;
    outlineColor?: string;
    disabled?: boolean;
};

const Button: React.FunctionComponent<IButtonProps> = (props) => {
    const {
        circle,
        children,
        bouncy = true,
        onClick,
        centered,
        outlineColor,
        outlineWidth = "1px",
        disabled = false,
        ...styles
    } = props;
    console.log(disabled);
    return (
        <button
            disabled={disabled}
            className={
                css.button +
                " " +
                (bouncy ? css.bouncy : "") +
                " " +
                (circle ? css.circle : "") +
                " " +
                (centered ? css.centered : "")
            }
            style={{
                outline: outlineColor
                    ? `${outlineColor} solid ${outlineWidth}`
                    : "",
                outlineOffset: `-${outlineWidth}`,
                ...styles,
            }}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

const RoundButton = (props: IButtonProps) => {
    return <Button {...props} circle />;
};

export { Button, RoundButton };
