import React from "react";
import objectNavbarModuleCss from './Navbar.module.css';

function Navbar() {
    return <nav className={objectNavbarModuleCss.appNav}>
        <div className={objectNavbarModuleCss.item}>
            <a> Profile </a>
        </div>
        <div className={objectNavbarModuleCss.item}>
            <a> Messeges </a>
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