import { TABLE_RESIZE } from "./types";

export function tableResize(data) {
    // action creater
    return {
        type: TABLE_RESIZE,
        data
    }
}

export function changeText(data) {
    return {
        type: CHANGE_TEXT,
        data
    }
}