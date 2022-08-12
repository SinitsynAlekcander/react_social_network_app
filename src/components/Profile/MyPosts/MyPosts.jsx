import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts() {
    return (
        <div className={style.description_block}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea>Post</textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Delete</button>
                </div>
            </div>
            <div className={style.posts}>
                <Post message='First post' likeCount='10' />
                <Post message='Second post' likeCount='12' />
            </div>
        </div>
    )
}

export default MyPosts;