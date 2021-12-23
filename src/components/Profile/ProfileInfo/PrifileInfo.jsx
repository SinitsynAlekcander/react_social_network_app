import React from "react"
import stale from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>

            <div>
                <img src='https://www.techmenews.com/wp-content/uploads/2021/02/develop-and-fix-reactjs-web-application.jpg' />
            </div>

            <div className={stale.descriptionBlock}>
                Ava+description
            </div>

        </div>
    )
}

export default ProfileInfo;