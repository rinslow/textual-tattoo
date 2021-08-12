import TextField from '@material-ui/core/TextField';

import './TopBar.css';
import {
    useRecoilState,
    useRecoilValue,
} from 'recoil';

import {textState} from "../atoms";

export default function TopBar() {
    const [text, setText] = useRecoilState(textState);

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className="TopBar">
            <div className="TopBar__logo">

            </div>

            <div className="TopBar__input">
                <form noValidate autoComplete="off">
                    <TextField
                        id="standard-multiline-flexible"
                        label="Wanna see how your tattoo will look like?"
                        multiline
                        fullWidth={true}
                        maxRows={3}
                        value={text}
                        onChange={handleChange}
                    />
                </form>
            </div>

        </div>
    );
}
