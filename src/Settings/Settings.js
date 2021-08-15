import './Settings.css';
import Settings__FontFilter from "../Settings__FontFilter/Settings__FontFilter";
import Settings__FontSizeSlider from "../Settings__FontSizeSlider/Settings__FontSizeSlider";
import Settings__LetterSpacingSlider from "../Settings__LetterSpacingSlider/Settings__LetterSpacingSlider";
import Settings__FgColorPicker from "../Settings__FgColorPicker/Settings__FgColorPicker";


export default function Settings() {

    return (
        <div className={"Settings"}>
            <form className={"Settings__form"} onSubmit={() => false}>
                <Settings__FontFilter/>
                <Settings__FontSizeSlider/>
                <Settings__LetterSpacingSlider/>
                <Settings__FgColorPicker/>
            </form>
        </div>
    )
}
