import React from "react";
import { NavLink } from "react-router-dom";
import objectNavbarModuleCss from './Navbar.module.css';

function Navbar() {
    return <nav className={objectNavbarModuleCss.appNav}>
        <div>
            <NavLink to="/profile" className={navData => navData.isActive ? objectNavbarModuleCss.active : objectNavbarModuleCss.item}>
                Profile
            </NavLink>
        </div>

        <div>
            <NavLink to="/dialogs" className={navData => navData.isActive ? objectNavbarModuleCss.active : objectNavbarModuleCss.item}>
                Messeges
            </NavLink>
        </div>

        <div>
            <NavLink to="/news" className={navData => navData.isActive ? objectNavbarModuleCss.active : objectNavbarModuleCss.item}>
                News
            </NavLink>
        </div>

        <div>
            <NavLink to="/music" className={navData => navData.isActive ? objectNavbarModuleCss.active : objectNavbarModuleCss.item}>
                Music
            </NavLink>
        </div>

        <div>
            <NavLink to="/settings" className={navData => navData.isActive ? objectNavbarModuleCss.active : objectNavbarModuleCss.item}>
                Settings
            </NavLink>
        </div>
    </nav>
}
export default Navbar;