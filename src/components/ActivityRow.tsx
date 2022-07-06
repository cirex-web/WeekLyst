import * as React from "react";
import { useState } from "react";
import css from "styles/activity-row.module.css";
import mask from "util/parseDuration";
import { Button } from "./Buttons";
import FlexRow from "./FlexRow";
import { OutlinedIcon, RoundedIcon, SharpIcon } from "./Icons";
import Input from "./Input";
interface IActivityRowProps {}

const ActivityRow: React.FunctionComponent<IActivityRowProps> = (props) => {
    const [activityName, setActivityName] = React.useState<string>("Exercise");
    const [activityTime, setActivityTime] = useState("34:00:23");
    const [savedActivityTime, setSavedActivityTime] = useState("");
    const [editing, setEditing] = useState(true);
    const toggleEditing = () => {
        setEditing(!editing);
    };
    return (
        <FlexRow gap="20px" height="35px" padding="10px 0">
            <FlexRow gap="10px" flex={1}>
                <Button fontSize={"40px"} height={"100%"} centered circle outlineColor={"var(--darker-background-color)"}>
                    <RoundedIcon iconName="play_arrow" />
                </Button>

                <Input
                    text={activityName}
                    setText={setActivityName}
                    flexGrow={1}
                    disabled={!editing}
                    fontWeight={"bold"}
                />
            </FlexRow>
            <Input
                text={activityTime}
                setText={setActivityTime}
                width={100}
                onBlur={() => {
                    const newTime = mask(activityTime) || savedActivityTime;
                    setSavedActivityTime(newTime);
                    setActivityTime(newTime);
                }}
                disabled={!editing}
            />
            <FlexRow width="2em">
                {editing ? (
                    <Button
                        color={"green"}
                        centered
                        onClick={toggleEditing}
                    >
                        {" "}
                        <RoundedIcon iconName="done_outline" />
                    </Button>
                ) : (
                    <>
                        <Button centered onClick={toggleEditing}>
                            <RoundedIcon iconName="edit" />
                        </Button>
                        <Button centered>
                            <RoundedIcon iconName="delete" />
                        </Button>
                    </>
                )}
            </FlexRow>
        </FlexRow>
    );
};

export default ActivityRow;
