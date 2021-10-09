import React from "react";

import style from './SmallButton.module.css';

const SmallButton = (props) => {

    return (
        <div className={props.outline ? style.bodyOutline : style.body} onClick={props.onClick}>
            <span>{props.text}</span>
        </div>
    )
};

export default SmallButton;