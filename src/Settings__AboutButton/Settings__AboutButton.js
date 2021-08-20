import {useRecoilState} from "recoil";
import {isAboutDialogDisplayedState} from "../atoms";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Tooltip,
    Typography
} from "@material-ui/core";
import Info from "@material-ui/icons/Info";

import "./Settings__AboutButton.css"

export default function Settings__AboutButton() {
    const [isAboutDialogDisplayed, setIsAboutDialogDisplayed] = useRecoilState(isAboutDialogDisplayedState);


    const openDialog = () => { setIsAboutDialogDisplayed(true) };

    const closeDialog = () => { setIsAboutDialogDisplayed(false) };

    return (
        <div className={"Settings__AboutButton"}>
            <Tooltip title={"About this website"}>
                <IconButton color="primary" aria-label="abouth this website" component="span" onClick={openDialog}>
                    <Info/>
                </IconButton>
            </Tooltip>

            <Dialog onClose={closeDialog} aria-labelledby="about-me-dialog" open={isAboutDialogDisplayed}>
                <DialogTitle>
                    About this website
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        Hi, my name is <a href={"https://github.com/rinslow"}>Dan Elkis</a> and I wanted to get a tattoo.
                    </Typography>
                    <Typography gutterBottom>
                        I was trying to choose a font for my tattoo, but could not find a website that does this for free.
                        So I decided to build one! (Except for some ads)
                    </Typography>
                    <Typography gutterBottom>
                        I hope you enjoy this website, feel free to <a href={"https://www.patreon.com/user?u=58347027"}> donate </a>
                    </Typography>
                    <Typography gutterBottom>
                        If you have any feature suggestions, <a href={"mailto:elkissdan@gmail.com"}>mail</a> me.
                    </Typography>
                    <Typography gutterBottom>
                        Enjoy!
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={closeDialog} color="primary">
                        Ok, Got it!
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
