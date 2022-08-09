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
            <Post />
        </div>
    )
}

export default MyPosts;