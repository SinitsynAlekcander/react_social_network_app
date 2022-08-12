import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css'

function DialogItem(props) {
    let path = "/dialogs/" + props.id
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

function Message(props) {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    )
}

function Dialogs() {
    return (
        <div className={style.dialogs}>
            <div className={style.dialog_item}>
                <DialogItem name="Damian" id="1" />
                <DialogItem name="Alisa" id="2" />
                <DialogItem name="Sasha" id="3" />
                <DialogItem name="Tanya" id="4" />
            </div>

            <div className={style.messages}>
                <Message message="Hello"/>
                <Message message="World"/>
                <Message message=")))"/>
            </div>
        </div>
    )
}

export default Dialogs;