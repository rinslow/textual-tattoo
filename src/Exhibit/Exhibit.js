import {useRecoilValue} from "recoil";

import {textState, fontSizeState} from "../atoms";

import "./Exhibit.css"

export default function Exhibit(font) {
    const text = useRecoilValue(textState);
    const fontSize = useRecoilValue(fontSizeState);
    return (
        <div className={"Exhibit"}>
            <span className={"Exhibit__text"} style={{fontFamily: font, fontSize: fontSize}}>{text}</span>
            <span className={"Exhibit__fontName"}>{font}</span>
        </div>
    );
}
