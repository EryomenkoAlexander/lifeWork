import React from "react";
import s from './LoginFailPopup.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setShowPopup } from "../../../redux/slices/loginFailPopup-slice";
import Button from "../button/Button";
import { useNavigate } from "react-router";

const LoginFailPopup = () => {
  let navigate = useNavigate()
  let isShowPopup = useSelector(state => state.loginFailPopup.isShowPopup)
  let dispatch = useDispatch()

  return (
    <div
      className={[s.popup, isShowPopup && s.active].join(" ")}
      onClick={() => dispatch(setShowPopup(false))}
    >
      <div
        className={[s.wrapper, isShowPopup && s.active].join(" ")}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src="/imgs/popups/close.png"
          alt="close"
          className={s.close}
          onClick={() => dispatch(setShowPopup(false))}
        />
        <h2>Вход не выполнен</h2>
        <Button onClick={() => navigate("/login")}>Войти</Button>
      </div>
    </div>
  );
};

export default LoginFailPopup;
