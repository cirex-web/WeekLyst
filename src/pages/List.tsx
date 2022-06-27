import * as React from "react";

import css from "styles/list.module.css";
import EmptyPlaceholder from "components/EmptyPlaceholder";
import Input from "components/Input";
import { Button } from "components/Buttons";
import { RoundedIcon } from "components/Icons";
export interface IListProps {}

export default function List(props: IListProps) {
    return (
        <div>
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
