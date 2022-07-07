import * as React from "react";

interface IHoverListenerProps {
    children: (hovered: boolean) => JSX.Element;
}

const HoverListener: React.FunctionComponent<IHoverListenerProps> = (props) => {
    const [hovered, setHovered] = React.useState(false);
    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    return (
        <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {props.children(hovered)}
        </span>
    );
};

export default HoverListener;
