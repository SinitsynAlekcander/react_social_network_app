import React from 'react';
import style from './Header.module.css'

function Header() {
    return (
        <header className={style.header}>
            <img src="https://avatars.mds.yandex.net/i?id=446734f9157fa66ecc70cdf6ee332f6f-5865789-images-thumbs&n=13&exp=1" />
            <div className={style.text}>
                Social Network
            </div>
        </header>
    )
}

export default Header;