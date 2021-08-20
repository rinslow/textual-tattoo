import "./Gallery.css";
import Exhibit from "../Exhibit/Exhibit";
import {useRecoilValue} from "recoil";
import {pagesIndexState} from "../atoms";
import GalleryPage from "../GalleryPage/GalleryPage";

export default function Gallery() {
    const pagesIndex = useRecoilValue(pagesIndexState);
    const pages = [];

    for (let i = 1; i <= pagesIndex; i++) {
        pages.push(<GalleryPage pageIndex={i} key={i}/>);
    }

    return (
        <div className={"Gallery"}>
            {pages}
        </div>
    )
}
