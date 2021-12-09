import React from "react";
import objectMypostsModuleCss from './MyPosts.module.css';

function MyPosts() {
    return (
        <div>
            My Posts
            <div>
                <textarea> </textarea>
                <button> Add Post </button>
                <button> Remove </button>
                <button> Test </button>
                <button> Test2 </button>
                <div className={objectMypostsModuleCss.item}>
                    <img src='https://pixelbox.ru/wp-content/uploads/2021/09/avatar-boys-vk-96.jpg' />
                    New post
                </div>
                <div className={objectMypostsModuleCss.item}>
                    Post 1
                </div>
                <div className={objectMypostsModuleCss.item}>
                    Post 2
                </div>
                <div className={objectMypostsModuleCss.item}>
                    Post 3
                </div>
            </div>
        </div>
    )
}
export default MyPosts;