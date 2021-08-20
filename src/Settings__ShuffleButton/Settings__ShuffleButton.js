import {IconButton, Tooltip} from "@material-ui/core";
import Shuffle from '@material-ui/icons/Shuffle';
import "./Settings__ShuffleButton.css"
import {useRecoilState} from "recoil";
import {fontsState} from "../atoms";
import {fisherYatesArrayShuffle} from "../utils";

export default function Settings__ShuffleButton() {
    const [fonts, setFonts] = useRecoilState(fontsState);

    const onClick = () => {
        let shuffledFonts = fonts.slice();
        fisherYatesArrayShuffle(shuffledFonts);
        setFonts(shuffledFonts);
    };

    return (
      <div className={"Settings__ShuffleButton"}>
          <Tooltip title={"Shuffle Fonts"}>

              <IconButton color="primary" aria-label="shuffle fonts" component="span" onClick={onClick}>
                  <Shuffle />
              </IconButton>
          </Tooltip>
      </div>
    );
}
