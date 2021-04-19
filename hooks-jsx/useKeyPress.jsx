import { useState, useEffect } from "react";

export const useKeyPress = (keyTarget) => {
    const [keyPressed, setKeyPressed] = useState(false);

    const downHandler = ({ key }) => {
        if(key === keyTarget) {
            setKeyPressed(true);
        }
    }

    const upHandler = ({ key }) => {
        if(key === keyTarget) {
            setKeyPressed(false);
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);

        return () => {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", upHandler);
        }
    }, []);

    return keyPressed;
}