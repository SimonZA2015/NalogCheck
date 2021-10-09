import React from "react";

import style from './Tags.module.css';

const Tags = (props) => {

    return (
        <div className={style.body + ' ' + (props.active ? style.active : ' ')}>
            <text>{props.text}</text>
        </div>
    )
};

export default Tags;