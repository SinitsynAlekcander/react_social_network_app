import React from 'react';
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

            <div className={style.item}>
                My posts
                <div>
                    New post
                </div>
            </div>

            <div className={style.item}>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
        </div>
    )
}
export default Profile;