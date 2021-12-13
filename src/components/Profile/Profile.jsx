import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import objectProfileModuleCss from './Profile.module.css';

function Profile() {
    return <div>
        <div>
            <img src='https://www.techmenews.com/wp-content/uploads/2021/02/develop-and-fix-reactjs-web-application.jpg' />
        </div>
        <div>
            Ava+description
        </div>
        <MyPosts />
    </div>
}
export default Profile;