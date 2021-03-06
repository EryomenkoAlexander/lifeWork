import React from "react";
import Button from "../../../snippets/button/Button";
import s from "./UsefulButtons.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setShowPopup as setShowFailPopup } from '../../../../redux/slices/loginFailPopup-slice'

const UsefulButtons = (props) => {
  let navigate = useNavigate()
  let dispatch = useDispatch()

  let isLoggedIn = useSelector(state => state.user.isLoggedIn)
  let usefulButtons = useSelector((state) => state.usefulButtons);

  return (
    <div className={s.usefulButtons}>
      <h2>{usefulButtons.title.toUpperCase()}</h2>
      <div className="container">
        <div className={s.wrapper}>
          {usefulButtons.buttons.map((b) => (
            <Button key={b.id} onClick={() => isLoggedIn ? navigate(b.route) : dispatch(setShowFailPopup(true))}>
              {b.content.toUpperCase()}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsefulButtons;
