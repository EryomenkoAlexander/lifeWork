import React from "react";
import Button from "../../../snippets/button/Button";
import s from "./UsefulButtons.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setOpen } from "../../../../redux/slices/myAlert-slice";

const UsefulButtons = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  let usefulButtons = useSelector((state) => state.usefulButtons);

  let handleClick = (path) => {
    isLoggedIn
      ? navigate(path)
      : dispatch(
          setOpen({
            type: "warning",
            text: "Выполните вход",
          })
        );
  }

  return (
    <div className={s.usefulButtons}>
      <h2>{usefulButtons.title.toUpperCase()}</h2>
      <div className="container">
        <div className={s.wrapper}>
          {usefulButtons.buttons.map((b) => (
            <Button key={b.id} onClick={() => handleClick(b.route)}>
              {b.content.toUpperCase()}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsefulButtons;
