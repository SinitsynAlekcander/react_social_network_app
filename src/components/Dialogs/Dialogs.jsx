import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogsItem';
import style from './Dialogs.module.css'
import Message from './Message/Message';

function Dialogs(props) {
    let dialogsElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let mesagesElements = props.messagesData.map(message => <Message message={message.message} />);
    return (
        <div className={style.dialogs}>
            <div className={style.dialog_item}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {mesagesElements}
            </div>
        </div>
    )
}

export default Dialogs;