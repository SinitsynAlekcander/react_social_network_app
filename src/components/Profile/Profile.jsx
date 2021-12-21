import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import objectProfileModuleCss from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/PrifileInfo";

function Profile() {
    return (
        <div>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}
export default Profile;