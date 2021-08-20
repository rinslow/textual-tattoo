import './Settings.css';
import Settings__FontFilter from "../Settings__FontFilter/Settings__FontFilter";
import Settings__FontSizeSlider from "../Settings__FontSizeSlider/Settings__FontSizeSlider";
import Settings__LetterSpacingSlider from "../Settings__LetterSpacingSlider/Settings__LetterSpacingSlider";
import Settings__FgColorPicker from "../Settings__FgColorPicker/Settings__FgColorPicker";
import Settings__BgColorPicker from "../Settings__BgColorPicker/Settings__BgColorPicker";
import Settings__AmountOfFonts from "../Settings__AmountOfFonts/Settings__AmountOfFonts";
import Settings__ShuffleButton from "../Settings__ShuffleButton/Settings__ShuffleButton";
import Settings__SortAlphabeticallyButton
    from "../Settings__SortAlphabeticallyButton/Settings__SortAlphabeticallyButton";
import Settings__AutoScroll from "../Settings__AutoScroll/Settings__AutoScroll";
import Settings__AboutButton from "../Settings__AboutButton/Settings__AboutButton";


export default function Settings() {

    return (
        <div className={"Settings"}>
            <form className={"Settings__form"} onSubmit={() => false}>
                <Settings__FontFilter/>
                <Settings__FontSizeSlider/>
                <Settings__LetterSpacingSlider/>
                <Settings__FgColorPicker/>
                <Settings__BgColorPicker/>
                <Settings__AmountOfFonts/>
                <Settings__ShuffleButton/>
                <Settings__SortAlphabeticallyButton/>
                <Settings__AutoScroll/>
                <Settings__AboutButton/>
            </form>
        </div>
    )
}
