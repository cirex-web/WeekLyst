import * as React from 'react';
import css from "../styles/navigation.module.css";
export interface IHeadingProps {
    children: React.ReactNode;
}


export default function Header(props: IHeadingProps) {
    return (
        <div className={css.container}>
            {props.children}
        </div>
    );
}
export function Tab({ children: label, icon, active, onClick }: { children: React.ReactNode, active: boolean, icon: string, onClick: () => void }) {
    console.log(active);
    return (
        <div className={active?css.activeTab:css.tab} onClick={onClick} style={{ flexGrow: active ? 1 : 0 }}>
            <div className={css.innerTab}>
                <img src={icon} alt="" />
                <div className={css.tabLabel}>
                    {label}
                </div>
            </div>
        </div>
    )
}
