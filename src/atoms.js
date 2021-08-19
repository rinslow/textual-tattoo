import {atom} from "recoil";

import {fontsToData, customFontsFromTheInternet} from "./consts";


export const textState = atom({
    key: 'text',
    default: '',
});

export const fontSizeState = atom({
    key: 'fontSize',
    default: '32.5px',
});

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
