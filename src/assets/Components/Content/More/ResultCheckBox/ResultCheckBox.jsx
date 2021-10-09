import React from "react";
import CheckBox from "../CheckBox/CheckBox";

import style from './ResultCheckBox.module.css';

const ResultCheckBox = (props) => {

    return (
        <div className={style.body}>
            <CheckBox active={props.active} />
            <text>{props.text}</text>
        </div>
    )
};

export default ResultCheckBox;