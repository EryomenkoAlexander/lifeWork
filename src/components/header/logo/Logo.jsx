import React from "react"
import { NavLink } from "react-router-dom";
import s from './Logo.module.css';
import { useSelector } from "react-redux";

const Logo = () => {
    let logo = useSelector(state => state.header.logo)
    return (
        <div className="logo">
            <NavLink to={logo.to}>
                <img src={logo.logoImg} alt="logo" className={s.logo} />
            </NavLink>
        </div>
    )
}

export default Logo;