import React from 'react';
import style from './Post.module.css'

function Post(props) {
    return (
        <div className={style.item}>
            <img src='https://www.vippng.com/png/detail/261-2611638_share-this-image-will-smith-with-glasses.png' />
            {props.message}
            <div>
                <span>like</span> {props.likeCount}
            </div>
        </div>
    )
}

export default Post;