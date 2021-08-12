import {atom, selector} from "recoil";

export const textState = atom({
    key: 'text',
    default: '',
});

export const fontSizeState = atom({
    key: 'fontSize',
    default: '32.5px',
});

export const fontsState = atom({
    key: 'fonts',
    default: ['Arial', 'Arial Black', 'Arial MT', 'Arial Narrow', 'Verdana', 'Helvetica', 'Tahoma', 'Trebuchet MS', 'Timew New Roman', 'Georgia', 'Garamond', 'Courier New', 'Brush Script MT']
});
