import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts(props) {

    let postsElements = props.postsData
        .map(post => <Post message={post.message} likeCount={post.likeCount} />);

    let newPostElement = React.createRef();

    let addPost = () => props.addPost();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    };

    return (
        <div className={style.description_block}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        onChange={onPostChange}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
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