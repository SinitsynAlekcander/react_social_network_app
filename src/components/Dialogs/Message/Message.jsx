import React from 'react';
import style from './Message.module.css'

function Message(props) {

    let newMessageElement = React.createRef();
    let addMessage = () => { alert(newMessageElement.current.value) };

    return (
        <div className={style.message}>
            <div>
                {props.message}
            </div>
            <div>
                <textarea ref={newMessageElement}>Post</textarea>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div >
    )
}

export default Message;