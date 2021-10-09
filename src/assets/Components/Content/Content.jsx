import React from "react";
import {storeConfigs} from "../../configs/store-configs";
import SmallButton from "./More/SmallButton/SmallButton";
import {textConfigs} from "../../configs/text-configs";
import Panel from "./More/Panel/Panel";

import style from './Content.module.css';

const Content = (props) => {

    //get status panel because show panel or conversely
    const panelStatus = props.dispatch({type: storeConfigs.getPanelStatus});

    return (
        <div className={style.body}>
            {panelStatus ?
                <Panel dispatch={props.dispatch} /> :
                <SmallButton
                    text={textConfigs.startText}
                    onClick={() => props.dispatch({type: storeConfigs.activePanelStatus})}
                    outline={true}
                />
            }
        </div>
    )
};

export default Content;