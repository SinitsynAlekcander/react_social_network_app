import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogsItem';
import style from './Dialogs.module.css'
import Message from './Message/Message';

// function DialogItem(props) {
//     let path = "/dialogs/" + props.id
//     return (
//         <div className={style.dialog + ' ' + style.active}>
//             <NavLink to={path}>{props.name}</NavLink>
//         </div>
//     )
// }


// function Message(props) {
//     return (
//         <div className={style.message}>
//             {props.message}
//         </div>
//     )
// }
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
    let dialogsElements = dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let mesagesElements = messagesData
        .map(message => <Message message={message.message} />);
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