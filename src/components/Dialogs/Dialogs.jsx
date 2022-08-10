import React from 'react';
import style from './Dialogs.module.css'

function Dialogs() {
    return (
        <div className={style.dialogs}>
            <div className={style.dialog_item}>
                <div className={style.dialog + ' ' + style.active}>
                    Demian
                </div>
                <div className={style.dialog}>
                    Sasha
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