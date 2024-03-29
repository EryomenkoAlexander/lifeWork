import React from "react";
import Logo from "../logo/Logo";
import Nav from '../nav/nav-assembly/Nav'
import Cabinet from "../cabinet/Cabinet";
import s from './Header.module.css'
import { useSelector } from "react-redux";

const Header = () => {
  let number = useSelector(state => state.layout.header.connection.number)
    return (
      <div className={s.header}>
        <div className="container">
          <div className={s.headerInner}>
            <Logo />
            <Nav />
            <span className={s.number}>{number}</span>
            <Cabinet />
          </div>
        </div>
      </div>
    );
}

export default Header;