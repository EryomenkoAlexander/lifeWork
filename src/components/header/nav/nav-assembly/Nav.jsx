import React from "react";
import NavItem from '../nav-item/NavItem'
import s from './Nav.module.css'
import { useSelector } from "react-redux";

const Nav = (props) => {
  let nav = useSelector(state => state.header.nav)

    let elNav = [];
    for (let key in nav) {
        elNav.push(<NavItem data={nav[key]} key={nav[key].id} />);
    }
    return (
        <div className={s.nav}>
            {elNav}
        </div>
    )
}

export default Nav;