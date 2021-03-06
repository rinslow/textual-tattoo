import "./GalleryPage.css"
import Exhibit from "../Exhibit/Exhibit";
import {useRecoilState, useRecoilValue} from "recoil";
import {fontsByPageState, pagesIndexState} from "../atoms";

export default function GalleryPage({pageIndex}) {
    const fonts = useRecoilValue(fontsByPageState(pageIndex));
    const [indexInRecoil, setPagesIndex] = useRecoilState(pagesIndexState);

    const prepareNextPage = () => {
        // noinspection JSCheckFunctionSignatures
        const pageAfterThisOne = pageIndex + 1;
        if (pageAfterThisOne > indexInRecoil) {
            setPagesIndex(pageAfterThisOne);
        }
    };


    return (
        <div className={"GalleryPage"}
             key={`GalleryPage__${pageIndex}`}
             onMouseOver={prepareNextPage}>
            {
                fonts.map(([font, data]) => {
                    return <Exhibit font={font} fontData={data} key={`GalleryPage__${pageIndex}__Exhibit__${font}`}/>;
                })
            }
        </div>
    );
}
