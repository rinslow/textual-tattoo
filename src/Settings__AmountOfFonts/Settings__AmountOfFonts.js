import {useRecoilValue} from "recoil";
import {fontsState, pagesIndexState} from "../atoms";
import {Chip, Tooltip} from "@material-ui/core";

import "./Settings__AmountOfFonts.css"

export default function Settings__AmountOfFonts() {
    const amountOfExhibitsShowing = document.getElementsByClassName('Exhibit').length;
    const totalExhibitsShowing = useRecoilValue(fontsState).length;
    const _pageIndex = useRecoilValue(pagesIndexState);

    return (
        <div className={"Settings__AmountOfFonts"}>
            <Tooltip title={`Showing ${amountOfExhibitsShowing} out of ${totalExhibitsShowing} fonts`}>
                <Chip label={`${amountOfExhibitsShowing}/${totalExhibitsShowing}`} variant="outlined" />
            </Tooltip>
        </div>
    );
}
