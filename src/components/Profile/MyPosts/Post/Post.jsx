import React from "react";
import objectPostModuleCss from './Post.module.css';

function Post(props) {
    return (
        < div className={objectPostModuleCss.item} >
            <img src='https://pixelbox.ru/wp-content/uploads/2021/09/avatar-boys-vk-96.jpg' />
            {props.messege}
            <div>
                <span> {props.like} </span>
            </div>
        </div >
    )
}
export default Post;