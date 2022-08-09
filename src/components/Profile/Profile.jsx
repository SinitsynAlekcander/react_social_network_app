import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css'

function Profile() {
    return (
        <div className={style.main_content}>
            <div>
                <img src="https://hb.bizmrg.com/websiterfs/news/216431/62eff614cd7ce_582x388.jpg" />
            </div>

            <div className={style.item}>
                Ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;