import {useRecoilState} from "recoil";
import {bgColorState} from "../atoms";
import { ColorPicker } from 'material-ui-color';

import "./Settings__BgColorPicker.css"
import {Typography} from "@material-ui/core";

export default function Settings__BgColorPicker() {
    const [bgColor, setBgColor] = useRecoilState(bgColorState);

    const palette = {
        black: 'black',
        white: 'white',
        "#8d5524": "#8d5524",
        "#c68642": "#c68642",
        "#e0ac69": "#e0ac69",
        "#f1c27d": "#f1c27d",
        "#ffdbac": "#ffdbac",
        "#ffe0bd": "#ffe0bd",
        "#ffcd94": "#ffcd94",
        "#eac086": "#eac086",
        "#ffad60": "#ffad60",
        "#ffe39f": "#ffe39f",
    };

    const onColorChange = (data) => {
        setBgColor(`#${data.hex}`);
    }

    return (
      <div className={"Settings__BgColorPicker"}>
          <div className={"Settings__BgColorPicker__Text"}>
              <Typography>
                  Background
              </Typography>
          </div>
          <div className={"Settings__BgColorPicker__ColorPicker"}>
              <ColorPicker value={bgColor} onChange={onColorChange} hideTextfield palette={palette}/>
          </div>
      </div>
    );
}
