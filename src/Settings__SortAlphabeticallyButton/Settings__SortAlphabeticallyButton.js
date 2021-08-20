import {IconButton, Tooltip} from "@material-ui/core";
import SortByAlpha from '@material-ui/icons/SortByAlpha';
import "./Settings__SortAlphabeticallyButton.css"
import {useRecoilState} from "recoil";
import {fontsState} from "../atoms";

export default function Settings__SortAlphabeticallyButton() {
    const [fonts, setFonts] = useRecoilState(fontsState);

    const onClick = () => {
        let sortedFonts = fonts.slice().sort();
        setFonts(sortedFonts);
    };

    return (
      <div className={"Settings__SortAlphabeticallyButton"}>
          <Tooltip title={"Sort Fonts A-Z"}>

              <IconButton color="primary" aria-label="sort fonts alphabetically" component="span" onClick={onClick}>
                  <SortByAlpha />
              </IconButton>
          </Tooltip>
      </div>
    );
}
