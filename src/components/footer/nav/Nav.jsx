import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setOpen } from "../../../redux/slices/myAlert-slice";
import s from "./Nav.module.css";

const Nav = ({ nav }) => {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let isLoggedIn = useSelector(state => state.user.isLoggedIn)

  let getRoute = (path) => {
    if (path === "/") {
      navigate(path);
    } else {
      isLoggedIn
        ? navigate(path)
        : dispatch(
            setOpen({
              type: "warning",
              text: "Выполните вход",
            })
          );
    }
  };

  return (
    <div className={s.nav}>
      <div className={s.wrapper}>
        {nav.map((i) => (
          <span key={i.id} onClick={() => getRoute(i.to)}>
            {i.content}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Nav;
