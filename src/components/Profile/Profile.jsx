import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import objectProfileModuleCss from './Profile.module.css';

function Profile() {
    return <div className={objectProfileModuleCss.appContent}>
        <div>
            <img src='https://cdn-images-1.medium.com/max/1024/1*GsEYCGIKf1N4um0naNLRbQ.jpeg' />
        </div>
        <div>
            Ava+description
        </div>
        <MyPosts />
    </div>
}
export default Profile;