import React from "react";
import ss from './Profile.module.css';

function Profile() {
    return <div className={ss.appContent}>
        <div>
            <img src='https://cdn-images-1.medium.com/max/1024/1*GsEYCGIKf1N4um0naNLRbQ.jpeg' />
        </div>
        <div>
            Ava+description
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={ss.item}>
                Post 1
            </div>
            <div className={ss.item}>
                Post 2
            </div>
            <div className={ss.item}>
                Post 3
            </div>
        </div>
    </div>
}
export default Profile;