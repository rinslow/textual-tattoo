import {atom, selector} from "recoil";

import {fontsToData} from "./consts";


export const textState = atom({
    key: 'text',
    default: '',
});

export const fontSizeState = atom({
    key: 'fontSize',
    default: 32,
});

export const fontSizeInPixelState = selector({
   key: 'fontSizeInPx',
    get: ({get}) => {
        const fontSize = get(fontSizeState);
        return fontSize + 'px';
    }
})

export const letterSpacingState = atom({
    key: 'letterSpacing',
    default: '0px',
});

export const fontFilterState = atom({
    key: 'fontFilter',
    default: '',
});

export const fgColorState = atom({
    key: 'fgColor',
    default: 'black',
});

export const bgColorState = atom({
    key: 'bgColor',
    default: 'white',
});

export const fontsState = atom({
    key: 'fonts',
    default: fontsToData
});
