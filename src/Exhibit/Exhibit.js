import {useRecoilValue} from "recoil";

import {textState, fontSizeState, fontFilterState} from "../atoms";

import "./Exhibit.scss"
import {useState} from "react";

export default function Exhibit(font) {
    let text = useRecoilValue(textState);
    const fontSize = useRecoilValue(fontSizeState);
    const fontFilter = useRecoilValue(fontFilterState);

    const isDisplayed = font.toLowerCase().includes(fontFilter.toLowerCase());

    return (
        <div className={"Exhibit"} style={{display: isDisplayed ? 'flex' : 'none'}}
             key={font}
        >
            <span className={"Exhibit__text"} style={{fontFamily: font, fontSize: fontSize}}>{text || font}</span>
            <span className={"Exhibit__fontName"}>{font}</span>
        </div>
    );
}
