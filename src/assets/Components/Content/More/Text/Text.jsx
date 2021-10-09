import React from "react";

import style from './Text.module.css';

const Text = (props) => {

    return (
        <div className={style.body}>
            {props.title ?
                <h3>{props.text}</h3> :
                props.hint ? <span>{props.text}</span> :
                    <h4>{props.text}</h4>
            }
        </div>
    )
};

export default Text;