import {useRecoilValue} from "recoil";
import {useVisibilityHook} from 'react-observer-api';

import {textState, fontSizeState, fontFilterState, letterSpacingState, fgColorState, bgColorState} from "../atoms";

import "./Exhibit.scss"
import {useEffect} from "react";
import {hasFontBeenRendered} from "../consts";

export default function Exhibit(font, fontData) {
    let text = useRecoilValue(textState);
    const fontSize = useRecoilValue(fontSizeState);
    const fontFilter = useRecoilValue(fontFilterState);
    const letterSpacing = useRecoilValue(letterSpacingState);
    const fgColor = useRecoilValue(fgColorState);
    const bgColor = useRecoilValue(bgColorState);

    const {setElement, isVisible} = useVisibilityHook({threshold: 0.1});

    const isDisplayed = font.toLowerCase().includes(fontFilter.toLowerCase());

    useEffect(() => {
        const beenRendered = font in hasFontBeenRendered;

        if (!beenRendered && isVisible) {
            hasFontBeenRendered[font] = true;
        }
    });

    return (
        <div className={"Exhibit"} style={
            {
                display: isDisplayed ? 'flex' : 'none',
                backgroundColor: bgColor
            }
        }
             key={font}
             ref={setElement}
        >

            {
                fontData && (isVisible || hasFontBeenRendered[font]) &&
                <style>{
                    `@font-face { 
                        font-family: \'${font}\'; 
                        src: url(\'${fontData.url}\') format(\'${fontData.format}\'); 
                    }`}
                </style>
            }

            {isVisible && <>
                <span className={"Exhibit__text"} style={
                    {
                        fontFamily: font,
                        fontSize: fontSize, letterSpacing,
                        color: fgColor,
                        backgroundColor: bgColor,
                    }
                }>
                    {text || font}
                </span>

                <span className={"Exhibit__fontName"}>{font}</span>
            </>}
        </div>
    );
}
