import React from "react";
import s from "./Items.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Items = () => {
  let menu = useSelector((state) => state.cabinet.menu);
  let activeUser = useSelector((state) => state.user.activeUser);
  let isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div className={s.items}>
      <div className={s.wrapper}>
        {menu.items.map((i) => (
          <NavLink
            to={i.to}
            key={i.id}
            className={({ isActive }) => (isActive ? s.activeItem : "")}
          >
            <img src={i.imgSrc} alt="item" />
            <span>{i.content}</span>

            {isLoggedIn &&
              (activeUser.messages.length
                ? i.to === "messages" && <div className={s.dot}></div>
                : "")}

            {isLoggedIn &&
              (activeUser.policies.length
                ? i.to === "policies" && <div className={s.dot}></div>
                : "")}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Items;
