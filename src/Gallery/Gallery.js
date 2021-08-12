import "./Gallery.css";
import Exhibit from "../Exhibit/Exhibit";
import {useRecoilValue} from "recoil";
import {fontsState} from "../atoms";

export default function Gallery() {
    const fonts = useRecoilValue(fontsState);
    return (
        <div className={"Gallery"}>
            Gallery
            {fonts.map((font) => Exhibit(font))}
        </div>
    )
}
