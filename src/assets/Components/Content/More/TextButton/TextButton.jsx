import React from "react";

import style from './TextButton.module.css';

const TextButton = (props) => {

    return (
        <div className={style.body} onClick={props.onClick}>
            <text>{props.text}</text>
        </div>
    )
};

export default TextButton;