import {TextField} from "@material-ui/core";
import {useRecoilState, useResetRecoilState} from "recoil";
import {fontFilterState, pagesIndexState} from "../atoms";

export default function Settings__FontFilter() {
    const [fontFilter, setFontFilter] = useRecoilState(fontFilterState);
    const resetPages = useResetRecoilState(pagesIndexState);

    function handleFontFilterChange(event) {
        const newFilter = event.target.value;

        if (!fontFilter.startsWith(newFilter)) {
            resetPages();
        }

        setFontFilter(newFilter);
    }

    return (
        <div className={"Settings__fontFilter"}>
        <TextField label="Filter fonts" onChange={handleFontFilterChange} value={fontFilter}/>
    </div>
    );
}
