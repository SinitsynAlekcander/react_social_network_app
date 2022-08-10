import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={style.nav}>
            <div>
                <NavLink to='/profile' className={navData => navData.isActive ? style.active : style.item}>
                    Profile
                </NavLink>
            </div>

            <div>
                <NavLink to='/dialogs' className={navData => navData.isActive ? style.active : style.item}>
                    Dialogs
                </NavLink>
            </div>

            <div>
                <NavLink to='/news' className={navData => navData.isActive ? style.active : style.item}>News</NavLink>
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