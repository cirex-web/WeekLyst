import * as React from "react";
import css from "styles/navigation.module.css";
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
        <div
            className={active ? css.activeTab : css.tab}
            onClick={onClick}
            style={{ flexGrow: active ? 1 : 0 }}
        >
            <div className={css.innerTab}>
                <img src={icon} alt="" />
                <div className={css.tabLabel}>
                    <Heading>{label}</Heading>
                </div>
            </div>
        </div>
    );
}
export default function Header(props: IHeadingProps) {
    return (
        <div className={css.container}>
            {props.tabs.map((tab, index) => (
                <Tab
                    key={index}
                    onClick={() => props.setActiveTab(index)}
                    icon={tab.icon}
                    active={index === props.activeTab}
                    label={tab.label}
                />
            ))}
        </div>
    );
}
