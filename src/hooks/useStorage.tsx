import { useCallback, useEffect, useState } from "react";

export const storage = {
    get: <T,>(key: string, defaultValue: T, storageArea: "sync" | "local") => {
        const keyObj = { [key]: defaultValue };
        return new Promise<T>((resolve, reject) => {
            if (!chrome.storage) reject("chrome.storage is not available");

            chrome.storage[storageArea].get(keyObj, (items) => {
                const error = chrome.runtime.lastError;
                if (error) return reject(error);
                resolve(items[key]);
            });
        });
    },
    set: <T,>(key: string, value: T, storageArea: "sync" | "local") => {
        return new Promise<void>((resolve, reject) => {
            if (!chrome.storage) reject("chrome.storage is not available");
            chrome.storage[storageArea].set({ [key]: value }, () => {
                const error = chrome.runtime.lastError;
                error ? reject(error) : resolve();
            });
        });
    },
};

function useChromeStorage<T>(
    key: string,
    INITIAL_VALUE: T,
    STORAGE_AREA: "local" | "sync"
) {
    const [value, setState] = useState(INITIAL_VALUE);
    const [error, setError] = useState<string>();

    useEffect(() => {
        storage
            .get(key, INITIAL_VALUE, STORAGE_AREA)
            .then((res) => {
                setState(res);
                setError(undefined);
            })
            .catch((error) => {
                setError(error);
            });
    }, [key, INITIAL_VALUE, STORAGE_AREA]);

    const updateValue = useCallback(
        (newValue: T) => {
            storage
                .set(key, newValue, STORAGE_AREA)
                .then(() => {
                    setError("");
                })
                .catch((error) => {
                    // set newValue to local state because chrome.storage.onChanged won't be fired in error case
                    setState(newValue);
                    setError(error);
                });
        },
        [STORAGE_AREA, key]
    );

    useEffect(() => {
        if(!chrome.storage)return;
        const onChange = (
            changes: { [key: string]: chrome.storage.StorageChange },
            areaName: "sync" | "local" | "managed" | "session"
        ) => {
            if (areaName === STORAGE_AREA && key in changes) {
                setState(changes[key].newValue);
                setError("");
            }
        };
        chrome.storage.onChanged.addListener(onChange);
        return () => {
            chrome.storage.onChanged.removeListener(onChange);
        };
    }, [key, STORAGE_AREA]);

    return { value, updateValue, error };
}

export default function useSyncStorage<T>(key: string, defaultValue: T) {
    return useChromeStorage(key, defaultValue, "sync");
}
