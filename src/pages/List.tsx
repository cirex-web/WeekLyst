import * as React from "react";

import css from "styles/list.module.css";
import EmptyPlaceholder from "components/EmptyPlaceholder";
import Input from "components/Input";
import { Button } from "components/Buttons";
import { RoundedIcon } from "components/Icons";
import { useChromeStorageSync } from "use-chrome-storage";
import useStorage from "hooks/useStorage";
import ActivityRow from "components/ActivityRow";
export interface IListProps {}

interface IActivity {
    name: string;
    id: string;
    total_time: number; // in ms
}

export default function List(props: IListProps) {
    const { value, updateValue, error } = useStorage<IActivity[]>(
        "activities",
        []
    );

    return (
        <div>
            <ActivityRow/>
            {/* <EmptyPlaceholder text="You don't have any weekly tasks yet! Create one below." height="100px" /> */}
            <Button
                style={{
                    width: "99px",
                    height: "99px",
                    backgroundColor: "var(--darker-background-color)",
                    fontSize: "40px",
                }}
                bouncy={false}
            >
                <RoundedIcon iconName="add" />
            </Button>
            <Button
                style={{
                    width: "99px",
                    height: "99px",
                    backgroundColor: "var(--darker-background-color)",
                    fontSize: "40px",
                }}
                bouncy={false}
            >
                a
            </Button>
            <Button style={{ backgroundColor: "white", color: "blacks" }}>
                Very default
            </Button>
        </div>
    );
}
