import * as React from "react";

interface IFlexRowProps {
    children: React.ReactNode;
    justifyContent?:
        | "flex-start"
        | "flex-end"
        | "center"
        | "space-between"
        | "space-around";
    alignItems?: "flex-start" | "flex-end" | "center" | "stretch";
    flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
    flex?: number;
    margin?: string;
    padding?: string;
    width?: string;
    height?: string;
    gap?: string;
    className?: string;
}

const FlexRow: React.FunctionComponent<IFlexRowProps> = (props) => {
    const {
        children,
        justifyContent = "flex-start",
        alignItems = "center",
        flex,
        margin = "0",
        padding = "0",
        width = "auto",
        height = "auto",
        flexWrap,
        gap,
        className,
    } = props;

    return (
        <div
            style={{
                display: "flex",
                justifyContent,
                alignItems,
                flexWrap,
                flex,
                margin,
                padding,
                width,
                height,
                gap
            }}
            className={className}
        >
            {children}
        </div>
    );
};

export default FlexRow;
