import {TextField} from "@material-ui/core";
import {useRecoilState} from "recoil";
import {fontFilterState} from "../atoms";

export default function Settings__FontFilter() {
    const [fontFilter, setFontFilter] = useRecoilState(fontFilterState);

    function handleFontFilterChange(event) {
        setFontFilter(event.target.value);
    }

    return (
        <div className={"Settings__fontFilter"}>
        <TextField label="Filter fonts" onChange={handleFontFilterChange} value={fontFilter}/>
    </div>
    );
}
