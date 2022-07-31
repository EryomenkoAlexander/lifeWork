import React from "react";
import s from './Cabinet.module.css'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Cabinet = () => {
  let cabinet = useSelector(state => state.layout.header.cabinet)

    return (
      <NavLink to={cabinet.to} className={s.cabinet}>
        <div>{cabinet.title}</div>
        <div className={s.img}></div>
      </NavLink> 
    );
}

export default Cabinet;