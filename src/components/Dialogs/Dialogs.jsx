import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css'

function Dialogs() {
    return (
        <div className={style.dialogs}>
            <div className={style.dialog_item}>
                <div className={style.dialog + ' ' + style.active}>
                    <NavLink to="/dialogs/1">Damian</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/2">Sasha</NavLink>
                </div>
            </div>

            <div className={style.messages}>
                <div className={style.message}>
                    Hello
                </div>
                <div className={style.message}>
                    World
                </div>
                <div className={style.message}>
                    )))))
                </div>
            </div>
        </div>
    )
}

export default Dialogs;