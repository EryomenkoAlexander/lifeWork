import React from "react";
import s from './Cabinet.module.css'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Cabinet = (props) => {
  let cabinet = useSelector(state => state.header.cabinet)

    return (
      <NavLink to={cabinet.to} className={s.cabinet}>
        <div>{cabinet.title}</div>
        <div className={s.img}></div>
      </NavLink>
    );
}

export default Cabinet;