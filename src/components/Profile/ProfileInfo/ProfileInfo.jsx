import style from './ProfileInfo.module.css'

function ProfileInfo() {
    return (
        <div className={style.profileInfo}>
            <div>
                <img src="https://hb.bizmrg.com/websiterfs/news/216431/62eff614cd7ce_582x388.jpg" />
            </div>

            <div className={style.description_block}>
                Ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;