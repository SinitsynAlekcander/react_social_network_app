import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts(props) {
    // let postsData = [
    //     { id: 1, message: "First post", likeCount: 10 },
    //     { id: 2, message: "Second post", likeCount: 12 }
    // ]

    let postsElements = props.postsData
        .map(post => <Post message={post.message} likeCount={post.likeCount} />);

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
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;