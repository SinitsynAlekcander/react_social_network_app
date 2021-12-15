import React from "react"
import style from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog + ' ' + style.active}>
                    Sasha
                </div>
                <div className={style.dialog}>
                    Tatyana
                </div>
                <div className={style.dialog}>
                    Demian
                </div>
                <div className={style.dialog}>
                    Alisa
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