import * as React from "react";
import { useState } from "react";
import css from "styles/activity-row.module.css";
import mask from "util/parseDuration";
import { Button } from "./Buttons";
import { OutlinedIcon, RoundedIcon, SharpIcon } from "./Icons";
import Input from "./Input";
interface IActivityRowProps {}

const ActivityRow: React.FunctionComponent<IActivityRowProps> = (props) => {
    const [activityName, setActivityName] = React.useState<string>("heyy");
    const [activityTime, setActivityTime] = useState("");
    const [savedActivityTime, setSavedActivityTime] = useState("");
    return (
        <div className={css.container}>
            <Input text={activityName} setText={setActivityName} flexGrow={1} />
            <Input
                text={activityTime}
                setText={setActivityTime}
                width={100}
                onBlur={() => {
                    const newTime = mask(activityTime) || savedActivityTime;
                    setSavedActivityTime(newTime);
                    setActivityTime(newTime);
                }}
            />
            <Button fontSize="25px">
                <RoundedIcon iconName="done" />
            </Button>
        </div>
    );
};

export default ActivityRow;
