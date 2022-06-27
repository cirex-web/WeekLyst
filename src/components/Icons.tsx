import * as React from "react";

interface ISpecialIconProps {
    iconName: string;
    fontSize?: string;
}
interface IDefaultIconProps extends ISpecialIconProps {
    type: "rounded" | "sharp" | "outlined";
}
const Icon: React.FunctionComponent<IDefaultIconProps> = (props) => {
    return (
        <span
            className={`material-symbols-${props.type}`}
            style={{ fontSize: "inherit" }}
        >
            {props.iconName}
        </span>
    );
};
const RoundedIcon: React.FC<ISpecialIconProps> = ({ iconName }) => {
    return <Icon iconName={iconName} type="rounded" />;
};
const SharpIcon: React.FC<ISpecialIconProps> = ({ iconName }) => {
    return <Icon iconName={iconName} type="sharp" />;
};
const OutlinedIcon: React.FC<ISpecialIconProps> = ({ iconName }) => {
    return <Icon iconName={iconName} type="outlined" />;
};

export default Icon;
export { RoundedIcon, SharpIcon, OutlinedIcon };