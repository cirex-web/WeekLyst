import * as React from "react";
import css from "styles/navigation.module.css";
import { Button } from "./Buttons";
import FlexRow from "./FlexRow";
import { Heading } from "./Text";
interface ITab {
    label: string;
    icon: string;
}
export interface IHeadingProps {
    activeTab: number;
    setActiveTab: (index: number) => void;
    tabs: ITab[];
}

function Tab({
    label,
    icon,
    active,
    onClick,
}: {
    label: string;
    active: boolean;
    icon: string;
    onClick: () => void;
}) {
    return (
        <Button
            bouncy={false}
            onClick={onClick}
            flexGrow={active ? 1 : 0}
            transition={".5s flex-grow"}
            backgroundColor={active ? "var(--background-color)" : "white"}
            padding={"10px 20px"}
            zIndex={1}
        >
            <div className={css.innerTab}>
                <img className={css.icon} src={icon} alt="" />
                <div className={css.tabLabel}>
                    <Heading>{label}</Heading>
                </div>
            </div>
        </Button>
    );
}
export default function Header(props: IHeadingProps) {
    return (
        <FlexRow>
            {props.tabs.map((tab, index) => (
                <Tab
                    key={index}
                    onClick={() => props.setActiveTab(index)}
                    icon={tab.icon}
                    active={index === props.activeTab}
                    label={tab.label}
                />
            ))}
        </FlexRow>
    );
}
