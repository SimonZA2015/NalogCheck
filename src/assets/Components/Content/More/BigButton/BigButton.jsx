import React from "react";

import style from './BigButton.module.css';

const BigButton = (props) => {

    return (
        <div className={style.body} style={props.style}>
            <text>{props.text}</text>
        </div>
    )
};

export default BigButton;