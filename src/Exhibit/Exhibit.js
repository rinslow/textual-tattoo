import {useRecoilValue} from "recoil";

import {textState, fontSizeInPixelState, fontFilterState, letterSpacingState, fgColorState, bgColorState} from "../atoms";

import "./Exhibit.scss"

export default function Exhibit(font, fontData) {
    let text = useRecoilValue(textState);
    const fontSizeInPx = useRecoilValue(fontSizeInPixelState);
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

            {
                fontData &&
                <style>{
                    `@font-face { 
                        font-family: '${font}'; 
                        src: url('${fontData.url}') format('${fontData.format}'); 
                    }`}
                </style>
            }

            <span className={"Exhibit__text"} style={
                {
                    fontFamily: font,
                    fontSize: fontSizeInPx,
                    letterSpacing,
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
