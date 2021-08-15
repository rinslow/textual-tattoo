import {useRecoilState} from "recoil";
import {fgColorState} from "../atoms";
import {useState} from "react";
import {Popper} from "@material-ui/core";

export default function Settings__FgColorPicker() {
    const [fgColor, setFgColor] = useRecoilState(fgColorState);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleButtonClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'fg-color-picker-dialog' : undefined;

    return (
      <div className={"Settings__FgColorPicker"}>
          <button aria-describedby={id} type="button" onClick={handleButtonClick}>
              Foreground Color
          </button>
          <Popper id={id} open={open} anchorEl={anchorEl}>
              Choose color
          </Popper>
      </div>
    );
}
