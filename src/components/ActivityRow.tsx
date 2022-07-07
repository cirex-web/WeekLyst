import * as React from "react";
import { useState } from "react";
import css from "styles/activity-row.module.scss";
import mask from "util/parseDuration";
import { Button } from "./Buttons";
import FlexRow from "./FlexRow";
import HoverListener from "./HoverListener";
import { OutlinedIcon, RoundedIcon, SharpIcon } from "./Icons";
import Input from "./Input";
interface IActivityRowProps {}

const ActivityRow: React.FunctionComponent<IActivityRowProps> = (props) => {
    const [activityName, setActivityName] = React.useState<string>("Exercise");
    const [activityTime, setActivityTime] = useState("34:00:23");
    const [savedActivityTime, setSavedActivityTime] = useState("");
    const [editing, setEditing] = useState(false);
    const toggleEditing = () => {
        setEditing(!editing);
    };
    return (
        <HoverListener>
            {(hovered) => (
                <FlexRow
                    className={css.container}
                    gap="20px"
                    height="35px"
                    padding="10px 0"
                >
                    <FlexRow gap="10px" flex={1}>
                        <Button fontSize={"40px"} height={"100%"} centered>
                            <RoundedIcon iconName="play_circle" />
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
                            const newTime =
                                mask(activityTime) || savedActivityTime;
                            setSavedActivityTime(newTime);
                            setActivityTime(newTime);
                        }}
                        disabled={!editing}
                        textAlign={"right"}
                        
                    />
                    <FlexRow width="2em">
                        {editing ? (
                            <Button
                                color={"green"}
                                centered
                                onClick={toggleEditing}
                                fontSize={"40px"}
                            >
                                <RoundedIcon iconName="check_circle" />
                            </Button>
                        ) : (
                            <Button
                                centered
                                onClick={toggleEditing}
                                opacity={hovered ? 1 : 0}
                            >
                                <RoundedIcon iconName="edit" />
                            </Button>
                        )}
                        <Button
                            centered
                            opacity={editing ? 0 : hovered ? 1 : 0}
                            disabled={editing}
                            onClick={() => console.log("trash!")}
                        >
                            <RoundedIcon iconName="delete" />
                        </Button>
                    </FlexRow>
                </FlexRow>
            )}
        </HoverListener>
    );
};

export default ActivityRow;
