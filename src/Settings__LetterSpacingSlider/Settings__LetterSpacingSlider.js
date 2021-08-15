import {Slider, Typography} from "@material-ui/core";
import {useRecoilState} from "recoil";
import {letterSpacingState} from "../atoms";
import "./Settings__LetterSpacingSlider.css"


export default function Settings__LetterSpacingSlider() {
    const [letterSpacing, setLetterSpacing] = useRecoilState(letterSpacingState);

    function handleLetterSpacingChange(event, newValue) {
        setLetterSpacing(newValue + 'px');
    }

    return (
        <div className={"Settings__LetterSpacingSlider"}>
            <Typography id="discrete-slider-small-steps" gutterBottom>
                Letter Spacing
            </Typography>
            <Slider
                defaultValue={parseInt(letterSpacing.substring(0, letterSpacing.length - 2))}
                getAriaValueText={(number) => `${number} pixels`}
                onChange={handleLetterSpacingChange}
                aria-labelledby="discrete-slider-small-steps"
                step={0.5}
                min={-3}
                max={16}
                marks
                valueLabelDisplay="auto"
            />
        </div>
    );
}
