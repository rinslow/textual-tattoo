import {Slider, Typography} from "@material-ui/core";
import {useRecoilState} from "recoil";
import {fontSizeState} from "../atoms";
import "./Settings__FontSizeSlider.css"

export default function Settings__FontSizeSlider() {
    const [fontSize, setFontSize] = useRecoilState(fontSizeState);

    function handleFontSizeChange(event, newValue) {
        setFontSize(newValue);
    }

    return (
        <div className={"Settings__FontSizeSlider"}>
            <Typography id="discrete-slider-small-steps" gutterBottom>
                Font size
            </Typography>
            <Slider
                defaultValue={fontSize}
                getAriaValueText={(number) => `${number} pixels`}
                onChange={handleFontSizeChange}
                aria-labelledby="discrete-slider-small-steps"
                step={0.5}
                min={8}
                max={160}
                valueLabelDisplay="auto"
            />
        </div>
    );
}
