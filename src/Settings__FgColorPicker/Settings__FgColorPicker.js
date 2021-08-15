import {useRecoilState} from "recoil";
import {fgColorState} from "../atoms";
import { ColorPicker } from 'material-ui-color';

import "./Settings__FgColorPicker.css"
import {Typography} from "@material-ui/core";

export default function Settings__FgColorPicker() {
    const [fgColor, setFgColor] = useRecoilState(fgColorState);

    const onColorChange = (data) => {
        setFgColor(`#${data.hex}`);
    }

    const palette = {
        "#e5cbb8": "#e5cbb8",
        "#d4ba5b": "#d4ba5b",
        "#873a40": "#873a40",
        "#23282d": "#23282d",
        "black": "#000",
        "#fafaf8": "#fafaf8",
        "white": "#fff",
        "#4b3621": "#4b3621",
        "#4a5b23": "#4a5b23",
        "#6b4423": "#6b4423",
        "#4b5320": "#4b5320",
        "#59260b": "#59260b"
    }

    return (
      <div className={"Settings__FgColorPicker"}>
          <div className={"Settings__FgColorPicker__Text"}>
              <Typography>
                  Foreground
              </Typography>
          </div>
          <div className={"Settings__FgColorPicker__ColorPicker"}>
              <ColorPicker value={fgColor} onChange={onColorChange} hideTextfield palette={palette}/>
          </div>
      </div>
    );
}
