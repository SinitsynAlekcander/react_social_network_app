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

const Message = (props) => {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    )
}

const Dialogs = () => {

    let dialogsData = [
        { id: 1, name: 'Aleksander' },
        { id: 2, name: 'Tatyana' },
        { id: 3, name: 'Damian' },
        { id: 4, name: 'Alisa' }
    ]

    let messagesData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'How are you?' },
        { id: 4, message: 'Yes' }
    ]

    let dialogsElement = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElement = messagesData.map(message => <Message message={message.message} />);

    return (
        <div className={style.dialogs}>

            <div className={style.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={style.messages}>
                {messagesElement}
            </div>

        </div>
    )
}

export default Dialogs;