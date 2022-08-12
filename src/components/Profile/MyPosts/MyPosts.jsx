import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts() {
    let postsData = [
        { id: 1, message: "First post", likeCount: 10 },
        { id: 1, message: "Second post", likeCount: 12 }
    ]
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
                <Post message={postsData[0].message} likeCount={postsData[0].likeCount} />
                <Post message={postsData[1].message} likeCount={postsData[1].likeCount} />
            </div>
        </div>
    )
}

export default MyPosts;