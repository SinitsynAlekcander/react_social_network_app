import React from "react";
import objectNavbarModuleCss from './Navbar.module.css';

function Navbar() {
    return <nav className={objectNavbarModuleCss.appNav}>
        <div className={objectNavbarModuleCss.item}>
            <a href="/profile"> Profile </a>
        </div>
        <div className={objectNavbarModuleCss.item}>
            <a href="/dialogs"> Messeges </a>
        </div>
        <div className={objectNavbarModuleCss.item}>
            <a> News </a>
        </div>
        <div className={objectNavbarModuleCss.item}>
            <a> Music </a>
        </div>
        <div className={objectNavbarModuleCss.item}>
            <a> Settings </a>
        </div>
    </nav>
}
export default Navbar;