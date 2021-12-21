import React from "react"
import { NavLink } from "react-router-dom";
import style from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog + ' ' + style.active}>
                    <NavLink to='/dialogs/1'>
                        Sasha
                    </NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/2'>
                        Tatyana
                    </NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/3'>
                        Damian
                    </NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/4'>
                        Alisa
                    </NavLink>
                </div>
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