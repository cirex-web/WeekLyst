const day = 86400;
const hour = 3600;
const minute = 60;

function convertToInteger(value = "") {
    if (typeof value === "number") return value;
    if (/^[0-9 ]+$/.test(value)) {
        return parseInt(value, 10);
    }

    const match = value.matchAll(/(?<value>\d*)(?<unit>\w)/gi);

    const volumes = {
        s: 1,
        m: minute,
        h: hour,
        d: day,
    } as const;
    // Ensure subsequent matches of same unit are filtered out, e.g. ['2d', '1d'] => ['2d']
    const uniqueMatches = [...match].reduce((prev, item, index) => {
        if (Object.keys(prev).find((prevKey) => prev[prevKey][2] === item[2])) {
            return prev;
        }

        return { ...prev, [index]: item };
    }, {} as { [key: string]: RegExpMatchArray });

    return Object.keys(uniqueMatches).reduce((prev, key) => {
        const unit = uniqueMatches[key][2] as keyof typeof volumes;
        return unit.length && volumes[unit]
            ? prev + volumes[unit] * parseInt(uniqueMatches[key][1])
            : prev;
    }, 0);
}
function mask(value: string) {
    const intValue = convertToInteger(value);

    const hours = intValue % day;
    const minutes = intValue % hour;
    const seconds = intValue % minute;

    const duration = {
        d: intValue >= day ? Math.floor(intValue / day) : 0,
        h: hours > 0 ? Math.floor(hours / hour) : 0,
        m: minutes > 0 ? Math.floor(minutes / minute) : 0,
        s: seconds,
    };

    const nextValue = (Object.keys(duration) as Array<keyof typeof duration>)
        .reduce((prev, key) => {
            const durationValue = duration[key];
            return durationValue ? `${prev} ${durationValue}${key}` : prev;
        }, "")
        .trimStart();

    return nextValue;
}
export default mask;