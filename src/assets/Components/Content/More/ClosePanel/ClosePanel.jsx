import React from "react";

import style from './ClosePanel.module.css';

const ClosePanel = (props) => {

    return (
        <div className={style.body} onClick={props.onClick}>
            <img src={'https://cdn-icons-png.flaticon.com/512/1828/1828665.png'} alt={''} />
        </div>
    )
};

export default ClosePanel;