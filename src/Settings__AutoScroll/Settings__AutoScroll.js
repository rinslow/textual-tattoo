import {IconButton, Tooltip} from "@material-ui/core";
import PlayArrow from "@material-ui/icons/PlayArrow";
import Pause from "@material-ui/icons/Pause";
import {useRecoilState, useRecoilTransactionObserver_UNSTABLE} from "recoil";
import {isAutoScrollingState, scrollIntervalState} from "../atoms";

import "./Settings__AutoScroll.css"

let recoilLoadable = null;


export default function Settings__AutoScroll() {
    const [isAutoScrolling, setIsAutoScrolling] = useRecoilState(isAutoScrollingState);

    // ---------------------------- Recoil workaround ------------------------------------
    /* We need to access recoil state from non-component code (pageScroll, which recursively calls itself)
       Code was taken from https://github.com/facebookexperimental/Recoil/issues/289
     */

    useRecoilTransactionObserver_UNSTABLE(({ snapshot }) => {
        recoilLoadable = snapshot.getLoadable;
    })

    function pageScroll() {
        if (!recoilLoadable) return;
        const _isAutoScrollingFromRecoil = recoilLoadable(isAutoScrollingState).valueMaybe() || false;
        const scrollByY = 1;
        const scrollInterval = recoilLoadable(scrollIntervalState).valueMaybe() || 50;

        if (_isAutoScrollingFromRecoil) {
            const el = document.getElementsByClassName("Gallery")[0];
            if (el) {
                el.scrollBy(0, scrollByY);
                setTimeout(pageScroll, scrollInterval);
            }
        }
    }

    if (isAutoScrolling) {
        pageScroll();
    }
    // ---------------------------- Recoil workaround ------------------------------------


    const onClick = () => {
        setIsAutoScrolling(!isAutoScrolling); // Toggle
    };

    return (
        <div className={"Settings__AutoScroll"}>
            <Tooltip title={"Auto-scroll fonts"}>
                <IconButton color="primary" aria-label="auto scroll fonts" component="span" onClick={onClick}>
                    {isAutoScrolling &&
                    <Pause/>
                    }
                    {!isAutoScrolling &&
                    <PlayArrow/>
                    }
                </IconButton>
            </Tooltip>
        </div>
    );
}
