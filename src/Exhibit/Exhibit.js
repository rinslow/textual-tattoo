import {useRecoilValue} from "recoil";

import {textState, fontSizeState, fontFilterState, letterSpacingState, fgColorState, bgColorState} from "../atoms";

import "./Exhibit.scss"

export default function Exhibit(font) {
    let text = useRecoilValue(textState);
    const fontSize = useRecoilValue(fontSizeState);
    const fontFilter = useRecoilValue(fontFilterState);
    const letterSpacing = useRecoilValue(letterSpacingState);
    const fgColor = useRecoilValue(fgColorState);
    const bgColor = useRecoilValue(bgColorState);

    const isDisplayed = font.toLowerCase().includes(fontFilter.toLowerCase());

    return (
        <div className={"Exhibit"} style={
            {
                display: isDisplayed ? 'flex' : 'none',
                backgroundColor: bgColor
            }
        }
             key={font}
        >
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
        </div>
    );
}
