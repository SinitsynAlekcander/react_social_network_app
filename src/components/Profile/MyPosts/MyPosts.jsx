import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div className={style.descriptionBlock}>
            <h2>
                My Posts
            </h2>
            <div>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                    <button> Add Post </button>
                </div>
            </div>
            <div className={style.posts}>
                <Post messege='Hello, My first Post' likeCount='10' />
                <Post messege='Hello, My second Post' likeCount='15' />
                <Post />
            </div>
        </div>
    )
}
export default MyPosts;