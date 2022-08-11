import React from 'react';
import style from './Post.module.css'

function Post(props) {
    return (
        <div className={style.item}>
            <img src='https://www.devopsschool.com/blog/wp-content/uploads/2022/03/reactjs-benefits.jpg' />
            {props.message}
            <div>
                <span>like</span> {props.likeCount}
            </div>
        </div>
    )
}

export default Post;