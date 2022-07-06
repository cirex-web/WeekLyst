import * as React from "react";
import css from "styles/buttons.module.css";

type IButtonProps = {
    [key in keyof React.CSSProperties]: React.CSSProperties[key];
} & {
    children: React.ReactNode;
    round?: boolean;
    onClick?: () => void;
    bouncy?: boolean;
    centered?: boolean;
};

const Button: React.FunctionComponent<IButtonProps> = (props) => {
    const {
        round,
        children,
        bouncy = true,
        onClick,
        centered,
        ...styles
    } = props;

    return (
        <button
            className={css.button + " " + (bouncy ? css.bouncy : "")}
            style={{
                borderRadius: round ? "9999px" : undefined,
                textAlign: centered ? "center" : "left",
                ...styles,
            }}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

const RoundButton = (props: IButtonProps) => {
    return <Button {...props} round />;
};

export { Button, RoundButton };
