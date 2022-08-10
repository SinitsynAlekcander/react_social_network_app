import React from 'react';
import style from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <a href='/profile'>Profile</a>
            </div>
            <div className={style.item}>
                <a href='/dialogs'>Dialogs</a>
            </div>
            <div className={style.item}>
                <a href='/news'>News</a>
            </div>
            <div className={style.item}>
                <a>Music</a>
            </div>
            <div className={style.item}>
                <a>Setting</a>
            </div>
        </nav>
    )
}

export default Navbar;