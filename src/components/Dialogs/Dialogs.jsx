import React from "react"
import { NavLink } from "react-router-dom";
import style from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name='Aleksander' id='1' />
                <DialogItem name='Tatyana' id='2' />
                <DialogItem name='Damian' id='3' />
                <DialogItem name='Alisa' id='4' />
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hi</div>
                <div className={style.message}>How are you?</div>
                <div className={style.message}>Yes</div>
            </div>
        </div>
    )
}

export default Dialogs;