import {atom, selector, selectorFamily} from "recoil";

import {fontsData} from "./consts";


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
    default: fontsData
});

export const fontsByPageState = selectorFamily({
    key: 'fontsByPage',
    get: (page) => ({get}) => {
        if (page === 0) {
            throw 'page 0 not supported!';
        }

        const fonts = get(fontsState);
        const currentFilter = get(fontFilterState);
        const itemsPerPage = get(itemsPerPageState);

        const filteredFonts = fonts.filter(f => f[0].toLowerCase().includes(currentFilter.toLowerCase()));
        // noinspection UnnecessaryLocalVariableJS
        const paginatedFonts = filteredFonts.slice(itemsPerPage * (page - 1), itemsPerPage * page);
        return paginatedFonts;
    }
});

export const itemsPerPageState = atom({
    key: 'itemsPerPage',
    default: 24,
});

export const pagesIndexState = atom({
    key: 'pagesIndex',
    default: 2
});

export const isAutoScrollingState = atom({
    key: 'isAutoScrolling',
    default: false
});

// the higher the value the slower the scroll, 1 is highest.
export const scrollIntervalState = atom({
    key: 'scrollInterval',
    default: 25,
});
