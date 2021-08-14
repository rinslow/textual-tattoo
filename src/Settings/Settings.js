import './Settings.css';
import {useRecoilState} from "recoil";
import {fontFilterState, fontSizeState} from "../atoms";
import {Slider, TextField, Typography} from "@material-ui/core";

export default function Settings() {
    const [fontSize, setFontSize] = useRecoilState(fontSizeState);
    const [fontFilter, setFontFilter] = useRecoilState(fontFilterState);

    function handleFontSizeChange(event, newValue) {
        console.log(newValue);
        setFontSize(newValue + 'px');
    }

    function handleFontFilterChange(event) {
        setFontFilter(event.target.value);
    }

    function ariaValue(text) {
        return `${text} pixels`;
    }

    return (
        <div className={"Settings"}>
            <form className={"Settings__form"} onSubmit={() => false}>
                <div className={"Settings__fontFilter"}>
                    <TextField label="Filter fonts" onChange={handleFontFilterChange} value={fontFilter}/>
                </div>

                <div className={"Settings__fontSizeSlider"}>
                    <Typography id="discrete-slider-small-steps" gutterBottom>
                        Font size
                    </Typography>
                    <Slider
                        defaultValue={parseInt(fontSize.substring(0, fontSize.length - 2))}
                        getAriaValueText={ariaValue}
                        onChange={handleFontSizeChange}
                        aria-labelledby="discrete-slider-small-steps"
                        step={0.5}
                        min={8}
                        max={160}
                        valueLabelDisplay="auto"
                    />
                </div>
            </form>
        </div>
    )
}
