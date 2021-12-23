import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {

    let postsData = [
        { id: 1, post: 'Hello, My first Post', likeCount: 10 },
        { id: 2, post: 'Hello, My second Post', likeCount: 17 },
        { id: 3, post: 'How are you?', ikeCount: 8 }
    ]

    return (
        <div className={style.descriptionBlock}>

            <h2>
                My Posts
            </h2>

            <div>

                <div>
                    <textarea>

                    </textarea>
                </div>

                <div>
                    <button> Add Post </button>
                </div>

            </div>

            <div className={style.posts}>
                <Post messege={postsData[0].post} likeCount={postsData[0].likeCount} />
                <Post messege={postsData[1].post} likeCount={postsData[1].likeCount} />
                <Post messege={postsData[2].post} likeCount={postsData[2].likeCount} />
            </div>

        </div>
    )
}
export default MyPosts;