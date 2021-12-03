import React from "react";
import objectProfileModuleCss from './Profile.module.css';

function Profile() {
    return <div className={objectProfileModuleCss.appContent}>
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
            <div className={objectProfileModuleCss.item}>
                Post 1
            </div>
            <div className={objectProfileModuleCss.item}>
                Post 2
            </div>
            <div className={objectProfileModuleCss.item}>
                Post 3
            </div>
        </div>
    </div>
}
export default Profile;