import React from "react";
import objectProfileModuleCss from './MyPosts.module.css';

function MyPosts() {
    return (
        <div>
            <textarea> </textarea>
            <button> Add Post </button>
            <div>
                New post
            </div>
            <div className={objectProfileModuleCss.item}>
                Post 1
            </div>
            <div className={objectProfileModuleCss.item}>
                Post 2
            </div>
            <div className={objectProfileModuleCss.item}>
                Post 3
            </div>
        </div>
    )
}
export default MyPosts;