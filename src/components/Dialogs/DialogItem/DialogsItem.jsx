import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './DialogsItem.module.css'

function DialogItem(props) {
    let path = "/dialogs/" + props.id
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;