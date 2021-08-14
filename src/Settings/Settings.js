import './Settings.css';
import {useRecoilState} from "recoil";
import {fontSizeState} from "../atoms";
import {Slider, Typography} from "@material-ui/core";

export default function Settings() {
    const [fontSize, setFontSize] = useRecoilState(fontSizeState);

    function handleChange(event, newValue) {
        console.log(newValue);
        setFontSize(newValue + 'px');
    }

    function ariaValue(text) {
        return `${text} pixels`;
    }

    return (
        <div className={"Settings"}>
            <div className={"Settings__fontSizeSlider"}>
                <Typography id="discrete-slider-small-steps" gutterBottom>
                    Font size
                </Typography>
                <Slider
                    defaultValue={parseInt(fontSize.substring(0, fontSize.length - 2))}
                    getAriaValueText={ariaValue}
                    onChange={handleChange}
                    aria-labelledby="discrete-slider-small-steps"
                    step={0.5}
                    min={8}
                    max={160}
                    valueLabelDisplay="auto"
                />
            </div>
        </div>
    )
}
