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
    let dialogsData = [
        { id: 1, name: "Damian" },
        { id: 2, name: "Alisa" },
        { id: 3, name: "Sasha" },
        { id: 4, name: "Tanya" },
    ]
    let messagesData = [
        { id: 1, message: "Hello" },
        { id: 2, message: "World" },
        { id: 3, message: ")))" },
    ]
    return (
        <div className={style.dialogs}>
            <div className={style.dialog_item}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
            </div>

            <div className={style.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
            </div>
        </div>
    )
}

export default Dialogs;