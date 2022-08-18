import { useState, useEffect } from 'react'

export default function useSessionStorage(key, defaultValue){
    const [value, setValue] = useState(defaultValue);

    const updateValue = (val) => {
        setValue(val);
        window?.sessionStorage.setItem(key, JSON.stringify(val))
    }

    useEffect(() => {
        const data = window?.sessionStorage.getItem(key);
        if ( data !== null ) updateValue(JSON.parse(data));
    }, [key])

    return [value, updateValue]
}