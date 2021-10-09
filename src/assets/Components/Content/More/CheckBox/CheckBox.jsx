import React from "react";

import style from './CheckBox.module.css';

const CheckBox = (props) => {

    return (
        <div className={style.body}>
            <input
                className={style.checkbox}
                checked={props.active}
                type={'checkbox'}
            />
        </div>
    )
};

export default CheckBox;