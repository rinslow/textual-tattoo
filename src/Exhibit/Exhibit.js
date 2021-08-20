import {useRecoilValue} from "recoil";

import {
    textState,
    fontSizeInPixelState,
    letterSpacingState,
    fgColorState,
    bgColorState,
} from "../atoms";

import "./Exhibit.scss"

export default function Exhibit({font, fontData }) {
    let text = useRecoilValue(textState);
    const fontSizeInPx = useRecoilValue(fontSizeInPixelState);
    const letterSpacing = useRecoilValue(letterSpacingState);
    const fgColor = useRecoilValue(fgColorState);
    const bgColor = useRecoilValue(bgColorState);

    return (
        <div className={"Exhibit"} style={
            {
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
