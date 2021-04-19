import { useState, useEffect } from "react";

export const useKeyPress = (keyTarget: string): boolean => {
    const [keyPressed, setKeyPressed] = useState<boolean>(false);

    const downHandler = ({ key }): void => {
        if(key === keyTarget) {
            setKeyPressed(true);
        }
    }

    const upHandler = ({ key }): void => {
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