import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css"

function Header() {
    return (
        <div className={s.header}>
            <div className={s.menu}>
                <button className={s.buttonMenu}>Menu</button>
                <div className={s.bar}>
                    <NavLink activeClassName={s.active} className={s.navLink} to="/pre-junior">
                        <div>PreJunior</div>
                    </NavLink>
                    <NavLink activeClassName={s.active} className={s.navLink} to="/junior">
                        <div>Junior</div>
                    </NavLink>
                    <NavLink activeClassName={s.active} className={s.navLink} to="/junior+">
                        <div>JuniorPlus</div>
                    </NavLink>
                </div>
            </div>
            <h1>React homework</h1>
        </div>
    );
}

export default Header;
