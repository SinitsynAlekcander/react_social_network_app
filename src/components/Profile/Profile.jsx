import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile() {

    let postsData = [
        { id: 1, message: "First post", likeCount: 10 },
        { id: 2, message: "Second post", likeCount: 12 }
    ]


    return (
        <div className={style.profile}>
            <ProfileInfo/>
            <MyPosts postsData={postsData}/>
        </div>
    )
}

export default Profile;