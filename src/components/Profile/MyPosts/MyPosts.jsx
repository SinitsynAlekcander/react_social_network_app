import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts() {
    return (
        <div>
            My posts
            <div>
                <textarea>Post</textarea>
                <button>Add post</button>
                <button>Delete</button>
            </div>
            <Post message='First post' likeCount='10'/>
            <Post message='Second post' likeCount='12'/>
        </div>
    )
}

export default MyPosts;