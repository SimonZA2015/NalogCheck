import React from "react";

import style from './Input.module.css';

const Input = (props) => {

    return (
        <div className={style.body + ' ' + (props.error ? style.error : ' ')}>
            <input
                type={props.type}
                placeholder={props.hint}
                value={props.value}
                disabled={props.disabled}
                onChange={(e) => props.set(e.target.value)}
            />
            <div><text>{props.error}</text></div>

        </div>
    )
};

export default Input;